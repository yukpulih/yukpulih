import { NavbarProps } from "./navbar.component";

const base: NavbarProps = {
  menu: [
    {
      name: "Workshop",
      url: "#",
      subMenu: [
        {
          name: "Fundamentals",
          url: "#",
          subSubMenu: [
            { name: "Your Brain on Pron", url: "#" },
            { name: "Effective Recovery from Porn Addiction", url: "#" },
            { name: "Time Management", url: "#" },
          ],
        },
        {
          name: "Loremipsum",
          url: "#",
          subSubMenu: [
            { name: "Sub Sub-menu 1", url: "#" },
            { name: "Sub Sub-menu 2", url: "#" },
          ],
        },
        {
          name: "Dolorsitamet",
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
          name: "Our Mission",
          url: "#",
          subSubMenu: null,
        },
        {
          name: "Our Team",
          url: "#",
          subSubMenu: null,
        },
        {
          name: "Financials",
          url: "#",
          subSubMenu: null,
        },
        {
          name: "Careers",
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
