import { useContext, useEffect, useState } from "react";
import BgBlur from "../components/bg/BgBlur";
import HomePagePricing from "../components/home/HomePagePricing";
import Layout from "@theme/Layout";
import AppContext from "../AppContext";
import {
  LuDownload,
  LuChevronDown,
  LuChevronUp,
  LuFileText,
  LuClock,
  LuShield,
  LuMonitor,
  LuServer,
  LuSmartphone,
  LuGlobe,
} from "react-icons/lu";
function Download() {
  const [releaseInfo, setReleaseInfo] = useState({});
  const [showAllVersions, setShowAllVersions] = useState(false);
  const [previousReleases, setPreviousReleases] = useState([]);
  const { osData } = useContext(AppContext);
  const { os, arch, icon } = osData;
  const filteredAssets =
    releaseInfo.assets?.filter((x) => !x.name.includes("blockmap") && !x.name.includes(".yml")) || [];

  const platforms = [];
  for (const asset of filteredAssets) {
    console.log(asset);
    // extract os from asset name
    const osMatch = asset.name.match(/-(win|mac|linux)/);
    const archMatch = asset.name.match(/-(x86_64|arm64|x64)/);
    const versionMatch = asset.name.match(/(\d+\.\d+\.\d+)/);

    const _os = osMatch ? osMatch[1] : "unknown";
    const _arch = archMatch ? archMatch[1] : "xx64";
    const _version = versionMatch ? versionMatch[1] : "latest";

    console.log(`OS: ${_os}, Arch: ${_arch}, Version: ${_version}`);

    platforms.push({
      name: _os,
    });
    // extract arch from asset name
    // extract version from asset name
  }

  useEffect(() => {
    async function getReleaseinfo() {
      try {
      } catch (err) {}
      const response = await fetch(`https://api.github.com/repos/ajboni/drafft-releases/releases`);
      const releases = await response.json();
      setReleaseInfo(releases[0]);
      setPreviousReleases(releases.slice(1));
    }
    getReleaseinfo();
  }, []);

  // TOdo: fallback component to gitgub release page:
  // https://github.com/ajboni/drafft-releases/releases/latest
  const githubFallback = () => {
    return (
      <a
        href="https://github.com/ajboni/drafft-releases/releases/latest"
        className="btn-primary flex items-center justify-center gap-x-2 "
      >
        {icon} <span>Download Drafft</span>
      </a>
    );
  };

  const downloadSection = () => {
    return (
      <div className="w-full max-w-4xl">
        {/* Latest Version Card */}
        <div className="bg-dark-background-darker rounded-lg shadow-xl overflow-hidden border border-gray-700 mb-8">
          <div className="p-6 border-b border-gray-700 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-100">Latest Version</h2>
              <p className="text-sm text-gray-400">Version {releaseInfo.tag}</p>
            </div>
            <span className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/20">
              Latest
            </span>
          </div>

          <div className="p-6">
            {/* Platform Downloads */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {platforms?.map((platform) => (
                <div
                  key={platform.name}
                  className="border border-gray-700 rounded-lg p-4 bg-dark-background-darker hover:bg-gray-750 transition-colors"
                >
                  <div className="flex items-center mb-3">
                    <platform.icon className="w-5 h-5 text-blue-400 mr-2" />
                    <h3 className="text-lg font-medium text-gray-200">{platform.name}</h3>
                  </div>
                  <div className="space-y-2">
                    {platform.versions.map((version) => (
                      <a
                        key={version.type}
                        href={version.url}
                        className="flex items-center justify-between p-2 rounded-md bg-gray-700/50 hover:bg-gray-700 transition-colors"
                      >
                        <span className="text-sm text-gray-300">{version.type}</span>
                        <div className="flex items-center">
                          <span className="text-xs text-gray-400 mr-2">{version.size}</span>
                          <LuDownload className="w-4 h-4 text-blue-400" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Release Notes */}
            <div className="border border-gray-700 rounded-lg p-4 bg-gray-700/30">
              <div className="flex items-center mb-3">
                <LuFileText className="w-5 h-5 text-blue-400 mr-2" />
                <h3 className="text-lg font-medium text-gray-200">Release Notes</h3>
              </div>
              <ul className="space-y-2 text-gray-300 pl-4">
                {releaseInfo.releaseNotes?.map((note, index) => (
                  <li key={index} className="list-disc list-outside text-sm">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Previous Versions */}
        <div className="bg-dark-background-darker rounded-lg shadow-xl overflow-hidden border border-gray-700">
          <div
            className="p-6 border-b border-gray-700 flex justify-between items-center cursor-pointer"
            onClick={() => setShowAllVersions(!showAllVersions)}
          >
            <h2 className="text-xl font-semibold text-gray-100">Previous Versions</h2>
            <button className="text-gray-400 hover:text-gray-200">
              {showAllVersions ? <LuChevronUp className="w-5 h-5" /> : <LuChevronDown className="w-5 h-5" />}
            </button>
          </div>

          {showAllVersions && (
            <div className="p-6 space-y-4">
              {previousReleases.map((version) => (
                <div
                  key={version.version}
                  className="border border-gray-700 rounded-lg p-4 bg-gray-700/30 hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-md font-medium text-gray-200">Version {version.version}</h3>
                      <div className="flex items-center text-sm text-gray-400 mt-1">
                        <LuClock className="w-3.5 h-3.5 mr-1" />
                        <span>{version.date}</span>
                      </div>
                    </div>
                    <a
                      href={version.url}
                      className="flex items-center px-3 py-1.5 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
                    >
                      <LuDownload className="w-4 h-4 text-blue-400 mr-1.5" />
                      <span className="text-sm text-gray-300">Download</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Additional Resources */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="#docs"
            className="bg-dark-background-darker border border-gray-700 rounded-lg p-4 flex items-center hover:bg-gray-750 transition-colors"
          >
            <LuFileText className="w-5 h-5 text-blue-400 mr-3" />
            <span className="text-gray-200">Documentation</span>
          </a>
          <a
            href="#source"
            className="bg-dark-background-darker border border-gray-700 rounded-lg p-4 flex items-center hover:bg-gray-750 transition-colors"
          >
            <LuGlobe className="w-5 h-5 text-blue-400 mr-3" />
            <span className="text-gray-200">Source Code</span>
          </a>
          <a
            href="#license"
            className="bg-dark-background-darker border border-gray-700 rounded-lg p-4 flex items-center hover:bg-gray-750 transition-colors"
          >
            <LuShield className="w-5 h-5 text-blue-400 mr-3" />
            <span className="text-gray-200">License</span>
          </a>
        </div>

        {/* System Requirements */}
        <div className="mt-8 bg-dark-background-darker rounded-lg shadow-lg overflow-hidden border border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100">System Requirements</h2>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h3 className="font-medium text-gray-200 mb-2 flex items-center">
                  <LuMonitor className="w-4 h-4 mr-1.5 text-blue-400" />
                  Windows
                </h3>
                <ul className="space-y-1 text-gray-400">
                  <li>Windows 10/11 (64-bit)</li>
                  <li>4GB RAM minimum</li>
                  <li>200MB disk space</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-200 mb-2 flex items-center">
                  <LuMonitor className="w-4 h-4 mr-1.5 text-blue-400" />
                  macOS
                </h3>
                <ul className="space-y-1 text-gray-400">
                  <li>macOS 12 or later</li>
                  <li>4GB RAM minimum</li>
                  <li>250MB disk space</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-200 mb-2 flex items-center">
                  <LuServer className="w-4 h-4 mr-1.5 text-blue-400" />
                  Linux
                </h3>
                <ul className="space-y-1 text-gray-400">
                  <li>Ubuntu 20.04+ or equivalent</li>
                  <li>4GB RAM minimum</li>
                  <li>200MB disk space</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Layout title={`Download Drafft`} description="Download Drafft for Windows, MacOS and Linux.">
      <div className="bg-dark-background-darkest-2">
        <div className="relative isolate">
          <BgBlur style={1} />
          <div className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <div className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  Download Drafft
                </div>
                <div className="mt-8 text-pretty text-xl font-medium text-gray-400 sm:text-xl/8">
                  Choose your platform and download the latest version of Drafft ({releaseInfo.tag_name})
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  {!releaseInfo.assets ? githubFallback() : downloadSection()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Download;
