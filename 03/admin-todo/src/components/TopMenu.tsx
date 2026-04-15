import { CiBellOn, CiChat1, CiMenuBurger, CiSearch } from "react-icons/ci";

export const TopMenu = () => {
  return (
    <div className="sticky z-10 top-0 h-16 border-b border-[#D1C9B0] bg-[#F5F0E8] lg:py-2.5">
      <div className="px-6 flex items-center justify-between h-full space-x-4">

        <h5 className="hidden text-xl font-medium text-[#292524] lg:block">
          Dashboard
        </h5>

        <button className="cursor-pointer w-12 h-16 -mr-2 border-r border-[#D1C9B0] flex items-center justify-center text-[#78716C] hover:text-[#16A34A] transition-colors lg:hidden">
          <CiMenuBurger size={22} />
        </button>

        <div className="flex items-center gap-2 ml-auto">

          {/* Search — desktop */}
          <div className="hidden md:block">
            <div className="relative flex items-center">
              <span className="absolute left-3 text-[#A8A29E]">
                <CiSearch size={18} />
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Buscar..."
                className="
                  w-56 pl-9 pr-4 py-2 rounded-xl
                  text-sm text-[#292524]
                  bg-white border border-[#D1C9B0]
                  placeholder:text-[#A8A29E]
                  outline-none
                  focus:border-[#16A34A] focus:ring-2 focus:ring-[#DCFCE7]
                  transition-all duration-200
                "
              />
            </div>
          </div>

          {/* Search — mobile */}
          <button className="
            cursor-pointer
            flex items-center justify-center w-9 h-9 rounded-xl
            bg-white border border-[#D1C9B0]
            text-[#78716C] hover:text-[#16A34A] hover:border-[#86EFAC] hover:bg-[#F0FDF4]
            transition-all duration-200
            md:hidden
          ">
            <CiSearch size={18} />
          </button>

          {/* Chat */}
          <button className="
            cursor-pointer
            relative flex items-center justify-center w-9 h-9 rounded-xl
            bg-white border border-[#D1C9B0]
            text-[#78716C] hover:text-[#16A34A] hover:border-[#86EFAC] hover:bg-[#F0FDF4]
            transition-all duration-200
          ">
            <CiChat1 size={18} />
          </button>

          {/* Bell con badge */}
          <button className="
            cursor-pointer
            relative flex items-center justify-center w-9 h-9 rounded-xl
            bg-white border border-[#D1C9B0]
            text-[#78716C] hover:text-[#16A34A] hover:border-[#86EFAC] hover:bg-[#F0FDF4]
            transition-all duration-200
          ">
            <CiBellOn size={18} />
            <span className="
              absolute top-1.5 right-1.5
              w-2 h-2 rounded-full
              bg-[#D97706]
            " />
          </button>

        </div>
      </div>
    </div>
  );
};