import React from "react";
import { SpinnerProvider } from "../hooks/useSpinner";

// Default implementation, that you can customize
export default function Root({ children }) {
  return <SpinnerProvider>
    {children}</SpinnerProvider>;
}
