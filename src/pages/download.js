import BgBlur from "../components/bg/BgBlur";
import HomePagePricing from "../components/home/HomePagePricing";
import Layout from "@theme/Layout";

function Download() {
  const [downloadUrl, setDownloadUrl] = useState("#");
  const [label, setLabel] = useState("Detecting...");

  useEffect(() => {
    async function getLatestVersion() {
      try {
        const response = await fetch(
          "https://github.com/ajboni/drafft-releases/releases/latest/download/latest-linux.yml"
        );
        if (!response.ok) throw new Error("Failed to fetch release info");

        const text = await response.text();
        const versionMatch = text.match(/version:\s*(\S+)/);
        const version = versionMatch ? versionMatch[1] : "unknown";

        const { os, arch } = detectOSArch();
        let downloadLink = "#";

        if (os === "windows") {
          downloadLink = `https://github.com/ajboni/drafft-releases/releases/latest/download/drafft-${version}-win.exe`;
        } else if (os === "macos") {
          downloadLink = `https://github.com/ajboni/drafft-releases/releases/latest/download/drafft-${version}-mac-${arch}.dmg`;
        } else if (os === "linux") {
          downloadLink = `https://github.com/ajboni/drafft-releases/releases/latest/download/drafft-${version}-linux-${arch}.AppImage`;
        }

        setDownloadUrl(downloadLink);
        setLabel(`Download v${version} (${os.toUpperCase()}, ${arch})`);
      } catch (error) {
        console.error(error);
        setLabel("Download (Latest)");
      }
    }

    getLatestVersion();
  }, []);

  function detectOSArch() {
    const platform = navigator.platform.toLowerCase();
    const userAgent = navigator.userAgent.toLowerCase();

    let os = "unknown";
    let arch = "x64";

    if (platform.includes("win")) {
      os = "windows";
    } else if (platform.includes("mac")) {
      os = "macos";
      arch = userAgent.includes("arm") || userAgent.includes("apple") ? "arm64" : "x64";
    } else if (platform.includes("linux")) {
      os = "linux";
      arch = userAgent.includes("aarch64") || userAgent.includes("arm") ? "arm64" : "x64";
    }

    return { os, arch };
  }

  return (
    <Layout>
      <div className="">
        <BgBlur style={2} />
      </div>
    </Layout>
  );
}

export default Download;
