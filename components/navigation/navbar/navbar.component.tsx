import Image from "next/image";
import { useEffect, useState } from "react";

export type NavbarProps = {
  sampleTextProp: string;
};

const Navbar: React.FC<NavbarProps> = ({ sampleTextProp }) => {
  const [dropdownAboutOpen, setDropdownAboutOpen] = useState(false);
  const [dropdownWorkshopOpen, setDropdownWorkshopOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setDropdownWorkshopOpen(false);
      setDropdownAboutOpen(false);
    };

    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="bg-[#F5F5F5] border-solid border-b-[1px] border-[#005152]">
      {/* Container Start */}
      <div className="container h-[60px] items-center flex justify-between mx-auto">
        {/* Left-side Start */}
        <div className="flex flex-start w-1/3">
          <a
            href="#"
            className="inline-flex p-2 text-xl font-bold tracking-wider text-[#005152]"
          >
            <Image src="/static/yukpulih-logo.png" width={30} height={30} />
            <span className="ml-2">Yuk Pulih</span>
          </a>
        </div>
        {/* Left-side End */}

        {/* Middle-side Start */}
        <div className="flex justify-center w-1/3">
          <ul className="inline-flex">
            <li>
              <button
                onClick={() => setDropdownWorkshopOpen(!dropdownWorkshopOpen)}
                className="flex p-2 items-center font-small text-[#005152] rounded-md"
              >
                Workshop
                <svg
                  className="w-4 h-4 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              {dropdownWorkshopOpen && (
                <div className="lg:absolute min-w-[250px] mt-[10px] bg-[#F5F5F5] border-solid border-[#005152] border-[1px]">
                  <ul>
                    <a href="#">
                      <li className="flex items-center justify-between py-2 px-4 hover:bg-[#005152] hover:text-[#F5F5F5]">
                        Category 1
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-3 h-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </li>
                    </a>
                    <a href="#">
                      <li className="flex items-center justify-between py-2 px-4 hover:bg-[#005152] hover:text-[#F5F5F5]">
                        Category 2
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-3 h-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </li>
                    </a>
                    <a href="#">
                      <li className="flex items-center justify-between py-2 px-4 hover:bg-[#005152] hover:text-[#F5F5F5]">
                        Category 3
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-3 h-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </li>
                    </a>
                    <a href="#">
                      <li className="flex items-center justify-between py-2 px-4 hover:bg-[#005152] hover:text-[#F5F5F5]">
                        Category 4
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-3 h-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </li>
                    </a>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <button
                onClick={() => setDropdownAboutOpen(!dropdownAboutOpen)}
                className="flex p-2 items-center font-small text-[#005152] rounded-md"
              >
                About
                <svg
                  className="w-4 h-4 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              {dropdownAboutOpen && (
                <div className="lg:absolute min-w-[250px] mt-[10px] bg-[#F5F5F5] border-solid border-[#005152] border-[1px]">
                  <ul>
                    <a href="#">
                      <li className="py-2 px-4 hover:bg-[#005152] hover:text-[#F5F5F5]">
                        Our Mission
                      </li>
                    </a>
                    <a href="#">
                      <li className="py-2 px-4 hover:bg-[#005152] hover:text-[#F5F5F5]">
                        Our Team
                      </li>
                    </a>
                    <a href="#">
                      <li className="py-2 px-4 hover:bg-[#005152] hover:text-[#F5F5F5]">
                        Financials
                      </li>
                    </a>
                    <a href="#">
                      <li className="py-2 px-4 hover:bg-[#005152] hover:text-[#F5F5F5]">
                        Careers
                      </li>
                    </a>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                href="#"
                className="flex p-2 font-small text-[#005152] rounded-md"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex p-2 font-small text-[#005152] rounded-md"
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex p-2 font-small text-[#005152] rounded-md"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>
        {/* Middle-side End */}

        {/* Right-side Start */}
        <div className="flex justify-end w-1/3">
          <button
            type="button"
            className="bg-[#005152] hover:outline outline-2 outline-offset-[1px] outline-[#005152] focus:outline focus:bg-[#003B3C] text-small text-[#F5F5F5] min-w-[100px] px-1 py-1 rounded-md"
          >
            Login
          </button>
        </div>
        {/* Right-side End */}
      </div>
      {/* Container End */}
    </nav>
  );
};

export default Navbar;
