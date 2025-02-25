"use client";
import { Field, Label, Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Drafft",
    id: "subscription",
    href: "/download-beta",
    price: { monthly: "$9", yearly: "$7.50" },
    description: "Simple Pricing. All of Drafft features",
    features: [
      "All Drafft Features",
      "Lifetime updates",
      "Offline First, Private Data",
      "Optional Multiuser (Bring your own database)",
      "Optional cloud hosted database (coming soon)",
      "3 personal devices",
    ],
    featured: true,
    cta: "Get Started",
    umamiEvent: "cta-purchase-subscription",
  },
  {
    name: "Pay Once",
    id: "perpetual",
    href: "/download-beta",
    price: { once: "$175" },
    description: "Your copy forever & one year of updates",
    features: [
      "All Drafft Features",
      "One year of updates updates",
      "Offline First, Private Data",
      "Optional Multiuser (Bring your own database)",
      "Optional Hosted Database (coming soon)",
      "3 personal devices",
      "Free forever for v1 license holders until April 2025",
    ],
    featured: false,
    cta: "Get Started",
    umamiEvent: "cta-purchase-perpetual",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [lemonLoaded, setLemonLoaded] = useState(false);
  const [frequency, setFrequency] = useState("yearly");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.lemonsqueezy.com/js/lemon.js";
    script.defer = true;
    script.onload = () => {
      setLemonLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div id="pricing" className="py-24 sm:2 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base/7 font-semibold text-primary-color-lightest">Transparent pricing</h2>
            <div className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              The ultimate{" "}
              <span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-color-lightest to-[#ffd9f8]">
                toolkit
              </span>{" "}
              for game developers.
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-400 sm:text-xl/8">
            Create branching stories, dialogue trees, and game design documents with Drafft.
          </p>

          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 md:grid-cols-2 gap-8 md:max-w-4xl">
            {lemonLoaded &&
              tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.featured ? "bg-dark-background ring-2 ring-primary-color" : "ring-1 ring-white/10",
                    "rounded-md p-8 xl:p-10"
                  )}
                >
                  <div className="flex items-center justify-between gap-x-4">
                    <div id={tier.id} className="text-3xl font-semibold text-white">
                      {tier.name}
                    </div>
                  </div>
                  <div className="mt-4 text-base text-gray-300">{tier.description}</div>

                  <div className="flex flex-col gap-4 my-6">
                    <div className="flex gap-6 items-end">
                      <div className={classNames("text-6xl font-semibold tracking-tight ")}>
                        {tier.price[frequency] || tier.price.once}
                      </div>

                      {!tier.price.once && (
                        <div className="text flex flex-col leading-tight">
                          <div>USD</div>
                          <div className={tier.featured ? "text-gray-500" : "text-gray-500"}>{`/ month`}</div>
                        </div>
                      )}
                    </div>
                    {tier.price.once ? (
                      <div className="text-sm text-gray-400">{`One time payment. Inlcudes one year of updates`}. </div>
                    ) : (
                      <div className="text-sm text-gray-400">{`Per month billed ${frequency}`}. </div>
                    )}
                  </div>

                  {tier.price.once ? (
                    <div className="h-6 flex items-center gap-x-4"> </div>
                  ) : (
                    <Field className="flex items-center">
                      <Switch
                        checked={frequency === "yearly"}
                        onChange={() => setFrequency(frequency === "yearly" ? "monthly" : "yearly")}
                        className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary-color-darker-desaturated transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-color-darker focus:ring-offset-2 data-[checked]:bg-primary-color-darker"
                      >
                        <span
                          aria-hidden="true"
                          className="pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                        />
                      </Switch>
                      <Label as="span" className="ml-3 text-sm flex gap-2">
                        <span className="font-medium ">Billed yearly </span>
                        {/* <span className="text-gray-500">(Save 10%)</span> */}
                      </Label>
                    </Field>
                  )}
                  <div className="mt-6 flex items-baseline gap-x-1"></div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    data-umami-event={`cta-purchase-${tier.price.once ? "perpetual" : "subscription-" + frequency}`}
                    className={classNames(
                      tier.featured
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

          {/* <div className="mt-8 flex justify-center max-w-md mx-auto">
          <a
            href="/download" // Replace with the actual download link
            className="btn-primary-inverted w-full"
          >
            Download Now
          </a>
        </div> */}
        </div>
      </div>
    </>
  );
}
