import React from "react";
import { changeLocale, IntlContextConsumer } from "gatsby-plugin-intl";

const LanguageSwitch = () => {
  const names = {
    de: "Deutsch",
    en: "English",
    fr: "Françias",
    hu: "Magyar"
  };
  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => (
        <div className="dropdown inline-block relative">
          <button className="text-lg text-white hover:text-primary mr-5">
            <span className="mr-1 uppercase">{currentLocale}</span>
          </button>
          <div className="dropdown-menu absolute hidden text-gray-700 pt-5 w-40">
            <div
              className="absolute bg-white h-4 mt-4 rotate-45 rounded top-0 transform w-4"
              style={{ left: "10px" }}
            ></div>
            <div class="text-secondary bg-white rounded ">
              <>
                <div className="pt-2 flex flex-col">
                  {languages.map(lang => (
                    // eslint-disable-next-line
                    <a
                      key={lang}
                      className={`borderb p-3 ${
                        currentLocale === lang ? "font-bold" : "text-secondary"
                      }`}
                      href="#"
                      onClick={() => changeLocale(lang)}
                    >
                      {names[lang]}
                    </a>
                  ))}
                </div>
              </>
            </div>
          </div>
        </div>
      )}
    </IntlContextConsumer>
  );
};

export default LanguageSwitch;
