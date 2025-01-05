// src/app/api/comments/route.ts
import { NextRequest, NextResponse } from "next/server"; 
import { nanoid } from "nanoid"; 
const comments = [
  { id: nanoid(), content: "This is a test comment", createdAt: new Date().toISOString() }
];

export async function GET() {
  return NextResponse.json(comments); 
}

export async function POST(req: NextRequest) {
  try {
    const { content } = await req.json(); 
    const newComment = {
      id: nanoid(),
      content,
      createdAt: new Date().toISOString() 
    };

    comments.push(newComment);
    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    console.error(error); 
    return NextResponse.json({ error: 'Failed to add comment' }, { status: 500 });
  }
}
