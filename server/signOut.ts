// app/api/auth/signout/route.ts
import { NextResponse } from "next/server";
import { db } from "@/server/db";

export async function POST(request: Request) {
  try {
    // Get the token from the Authorization header
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "Invalid or missing token" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];

    // Delete the session from the database
    await db.session.deleteMany({
      where: { token },
    });

    // Return success response
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error during sign-out:", error);
    return NextResponse.json(
      { error: "Failed to sign out" },
      { status: 500 }
    );
  }
}