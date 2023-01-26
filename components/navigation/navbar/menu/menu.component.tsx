export const Menu = () => {
  return (
    <>
      <a href="" className="">
        <li className="flex items-center justify-between md:border-b-0 md:font-normal md:px-0 md:my-auto md:mt-5 px-5 border-solid border-b-[1px] border-gray-300 mb-5 pb-5 font-medium text-gray-800">
          Workshop
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 mt-1 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </li>
      </a>
      <a href="">
        <li className="flex items-center justify-between md:border-b-0 md:font-normal md:px-0 md:my-auto md:mt-5 px-5 border-solid border-b-[1px] border-gray-300 mb-5 pb-5 font-medium text-gray-800">
          About
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 mt-1 ml-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </li>
      </a>
      <a href="">
        <li className="flex items-center justify-between md:border-b-0 md:font-normal md:px-0 md:my-auto md:mt-5 px-5 border-solid border-b-[1px] border-gray-300 mb-5 pb-5 font-medium text-gray-800">
          Blog
        </li>
      </a>
      <a href="">
        <li className="flex items-center justify-between md:border-b-0 md:font-normal md:px-0 md:my-auto md:mt-5 px-5 border-solid border-b-[1px] border-gray-300 mb-5 pb-5 font-medium text-gray-800">
          Community
        </li>
      </a>
      <a href="">
        <li className="flex items-center justify-between md:border-b-0 md:font-normal md:px-0 md:my-auto md:mt-5 px-5 border-solid border-b-[1px] border-gray-300 mb-5 pb-5 font-medium text-gray-800">
          Donate
        </li>
      </a>
    </>
  );
};

export default Menu;
