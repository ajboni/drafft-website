import BgBlur from "../components/bg/BgBlur";
import HomePagePricing from "../components/home/HomePagePricing";
import Layout from "@theme/Layout";

function Pricing() {
  return (
    <Layout>
      <div className="">
        <HomePagePricing />
        <BgBlur style={2} />
      </div>
    </Layout>
  );
}

export default Pricing;
