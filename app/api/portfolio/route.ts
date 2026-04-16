import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured  = searchParams.get("featured") === "true";
    const category  = searchParams.get("category");
    const limit     = parseInt(searchParams.get("limit") ?? "12");

    const projects = await prisma.project.findMany({
      where: {
        published: true,
        ...(featured  ? { featured: true }      : {}),
        ...(category  ? { category: category as never } : {}),
      },
      orderBy: [{ featured: "desc" }, { order: "asc" }, { createdAt: "desc" }],
      take: limit,
    });

    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    console.error("Portfolio API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
