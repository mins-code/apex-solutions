import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Project from "@/models/Project";

export async function GET() {
    try {
        await dbConnect();
        const projects = await Project.find({}).lean();

        // Return documents with appropriate headers for Next.js to cache or not
        return NextResponse.json(projects, { status: 200 });
    } catch (error) {
        console.error("API GET Projects Error:", error);
        return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
    }
}
