import { cookies } from "next/headers";
import {
  CiChat1,
  CiMenuBurger,
  CiSearch,
  
} from "react-icons/ci";
import { CartWidget } from "./CartWidget";

export const TopMenu = async () => {
  const cookieStore = await cookies();
  const cart = JSON.parse(cookieStore.get("cart")?.value || "[]") as string[];

  const getTotalCount = () => {
    let items = 0;

    Object.values(cart).forEach((value) => {
      items += value as unknown as number;
    });

    return items;
  };

  return (
    <div className="sticky z-10 top-0 h-16 border-b border-border bg-bg">
      <div className="px-6 flex items-center justify-between h-full gap-4">
        <h5 className="hidden text-xl font-medium text-text lg:block">
          Dashboard
        </h5>

        <button
          className="
          cursor-pointer w-10 h-16
          border-r border-border
          flex items-center justify-center
          text-text-muted hover:text-primary
          transition-colors duration-200
          lg:hidden shrink-0
        "
        >
          <CiMenuBurger size={20} />
        </button>

        <div className="flex items-center gap-2 ml-auto">
          {/* Search — desktop */}
          <div className="hidden md:block">
            <div className="relative flex items-center">
              <span className="absolute left-3 text-text-hint pointer-events-none">
                <CiSearch size={16} />
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Buscar..."
                className="
                  w-52 pl-8 pr-4 py-2 rounded-xl
                  text-sm text-text
                  bg-white border border-border
                  placeholder:text-text-hint
                  outline-none
                  focus:border-primary focus:ring-2 focus:ring-primary-muted
                  transition-all duration-200
                "
              />
            </div>
          </div>

          {/* Search — mobile */}
          <button
            className="
            cursor-pointer
            flex items-center justify-center w-9 h-9 rounded-xl
            bg-white border border-border text-text-muted
            hover:text-primary hover:border-primary-light hover:bg-surface-alt
            transition-all duration-200
            md:hidden
          "
          >
            <CiSearch size={17} />
          </button>

          {/* Chat */}
          <button
            className="
            cursor-pointer
            flex items-center justify-center w-9 h-9 rounded-xl
            bg-white border border-border text-text-muted
            hover:text-primary hover:border-primary-light hover:bg-surface-alt
            transition-all duration-200
          "
          >
            <CiChat1 size={17} />
          </button>

          {/* Carrito con badge */}

          <CartWidget count={getTotalCount()} />
        </div>
      </div>
    </div>
  );
};
