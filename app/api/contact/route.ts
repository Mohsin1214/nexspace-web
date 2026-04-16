import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { z } from "zod";

const contactSchema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Invalid email address"),
  phone:   z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  service: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = contactSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: validated.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message, service } = validated.data;

    // Save to database
    const contactMessage = await prisma.contactMessage.create({
      data: { name, email, phone, subject, message, service },
    });

    // TODO: Send email notification (add nodemailer/resend config in .env)
    // await sendContactEmail({ name, email, subject, message });

    return NextResponse.json({
      success: true,
      message: "Message received! We'll get back to you within 24 hours.",
      id: contactMessage.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Health check / method not allowed for public
  return NextResponse.json({ message: "NexSpace Contact API" });
}
