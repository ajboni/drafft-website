import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Hero from "@site/src/components/home/Hero";
import HomePagePricing from "@site/src/components/home/HomePagePricing";
import HomepageFeatures from "@site/src/components/home/HomepageFeatures";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Centralize your scripts, dialogues, GDDs, and more — plan, design, and collaborate with ease. Own your game data and take control of your development process."
    >
      <Hero />
      <main className="bg-dark-background-darker-3">
        <HomepageFeatures />
        <HomePagePricing />
      </main>
    </Layout>
  );
}
