import Layout from "@theme/Layout";
import Hero from "@site/src/components/home/Hero";
import HomePagePricing from "@site/src/components/home/HomePagePricing";
import HomepageFeatures from "@site/src/components/home/HomepageFeatures";
import HomePageFAQ from "../components/home/HomePageFAQ";

export default function Home() {
  return (
    <Layout
      title={`Plan Your Game`}
      description="Centralize your scripts, dialogues, GDDs, and more — plan, design, and collaborate with ease. Own your game data and take control of your development process."
    >
      <Hero />
      <main className="bg-dark-background-darkest-2">
        <HomepageFeatures />
        <HomePagePricing />
        <HomePageFAQ />
      </main>
    </Layout>
  );
}
