import React from "react";
import { SpinnerProvider } from "../hooks/useSpinner";
import { AppProvider } from "../AppContext";

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <AppProvider>
      <SpinnerProvider>{children}</SpinnerProvider>;
    </AppProvider>
  );
}
