const tiers = [
  {
    name: "Drafft",
    id: "subscription",
    href: "/download-beta",
    price: {
      monthly: {
        price: "$9",
        lemonCheckoutHref: "https://store.drafft.dev/buy/5b4074fc-f19f-47b8-9e78-0bb58be468a0?enabled=705672",
      },
      yearly: {
        price: "$7.50",
        lemonCheckoutHref: "https://store.drafft.dev/buy/5b179017-631c-44b6-9c55-2e3a74aa5411?enabled=705678",
      },
    },
    description: "Simple Pricing. All of Drafft features",
    features: [
      "All Drafft Features",
      "Lifetime updates",
      "Offline First, Private Data",
      "Optional Multiuser (Bring your own database)",
      "Optional cloud hosted database (coming soon)",
      "3 personal devices",
    ],
    featured: true,
    cta: "Get Started",
    umamiEvent: "cta-purchase-subscription",
  },
  {
    name: "Pay Once",
    id: "perpetual",
    href: "/download-beta",
    price: {
      once: {
        price: "$360",
        lemonCheckoutHref: "https://store.drafft.dev/buy/813957b0-8e0b-4d06-9c02-ac48e645f0cb?enabled=705668",
      },
    },
    description: "Your copy forever",
    features: [
      "All Drafft Features",
      "Lifetime updates",
      "Offline First, Private Data",
      "Optional Multiuser (Bring your own database)",
      "Optional Hosted Database (coming soon)",
      "5 personal devices",
    ],
    featured: false,
    cta: "Get Started",
    umamiEvent: "cta-purchase-perpetual",
  },
];

export default tiers;
