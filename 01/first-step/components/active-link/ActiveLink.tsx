"use client";

import Link from "next/link";
import style from "../active-link/ActiveLink.module.css";
import { usePathname } from "next/navigation";
interface ActiveLinkProps {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: ActiveLinkProps) => {

   const pathName = usePathname()
   
  return (
    <Link
      href={path}
      key={path}
      className={`p-2  ${style.link} ${(pathName === path) && style["active-link"]}`}
    >
      {text}
    </Link>
  );
};


