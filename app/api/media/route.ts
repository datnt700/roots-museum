import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

type MediaPayload = {
  file_name?: unknown;
  file_url?: unknown;
  file_type?: unknown;
};

function validateMediaPayload(payload: MediaPayload) {
  const fileName =
    typeof payload.file_name === "string" ? payload.file_name.trim() : "";
  const fileUrl =
    typeof payload.file_url === "string" ? payload.file_url.trim() : "";
  const fileType =
    typeof payload.file_type === "string" ? payload.file_type.trim() : "";

  if (!fileName || !fileUrl || !fileType) {
    return { error: "file_name, file_url and file_type are required." };
  }

  if (!["image", "video"].includes(fileType)) {
    return { error: "file_type must be image or video." };
  }

  return {
    data: {
      file_name: fileName,
      file_url: fileUrl,
      file_type: fileType,
    },
  };
}

export async function GET() {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("media")
    .select("id,file_name,file_url,file_type,created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const supabase = getSupabase();
  const payload = (await request.json()) as MediaPayload;
  const validated = validateMediaPayload(payload);

  if ("error" in validated) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("media")
    .insert(validated.data)
    .select("id,file_name,file_url,file_type,created_at")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
}
