import iconStar from "./assets/images/icon-star.svg";
import backgroundMobile from "./assets/images/background-pattern-mobile.svg";
import backgroundDsektop from "./assets/images/background-pattern-desktop.svg";
import Accordion from "./components/Accordion";
import data from "./assets/data/data.json";
import React from "react";

function App() {
  return (
    <main>
      <div className="bg-light-pink flex h-auto min-h-screen items-center justify-center p-6">
        <picture className="absolute top-0">
          <source srcSet={backgroundMobile} media="(max-width: px)" className="w-full" />
          <img
            src={backgroundDsektop}
            alt="background"
          />
        </picture>
        <div className="z-10 flex w-full flex-col rounded-md bg-white p-6 sm:max-w-[420px]">
          <div className="flex items-center justify-start gap-6 pb-6">
            <img src={iconStar} alt="iconStar" className="h-6 w-6" />
            <h1 className="text-dark-purple text-3xl font-bold">FAQs</h1>
          </div>
          <div>
            <div>
              {data.map((item, index) => (
                <React.Fragment key={item.id}>
                  <Accordion title={item.title}>{item.children}</Accordion>
                  {index !== data.length - 1 && (
                    <hr className="my-4 border-t border-gray-200" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
