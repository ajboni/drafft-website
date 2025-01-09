"use client";

import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Drafft Legacy",
    id: "tier-legacy",
    href: "https://baj.itch.io/drafft",
    price: "14.90",
    description: "First version of Drafft. Fully functional and quite stable. Evaluation mode available for free. "
,    features: [
      "All features available",
      "No startup nag screen",
      "Stable version",
      "Multiplatform",
    ],
    cta: "Get Started for Free"
  },
   {
    name: "Drafft 2 Beta",
    id: "tier-beta",
    href: "/download-beta",
    price: "$0.00",
    description: "Beta version for v2. Not suitable for production work and may break.",
    features: [
      "Not All features available",
      "Multiplatform",
      "Unestable",
      "Feedback welcomed!",
      "Not compatible with v1 projects"
        ],
    mostPopular: true,
    cta: "Join the waitlist"
   }
  // {
  //   name: "Drafft 2 License",
  //   id: "tier-licensed",
  //   href: "/purchase",
  //   price: "$24.90",
  //   description: "Unlock the full Drafft experience with no nag screens and future updates. Evaluation mode available for free.",
  //   features: [
  //     "All features available",
  //     "Multiplatform",
  //     "No startup nag screen",
  //     "Email support",
  //     "Access to future updates",
  //     "Contribute to future features"
  //   ],
  //   mostPopular: true,
  //   cta: "Purchase License"
  // }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div id="pricing" className=" py-24 sm:2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-primary-color-lightest">Pricing</h2>
          <div className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            <span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-color-lightest to-[#ffd9f8]">
              Transparent
            </span>{" "}
            Pricing
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-400 sm:text-xl/8">
          Start free with evaluation mode or upgrade for the full experience. Simple and fair pricing.
        </p>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 md:grid-cols-2 gap-8 md:max-w-4xl">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? "bg-white/5 ring-2 ring-primary-color" : "ring-1 ring-white/10",
                "rounded-md p-8 xl:p-10"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <div id={tier.id} className="text-lg/8 font-semibold text-white">
                  {tier.name}
                </div>
              </div>
              <div className="mt-4 text-sm/6 text-gray-300">{tier.description}</div>
              <div className="mt-6 flex items-baseline  gap-x-1">
                <span className="text-4xl font-semibold tracking-tight text-white">{tier.price}</span>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-primary-color-darkest text-white shadow-sm hover:bg-primary-color-darker focus-visible:bg-primary-color-darkest hover:no-underline hover:text-white"
                    : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
                  "mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:no-underline hover:text-white"
                )}
              >
                {tier.cta}
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center max-w-md mx-auto">
          <a
            href="/download" // Replace with the actual download link
            className="btn-primary-inverted w-full"
          >
            Download Now
          </a>
        </div>
      </div>
    </div>
  );
}
