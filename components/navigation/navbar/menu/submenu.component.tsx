import SubSubMenu from "./subsubmenu.component";

export const SubMenu = () => {
  return (
    <>
      <li className="my-3 md:hidden ">
        <div className="w-full flex items-center mr-3 uppercase md:normal-case">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="md:hidden w-4 h-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          Fundamentals
        </div>
        <ul className="ml-5">
          <SubSubMenu />
        </ul>
      </li>
      <li className="my-3 md:hidden ">
        <div className="w-full flex items-center mr-3 uppercase md:normal-case">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="md:hidden w-4 h-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          Basic Skills
        </div>
      </li>
      <li className="my-3 md:hidden ">
        <div className="w-full flex items-center mr-3 uppercase md:normal-case">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="md:hidden w-4 h-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
          Specific Skills
        </div>
      </li>
    </>
  );
};

export default SubMenu;
