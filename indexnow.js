const https = require("https");
const { parseStringPromise } = require("xml2js");

const key = "183a3e2c6bfb4b94be5722e24e1ae852";
const endpoint = "https://www.bing.com/indexnow";

async function main() {
  const sitemapUrls = await fetchSitemapUrls("https://drafft.dev/sitemap.xml");
  const response = await indexnow(sitemapUrls);
  console.log(response);
}

main();

async function indexnow(urlList) {
  const body = {
    host: "https://drafft.dev",
    key: key,
    urlList: urlList,
  };

  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  return response;
}

/**
 * Fetches sitemap.xml and returns an array of URLs.
 * @param {string} sitemapUrl - The URL of the sitemap.xml
 * @returns {Promise<string[]>}
 */
async function fetchSitemapUrls(sitemapUrl) {
  return new Promise((resolve, reject) => {
    https
      .get(sitemapUrl, (res) => {
        let data = "";

        if (res.statusCode !== 200) {
          reject(new Error(`Failed to fetch sitemap: Status ${res.statusCode}`));
          return;
        }

        res.on("data", (chunk) => (data += chunk));
        res.on("end", async () => {
          try {
            const parsed = await parseStringPromise(data);
            const urls = parsed.urlset.url.map((entry) => entry.loc[0]);
            resolve(urls);
          } catch (err) {
            reject(new Error(`Failed to parse XML: ${err.message}`));
          }
        });
      })
      .on("error", (err) => {
        reject(new Error(`Request failed: ${err.message}`));
      });
  });
}
