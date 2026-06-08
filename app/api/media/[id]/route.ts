import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

type MediaPayload = {
  file_name?: unknown;
  file_url?: unknown;
  file_type?: unknown;
};

function validateId(rawId: string) {
  const id = Number(rawId);
  return Number.isInteger(id) && id > 0 ? id : null;
}

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

export async function PATCH(
  request: Request,
  context: RouteContext<"/api/media/[id]">,
) {
  const supabase = getSupabase();
  const { id: rawId } = await context.params;
  const id = validateId(rawId);

  if (!id) {
    return NextResponse.json({ error: "Invalid media id." }, { status: 400 });
  }

  const payload = (await request.json()) as MediaPayload;
  const validated = validateMediaPayload(payload);

  if ("error" in validated) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("media")
    .update(validated.data)
    .eq("id", id)
    .select("id,file_name,file_url,file_type,created_at")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function DELETE(
  _request: Request,
  context: RouteContext<"/api/media/[id]">,
) {
  const supabase = getSupabase();
  const { id: rawId } = await context.params;
  const id = validateId(rawId);

  if (!id) {
    return NextResponse.json({ error: "Invalid media id." }, { status: 400 });
  }

  const { error: linkError } = await supabase
    .from("event_media")
    .delete()
    .eq("media_id", id);

  if (linkError) {
    return NextResponse.json({ error: linkError.message }, { status: 500 });
  }

  const { error } = await supabase.from("media").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data: { id } });
}
