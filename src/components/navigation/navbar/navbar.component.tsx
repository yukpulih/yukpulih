import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

import LoginButton from "./login-button.component";
import Menu from "./menu/menu.component";

export type NavbarProps = {
  menu: {
    title: string;
    url: string;
    submenu: { [key: string]: any }[] | null;
  }[];
};

const Navbar: React.FC<NavbarProps> = ({ menu }) => {
  const depthLevel = 0;
  const [isMobOpen, setIsMobOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobOpen ? "hidden" : "";
  }, [isMobOpen]);

  return (
    <nav className="flex items-center bg-white text-green-900 border-solid border-b-[1px] border-gray-300 h-[60px]">
      {/* Container Start */}
      <div className="container mx-auto px-5 max-w-[1200px] flex items-center  justify-between">
        {/* Title & Logo Start */}
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
        {/* Title & Logo End */}

        {/* Menu Start */}
        {!isSearchOpen && (
          <div className="md:flex hidden md:items-center md:text-small md:gap-2">
            {menu.map((item, index) => {
              return (
                <Menu
                  key={`menu-${index}`}
                  title={item.title}
                  url={item.url}
                  submenu={item.submenu}
                  depthLevel={depthLevel}
                />
              );
            })}
          </div>
        )}
        {/* Menu End */}

        {/* Login and Search Button Start */}
        <div className="hidden md:block">
          {!isSearchOpen && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="md:flex md:items-center md:gap-3"
              >
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="cursor-pointer flex items-center justify-between gap-2 w-32 px-3 h-8 bg-gray-200 hover:bg-gray-300 border border-solid border-gray-200 rounded-lg"
                >
                  <span className="text-green-900 font-medium">Search</span>
                  <MagnifyingGlassIcon className="h-5 w-5 text-green-900" />
                </button>
                <LoginButton />
              </motion.div>
            </AnimatePresence>
          )}

          {isSearchOpen && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="md:flex"
              >
                <form className="md:flex md:items-center">
                  <MagnifyingGlassIcon className="md:absolute md:h-4 md:w-4 md:ml-2 md:text-gray-500" />
                  <input
                    autoFocus
                    placeholder="Search for workshops, articles, and videos"
                    type="text"
                    className="md:w-96 md:px-3 md:pl-8 md:mr-3 md:h-7 md:bg-gray-200 md:border-solid md:border-gray-200 md:rounded-lg md:text-sm"
                  />
                </form>
                <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
                  <XMarkIcon className="md:h-7 md:w-7 md:text-gray-500 md:cursor-pointer" />
                </button>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
        {/* Login and Search Button End */}

        {/* Mobile/Tablet View Start */}
        {/* Xmark and Bar Button for Mobile/Tablet View Start */}
        <div className="md:hidden ml-auto flex items-center gap-5">
          <MagnifyingGlassIcon className="h-5 w-5 text-green-900 cursor-pointer" />
          {isMobOpen ? (
            <XMarkIcon
              onClick={() => setIsMobOpen(!isMobOpen)}
              className="h-7 w-7 text-green-900 cursor-pointer"
            />
          ) : (
            <Bars3Icon
              onClick={() => setIsMobOpen(!isMobOpen)}
              className="h-7 w-7 text-green-900 cursor-pointer"
            />
          )}
        </div>
        {/* Xmark and Bar Button for Mobile/Tablet View End */}

        {/* Menu for Mobile/Tablet View Start */}
        <AnimatePresence>
          {isMobOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden absolute left-0 top-0 bottom-0 right-0 mt-[60px] w-full h-screen bg-white z-50"
            >
              {menu.map((item, index) => {
                return (
                  <Menu
                    key={`menu-${index}`}
                    title={item.title}
                    url={item.url}
                    submenu={item.submenu}
                    depthLevel={depthLevel}
                  />
                );
              })}
              <div className="p-5">
                <LoginButton />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Menu for Mobile/Tablet View End */}
        {/* Mobile/Tablet View End */}
      </div>
      {/* Container End */}
    </nav>
  );
};

export default Navbar;
