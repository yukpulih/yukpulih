import Image from "next/image";

import NavButton from "../../buttons/nav-button/nav-button.component";
import Menu from "./menu/menu.component";

import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export type NavbarProps = {
  menu:
    | {
        name: string;
        url: string;
        subMenu:
          | {
              name: string;
              url: string;
              subSubMenu:
                | {
                    name: string;
                    url: string;
                  }[]
                | null;
            }[]
          | null;
      }[]
    | null;
};

const Navbar: React.FC<NavbarProps> = ({ menu }) => {
  return (
    <nav className="flex items-center bg-white text-green-900 border-solid border-b-[1px] border-gray-300 h-[60px]">
      <div className="container mx-auto px-5 max-w-[1200px] flex items-center  justify-between">
        <div className="flex items-center z-50 md:w-auto w-full">
          <Image
            src="/static/yukpulih-logo.png"
            alt="Yuk Pulih Logo"
            className="md:cursor-pointer"
            width={28}
            height={28}
          />
          <span className="text-lg ml-2 font-bold">Yuk Pulih</span>
        </div>
        <ul className="md:flex hidden items-center mt-2 text-small gap-5">
          <Menu />
        </ul>
        <div className="md:flex md:items-center gap-5 md:gap-3 hidden">
          <div className="cursor-pointer flex items-center justify-between gap-2 w-32 px-3 h-8 bg-gray-200 hover:bg-gray-300 border border-solid border-gray-200 rounded-lg">
            <span className="text-green-900 font-medium">Search</span>
            <MagnifyingGlassIcon className="h-5 w-5 text-green-900" />
          </div>

          <NavButton sampleTextProp="#" />
        </div>
        <div className="md:hidden ml-auto flex items-center gap-5">
          <MagnifyingGlassIcon className="h-5 w-5 text-green-900" />
          <Bars3Icon className="h-7 w-7 text-green-900" />
        </div>
        {/* Mobile View */}
        <ul className="md:hidden absolute left-0 top-0 bottom-0 right-0 my-20 w-full">
          <Menu />
          <div className="px-5 pb-7">
            <NavButton sampleTextProp="#" />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
