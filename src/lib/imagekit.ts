import ImageKit from "imagekit";

const publicKey =
  process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY ||
  process.env.IMAGEKIT_PUBLIC_KEY ||
  "";
const privateKey = process.env.IMAGEKIT_PRIVATE_KEY || "";
const urlEndpoint =
  process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT ||
  process.env.IMAGEKIT_URL_ENDPOINT ||
  "";

export const isImageKitConfigured = Boolean(publicKey && privateKey && urlEndpoint);

let imagekitInstance: ImageKit | null = null;

if (isImageKitConfigured) {
  try {
    imagekitInstance = new ImageKit({
      publicKey,
      privateKey,
      urlEndpoint,
    });
  } catch (err) {
    console.error("Failed to initialize ImageKit instance:", err);
  }
}

export const imagekit = imagekitInstance;

/**
 * Upload a file buffer or base64 to ImageKit
 */
export async function uploadToImageKit({
  file,
  fileName,
  folder = "/ramraj-cabs",
  tags = ["ramraj-cabs", "cms"],
}: {
  file: Buffer | string;
  fileName: string;
  folder?: string;
  tags?: string[];
}): Promise<{
  success: boolean;
  url?: string;
  fileId?: string;
  name?: string;
  size?: number;
  thumbnailUrl?: string;
  error?: string;
}> {
  if (!imagekitInstance) {
    return {
      success: false,
      error:
        "ImageKit is not configured. Please add IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY, and IMAGEKIT_URL_ENDPOINT to .env.local",
    };
  }

  try {
    const uploadResponse = await imagekitInstance.upload({
      file, // can be Buffer or base64 string
      fileName,
      folder,
      tags,
      useUniqueFileName: true,
    });

    return {
      success: true,
      url: uploadResponse.url,
      fileId: uploadResponse.fileId,
      name: uploadResponse.name,
      size: uploadResponse.size,
      thumbnailUrl: uploadResponse.thumbnailUrl,
    };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "ImageKit upload failed";
    console.error("ImageKit upload error:", error);
    return {
      success: false,
      error: message,
    };
  }
}

/**
 * List files from ImageKit
 */
export async function listImageKitFiles(folder = "/ramraj-cabs") {
  if (!imagekitInstance) return [];

  try {
    const files = await imagekitInstance.listFiles({
      path: folder,
      limit: 50,
    });
    return files;
  } catch (err) {
    console.error("Failed to list files from ImageKit:", err);
    return [];
  }
}
