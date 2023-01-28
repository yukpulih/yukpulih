export type SubSubMenuProps = {
  name: string;
  url: string;
};

export const SubSubMenu = ({ name, url }: SubSubMenuProps) => {
  return (
    <ul>
      <li className="my-5 md:hidden">
        <a href={url}>
          <div className="hover:text-green-900 hover:underline cursor-pointer w-full flex items-center mr-3 ml-1">
            {name}
          </div>
        </a>
      </li>
    </ul>
  );
};

export default SubSubMenu;
