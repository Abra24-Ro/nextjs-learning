import Link from "next/link";
import { Home } from "lucide-react";
import { ActiveLink } from "../active-link/ActiveLink";



const navItems = [
   
    {
        path:"/contact",
        text:"Contact"
    },
    {
        path:"/price",
        text:"Price"
    },
    {
        path:"/about",
        text:"About"
    }

]

export const Navbar = async () => {

  return (
    <nav className="flex bg-blue-950 bg-opacity-50 p-2 m-2 rounded">
      <Link href="/" className="p-2 flex items-center">
      <Home className="w-6 h-6 mr-2" />
        Home
      </Link>
      <div className="flex flex-1"></div>

{
    navItems.map((item) => (
        <ActiveLink key={item.path} {...item} />
    ))
}
    
    </nav>
  );
};
