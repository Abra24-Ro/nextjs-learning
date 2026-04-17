export const dynamic = "force-dynamic";
export const revalite = 0;


import prisma from "@/src/lib/prisma";
import { NewTodo, TodosGrid } from "@/src/todos";
import { StatsTodos } from "@/src/todos/components/StatsTodos";


export const metadata = {
    title:"Listado de Todos",
    description:"esto es un seccion donde se listan los todos",
}

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({
    orderBy: { description: "asc" },
  });

  const total = todos.length;
  const completed = todos.filter((t) => t.complete).length;
  const pending = total - completed;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-medium text-text">Mis tareas</h2>
        <p className="text-sm text-text-muted">
          Organizá tu día, una tarea a la vez.
        </p>
        <span className="text-xs text-primary font-medium mt-1">
            Server - Actions
        </span>
      </div>

      {/* Stats */}
      <StatsTodos total={total} completed={completed} pending={pending} />

      {/* New todo */}
      <div className=" p-4">
        <NewTodo hasCompleted={completed > 0}  />
      </div>

      {/* Lista */}
      {todos.length === 0 ? (
        <div className="text-center py-16">
          <div className="w-12 h-12 rounded-full bg-primary-muted flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-6 h-6 text-primary"
              viewBox="0 0 24 24"
              fill="none"
            >
              <polyline
                points="20,6 9,17 4,12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-sm font-medium text-text">¡Todo al día!</p>
          <p className="text-sm text-text-muted mt-1">
            No tenés tareas pendientes.
          </p>
        </div>
      ) : (
        <TodosGrid todos={todos} />
      )}
    </div>
  );
}
