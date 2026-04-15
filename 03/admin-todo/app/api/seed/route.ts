import prisma from "@/src/lib/prisma";
import { NextResponse } from "next/server";

const seedTodos = [
  { description: "Comprar el mandado", complete: true },
  { description: "Ir al gimnasio", complete: false },
  { description: "Pagar la renta", complete: false },
  { description: "Llamar al médico", complete: true },
  { description: "Estudiar Next.js", complete: false },
  { description: "Hacer el proyecto final", complete: false },
  { description: "Leer un libro", complete: true },
  { description: "Organizar el escritorio", complete: false },
];

export async function GET() {
  await prisma.todo.deleteMany();
  await prisma.todo.createMany({ data: seedTodos });
 

  return NextResponse.json({
    message: "Seed completado",
    count: seedTodos.length,
  });
}