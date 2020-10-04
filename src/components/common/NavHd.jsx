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
        <a href="#" className="text-lg text-white hover:text-primary mr-5">
          Lorem ipsum
        </a>
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
