import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import SubMenu from "./submenu.component";

type MenuProps = {
  title: string;
  url: string;
  submenu: { [key: string]: string }[] | null;
  depthLevel: number;
};

const Menu: React.FC<MenuProps> = ({ title, url, submenu, depthLevel }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul>
      {submenu !== null ? (
        <>
          {/* Menu Item for Mobile/Tablet View Start */}
          <li
            className={`${
              depthLevel === 0
                ? "border-b-[1px] border-solid border-gray-300"
                : null
            } md:hidden`}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                depthLevel === 0 || submenu !== null
                  ? "font-semibold uppercase"
                  : null
              } ${
                depthLevel === 0 ? "p-5" : null
              } flex items-center cursor-pointer  w-full text-left pl-5 pb-2 hover:underline`}
            >
              <span className={`${submenu === null ? "hidden" : null} w-5`}>
                <ChevronRightIcon
                  className={`${
                    isOpen ? "rotate-90" : "rotate-0"
                  } duration-200 w-4 h-4`}
                />
              </span>
              {title}
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: {
                        duration: 0.4,
                      },
                      opacity: {
                        duration: 0.25,
                        delay: 0.15,
                      },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: {
                        duration: 0.4,
                      },
                      opacity: {
                        duration: 0.25,
                      },
                    },
                  }}
                  className="ml-5"
                >
                  <SubMenu menu={submenu} depthLevel={depthLevel} />
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          {/* Menu Item for Mobile/Tablet View End */}
        </>
      ) : (
        <>
          {/* Menu Item for Mobile/Tablet View Start */}
          <li
            className={`${
              depthLevel === 0
                ? "border-b-[1px] border-solid border-gray-300"
                : null
            } md:hidden`}
          >
            <a
              className={`${
                depthLevel === 0 || submenu !== null
                  ? "font-semibold uppercase"
                  : null
              } ${
                depthLevel === 0 ? "p-5" : null
              } flex items-center cursor-pointer  w-full text-left pl-5 pb-2 hover:underline`}
              href={url}
            >
              {title}
            </a>
          </li>
          {/* Menu Item for Mobile/Tablet View Start */}
        </>
      )}
    </ul>
  );
};

export default Menu;
