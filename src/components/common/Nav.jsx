import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import NavHd from "./NavHd";
import Fade from "react-reveal/Fade";
import LanguageSwitchMobil from "./LanguageSwitchMobil";

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
          <path d="M18 6L6 18" stroke="#014593" />
          <path d="M6 6L18 18" stroke="#014593" />
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

const Header = ({ show, setShow }) => {
  const [usermobil, setUserMobil] = useState(false);

  const headerClass = clsx(
    `fixed w-full z-10 top-0 xl:hidden`,
    show ? "bg-white" : "bg-navbg md:bg-transparent",
    {
      "h-full md:w-1/2": show
    }
  );

  const navClass = clsx(
    "w-full h-full flex flex-col p-5 mt-3 overflow-scroll border-t",
    {
      hidden: !show
    }
  );

  return (
    <div>
      <header className={headerClass}>
        <div className="flex-grow flex flex-col container h-full">
          <div className="w-full">
            <div className="flex flex-row mt-3 mb-3 justify-end">
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="w-5 ml-5 mr-2 outline-none"
              >
                <HamburgerMenu show={show} />
              </button>
              <a href="/" className="ml-5 mr-auto">
                {show ? (
                  <img
                    src="/icons/bplogob.svg"
                    width="180"
                    alt="Budapest logo"
                  />
                ) : (
                  <img
                    src="/icons/bp-logo.svg"
                    width="180"
                    alt="Budapest logo"
                  />
                )}
              </a>
              <a href="#">
                {show ? (
                  <img
                    src="/icons/chatb.svg"
                    width="18"
                    alt="Budapest logo"
                    className="mt-3 mr-3 hidden"
                  />
                ) : (
                  <img
                    src="/icons/chat.svg"
                    width="18"
                    alt="Budapest logo"
                    className="mt-3 mr-3 lg:hidden"
                  />
                )}
              </a>
              <a>
                {show ? (
                  <img
                    src="/icons/loginb.svg"
                    width="18"
                    alt="Budapest logo"
                    className="mt-3 mr-5 hidden"
                  />
                ) : (
                  <img
                    src="/icons/login.svg"
                    width="18"
                    alt="Budapest logo"
                    className="mt-3 mr-3 lg:hidden"
                  />
                )}
              </a>
              {show ? (
                <p>{""}</p>
              ) : (
                <div className="justify-end hidden lg:flex lg:justify-end mr-5">
                  <a className="text-blue-800 bg-white rounded-full border border-third pt-1 pb-1 pl-3 pr-3 mr-1 hover:bg-primary">
                    Chat{" "}
                    <img
                      src="/icons/chatb.svg"
                      width="18"
                      alt="Pin"
                      className="inline ml-4"
                    />
                  </a>
                  <a className="text-blue-800 bg-white rounded-full border border-third pt-1 pb-1 pl-3 pr-3 ml-1 hover:bg-primary ">
                    Login{" "}
                    <img
                      src="/icons/loginb.svg"
                      width="18"
                      alt="Pin"
                      className="inline ml-4 hover:fill-white"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
          <Fade left>
            <nav className={navClass}>
              <div className="pt-5 pb-10 borderb lg:hidden">
                <button
                  type="submit"
                  className="bg-primary text-blue-800 w-full pt-3 pb-3 rounded-full uppercase font-bold m-auto"
                >
                  Start booking!
                </button>
              </div>
              {!usermobil ? (
                <p>{""}</p>
              ) : (
                <div>
                  <div class="flex items-center mt-10">
                    <img
                      class="w-10 h-10 rounded-full mr-4"
                      src="/icons/user.png"
                      alt="User"
                    />
                    <div class="text-sm">
                      <p class="text-third text-xs">Logged in as</p>
                      <p class="text-third text-lg">Barbara Palvin</p>
                    </div>
                  </div>
                  <div class="flex flex-wrap text-secondary text-sm mt-5 pb-8 borderb">
                    <div className="w-1/2">
                      <p className="mt-3">Dashboard</p>
                      <p className="mt-5">My account</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="text-left mt-8 pb-8 borderb">
                <h2 className="text-blue-800 text-2xl font-bold">
                  Lorem ipsum
                </h2>
                <div class="flex flex-wrap text-secondary text-sm">
                  <div className="w-1/2">
                    <p className="mt-3">Sed lacinia</p>
                    <p className="mt-5">Praesent consequat</p>
                    <p className="mt-5">Aenean lacinia viverra</p>
                  </div>
                  <div className="w-1/2">
                    <p className="mt-3">Praesent venenatis?</p>
                    <p className="mt-5">Etiam finibus molestie</p>
                    <p className="mt-5">Duis varius massa</p>
                  </div>
                </div>
              </div>
              <div className="text-left mt-8 pb-8 borderb">
                <h2 className="text-blue-800 text-2xl font-bold">Dolorsit</h2>
                <div class="flex flex-wrap text-secondary text-sm">
                  <div className="w-1/2">
                    <p className="mt-3">Adipiscing elit</p>
                    <p className="mt-5">Cogito ergo sum</p>
                  </div>
                </div>
              </div>
              <div className="text-left mt-8 pb-8 borderb">
                <h2 className="text-blue-800 text-2xl font-bold">
                  Consectetur
                </h2>
                <div class="flex flex-wrap text-secondary text-sm">
                  <div className="w-1/2">
                    <p className="mt-3">Grande punto</p>
                  </div>
                </div>
              </div>
              <div className="text-left mt-8 pb-8 borderb">
                <div class="flex flex-wrap text-secondary">
                  <div className="w-1/2 text-sm">
                    <p className="mt-3">Curabitur</p>
                    <p className="mt-5">Ut ullamcorper</p>
                    <p className="mt-5">Vestibulum</p>
                    <p className="mt-5">Orci varius</p>
                  </div>
                  <div className="w-1/2 text-sm">
                    <p className="mt-3">Donec vel eros</p>
                    <p className="mt-5">Curabitur</p>
                    <p className="mt-5">Maecenas</p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5 pb-5 borderb">
                <LanguageSwitchMobil />
              </div>
              <div className="text-center mt-12 pb-10">
                <a className="text-blue-800 rounded-full border border-third pt-2 pb-2 pl-3 pr-3 mr-1 hover:bg-primary">
                  Chat{" "}
                  <img
                    src="/icons/chatb.svg"
                    width="18"
                    alt="Pin"
                    className="inline ml-4"
                  />
                </a>
                <a
                  onClick={() => setUserMobil(true)}
                  className="text-blue-800 rounded-full border border-third pt-2 pb-2 pl-3 pr-3 ml-1 hover:bg-primary "
                >
                  Login{" "}
                  <img
                    src="/icons/loginb.svg"
                    width="18"
                    alt="Pin"
                    className="inline ml-4 hover:fill-white"
                  />
                </a>
              </div>
            </nav>
          </Fade>
        </div>
      </header>
      <NavHd />
    </div>
  );
};

HamburgerMenu.propTypes = {
  show: PropTypes.bool.isRequired
};
export default Header;
