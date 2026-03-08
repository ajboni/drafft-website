import React from "react";
import { motion } from "framer-motion";

const HomePageCentralizedData = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  const beforeItems = [
    ["Dialogue", "text files"],
    ["Items", "spreadsheets"],
    ["Quests", "notes or docs"],
    ["Game systems", "random files"],
    ["Design documents", "wherever fits"],
  ];

  const afterItems = ["Dialogue", "Items", "Quests", "Game systems", "Scripts", "Design documents"];

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <motion.h2 variants={itemVariants} className="text-base/7 font-semibold text-primary-color-lightest">
            Structured game design data
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-2 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            Your game design data should not be scattered
          </motion.p>

          <motion.p variants={itemVariants} className="mt-6 text-lg/8 text-gray-300">
            Drafft is not a game engine. It gives you one structured workspace for the design data behind your game.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delayChildren: 0.15, staggerChildren: 0.1 }}
          className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch"
        >
          {/* Before */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col rounded-md ring-1 ring-white/15 bg-dark-background-darker p-6"
          >
            <span className="inline-flex w-fit items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-400 ring-1 ring-white/10">
              Before
            </span>
            <ul className="mt-5 flex-1 space-y-3 list-none p-0 m-0">
              {beforeItems.map(([data, tool]) => (
                <li key={data} className="flex items-baseline justify-between gap-4 text-sm">
                  <span className="text-gray-300">{data}</span>
                  <span className="text-gray-500 shrink-0">→ {tool}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-red-400/80 border-t border-white/5 pt-4">Spread across different tools</p>
          </motion.div>

          {/* After — gradient border via top-to-bottom wrapper */}
          <motion.div
            variants={itemVariants}
            className="rounded-md bg-gradient-to-b from-primary-color-lightest/50 to-[#ffd9f8]/20 p-[1px]"
          >
            <div className="flex flex-col h-full rounded-md bg-dark-background-darker p-6">
              <span className="inline-flex w-fit items-center rounded-full bg-primary-color-darkest/50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-color-lightest ring-1 ring-primary-color-lightest/30">
                After
              </span>
              <ul className="mt-5 flex-1 space-y-3 list-none p-0 m-0">
                {afterItems.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <span className="size-1.5 rounded-full bg-primary-color-lightest/70 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-primary-color-lightest border-t border-primary-color-lightest/10 pt-4">
                Organized in one Drafft project
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="mx-auto mt-10 max-w-2xl text-center text-base text-gray-400"
        >
          One project. All your design data. No more switching between tools to find what you wrote last week.
        </motion.p>
      </div>
    </section>
  );
};

export default HomePageCentralizedData;
