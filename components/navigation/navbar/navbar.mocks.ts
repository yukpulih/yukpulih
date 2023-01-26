import { NavbarProps } from "./navbar.component";

const base: NavbarProps = {
  menu: [
    {
      name: "Workshop",
      url: "#",
      subMenu: [
        {
          name: "Category 1",
          url: "#",
          subSubMenu: [
            { name: "Sub Sub-menu 1", url: "#" },
            { name: "Sub Sub-menu 2", url: "#" },
          ],
        },
      ],
    },
    {
      name: "About",
      url: "#",
      subMenu: [
        {
          name: "Sub Menu 1",
          url: "#",
          subSubMenu: null,
        },
        {
          name: "Sub Menu 2",
          url: "#",
          subSubMenu: null,
        },
      ],
    },
    {
      name: "Blog",
      url: "#",
      subMenu: null,
    },
    {
      name: "Community",
      url: "#",
      subMenu: null,
    },
    {
      name: "Donate",
      url: "#",
      subMenu: null,
    },
  ],
};

export const MockNavbarProps = {
  base,
};
