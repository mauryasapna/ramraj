import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

// Public client for client-side or general queries
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Server-side admin client (with service role if available, otherwise anon key)
export const supabaseAdmin = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })
  : null;

/**
 * Helper to fetch site content from Supabase `site_content` table
 */
export async function getSupabaseContent() {
  if (!supabaseAdmin) return null;

  try {
    const { data, error } = await supabaseAdmin
      .from("site_content")
      .select("*")
      .eq("key", "main")
      .single();

    if (error) {
      console.warn("Supabase fetch content warning:", error.message);
      return null;
    }

    return data?.content || null;
  } catch (err) {
    console.error("Supabase content fetch error:", err);
    return null;
  }
}

/**
 * Helper to save site content to Supabase `site_content` table
 */
export async function saveSupabaseContent(content: unknown) {
  if (!supabaseAdmin) return null;

  try {
    const { data, error } = await supabaseAdmin
      .from("site_content")
      .upsert(
        {
          key: "main",
          content,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "key" }
      )
      .select();

    if (error) {
      console.warn("Supabase save content error:", error.message);
      return null;
    }

    return data;
  } catch (err) {
    console.error("Supabase content save error:", err);
    return null;
  }
}
