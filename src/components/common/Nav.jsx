import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const HamburgerMenu = ({ show }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="24"
      fill="none"
      stroke="#FFF"
      strokeWidth="2"
      viewBox="0 0 20 20"
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

  const navClass = clsx("w-full h-full flex flex-col p-5 bg-white mt-6", {
    hidden: !show
  });

  return (
    <header className={headerClass}>
      <div className="flex flex-col h-full lg:flex-col-reverse pt-1">
        <div className="flex-grow flex flex-col container lg:flex-row lg:items-center h-full">
          <div className="w-full lg:w-1/3">
            <div className="flex flex-row mt-3 justify-end">
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="w-5 ml-5 outline-none lg:hidden no-underline"
              >
                <HamburgerMenu show={show} />
              </button>
              <a className="mr-auto">
                <img
                  src="/icons/bp-logo.svg"
                  width="180"
                  alt="Budapest logo"
                  className="ml-5"
                />
              </a>
              <a>
                <img
                  src="/icons/chat.svg"
                  width="18"
                  alt="Budapest logo"
                  className="mt-3 mr-3"
                />
              </a>
              <a>
                <img
                  src="/icons/login.svg"
                  width="18"
                  alt="Budapest logo"
                  className="mt-3 mr-5"
                />
              </a>
            </div>
          </div>
          <nav className={navClass}>
            <div className="mt-10 pb-10 borderb">
              <button
                type="submit"
                className="bg-primary text-blue-800 w-full pt-4 pb-4 rounded-full uppercase font-bold m-auto"
              >
                Start booking!
              </button>
            </div>
            <div className="text-left mt-10 pb-10 borderb">
              <h2 className="text-blue-800 text-2xl font-bold">Lorem ipsum</h2>
              <div class="flex flex-wrap text-secondary">
                <div className="w-1/2">
                  <p className="mt-3">Sed lacinia</p>
                  <p className="mt-3">Praesent consequat</p>
                  <p className="mt-3">Aenean lacinia viverra</p>
                </div>
                <div className="w-1/2">
                  <p className="mt-3">Praesent venenatis?</p>
                  <p className="mt-3">Etiam finibus molestie</p>
                  <p className="mt-3">Duis varius massa</p>
                </div>
              </div>
            </div>
            <div className="text-left mt-10 pb-10 borderb">
              <h2 className="text-blue-800 text-2xl font-bold">Dolorsit</h2>
              <div class="flex flex-wrap text-secondary">
                <div className="w-1/2">
                  <p className="mt-3">Adipiscing elit</p>
                  <p className="mt-3">Cogito ergo sum</p>
                </div>
              </div>
            </div>
            <div className="text-left mt-10 pb-10 borderb">
              <h2 className="text-blue-800 text-2xl font-bold">Consectetur</h2>
              <div class="flex flex-wrap text-secondary">
                <div className="w-1/2">
                  <p className="mt-3">Grande punto</p>
                </div>
              </div>
            </div>
            <div className="text-left mt-10 pb-10 borderb">
              <div class="flex flex-wrap text-secondary">
                <div className="w-1/2">
                  <p className="mt-3">Curabitur</p>
                  <p className="mt-3">Ut ullamcorper</p>
                  <p className="mt-3">Vestibulum</p>
                  <p className="mt-3">Orci varius</p>
                </div>
                <div className="w-1/2">
                  <p className="mt-3">Donec vel eros</p>
                  <p className="mt-3">Curabitur</p>
                  <p className="mt-3">Maecenas</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10 pb-10 borderb">
              <p className="text-secondary">
                <img
                  src="/icons/pin.svg"
                  width="18"
                  alt="Pin"
                  className="inline ml-2"
                />{" "}
                English
              </p>
            </div>
            <div className="text-center mt-10 pb-10">
              <a className="text-blue-800 rounded-full border-2 p-5 mr-1">
                <img
                  src="/icons/chatb.svg"
                  width="18"
                  alt="Pin"
                  className="inline ml-2"
                />{" "}
                Chat
              </a>
              <a className="text-blue-800 rounded-full border-2 p-5 ml-1">
                <img
                  src="/icons/loginb.svg"
                  width="18"
                  alt="Pin"
                  className="inline ml-2"
                />{" "}
                Login
              </a>
            </div>
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
