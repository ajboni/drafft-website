import FAQ from "!!raw-loader!@site/shared/FAQ.mdx";
import { Fragment, useEffect, useRef } from "react";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon, MinusIcon, PlusIcon, PlusSmallIcon } from "@heroicons/react/20/solid";
import Markdown from "react-markdown";

function HomePageFAQ() {
  const regex = /## (.*?)\n([\s\S]*?)(?=\n##|\n*$)/g;
  const faqs = [];

  let match;
  while ((match = regex.exec(FAQ)) !== null) {
    faqs.push({ question: match[1].trim(), answer: match[2].trim().replace("---", "") });
  }
  //   faqs.splice(0, 2);
  return (
    <div className="p-24" id="faqs">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-pretty text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-balance">
            FAQs
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            Have more questions? Feel free to <a href="mailto:support@drafft.dev">reach out!</a>
          </p>
        </div>

        <dl className="mt-16 divide-y divide-white/5 w-full ">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="w-full max-w-4xl mx-auto">
              {({ open }) => (
                <>
                  <DisclosureButton className="w-full  text-lg font-semibold text-zinc-100 p-3 text-left  bg-inherit group flex justify-between items-center">
                    {faq.question}

                    <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <div className="overflow-hidden text-zinc-300 ">
                    <AnimatePresence>
                      {open && (
                        <DisclosurePanel static as={Fragment}>
                          <motion.div
                            initial={{ opacity: 0, y: -24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -24 }}
                            transition={{ duration: 0.2, ease: easeOut }}
                            className="origin-top py-4 px-2"
                          >
                            <Markdown>{faq.answer}</Markdown>
                          </motion.div>
                        </DisclosurePanel>
                      )}
                    </AnimatePresence>
                  </div>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default HomePageFAQ;
