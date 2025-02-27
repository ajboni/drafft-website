import React from "react";
import { motion } from "framer-motion";

function GetStartedCTA({ showLearnMore = false, showDescription = true, showTitle = true }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {showTitle && (
        <motion.div className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Game Development{" "}
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-color-lightest to-[#ffd9f8]"
          >
            Simplified
          </motion.span>
        </motion.div>
      )}

      {showDescription && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 text-pretty text-xl font-medium text-gray-400 sm:text-xl/8"
        >
          Drafft is a multi-platform, offline-first, privacy-focused game development tool that centralizes your game
          content, Dialogue Trees, Scripts, GDDs, and more.
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-10 flex items-center justify-center gap-x-6"
      >
        <a href="/download" className="btn-primary ">
          Get Started
        </a>
        {showLearnMore && (
          <a
            href="#features"
            className="text-sm sm:text-base font-semibold text-white hover:text-primary-color hover:no-underline"
          >
            Learn More <span aria-hidden="true">→</span>
          </a>
        )}
      </motion.div>

      {/* <div className="mt-4 text-center">
        <div className="text-sm font-medium text-gray-400">
          <span className="text-primary-color font-semibold">Tip:</span> <strong>Drafft v1 is free to try</strong> for
          as long as you want — no limitations or time restrictions.
        </div>
      </div> */}
    </div>
  );
}

export default GetStartedCTA;
