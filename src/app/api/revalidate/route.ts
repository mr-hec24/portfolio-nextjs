import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

/**
 * On-demand cache invalidation, so a newly published post appears immediately
 * instead of waiting out the 60s ISR window.
 *
 * Called by scripts/publish.mjs after a successful upsert, and optionally by a
 * Supabase Database Webhook on insert/update of public.posts.
 *
 * Auth: a shared secret in the x-revalidate-secret header. Without
 * REVALIDATE_SECRET set the route refuses every request rather than defaulting
 * open — an unauthenticated cache-buster is a free way to hammer the origin.
 */
export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;

  if (!secret) {
    return NextResponse.json(
      { revalidated: false, error: "REVALIDATE_SECRET is not configured" },
      { status: 500 }
    );
  }

  if (request.headers.get("x-revalidate-secret") !== secret) {
    return NextResponse.json(
      { revalidated: false, error: "Bad secret" },
      { status: 401 }
    );
  }

  let slug: string | undefined;
  try {
    const body = await request.json();
    // Accept either { slug } from the CLI or { record: { slug } } from a
    // Supabase webhook payload.
    slug = body?.slug ?? body?.record?.slug;
  } catch {
    // No body is fine — fall through and just refresh the index.
  }

  revalidatePath("/writing");
  revalidatePath("/");
  if (slug) revalidatePath(`/writing/${slug}`);

  return NextResponse.json({
    revalidated: true,
    paths: ["/", "/writing", slug ? `/writing/${slug}` : null].filter(Boolean),
    at: new Date().toISOString(),
  });
}
