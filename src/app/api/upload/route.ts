import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { uploadToImageKit, listImageKitFiles, isImageKitConfigured } from "@/lib/imagekit";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

// Helper to ensure local upload dir exists
async function ensureUploadDir() {
  try {
    await fs.access(UPLOAD_DIR);
  } catch {
    await fs.mkdir(UPLOAD_DIR, { recursive: true });
  }
}

// GET: List all uploaded images (from ImageKit and/or local)
export async function GET() {
  try {
    const allImages: Array<{
      name: string;
      url: string;
      size: number;
      createdAt: number;
      provider: "imagekit" | "local";
    }> = [];

    // 1. Fetch from ImageKit if configured
    if (isImageKitConfigured) {
      try {
        const ikFiles = await listImageKitFiles("/ramraj-cabs");
        if (Array.isArray(ikFiles)) {
          for (const item of ikFiles) {
            // Only file objects have 'url'
            if ("url" in item && typeof item.url === "string") {
              allImages.push({
                name: item.name,
                url: item.url,
                size: (item as { size?: number }).size || 0,
                createdAt: new Date((item as { createdAt?: string }).createdAt || "").getTime() || Date.now(),
                provider: "imagekit",
              });
            }
          }
        }
      } catch (err) {
        console.warn("Failed to fetch ImageKit files:", err);
      }
    }

    // 2. Also check local uploads
    try {
      await ensureUploadDir();
      const files = await fs.readdir(UPLOAD_DIR);
      const imageFiles = files.filter((file) =>
        /\.(jpg|jpeg|png|webp|gif|svg|avif)$/i.test(file)
      );

      for (const file of imageFiles) {
        const stats = await fs.stat(path.join(UPLOAD_DIR, file));
        allImages.push({
          name: file,
          url: `/uploads/${file}`,
          size: stats.size,
          createdAt: stats.birthtimeMs || stats.mtimeMs,
          provider: "local",
        });
      }
    } catch {
      // Local dir empty or unreadable
    }

    // Sort newest first
    allImages.sort((a, b) => b.createdAt - a.createdAt);

    return NextResponse.json({
      success: true,
      images: allImages,
      isImageKitActive: isImageKitConfigured,
    });
  } catch (error) {
    console.error("Failed to read uploads:", error);
    return NextResponse.json({ success: false, images: [] }, { status: 500 });
  }
}

// POST: Upload an image file (Upload to ImageKit)
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No image file provided" }, { status: 400 });
    }

    // Validate file type
    const mimeType = file.type;
    const isImageMime = mimeType && mimeType.startsWith("image/");
    const hasImageExt = /\.(jpg|jpeg|png|webp|gif|svg|avif)$/i.test(file.name);

    if (!isImageMime && !hasImageExt) {
      return NextResponse.json(
        { error: "Invalid file type. Please upload an image (JPG, PNG, WebP, etc.)." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const cleanOriginalName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const uniqueFileName = `${Date.now()}-${cleanOriginalName}`;

    // 1. PRIMARY: Upload to ImageKit if configured
    if (isImageKitConfigured) {
      const ikResult = await uploadToImageKit({
        file: buffer,
        fileName: uniqueFileName,
        folder: "/ramraj-cabs",
        tags: ["ramraj-cabs", "upload"],
      });

      if (ikResult.success && ikResult.url) {
        return NextResponse.json({
          success: true,
          url: ikResult.url,
          filename: ikResult.name || uniqueFileName,
          size: ikResult.size || file.size,
          provider: "imagekit",
          message: "Uploaded successfully to ImageKit CDN!",
        });
      }

      console.warn("ImageKit upload error, falling back to local:", ikResult.error);
    }

    // 2. FALLBACK: Save locally if ImageKit credentials not configured
    await ensureUploadDir();
    const filePath = path.join(UPLOAD_DIR, uniqueFileName);
    await fs.writeFile(filePath, buffer);
    const publicUrl = `/uploads/${uniqueFileName}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      filename: uniqueFileName,
      size: file.size,
      provider: "local",
      warning: !isImageKitConfigured
        ? "ImageKit credentials not configured in .env.local; saved to local /uploads/."
        : undefined,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload image file" },
      { status: 500 }
    );
  }
}
