"use client";

import AppBusyImg from "@site/static/img/app-busy-2.webp";
import { useState } from "react";
import BgBlur from "../bg/BgBlur";
import GetStartedCTA from "../cta/GetStartedCTA";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-dark-background-darkest-2">
      <div className="relative isolate">
        <BgBlur style={1} />
        <div className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <GetStartedCTA showLearnMore={true} />

            <img
              alt="App screenshot"
              src={AppBusyImg}
              width={2432}
              className="mt-12 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-20"
            />
          </div>
        </div>
        <BgBlur style={2} />
      </div>
    </div>
  );
}
