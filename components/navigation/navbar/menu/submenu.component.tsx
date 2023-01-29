import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";

import SubSubMenu from "./subsubmenu.component";

export type SubMenuProps = {
  name: string;
  url: string;
  subSubMenu:
    | {
        name: string;
        url: string;
      }[]
    | null;
};

export const SubMenu = ({ name, url, subSubMenu }: SubMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    let handler = (e: MouseEvent | TouchEvent): void => {
      e.preventDefault();
      const target = e.target as HTMLElement;

      if (!menuRef?.current?.contains(target)) {
        setIsOpen(false);
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const menuHandler = () => {
    setIsOpen(!isActive);
    setIsActive(!isActive);
  };

  if (subSubMenu !== null) {
    return (
      <ul>
        <li className="my-5 md:my-0" ref={menuRef}>
          <button
            onClick={menuHandler}
            className={`${
              isActive ? "md:bg-gray-300" : null
            } md:flex md:items-center md:justify-between md:p-2 hover:text-green-900 hover:underline md:hover:no-underline md:hover:bg-gray-300 cursor-pointer w-full flex items-center mr-3 md:mr-0 uppercase md:normal-case`}
          >
            {isOpen ? (
              <ChevronDownIcon className="md:hidden w-4 h-4 mr-2" />
            ) : (
              <ChevronRightIcon className="md:hidden w-4 h-4 mr-2" />
            )}
            {name}
            <ChevronRightIcon className="hidden md:block w-4 h-4" />
          </button>
          {isOpen ? (
            <div className="ml-5 md:absolute md:-mt-10 md:ml-52 md:w-52 md:bg-gray-200">
              {subSubMenu.map((item, idx) => {
                return (
                  <SubSubMenu
                    key={`${item.name}-${idx}`}
                    name={item.name}
                    url={item.url}
                  />
                );
              })}
            </div>
          ) : null}
        </li>
      </ul>
    );
  } else {
    return (
      <ul>
        <li className="my-5 md:my-0">
          <a
            href={url}
            className="md:p-2 md:hover:no-underline md:hover:bg-gray-300 hover:text-green-900 hover:underline cursor-pointer w-full flex items-center mr-3"
          >
            {name}
          </a>
        </li>
      </ul>
    );
  }
};

export default SubMenu;
