import { Todo } from "@/src/generated/prisma";

export const updateTodo = async (
  id: string,
  complete: boolean,
): Promise<Todo> => {
  const body = {
    complete,
  };
  const dbTodo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  console.log(dbTodo);

  return dbTodo;
};

export const createTodo = async (description: string): Promise<Todo> => {
  const body = {
    description,
  };
  const dbTodo = await fetch(`/api/todos`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  console.log(dbTodo);

  return dbTodo;
};

export const completeDeleteTodo = async () => {
  const res = await fetch(`/api/todos`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Error HTTP: ${res.status}`);
  }

  return await res.json(); // si tu API devuelve info real
};