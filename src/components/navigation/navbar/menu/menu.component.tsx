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
      <li
        className={`${
          depthLevel === 0
            ? "border-b-[1px] border-solid border-gray-300"
            : null
        }`}
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
          {/* Icon for Mobile/Table View Start */}
          <span className={`${submenu === null ? "hidden" : null} w-5`}>
            <ChevronRightIcon
              className={`${
                isOpen ? "rotate-90" : "rotate-0"
              } duration-200 w-4 h-4`}
            />
          </span>
          {/* Icon for Mobile/Table View End */}
          {title}
        </button>
        {isOpen && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="ml-5"
            >
              <SubMenu menu={submenu} depthLevel={depthLevel} />
            </motion.div>
          </AnimatePresence>
        )}
      </li>
    </ul>
  );
};

export default Menu;
