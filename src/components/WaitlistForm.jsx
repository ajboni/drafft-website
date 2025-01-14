import React from "react";
import PocketBase from "pocketbase";

function WaitlistForm() {
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
      const response = await pb.collection("waitlist").create(data);
      console.log("Data saved:", response);
      alert("Successfully subscribed!");
    } catch (error) {
      console.error("Failed to save data:", error);
      alert("There was an error saving your subscription. Please try again.");
    }
  };

  return (
    <div className="p-8 border rounded-md border-gray-300 bg-dark-background ">
      <div className="text-base mb-2 font-semibold text-gray-300">Join the waitlist.</div>

      <form onSubmit={handleSubmit} className="flex sm:items-center gap-4">
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
          <input id="honeypot" name="honeypot" type="text" tabIndex="-1" autoComplete="off" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn-primary">
          Subscribe
        </button>
      </form>

      <div className="mt-2 text-sm text-gray-300 ">
        By joining the waitlist, you agree to be contacted by us with updates and promotional information.
      </div>
    </div>
  );
}
export default WaitlistForm;
