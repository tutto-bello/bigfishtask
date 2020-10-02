import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const HamburgerMenu = ({ show }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="#FFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="mx-auto"
    >
      {show ? (
        <>
          <path d="M18 6L6 18" />
          <path d="M6 6L18 18" />
        </>
      ) : (
        <>
          <path d="M3 12L21 12" />
          <path d="M3 6L21 6" />
          <path d="M3 18L21 18" />
        </>
      )}
    </svg>
  );
};

const Header = () => {
  const [show, setShow] = useState(false);

  const headerClass = clsx("fixed w-full z-10 bg-transparent top-0", {
    "h-full": show
  });

  const navClass = clsx(
    "w-full h-full flex flex-col items-center justify-center lg:flex lg:w-2/3 lg:flex-row lg:justify-end",
    { hidden: !show }
  );

  return (
    <header className={headerClass}>
      <div className="flex flex-col h-full lg:flex-col-reverse pt-1">
        <div className="flex-grow flex flex-col container lg:flex-row lg:items-center h-full">
          <div className="w-full lg:w-1/3">
            <div className="flex flex-row">
              <a>
                <img
                  src="/icons/bp-logo.svg"
                  width="250"
                  alt="Budapest logo"
                  className="m-2"
                />
              </a>
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="w-1/4 outline-none lg:hidden"
              >
                <HamburgerMenu show={show} />
              </button>
            </div>
          </div>
          <nav className={navClass}>
            <a
              href="#about"
              activeClassName="text-white"
              className="text-3xl md:text-base block mt-4 lg:mt-0 lg:inline-block text-primary hover:text-white mr-5"
            >
              ABOUT
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

HamburgerMenu.propTypes = {
  show: PropTypes.bool.isRequired
};
export default Header;
