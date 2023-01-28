import SubMenu from "./submenu.component";

export const Menu = () => {
  return (
    <>
      <li className="md:border-b-0 md:font-normal md:px-0 md:my-auto px-5 border-solid border-b-[1px] border-gray-300 mb-7 pb-7 font-medium text-gray-800">
        <a href="">
          <div className="w-full flex items-center md:mt-5 uppercase md:normal-case">
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
            Workshop
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="hidden md:block w-3 h-3 mt-1 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </a>
        <ul className="ml-5">
          <SubMenu />
        </ul>
      </li>
      <li className="md:border-b-0 md:font-normal md:px-0 md:my-auto px-5 border-solid border-b-[1px] border-gray-300 mb-7 pb-7 font-medium text-gray-800">
        <a href="">
          <div className="w-full flex items-center md:mt-5 uppercase md:normal-case">
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
            About
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="hidden md:block w-3 h-3 mt-1 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </a>
        <ul className="ml-5">
          <SubMenu />
        </ul>
      </li>
      <a href="">
        <li className="md:border-b-0 md:font-normal md:px-0 md:my-auto md:mt-5 px-5 border-solid border-b-[1px] border-gray-300 mb-7 pb-7 font-medium text-gray-800 uppercase md:normal-case">
          Blog
        </li>
      </a>
      <a href="">
        <li className="md:border-b-0 md:font-normal md:px-0 md:my-auto md:mt-5 px-5 border-solid border-b-[1px] border-gray-300 mb-7 pb-7 font-medium text-gray-800 uppercase md:normal-case">
          Community
        </li>
      </a>
      <a href="">
        <li className="md:border-b-0 md:font-normal md:px-0 md:my-auto md:mt-5 px-5 border-solid border-b-[1px] border-gray-300 mb-7 pb-7 font-medium text-gray-800 uppercase md:normal-case">
          Donate
        </li>
      </a>
    </>
  );
};

export default Menu;
