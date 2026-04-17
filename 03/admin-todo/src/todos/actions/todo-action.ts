"use server";


import { Todo } from "@/src/generated/prisma/client";
import prisma from "@/src/lib/prisma";

import {revalidatePath} from "next/cache";


export const sleep  = async (seconds:number=0)=> {
  return new Promise((resolve) => {
      setTimeout(()=> {
        resolve(true)
      }, seconds * 1000)
  });
}


export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
 await sleep(4)
 
 
  const todo = await prisma.todo.findFirst({
    where: { id },
  });

  if (!todo) {
    throw `Todo with id ${id} not found`;
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });

  revalidatePath("/dashboard/server-todos")

  return updatedTodo;
};


export const addTodo =async (description:string)=> {
   try {
      
  
      const todo = await prisma.todo.create({
        data: { description},
      });
      revalidatePath("/dashboard/server-todos")
  
     
  
    return todo;
      
    }
    catch (error) {
      console.log(error)
      return {
        message:"Error creando todo"
      }
    }
}



export const deleteCompleteTodo = async () => {
  try {
    const todo =   await prisma.todo.deleteMany({
      where: {
        complete: true,
      },
    });
    revalidatePath("/dashboard/server-todos")

    return todo;



  } catch (error) {
    console.log(error)
  }
}