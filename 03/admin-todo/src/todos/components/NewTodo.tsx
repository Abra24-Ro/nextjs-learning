"use client";

import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

import { addTodo, deleteCompleteTodo } from "../actions/todo-action";
import { useRouter } from "next/navigation";

interface Props {
  hasCompleted: boolean;
}

export const NewTodo = ({ hasCompleted }: Props) => {
  const [description, setDescription] = useState("");
  const [canDelete, setCanDelete] = useState(hasCompleted);
  const router = useRouter();

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (description.trim() === "") return;

    await addTodo(description);

    setDescription("");
  };

  const onCompleteDelete = async () => {
    const confirm = window.confirm(
      "¿Estás seguro de que deseas eliminar todas las tareas completadas? Esta acción no se puede deshacer.",
    );

    if (!confirm) return;

    await deleteCompleteTodo();
    setCanDelete(false);
    router.refresh();
  };

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-2 w-full">
      {/* Input */}
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="
          flex-1 px-4 py-2.5 rounded-xl
          text-sm text-text placeholder:text-text-hint
          bg-white border border-border
          outline-none
          focus:border-primary focus:ring-2 focus:ring-primary-muted
          transition-all duration-200
        "
        placeholder="¿Qué necesita ser hecho?"
      />

      {/* Crear */}
      <button
        type="submit"
        className="
          cursor-pointer
          flex items-center gap-1.5
          px-4 py-2.5 rounded-xl
          bg-primary text-white text-sm font-medium
          hover:bg-primary-hover active:scale-95
          transition-all duration-200
          shrink-0
        "
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
          <line
            x1="7"
            y1="1"
            x2="7"
            y2="13"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="1"
            y1="7"
            x2="13"
            y2="7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        Crear
      </button>

      {/* Spacer */}
      <span className="flex-1" />

      {/* Borrar completadas */}
      <button
        type="button"
        onClick={onCompleteDelete}
        disabled={!canDelete}
        className={`
    flex items-center gap-1.5
    px-4 py-2.5 rounded-xl
    border text-sm font-medium
    transition-all duration-200 shrink-0
    ${
      canDelete
        ? "cursor-pointer bg-white border-border text-text-muted hover:border-red-300 hover:text-red-500 hover:bg-red-50 active:scale-95"
        : "cursor-not-allowed bg-white border-border text-text-hint opacity-40"
    }
  `}
      >
        <IoTrashOutline size={15} />
        Eliminar completadas
      </button>
    </form>
  );
};
