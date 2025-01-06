import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout title={`Try Drafft Beta.`} description="Try the beta version of Drafft.">
      <main className="w-full mx-auto max-w-7xl px-6 lg:px-8">
      <iframe data-tally-src="https://tally.so/embed/mRv5z4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="1364" frameborder="0" marginheight="0" marginwidth="0" title="Beta will be available soon."></iframe>
      </main>
    </Layout>
  );
}
