import { useContext } from "react";
import AppContext from "../AppContext";
import { getDownloadUrl } from "../lib/utils";

export default function DownloadButton({ longTitle = false }) {
  const { osData } = useContext(AppContext);
  const { os, arch, icon } = osData;

  const downloadLatestVersion = async () => {
    try {
      console.log(os, arch);
      const release = await getDownloadUrl({ os, arch });
      console.log(release.url);
      window.open(release.url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      data-umami-event="download"
      onClick={() => downloadLatestVersion()}
      className="gap-1 flex items-center justify-center px-4 h-10 font-semibold text-white bg-primary rounded-md bg-primary-color-darkest hover:bg-primary-color-darker cursor-pointer hover:no-underline hover:text-white"
    >
      {icon}
      Download{" "}
      {longTitle && (
        <>
          for<span className="capitalize">{os}</span>
        </>
      )}
    </div>
  );
}
