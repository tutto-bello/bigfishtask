import React from "react";
import { changeLocale, IntlContextConsumer } from "gatsby-plugin-intl";

const LanguageSwitch = () => {
  return (
    <div className="dropdown inline-block relative">
      <button className="text-lg text-white hover:text-primary mr-5">
        <span className="mr-1">En</span>
      </button>
      <div className="dropdown-menu absolute hidden text-gray-700 pt-5 w-40">
        <div class="text-secondary bg-white rounded ">
          <IntlContextConsumer>
            {({ languages, language: currentLocale }) => (
              <>
                <div className="pt-2 flex flex-col">
                  {languages.map(lang => (
                    // eslint-disable-next-line
                    <a
                      key={lang}
                      className={`borderb p-3 uppercase ${
                        currentLocale === lang ? "font-bold" : "text-secondary"
                      }`}
                      href="#"
                      onClick={() => changeLocale(lang)}
                    >
                      {lang}
                    </a>
                  ))}
                </div>
              </>
            )}
          </IntlContextConsumer>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitch;
