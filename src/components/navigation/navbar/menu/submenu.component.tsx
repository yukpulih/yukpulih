import Menu from "./menu.component";

type SubMenuProps = {
  menu?: { [key: string]: any }[] | null;
  depthLevel: number;
};

const SubMenu: React.FC<SubMenuProps> = ({ menu, depthLevel }) => {
  depthLevel = depthLevel + 1;
  return (
    <ul className="md:py-3 md:bg-gray-200">
      {menu?.map((item, index) => {
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
    </ul>
  );
};

export default SubMenu;
