import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";

export default function MyReactPage() {
  return (
    <Layout title={`Try Drafft Beta.`} description="Try the beta version of Drafft.">
      <Head>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </Head>
      <main className="w-full mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <iframe
            data-tally-src="https://tally.so/embed/mRv5z4?hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="689"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="Drafft 2 Beta will be available soon."
          ></iframe>
        </div>
      </main>
    </Layout>
  );
}
