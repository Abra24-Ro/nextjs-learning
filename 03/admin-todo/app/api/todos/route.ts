import prisma from "@/src/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const take = Number(searchParams.get("take") ?? 10);
    const skip = Number(searchParams.get("skip") ?? 0);

    if (isNaN(take) || take < 0) {
      return NextResponse.json(
        { message: "take must be a positive number" },
        { status: 400 }
      );
    }

    if (isNaN(skip) || skip < 0) {
      return NextResponse.json(
        { message: "skip must be a positive number" },
        { status: 400 }
      );
    }

    const [todos, total] = await Promise.all([
      prisma.todo.findMany({
        take,
        skip,
        orderBy: { createdAt: "desc" },
      }),
      prisma.todo.count(),
    ]);

    return NextResponse.json({ total, skip, take, todos });
  } catch (error) {
    console.error("[TODOS_GET]", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

//*  Validacion de datos POST

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { description, complete } = await postSchema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });

    const todo = await prisma.todo.create({
      data: { description, complete },
    });

    return NextResponse.json(
      { message: "Todo created successfully", todo },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return NextResponse.json(
        { message: "Validation error", errors: error.errors },
        { status: 400 }
      );
    }

    console.error("[TODOS_POST]", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}



export async function DELETE(request: NextRequest) {
  try {
    await prisma.todo.deleteMany({
      where: {
        complete: true,
      },
    });

    return NextResponse.json({ message: "Completed todos deleted" });
  } catch (error) {
    console.error("[TODO_DELETE]", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
