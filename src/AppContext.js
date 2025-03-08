import React, { createContext, useEffect, useState } from "react";
import { getIcon } from "./lib/utils";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [osData, setOsData] = useState({
    os: "unknown",
    arch: "x64",
    icon: "   ",
  });

  useEffect(() => {
    const { os, arch } = detectOSArch();
    const icon = getIcon(os);
    setOsData({ os, arch, icon });
  }, []);

  function detectOSArch() {
    const platform = navigator.platform.toLowerCase();
    const userAgent = navigator.userAgent.toLowerCase();

    let os = "unknown";
    let arch = "x86_64";

    if (platform.includes("win")) {
      os = "windows";
    } else if (platform.includes("mac")) {
      os = "macos";
      arch = userAgent.includes("arm") || userAgent.includes("apple") ? "arm64" : "x86_64";
    } else if (platform.includes("linux")) {
      os = "linux";
      arch = userAgent.includes("aarch64") || userAgent.includes("arm") ? "arm64" : "x86_64";
    }

    return { os, arch };
  }

  return <AppContext.Provider value={{ osData, setOsData }}>{children}</AppContext.Provider>;
};

export default AppContext;
