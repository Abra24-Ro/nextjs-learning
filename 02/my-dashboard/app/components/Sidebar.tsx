import Image from "next/image";
import { IoBrowsersOutline, IoCalculator, IoLogoReact } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={18} />,
    title: "Dashboard",
    subTitle: "Visualize your data",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={18} />,
    title: "Counter",
    subTitle: "Manage your counter",
  },
];


export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{
        width: "16rem",
        backgroundColor: "#1c2b1e",
        borderRight: "1px solid #2e3d30",
      }}
      className="min-h-screen z-10 w-64 fixed left-0 h-screen overflow-y-auto flex flex-col"
    >
      {/* Logo */}
      <div className="px-7 pt-8 pb-6 border-b" style={{ borderColor: "#2e3d30" }}>
        <div className="flex items-center gap-2 mb-1">
            <IoLogoReact size={30} style={{ color: "#7aaa8a" }}  />
        </div>
        <p style={{ color: "#4a6350", fontSize: "10px", letterSpacing: "0.08em" }}>
          PORTFOLIO MANAGEMENT
        </p>
      </div>

      {/* Profile */}
      <div className="px-7 py-6 border-b" style={{ borderColor: "#2e3d30" }}>
        <p style={{ color: "#4a6350", fontSize: "10px", letterSpacing: "0.1em", marginBottom: "10px" }}>
          ACCOUNT
        </p>
        <a href="#" className="flex items-center gap-3 group">
          <Image
            className="rounded-full object-cover"
            style={{ width: "34px", height: "34px", border: "1px solid #3d5440" }}
            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
            alt="Profile"
            width={50}
            height={50}
          />
          <div>
            <p style={{ color: "#c8bfa0", fontSize: "13px", fontWeight: 600, letterSpacing: "0.02em" }}>
              Rara Dev
            </p>
            <p style={{ color: "#4a6350", fontSize: "10px", letterSpacing: "0.06em" }}>
              Private Wealth
            </p>
          </div>
        </a>
      </div>

      {/* Nav */}
      <div className="px-4 py-5 flex-1">
        <p style={{ color: "#4a6350", fontSize: "10px", letterSpacing: "0.1em", paddingLeft: "12px", marginBottom: "8px" }}>
          NAVIGATION
        </p>
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>

      {/* Footer */}
      <div className="px-7 py-5 border-t" style={{ borderColor: "#2e3d30" }}>
        <p style={{ color: "#344d37", fontSize: "10px", letterSpacing: "0.06em" }}>
          © 2024 Dash8 · Private
        </p>
      </div>
    </div>
  );
};