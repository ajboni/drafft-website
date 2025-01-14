import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import PocketBase from "pocketbase";
export default function MyReactPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  const pb = new PocketBase("https://pb.drafft.dev");

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const honeypot = formData.get("honeypot");

    if (honeypot) {
      // If honeypot is filled, it's a bot
      alert("Bot detected!");
      return;
    }

    // Prepare data for NocoDB
    const data = {
      email: email,
      comments: "", // Add any default or optional values
    };

    try {
      const response = await pb.collection('waitlist').create(data);
      console.log("Data saved:", response);
      alert("Successfully subscribed!");
    } catch (error) {
      console.error("Failed to save data:", error);
      alert("There was an error saving your subscription. Please try again.");
    }
  };

  return (
    <Layout
      title={`Try Drafft Beta.`}
      description="Try the beta version of Drafft."
    >
      <main className="w-full mx-auto max-w-7xl px-6 lg:px-8">
        <div className="p-8 max-w-3xl mx-auto prose-dark xl:prose-lg">
          <h1>Try Drafft 2.0 Beta</h1>
          <p>
            Don't miss out on the opportunity to be a part of the Drafft 2.0
            launch. Sign up now to secure your spot and stay informed about
            release dates, exclusive content, and more.
          </p>

          <h2>Join the Waitlist</h2>

          <p>
            By joining the waitlist, you'll gain exclusive early access to the
            beta version of Drafft 2.0, allowing you to explore and shape the
            next evolution of collaborative game development before its official
            release.
          </p>

          <h3>Perks for Drafft 2.0 Beta Testers</h3>

          <ul>
            <li>
              <strong>Exclusive Early Access</strong>: Be among the first to
              explore the new features of Drafft 2.0 and get a head start in
              integrating it into your workflow.
            </li>
            <li>
              <strong>Discounted Subscription or Licensing</strong>: Receive a
              special discount on Drafft 2.0's full version upon its official
              release as a thank-you for your feedback and participation, or a
              free upgrade if you already bought v1.
            </li>
            <li>
              <strong>Feature Input</strong>: Provide feedback that directly
              influences the final features and functionalities of Drafft 2.0.
              Shape the tools you’ll be using!
            </li>
          </ul>

          <div className="p-8 border rounded-md border-gray-300 bg-dark-background-darker-2">
            <div className="text-base mb-2 font-semibold text-gray-300">
              Join the waitlist.
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex sm:items-center gap-4"
            >
              {/* Email Input */}
              <div className="w-full sm:max-w-md flex">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  aria-label="Email"
                  className="block w-full rounded-md px-3 py-1.5 text-base placeholder:text-gray-400 ring-0 outline-none sm:text-sm/6"
                  required
                />
              </div>

              {/* Honeypot Input (Hidden) */}
              <div style={{ display: "none" }}>
                <label htmlFor="honeypot">Do not fill this field</label>
                <input
                  id="honeypot"
                  name="honeypot"
                  type="text"
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>

            <p className="mt-2 text-sm text-gray-300 ">
              By joining the waitlist, you agree to be contacted by us with
              updates and promotional information.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
