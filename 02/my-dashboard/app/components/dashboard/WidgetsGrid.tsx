"use client";

import { IoCalculator, IoCartSharp } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/app/store";

export const WidgetsGrid = () => {
  const isCart = useAppSelector((state) => state.counter.count);
  return (
    <div
      className="
        mt-10
        grid gap-6
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4
        max-w-7xl mx-auto
      "
    >
      <SimpleWidget
        title={`Cart: ${isCart}`}
        subtitle="Widgets"
        label="Total"
        href="/dashboard/counter"
        icon={<IoCartSharp size={24} />}
      />
      <SimpleWidget
        title="Gráfico"
        subtitle="Analytics"
        label="Visitas"
        icon={<IoCalculator size={24} />}
      />
    </div>
  );
};
