export const getDownloadUrl = async ({ os, arch, all = false }) => {
  const owner = "ajboni"; // Change this
  const repo = "drafft-releases"; // Change this
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`);
  const release = await response.json();
  const asset = release.assets?.find((x) => x.name.includes(os) && x.name.includes(arch) && !x.name.includes(".yml"));
  if (all) {
    return {
      ...release,
      assets: release.assets.filter((x) => !x.name.includes(".yml")),
    };
  }
  return {
    url: asset.browser_download_url,
    version: release.name,
    date: release.published_at,
  };
};
