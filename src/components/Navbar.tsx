import React, { useState } from "react";

const Logo = () => {
  return (
    <img className = "h-14" src="/logo-image.jpg" alt="" />
  );
};

export default function Navbar() {
    const NavbarList = [
        {
          name: "Components",
          link: "/components",
        },
        {
          name: "Templates",
          link: "/templates",
        },
        {
          name: "Contact Us",
          link: "/contact",
        },
      ];
      const [isNavOpen, setIsNavOpen] = useState(false);
      const [toggle, setToggle] = useState(false);
      const [selected, setSelected] = useState("Components");
      const toggleClass = () => {
        setIsNavOpen(!isNavOpen);
        const closeAfterClick = document.querySelector("#nav-icon4");
        closeAfterClick?.classList?.toggle("open");
      };
      return (
        <>
          <div
            className="lg:px-14 xl:px-28 bg-gray-900 transition-all duration-700 sticky top-0 z-10"
          >
            <div className="flex justify-between w-full max-w-screen-3xl mx-auto font-semibold h-20 px-5">
              <div className="flex items-center gap-3 md:gap-4 mr-5">
                <Logo />
                <p className="font-nunito text-lg text-center text-white font-semibold opacity-80 cursor-pointer md:flex md:items-center hidden" >PDF DROP ZONE</p>
              </div>
              <div className="flex items-center sm:gap-3 md:gap-8">
                {NavbarList.map((data, index) => (
                  <div
                    className="group"
                    data-testid={`${data.name}-navlink`}
                    key={index}
                    onClick={() => setSelected(data.name)}
                  >
                    <span className="font-nunito text-lg text-center text-white font-semibold opacity-80 cursor-pointer md:flex md:items-center hidden">
                      {data.name}
                    </span>
                    <div
                      className={`w-full h-0.5 ${
                        selected == data?.name
                          ? "bg-white opacity-80"
                          : "group-hover:bg-white group-hover:opacity-80"
                      }`}
                    ></div>
                  </div>
                ))}
                <button
                  className="w-12 h-12 relative focus:outline-none md:hidden"
                  onClick={() => {
                    toggleClass();
                    setToggle(!toggle);
                  }}
                >
                  <div className="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                    <span
                      className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                        toggle ? "rotate-45" : "-translate-y-1.5"
                      }  
                    `}
                    ></span>
                    <span
                      className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                        toggle && "opacity-0"
                      }`}
                    ></span>
                    <span
                      className={`block absolute h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                        toggle ? "-rotate-45" : "translate-y-1.5"
                      }`}
                    ></span>
                  </div>
                </button>
              </div>
              <div
                className={`md:invisible w-full h-full flex flex-wrap flex-col justify-center absolute top-24 left-0 ${
                  toggle ? "visible z-20" : "invisible -z-10"
                }`}
              >
                <div
                  className={`w-full h-full bg-[#365CCE] absolute left-0 transition-all duration-300 ease-in-out top-8 ${
                    toggle ? "ssm:w-3/5 opacity-60" : "ssm:w-0 -z-10"
                  }`}
                ></div>
                <div
                  data-tilt
                  data-tilt-perspective="2000"
                  className="relative z-20 text-center pt-24 w-full ssm:w-3/5"
                >
                  <div
                    className={`block min-h-[130px] w-fit mx-auto transform transition ${
                      toggle
                        ? "opacity-100 -translate-y-1/3 delay-[0.45s]"
                        : "opacity-0 -translate-y-0  delay-[0s]"
                    }`}
                  >
                    <ul
                      className={`transition w-fit flex flex-col gap-5 my-5 pb-4 bg-gray-900 ${
                        toggle ? "delay-[0.45s]" : "delay-[0s]"
                      }`}
                    >
                      {NavbarList.map((data, index) => (
                        <span
                          className="font-semibold text-opacity-100 text-white text-center cursor-pointer px-2 md:hidden"
                          key={index}
                        >
                          {data.name}
                        </span>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add your content from below div */}
          {/* <div className="w-5 mt-20"></div> */}
        </>
      );
}
