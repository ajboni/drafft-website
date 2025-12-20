import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "../../components/home/HomepageFeatures";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Features`}>
      <main className="bg-dark-background-darker-3 pt-8 lg:pt-16">
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
