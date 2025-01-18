import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "../../components/home/HomepageFeatures";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Features | ${siteConfig.title}`}>
      <main className="bg-dark-background-darker-3 py-8 lg:py-16">
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
