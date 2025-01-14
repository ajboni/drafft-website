import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Hero from "@site/src/components/home/Hero";
import HomePagePricing from "@site/src/components/home/HomePagePricing";
import HomepageFeatures from "@site/src/components/home/HomepageFeatures";
import Head from "@docusaurus/Head";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    
    <Layout
      title={`Plan Your Game`}
      description="Centralize your scripts, dialogues, GDDs, and more — plan, design, and collaborate with ease. Own your game data and take control of your development process."
    >
      <Head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="9b4b4462-208a-4160-bdc3-526c4e320c9c"></script>
      </Head>
      <Hero />
      <main className="bg-dark-background-darker-3">
        <HomepageFeatures />
        <HomePagePricing />
      </main>
    </Layout>
  );
}
