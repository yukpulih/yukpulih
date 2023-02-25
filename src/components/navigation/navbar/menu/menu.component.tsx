import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";

import SubMenu from "./submenu.component";

export type MenuProps = {
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
};

export const Menu = ({ name, url, subMenu }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    let handler = (e: MouseEvent | TouchEvent): void => {
      e.preventDefault();
      const target = e.target as HTMLElement;

      if (!menuRef?.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  if (subMenu !== null) {
    return (
      <ul>
        <li
          ref={menuRef}
          className="md:border-b-0 md:font-normal md:px-0 md:my-auto px-5 border-solid border-b-[1px] border-gray-300 mb-7 pb-7 font-medium text-gray-800"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full hover:cursor-pointer hover:text-green-900 hover:underline md:hover:no-underline flex items-center md:mt-5 uppercase md:normal-case"
          >
            {isOpen ? (
              <ChevronDownIcon className="md:hidden w-4 h-4 mr-2" />
            ) : (
              <ChevronRightIcon className="md:hidden w-4 h-4 mr-2" />
            )}
            {name}

            <ChevronDownIcon className="hidden md:block w-3 h-3 ml-1 mt-1" />
          </button>
          {isOpen ? (
            <div className="ml-5 md:absolute md:top-0 md:mt-[60px] md:ml-0 md:bg-gray-200 md:w-52">
              {subMenu.map((item, idx) => {
                return (
                  <SubMenu
                    key={`${item.name}-${idx}`}
                    name={item.name}
                    url={item.url}
                    subSubMenu={item.subSubMenu}
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
        <li className="md:border-b-0 md:font-normal md:px-0 md:my-auto px-5 border-solid border-b-[1px] border-gray-300 mb-7 pb-7 font-medium text-gray-800">
          <a
            href={url}
            className="w-full hover:cursor-pointer hover:text-green-900 hover:underline flex items-center md:mt-5 uppercase md:normal-case md:hover:no-underline"
          >
            {name}
          </a>
        </li>
      </ul>
    );
  }
};

export default Menu;
