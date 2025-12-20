import React, { useContext } from "react";
import { motion } from "framer-motion";
import AppContext from "../../AppContext";
import DownloadButton from "../../components/download-button";

function GetStartedCTA({ showLearnMore = false, showDescription = true, showTitle = true }) {
  const { osData } = useContext(AppContext);
  const { os, arch, icon } = osData;
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
          content, Dialogue Trees, Scripts, Gdds, and More.
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-10 flex gap-y-4  flex-col md:flex-row items-center justify-center gap-x-6"
      >
        {/* <a href="/download" className="btn-primary flex items-center justify-center gap-x-2 ">
          {icon} <span>Download for <span className="capitalize">{os}</span></span>
        </a> */}
        <DownloadButton longTitle={true}></DownloadButton>
        {showLearnMore && (
          <a
            href="/download"
            className="text-sm sm:text-base font-semibold text-white hover:text-primary-color hover:no-underline"
          >
            All Downloads <span aria-hidden="true">→</span>
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
