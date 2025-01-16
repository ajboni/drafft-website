import { CircleStackIcon, Cog6ToothIcon, CubeTransparentIcon, EllipsisHorizontalCircleIcon, SparklesIcon } from "@heroicons/react/20/solid";
import React, { createContext, useContext, useState } from "react";

// Create context
const SpinnerContext = createContext({
  isLoading: false,
  showSpinner: () => {},
  hideSpinner: () => {},
});

// Provider component
export const SpinnerProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showSpinner = () => setIsLoading(true);
  const hideSpinner = () => setIsLoading(false);

  return (
    <SpinnerContext.Provider value={{ isLoading, showSpinner, hideSpinner }}>
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 animate-spin opacity-50">
            <CubeTransparentIcon/>
            </div>
          </div>
        </div>
      )}
      {children}
    </SpinnerContext.Provider>
  );
};

// Hook for components to use
export const useSpinner = () => {
  const context = useContext(SpinnerContext);
  if (!context) {
    throw new Error("useSpinner must be used within a SpinnerProvider");
  }
  return context;
};
