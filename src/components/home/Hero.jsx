"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import AppBusyImg from "@site/static/img/app-busy.png";
import BgBlur from "../bg/BgBlur";
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" }
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-dark-background-darker-3">
      <div className="relative isolate">
        <BgBlur style={1} />
        <div className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Game Development{" "}
                <span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-color-lightest to-[#ffd9f8]">
                  Simplified
                </span>
              </div>
              <div className="mt-8 text-pretty text-xl font-medium text-gray-400 sm:text-xl/8">
                Centralize your scripts, dialogue trees, GDDs, and more — plan, design, and collaborate with ease. Own your game
                data and take control of your process.
              </div>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="/download" className="btn-primary ">
                  Get Started for Free
                </a>
                <a
                  href="#features"
                  className="text-sm sm:text-base font-semibold text-white hover:text-primary-color hover:no-underline"
                >
                  Learn More <span aria-hidden="true">→</span>
                </a>
              </div>

              <div className="mt-4 text-center">
                <div className="text-sm font-medium text-gray-400">
                  <span className="text-primary-color font-semibold">Tip:</span> <strong>Drafft is free to try</strong> for as
                  long as you want — no limitations or time restrictions.
                </div>
              </div>
            </div>
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
