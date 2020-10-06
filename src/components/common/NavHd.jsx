import React, { useState } from "react";
import LanguageSwitch from "./LanguageSwitch";

const Header = () => {
  const [user, setUser] = useState(false);
  return (
    <header className="hidden xl:block fixed w-full z-10 top-0 bg-transparent bg-navbg">
      <div className="flex-grow flex container justify-end h-full mt-3 mb-3">
        <a href="#" className="mr-auto">
          <img
            src="/icons/bp-logo.svg"
            width="180"
            alt="Budapest logo"
            className="ml-5 hover:shadow-2xl"
          />
        </a>
        <div className="dropdown inline-block relative">
          <button className="text-md text-white hover:text-primary  mr-5">
            <span className="mr-1">Lorem ipsum</span>
          </button>
          <div className="dropdown-menu absolute hidden text-gray-700 pt-5 -ml-32">
            <div
              className="absolute bg-white h-4 mt-4 rotate-45 rounded top-0 transform w-4"
              style={{ left: "175px" }}
            ></div>
            <div class="flex text-secondary bg-white rounded p-5">
              <div className="w-1/2">
                <div className="flex whitespace-no-wrap borderb pr-1">
                  <img
                    src="/icons/capitol.svg"
                    width="45"
                    alt="Budapest logo"
                    className="inline m-3"
                  />
                  <div>
                    <p className="mt-3 text-secondary text-md">Sed lacinia</p>
                    <p className="text-third text-xs">
                      Magna tincidunt venenatis
                    </p>
                  </div>
                </div>
                <div className="flex whitespace-no-wrap borderb pr-16">
                  <img
                    src="/icons/passport.svg"
                    width="45"
                    alt="Budapest logo"
                    className="inline m-3"
                  />
                  <div>
                    <p className="mt-3 text-secondary text-md">
                      Praesent consequat
                    </p>
                    <p className="text-third text-xs">
                      Felis sit amet vehicula molestie
                    </p>
                  </div>
                </div>
                <div className="flex whitespace-no-wrap">
                  <img
                    src="/icons/wheel.svg"
                    width="45"
                    alt="Budapest logo"
                    className="inline m-3"
                  />
                  <div>
                    <p className="mt-3 text-secondary text-md">Sed lacinia</p>
                    <p className="text-third text-xs">
                      Magna tincidunt venenatis
                    </p>
                  </div>
                </div>
              </div>
              <div className="ml-5 w-1/2 mr-10 ">
                <div
                  className="flex whitespace-no-wrap borderb pr-16 mt-1"
                  style={{ paddingBottom: "13px" }}
                >
                  <img
                    src="/icons/motorcycle.svg"
                    width="45"
                    alt="Budapest logo"
                    className="inline m-3"
                  />
                  <div>
                    <p className="mt-3 text-secondary text-md">
                      Praesent venenatis?
                    </p>
                    <p className="text-third text-xs">
                      Quis enim faucibus nisi convallis
                    </p>
                  </div>
                </div>
                <div className="flex whitespace-no-wrap borderb">
                  <img
                    src="/icons/bikini.svg"
                    width="45"
                    alt="Budapest logo"
                    className="inline m-3"
                  />
                  <div>
                    <p className="mt-3 text-secondary text-md">
                      Etiam finibus molestie
                    </p>
                    <p className="text-third text-xs">
                      Curabitur lobortis pellentesque congue
                    </p>
                  </div>
                </div>
                <div className="flex whitespace-no-wrap">
                  <img
                    src="/icons/cabin.svg"
                    width="45"
                    alt="Budapest logo"
                    className="inline m-3"
                  />
                  <div>
                    <p className="mt-3 text-secondary text-md">
                      Duis varius massa
                    </p>
                    <p className="text-third text-xs">
                      Praesent suscipit venenatis justo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="text-md text-white hover:text-primary mr-5">
          Dolorsit
        </a>
        <a href="#" className="text-md text-white hover:text-primary mr-5">
          Consectetur
        </a>
        <LanguageSwitch />
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
          {!user ? (
            <a
              onClick={() => setUser(true)}
              className="text-blue-800 bg-white rounded-full border border-third pt-1 pb-1 pl-3 pr-3 ml-1 hover:bg-primary"
            >
              Login{" "}
              <img
                src="/icons/loginb.svg"
                width="18"
                alt="Pin"
                className="inline ml-4 hover:fill-white"
              />
            </a>
          ) : (
            <div className="user dropdown relative">
              <button className="text-lg text-white hover:text-primary mr-5">
                <img
                  src="/icons/user.png"
                  width="32"
                  alt="Pin"
                  className="inline mr-1"
                />
              </button>
              <div className="dropdown-menu absolute hidden text-gray-700 pt-5 w-40">
                <div
                  className="absolute bg-white h-4 mt-4 rotate-45 rounded top-0 transform w-4"
                  style={{ left: "10px" }}
                ></div>
                <div class="text-secondary bg-white rounded mr-32 -ml-32">
                  <p className="borderb p-3">Dashboard</p>
                  <p className="borderb p-3">My Account</p>
                  <button
                    onClick={() => setUser(false)}
                    className=" p-3"
                    type="button"
                  >
                    Log out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
