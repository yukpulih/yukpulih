import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

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

  if (subSubMenu !== null) {
    return (
      <ul>
        <li className="my-5 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:text-green-900 hover:underline cursor-pointer w-full flex items-center mr-3 uppercase md:normal-case"
          >
            {isOpen ? (
              <ChevronDownIcon className="md:hidden w-4 h-4 mr-2" />
            ) : (
              <ChevronRightIcon className="md:hidden w-4 h-4 mr-2" />
            )}
            {name}
          </button>
          <div className="ml-5">
            {isOpen
              ? subSubMenu.map((item, idx) => {
                  return (
                    <div key={`${item.name}-${idx}`}>
                      <SubSubMenu name={item.name} url={item.url} />
                    </div>
                  );
                })
              : null}
          </div>
        </li>
      </ul>
    );
  } else {
    return (
      <ul>
        <li className="my-5 md:hidden">
          <a
            href={url}
            className="hover:text-green-900 hover:underline cursor-pointer w-full flex items-center mr-3"
          >
            {name}
          </a>
        </li>
      </ul>
    );
  }
};

export default SubMenu;
