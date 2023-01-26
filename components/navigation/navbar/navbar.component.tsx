import Image from "next/image";
import NavButton from "../../buttons/nav-button/nav-button.component";

import Menu from "./menu/menu.component";

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
        <ul className="md:flex hidden items-center text-small gap-6">
          <Menu />
        </ul>
        <div className="md:block hidden">
          <NavButton sampleTextProp="#" />
        </div>
        <div className="md:hidden ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        {/* Mobile View */}
        <ul className="md:hidden absolute left-0 top-0 bottom-0 right-0 my-20 w-full">
          <Menu />
          <div className="px-5">
            <NavButton sampleTextProp="#" />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
