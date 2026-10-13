import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import {
  getSupabaseContent,
  saveSupabaseContent,
  isSupabaseConfigured,
} from "@/lib/supabase";

const CONTENT_FILE_PATH = path.join(process.cwd(), "src", "data", "siteContent.json");

export async function GET() {
  try {
    // 1. Try fetching from Supabase if configured
    if (isSupabaseConfigured) {
      const supabaseData = await getSupabaseContent();
      if (supabaseData) {
        return NextResponse.json({
          ...supabaseData,
          _source: "supabase",
        });
      }
    }

    // 2. Fallback to local siteContent.json
    const data = await fs.readFile(CONTENT_FILE_PATH, "utf-8");
    const parsedData = JSON.parse(data);

    // If Supabase is connected but empty, initialize it with local data
    if (isSupabaseConfigured) {
      saveSupabaseContent(parsedData).catch((err) =>
        console.warn("Auto-sync to Supabase failed:", err)
      );
    }

    return NextResponse.json({
      ...parsedData,
      _source: "local_json",
    });
  } catch (error) {
    console.error("Failed to read content:", error);
    return NextResponse.json({ error: "Failed to read content" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Save to Supabase if configured
    let supabaseSaved = false;
    if (isSupabaseConfigured) {
      const sbResult = await saveSupabaseContent(body);
      if (sbResult) {
        supabaseSaved = true;
      }
    }

    // 2. Always persist to local file as backup / cache
    try {
      await fs.writeFile(CONTENT_FILE_PATH, JSON.stringify(body, null, 2), "utf-8");
    } catch (writeErr) {
      console.warn("Failed to write local backup file:", writeErr);
    }

    return NextResponse.json({
      success: true,
      data: body,
      persistedTo: supabaseSaved ? "supabase" : "local_file",
    });
  } catch (error) {
    console.error("Failed to save content:", error);
    return NextResponse.json({ error: "Failed to save content" }, { status: 500 });
  }
}
