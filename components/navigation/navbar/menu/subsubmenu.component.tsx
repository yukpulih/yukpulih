export type SubSubMenuProps = {
  name: string;
  url: string;
};

export const SubSubMenu = ({ name, url }: SubSubMenuProps) => {
  return (
    <ul>
      <li className="my-5 md:my-0">
        <a href={url}>
          <div className="md:p-2 md:hover:no-underline md:hover:bg-gray-300 hover:text-green-900 hover:underline cursor-pointer w-full flex items-center mr-3 ml-1 md:mr-0 md:ml-0">
            {name}
          </div>
        </a>
      </li>
    </ul>
  );
};

export default SubSubMenu;
