import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import SubMenu from "./submenu.component";

type MenuProps = {
  title: string;
  url: string;
  submenu: { [key: string]: string }[] | null;
  depthLevel: number;
};

const Menu: React.FC<MenuProps> = ({ title, url, submenu, depthLevel }) => {
  const desMenuRef = useRef<HTMLLIElement>(null);
  const [isDesOpen, setIsDesOpen] = useState(false);
  const [isMobOpen, setIsMobOpen] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent): void => {
      e.preventDefault();
      const target = e.target as HTMLElement;

      if (!desMenuRef?.current?.contains(target)) {
        setIsDesOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <ul>
      {submenu !== null ? (
        <>
          {/* Menu Item Start */}
          <li ref={desMenuRef} className="hidden md:block">
            <button
              onClick={() => setIsDesOpen(!isDesOpen)}
              className={`${
                depthLevel === 0
                  ? `${
                      isDesOpen
                        ? "md:border-solid md:border-t-transparent md:border-y-4 md:border-green-800"
                        : ""
                    } md:flex md:items-center md:h-8 md:transition-all md:ease-in-out md:duration-200 md:hover:border-solid md:hover:border-t-transparent md:hover:border-y-4 md:hover:border-green-800`
                  : `${
                      isDesOpen
                        ? "md:font-semibold md:bg-green-800 md:text-gray-300"
                        : ""
                    } md:flex md:justify-between md:w-56 md:py-2 md:px-6 md:font-semibold md:text-sm md:hover:bg-green-800 md:hover:text-gray-300`
              }`}
            >
              {title}
              <span className="md:w-5">
                {depthLevel === 0 ? (
                  <ChevronDownIcon className="md:w-4 md:h-4 md:mt-1 md:ml-1" />
                ) : (
                  <ChevronRightIcon className="md:w-4 md:h-4 md:mt-1 md:ml-1" />
                )}
              </span>
            </button>

            <AnimatePresence>
              {isDesOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`${
                    depthLevel === 0
                      ? "md:top-[60px] md:-ml-6"
                      : "md:ml-56 md:-mt-[48px]"
                  } md:absolute`}
                >
                  <SubMenu menu={submenu} depthLevel={depthLevel} />
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          {/* Menu Item End */}

          {/* Menu Item for Mobile/Tablet View Start */}
          <li
            className={`${
              depthLevel === 0
                ? "border-b-[1px] border-solid border-gray-300"
                : null
            } md:hidden`}
          >
            <button
              onClick={() => setIsMobOpen(!isMobOpen)}
              className={`${
                depthLevel === 0 || submenu !== null
                  ? "font-semibold uppercase"
                  : null
              } ${
                depthLevel === 0 ? "p-5" : null
              } flex items-center cursor-pointer  w-full text-left pl-5 pb-5 hover:underline`}
            >
              <span className={`${submenu === null ? "hidden" : null} w-5`}>
                <ChevronRightIcon
                  className={`${
                    isMobOpen ? "rotate-90" : "rotate-0"
                  } duration-200 w-4 h-4`}
                />
              </span>
              {title}
            </button>
            <AnimatePresence>
              {isMobOpen && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
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
          {/* Menu Item Start */}
          <li className="hidden md:block">
            <a
              href={url}
              className={`${
                depthLevel === 0
                  ? `${
                      isMobOpen
                        ? "md:border-solid md:border-t-transparent md:border-y-4 md:border-green-800"
                        : ""
                    } md:flex md:items-center md:h-8 md:transition-all md:ease-in-out md:duration-200 md:hover:border-solid md:hover:border-t-transparent md:hover:border-y-4 md:hover:border-green-800`
                  : `${
                      isMobOpen
                        ? "md:font-semibold md:bg-green-800 md:text-gray-300"
                        : ""
                    } md:flex md:justify-between md:w-56 md:py-2 md:px-6 md:font-semibold md:text-sm md:hover:bg-green-800 md:hover:text-gray-300`
              }`}
            >
              {title}
            </a>
          </li>
          {/* Menu Item End */}

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
              } flex items-center cursor-pointer  w-full text-left pl-5 pb-5 hover:underline`}
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
