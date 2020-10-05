import React from "react";

const Header = () => {
  return (
    <header className="hidden lg:block fixed w-full z-10 top-0 bg-transparent">
      <div className="flex-grow flex container justify-end h-full mt-3">
        <a className="mr-auto">
          <img
            src="/icons/bp-logo.svg"
            width="180"
            alt="Budapest logo"
            className="ml-5"
          />
        </a>
        <div className="dropdown inline-block relative">
          <button className="text-lg text-white hover:text-primary mr-5">
            <span className="mr-1">Lorem ipsum</span>
          </button>
          <div className="dropdown-menu absolute hidden text-gray-700 pt-5 -ml-32">
            <div class="flex text-secondary bg-white rounded p-5">
              <div className="w-1/2">
                <div className="flex whitespace-no-wrap borderb pr-16 pb-5">
                  <img
                    src="/icons/capitol.svg"
                    width="45"
                    alt="Budapest logo"
                    className="inline m-3"
                  />
                  <div>
                    <p className="mt-3 text-secondary text-xl">Sed lacinia</p>
                    <p className="text-third">Magna tincidunt venenatis</p>
                  </div>
                </div>
                <div className="flex whitespace-no-wrap borderb pr-16 pb-5 pt-5">
                  <img
                    src="/icons/passport.svg"
                    width="45"
                    alt="Budapest logo"
                    className="inline m-3"
                  />
                  <div>
                    <p className="mt-3 text-secondary text-xl">
                      Praesent consequat
                    </p>
                    <p className="text-third">
                      Felis sit amet vehicula molestie
                    </p>
                  </div>
                </div>
                <div className="flex whitespace-no-wrap pr-16 pb-5 pt-5">
                  <img
                    src="/icons/wheel.svg"
                    width="45"
                    alt="Budapest logo"
                    className="inline m-3"
                  />
                  <div>
                    <p className="mt-3 text-secondary text-xl">Sed lacinia</p>
                    <p className="text-third">Magna tincidunt venenatis</p>
                  </div>
                </div>
              </div>
              <div className="ml-10 w-1/2 mr-10 ">
                <div className="flex whitespace-no-wrap borderb pr-16 pb-5 mt-1">
                  <img
                    src="/icons/motorcycle.svg"
                    width="45"
                    alt="Budapest logo"
                    className="inline m-3"
                  />
                  <div>
                    <p className="mt-3 text-secondary text-xl">
                      Praesent venenatis?
                    </p>
                    <p className="text-third">
                      Quis enim faucibus nisi convallis
                    </p>
                  </div>
                </div>
                <div className="flex whitespace-no-wrap borderb pr-16 pb-5 pt-5">
                  <img
                    src="/icons/bikini.svg"
                    width="45"
                    alt="Budapest logo"
                    className="inline m-3"
                  />
                  <div>
                    <p className="mt-3 text-secondary text-xl">
                      Etiam finibus molestie
                    </p>
                    <p className="text-third">
                      Curabitur lobortis pellentesque congue
                    </p>
                  </div>
                </div>
                <div className="flex whitespace-no-wrap pr-16 pb-5 pt-5">
                  <img
                    src="/icons/cabin.svg"
                    width="45"
                    alt="Budapest logo"
                    className="inline m-3"
                  />
                  <div>
                    <p className="mt-3 text-secondary text-xl">
                      Duis varius massa
                    </p>
                    <p className="text-third">
                      Praesent suscipit venenatis justo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="text-lg text-white hover:text-primary mr-5">
          Dolorsit
        </a>
        <a href="#" className="text-lg text-white hover:text-primary mr-5">
          Consectetur
        </a>
        <a href="#" className="text-lg text-white hover:text-primary mr-5">
          En
        </a>

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
      </div>
    </header>
  );
};

export default Header;
