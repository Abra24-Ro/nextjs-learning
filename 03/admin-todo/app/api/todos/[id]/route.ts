import { Todo } from "@/src/generated/prisma";
import prisma from "@/src/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";
interface Segments {
  params: Promise<{
    id: string;
  }>;
}
const getTodo = async (id: string): Promise<Todo | null> => {
  return prisma.todo.findUnique({ where: { id } });
};

export async function GET(request: NextRequest, { params }: Segments) {
  const { id } = await params;

  try {
    const todo = await getTodo(id);

    if (!todo) {
      return NextResponse.json(
        { message: "Todo not found", id },
        { status: 404 },
      );
    }

    return NextResponse.json({ todo });
  } catch (error) {
    console.error("[TODO_GET]", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

//* Validacion de datos PUT

const putSchema = yup.object({
  complete: yup.boolean().optional().default(false),
  description: yup.string().optional(),
});

export async function PUT(request: NextRequest, { params }: Segments) {
  const { id } = await params;
  try {
    const todo = await getTodo(id);
    if (!todo) {
      return NextResponse.json(
        { message: "Todo not found", id },
        { status: 404 },
      );
    }

    const body = await request.json();
    const { description, complete } = await putSchema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });

    const updatedTodo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        description,
        complete,
      },
    });

    return NextResponse.json({
      todo: updatedTodo,
    });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return NextResponse.json(
        { message: "Validation error", errors: error.errors },
        { status: 400 },
      );
    }
    console.error("[TODO_PUT]", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

