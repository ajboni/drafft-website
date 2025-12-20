"use client";
import { Field, Label, Switch } from "@headlessui/react";
import { useEffect, useState, useRef } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useAnimation, useInView, motion } from "framer-motion";
import tiers from "../../data/tiers";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const useLoadScripts = (urls) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let loadedScripts = 0;

    const loadScript = (url) => {
      window.lemonSqueezyAffiliateConfig = {
        store: "drafft",
        debug: true,
      };
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${url}"]`)) {
          resolve(); // If script already exists, resolve immediately
          return;
        }

        const script = document.createElement("script");
        script.src = url;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    Promise.all(urls.map(loadScript))
      .then(() => {
        if (isMounted) {
          setLoaded(true);
          console.log("LS initialized");
        }
      })
      .catch((error) => console.error("Error loading scripts", error));

    return () => {
      isMounted = false;
    };
  }, [urls]);

  return loaded;
};

export default function Example() {
  const [lemonLoaded, setLemonLoaded] = useState(false);
  const [frequency, setFrequency] = useState("yearly");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const pricingControl = useAnimation();
  const scriptsLoaded = useLoadScripts([
    "https://lmsqueezy.com/affiliate.js",
    "https://app.lemonsqueezy.com/js/lemon.js",
  ]);

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
                toolkit
              </motion.span>{" "}
              for game developers.
            </div>
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-pretty text-center text-lg font-medium text-gray-400 sm:text-xl/8">
            Create branching stories, dialogue trees, and game design documents with Drafft.
          </p>

          <div className=" max-w-4xl  mt-6 text-center text-sm text-gray-400 border border-primary-color-desaturated rounded-md p-3 mx-auto">
            Drafft is in active beta! We're continuously improving the experience. <br /> Not sure yet? Try the free
            trial before purchasing—your feedback helps shape the future!
          </div>

          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 md:grid-cols-2 gap-8 md:max-w-4xl">
            {scriptsLoaded &&
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
                      {(() => {
                        // Get price object for current frequency or 'once'
                        const priceObj = tier.price[frequency] || tier.price.once;
                        if (priceObj?.discountedPrice) {
                          return (
                            <div className="relative">
                              {/* Sale badge */}
                              <div className="absolute -top-4 -right-4 bg-primary-color-darkest text-primary-color-lightest/40 font-bold px-3 py-1 rounded-full text-xs transform rotate-12 shadow-lg border border-primary-color-lightest/60">
                                🎅🎄 Christmas Sale !
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
                          );
                        }
                        return <div className="text-6xl font-semibold tracking-tight">{priceObj?.price || "--"}</div>;
                      })()}
                    </div>

                    {tier.price.once ? (
                      <>
                        <div className="text-sm text-gray-400">{`One time payment. Yours forever`}. </div>
                        {!tier.price.once.discountedPrice && <div className="h-6 flex items-center gap-x-4"> </div>}
                      </>
                    ) : (
                      <div className="text-sm text-gray-400">{`Per month billed ${frequency}`}. </div>
                    )}
                  </div>

                  {tier.price.once ? (
                    <> </>
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
                    target="_blank"
                    href={
                      // Use discounted checkout link if available
                      tier.price[frequency]?.discountedCheckoutHref ||
                      tier.price.once?.discountedCheckoutHref ||
                      tier.price[frequency]?.lemonCheckoutHref ||
                      tier.price.once?.lemonCheckoutHref
                    }
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

          {/* Free Trial Section */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-white">Not sure yet? Try Drafft free for 30 days!</h3>
            <p className="mt-2 text-lg text-gray-400">Full access to all features. No credit card required.</p>
            <a
              href="https://store.drafft.dev/buy/43bcb39c-0d63-4dd0-83c7-db02eb3bf4fd?enabled=718870"
              data-umami-event="cta-free-trial"
              className=" mt-4 inline-block rounded-md bg-primary-color-darkest px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-primary-color-darker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-color-darkest"
            >
              Start Free Trial
            </a>
          </div>

          {/* Legacy Version */}
          <div className="mt-8 text-center">
            <div className="text-lg text-gray-400">
              Looking for <span className="font-semibold text-white">Drafft Legacy?</span> (it's free!)
            </div>
            <a
              href="https://baj.itch.io/drafft" // Replace with actual legacy version link
              className="mt-1 inline-block text-primary-color-lightest hover:underline"
              data-umami-event="cta-legacy"
            >
              Download Drafft Legacy
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}
