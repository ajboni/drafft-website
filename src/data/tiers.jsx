const tiers = [
  {
    name: "Drafft",
    id: "subscription",
    href: "/download-beta",
    price: {
      monthly: {
        price: "$6",
        lemonCheckoutHref: "https://store.drafft.dev/buy/a25407e8-3ac9-4e48-97b2-7834cc8a6cb9?enabled=718868",
      },
      yearly: {
        price: "$3",
        lemonCheckoutHref: "https://store.drafft.dev/buy/2911b6c6-f1f7-4d1d-b0ca-d8916ee47668?enabled=718869",
      },
    },
    description: "Simple Pricing. All of Drafft features",
    features: [
      "All Drafft Features",
      "Lifetime updates",
      "Offline First, Private Data",
      "Optional Multiuser (Bring your own database)",
      "3 personal devices",
    ],
    featured: true,
    cta: "Get Started",
    umamiEvent: "cta-purchase-subscription",
  },
  {
    name: "Pay Once",
    id: "perpetual",
    price: {
      once: {
        price: "$60",
        lemonCheckoutHref: "https://store.drafft.dev/buy/0f9facf6-decf-4dbe-bb39-796e2bfbd183?enabled=718867",
        discountedPrice: "$45",
        discountedNote: "🔥 Limited Time: $15 Off — Save 25%",
        discountedCheckoutHref:
          "https://store.drafft.dev/buy/0f9facf6-decf-4dbe-bb39-796e2bfbd183?enabled=718867&checkout[discount_code]=25OFF",
      },
    },
    description: "Your copy forever",
    features: [
      "All Drafft Features",
      "Lifetime updates",
      "Offline First, Private Data",
      "Optional Multiuser (Bring your own database)",
      "5 personal devices",
    ],
    featured: false,
    cta: "Get Started",
    umamiEvent: "cta-purchase-perpetual",
  },
];

export default tiers;
