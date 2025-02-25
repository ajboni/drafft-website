import React from "react";

function GetStartedCTA({ showLearnMore = false, showDescription = true, showTitle = true }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {showTitle && (
        <div className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          Game Development{" "}
          <span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-color-lightest to-[#ffd9f8]">
            Simplified
          </span>
        </div>
      )}

      {showDescription && (
        <div className="mt-8 text-pretty text-xl font-medium text-gray-400 sm:text-xl/8">
          Drafft is a multi-platform, offline-first, privacy-focused game development tool that centralizes your game
          content, Dialogue Trees, Scripts, GDDs, and more.
        </div>
      )}

      <div className="mt-10 flex items-center justify-center gap-x-6">
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
      </div>

      <div className="mt-4 text-center">
        <div className="text-sm font-medium text-gray-400">
          <span className="text-primary-color font-semibold">Tip:</span> <strong>Drafft v1 is free to try</strong> for
          as long as you want — no limitations or time restrictions.
        </div>
      </div>
    </div>
  );
}

export default GetStartedCTA;
