import { CiBookmarkCheck, CiLogout } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { TbCircleCaretRight } from "react-icons/tb";
import { SidebarItem } from "./SiderbarItem";
import { FaBolt } from "react-icons/fa";

const menuItem = [
  {
    icon: <CiBookmarkCheck size={20} />,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <TbCircleCaretRight size={20} />,
    label: "Categories",
    href: "/dashboard/rest-todos",
  },
   {
    icon: <FaBolt size={20} />,
    label: "Server Actions",
    href: "/dashboard/server-todos",
  },
];

export const Sidebar = () => {
  return (
    <aside
      className="
      ml-[-100%] fixed z-10 top-0 pb-3 px-5 w-full
      flex flex-col justify-between h-screen
      border-r border-[#D1C9B0]
      bg-[#F5F0E8]
      transition duration-300
      md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]
    "
    >
      {/* Top section */}
      <div>
        {/* Logo */}
        <div className="-mx-5 px-5 py-5 border-b border-[#D1C9B0]">
          <Link href="/dashboard" title="home">
            <Image
              width={150}
              height={150}
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
              className="w-28"
              alt="tailus logo"
            />
          </Link>
        </div>

        {/* User profile */}
        <div className="mt-7 text-center">
          <div className="relative inline-block">
            <Image
              width={150}
              height={150}
              src="/user.svg"
              alt="avatar"
              className="
                w-10 h-10 m-auto rounded-full object-cover
                ring-2 ring-[#86EFAC] ring-offset-2 ring-offset-[#F5F0E8]
                lg:w-24 lg:h-24
              "
            />
            <span
              className="
              absolute bottom-0 right-0
              w-3 h-3 rounded-full
              bg-[#16A34A]
              ring-2 ring-[#F5F0E8]
              lg:w-4 lg:h-4
            "
            />
          </div>

          <h5 className="hidden mt-3 text-base font-medium text-[#292524] lg:block">
            Cynthia J. Watts
          </h5>
          <span className="hidden text-sm text-[#78716C] lg:block">Admin</span>
        </div>

        {/* Nav items */}
        <ul className="space-y-1 mt-8">
          {menuItem.map((item) => (
            <SidebarItem key={item.href} {...item} />
          ))}
        </ul>
      </div>

      {/* Bottom — logout */}
      <div className="-mx-5 px-5 pt-4 border-t border-[#D1C9B0]">
        <SidebarItem href="#" icon={<CiLogout size={20} />} label="Logout" />
      </div>
    </aside>
  );
};
