import Layout from "@theme/Layout";
import React from "react";
import WaitlistForm from "../components/WaitlistForm";
export default function MyReactPage() {
  return (
    <Layout title={`Try Drafft Beta.`} description="Try the beta version of Drafft.">
      <main className="w-full mx-auto max-w-7xl px-6 lg:px-8 markdown">
        <div className="p-8 max-w-3xl mx-auto ">
          <h1>Try Drafft 2.0 Beta</h1>
          <p>
            Don't miss out on the opportunity to be a part of the Drafft 2.0 launch. Sign up now to secure your spot and
            stay informed about release dates, exclusive content, and more.
          </p>

          <h2 className="">Join the Waitlist</h2>

          <p>
            By joining the waitlist, you'll gain exclusive early access to the beta version of Drafft 2.0, allowing you
            to explore and shape the next evolution of collaborative game development before its official release.
          </p>

          <section className="mb-8 ">
            <WaitlistForm />
          </section>

          <h2>Perks for Drafft 2.0 Beta Testers</h2>

          <ul className="">
            <li>
              <strong>Exclusive Early Access</strong>: Be among the first to explore the new features of Drafft 2.0 and
              get a head start in integrating it into your workflow.
            </li>
            <li>
              <strong>Discounted Subscription or Licensing</strong>: Receive a special discount on Drafft 2.0's full
              version upon its official release as a thank-you for your feedback and participation, or a free upgrade if
              you already bought v1.
            </li>
            <li>
              <strong>Feature Input</strong>: Provide feedback that directly influences the final features and
              functionalities of Drafft 2.0. Shape the tools you’ll be using!
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}
