import { NextResponse } from "next/server";
import { getSupabaseClient } from "../../../lib/supabase/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, message } = body;

  const { error } = await getSupabaseClient()
    .from("contact_messages")
    .insert([{ name, email, message }]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
