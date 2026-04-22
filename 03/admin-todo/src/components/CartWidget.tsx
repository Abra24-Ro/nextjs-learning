"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

interface Props {
  count: number;
}

export const CartWidget = ({ count }: Props) => {
  const [animate, setAnimate] = useState(false);
  const prevCount = useRef(count);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      prevCount.current = count;
      return;
    }

    if (count !== prevCount.current) {
      prevCount.current = count;
      const t1 = setTimeout(() => setAnimate(true), 0);
      const t2 = setTimeout(() => setAnimate(false), 600);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [count]);

  return (
    <Link href="/dashboard/cart" className={`
      cursor-pointer
      relative flex items-center justify-center w-9 h-9 rounded-xl
      bg-white text-text-muted
      hover:text-primary hover:bg-surface-alt
      transition-all duration-200
      border
      ${animate
        ? "border-accent ring-2 ring-accent-light"
        : "border-border hover:border-primary-light"
      }
    `}>
      <CiShoppingCart size={18} />
      {count > 0 && (
        <span className={`
          absolute -top-1.5 -right-1.5
          min-w-4.5 h-4.5 px-1
          rounded-full bg-accent text-white
          text-[10px] font-medium
          flex items-center justify-center leading-none
          transition-transform duration-300
          ${animate ? "scale-125" : "scale-100"}
        `}>
          {count}
        </span>
      )}
    </Link>
  );
};