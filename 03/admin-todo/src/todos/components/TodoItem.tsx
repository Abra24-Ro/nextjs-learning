"use client";

import { Todo } from "@/src/generated/prisma";
import { startTransition, useOptimistic } from "react";

interface Props {
  todo: Todo;
  toggleTodo: (id: string, complete: boolean) => Promise<Todo>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, NewComplete: boolean) => ({ ...state, complete: NewComplete }),
  );

  const onToggleTodo = async () => {
    try {
      startTransition(() =>       toggleTodoOptimistic(!todoOptimistic.complete) )
 
      await toggleTodo(todoOptimistic.id, !todoOptimistic.complete);
    } catch (error) {
      console.log(error);
      toggleTodoOptimistic(!todoOptimistic.complete);
    }
  };

  return (
    <div
      className={`
      group relative flex items-center gap-4
      px-4 py-3.5 rounded-2xl border
      bg-white transition-all duration-200
      hover:-translate-y-0.5
      ${
        todoOptimistic.complete
          ? "border-[#BBF7D0]"
          : "border-border hover:border-primary-light"
      }
    `}
    >
      {/* Check button */}
      <button
        onClick={onToggleTodo}
        className={`
          cursor-pointer
        shrink-0 w-5 h-5 rounded-full border-2
        transition-all duration-200 flex items-center justify-center
        ${
          todoOptimistic.complete
            ? "bg-primary border-primary"
            : "border-border group-hover:border-primary"
        }
      `}
      >
        {todoOptimistic.complete && (
          <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
            <polyline
              points="1.5,5 4,7.5 8.5,2.5"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Description */}
      <p
        className={`
        flex-1 text-sm leading-snug min-w-0 truncate
        transition-colors duration-200
        ${todo.complete ? "line-through text-text-hint" : "text-text"}
      `}
      >
        {todoOptimistic.description}
      </p>

      {/* Status pill */}
      <span
        className={`
        shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full
        ${
          todoOptimistic.complete
            ? "bg-primary-muted text-primary-hover"
            : "bg-accent-light text-[#92400E]"
        }
      `}
      >
        {todoOptimistic.complete ? "Listo" : "Pendiente"}
      </span>
    </div>
  );
};
