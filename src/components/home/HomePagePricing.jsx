"use client";
import { useEffect, useRef } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useAnimation, useInView, motion } from "framer-motion";
import tiers, { STORE_URL } from "../../data/tiers";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const pricingControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      pricingControl.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div id="pricing" className="py-16 sm:2 min-h-screen scroll-m-12">
        <motion.div
          variants={{
            visible: { opacity: 1, y: 10 },
            hidden: { opacity: 0, y: 0 },
          }}
          ref={ref}
          animate={pricingControl}
          transition={{ delay: 0.1, duration: 1.5 }}
          initial="hidden"
          className="mx-auto max-w-7xl px-6 lg:px-8"
        >
          <div className="mx-auto max-w-4xl text-center  rounded-md p-8 xl:p-10">
            <h2 className="text-base/7 font-semibold text-primary-color-lightest">Transparent pricing</h2>
            <div className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              The ultimate{" "}
              <motion.span
                initial={{ x: 0, y: 0 }}
                animate={{
                  x: [0, -0.8, 0.8, -0.8, 0.8, 0], // Smaller horizontal movement
                  rotate: [0, -0.3, 0.3, -0.3, 0.3, 0], // Less rotation
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 6, // Speed of shake
                  ease: "easeInOut",
                }}
                className="inline-block font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-color-lightest to-[#ffd9f8]"
              >
                editor
              </motion.span>{" "}
              for game developers.
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-pretty text-center text-lg font-medium text-gray-400 sm:text-xl/8">
            Create branching stories, dialogue trees, and game design documents with Drafft.
          </p>

          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8">
            {tiers.map((tier) => {
              const priceObj = tier.price.once;
              // Sale display follows the itch.io sale window at render time, so
              // the card matches the store without editing prices by hand.
              const now = Date.now();
              const saleActive =
                Boolean(priceObj?.discountedPrice) &&
                (!priceObj.saleStartsAt || new Date(priceObj.saleStartsAt).getTime() <= now) &&
                (!priceObj.saleEndsAt || new Date(priceObj.saleEndsAt).getTime() > now);
              const checkoutHref = priceObj?.checkoutHref || STORE_URL;

              return (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.featured ? "bg-dark-background ring-2 ring-primary-color" : "ring-1 ring-white/10",
                    "rounded-md p-8 xl:p-10",
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
                      {saleActive && priceObj?.discountedPrice ? (
                        <div className="relative">
                          {/* Sale badge */}
                          <div className="absolute -top-4 -right-4 bg-primary-color-darkest text-primary-color-lightest/40 font-bold px-3 py-1 rounded-full text-xs transform rotate-12 shadow-lg border border-primary-color-lightest/60">
                            Sale !
                          </div>
                          <div className="flex flex-col items-start">
                            <span className="text-6xl font-bold text-primary-color-lightest flex items-center">
                              {priceObj.discountedPrice}
                              <span className="ml-2 text-2xl text-gray-300/80 line-through">{priceObj.price}</span>
                            </span>
                            <div className="mt-3 bg-gradient-to-r from-primary-color-darkest to-primary-color-darker p-0.5 rounded-lg w-full">
                              <div className="bg-primary-color-darkest rounded-md px-3 py-1.5 text-sm font-medium text-primary-color-lightest/40 flex items-center justify-center">
                                <span className="animate-pulse">{priceObj.discountedNote}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-6xl font-semibold tracking-tight">{priceObj?.price || "--"}</div>
                      )}
                    </div>
                    <div className="text-sm text-gray-400">One time payment. Yours forever.</div>
                  </div>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={checkoutHref}
                    aria-describedby={tier.id}
                    data-umami-event={`cta-purchase-${tier.price.once ? "perpetual" : "subscription"}`}
                    className={classNames(
                      tier.featured
                        ? "bg-primary-color-darkest text-white shadow-sm hover:bg-primary-color-darker focus-visible:bg-primary-color-darkest hover:no-underline hover:text-white"
                        : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
                      "mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:no-underline hover:text-white",
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
              );
            })}
          </div>

          {/* Trial + Classic: the trial is in-app, Classic is the free look. */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-white">Try it before you buy</h3>
            <p className="mt-2 text-lg text-gray-400">
              Start a 7-day free trial from the app — full features, no credit card. One trial per installation.
            </p>
            <p className="mt-3 text-base text-gray-500">
              Prefer a free look first? Drafft Classic is also free on{" "}
              <a
                href="https://baj.itch.io/drafft"
                target="_blank"
                rel="noreferrer"
                data-umami-event="cta-classic-free"
                className="text-primary-color-lightest hover:underline"
              >
                itch.io
              </a>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
