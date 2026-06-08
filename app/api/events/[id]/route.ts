import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

type EventPayload = {
  title?: unknown;
  description?: unknown;
  timeline_year?: unknown;
};

function validateId(rawId: string) {
  const id = Number(rawId);
  return Number.isInteger(id) && id > 0 ? id : null;
}

function validateEventPayload(payload: EventPayload) {
  const title = typeof payload.title === "string" ? payload.title.trim() : "";
  const description =
    typeof payload.description === "string" ? payload.description.trim() : "";
  const timelineYear = Number(payload.timeline_year);

  if (!title || !description || !Number.isInteger(timelineYear)) {
    return {
      error: "title, description and timeline_year are required.",
    };
  }

  return {
    data: {
      title,
      description,
      timeline_year: timelineYear,
    },
  };
}

export async function PATCH(
  request: Request,
  context: RouteContext<"/api/events/[id]">,
) {
  const supabase = getSupabase();
  const { id: rawId } = await context.params;
  const id = validateId(rawId);

  if (!id) {
    return NextResponse.json({ error: "Invalid event id." }, { status: 400 });
  }

  const payload = (await request.json()) as EventPayload;
  const validated = validateEventPayload(payload);

  if ("error" in validated) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("events")
    .update(validated.data)
    .eq("id", id)
    .select("id,title,description,timeline_year,created_at")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}

export async function DELETE(
  _request: Request,
  context: RouteContext<"/api/events/[id]">,
) {
  const supabase = getSupabase();
  const { id: rawId } = await context.params;
  const id = validateId(rawId);

  if (!id) {
    return NextResponse.json({ error: "Invalid event id." }, { status: 400 });
  }

  const { error: linkError } = await supabase
    .from("event_media")
    .delete()
    .eq("event_id", id);

  if (linkError) {
    return NextResponse.json({ error: linkError.message }, { status: 500 });
  }

  const { error } = await supabase.from("events").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data: { id } });
}
