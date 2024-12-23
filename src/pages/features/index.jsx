import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Features | ${siteConfig.title}`}>
      <main className="bg-dark-background-darker-3">Featorues</main>
    </Layout>
  );
}
