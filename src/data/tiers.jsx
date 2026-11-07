const tiers = [
  {
    name: "Drafft",
    id: "perpetual",
    href: "/download",
    price: {
      once: {
        price: "$39.90",
        lemonCheckoutHref: "https://store.drafft.dev/buy/0f9facf6-decf-4dbe-bb39-796e2bfbd183?enabled=718867",
        discountedPrice: "$29.90",
        discountedNote: "Launch sale — $10 off, ends Nov 21",
        discountedCheckoutHref:
          "https://store.drafft.dev/buy/0f9facf6-decf-4dbe-bb39-796e2bfbd183?enabled=718867&checkout[discount_code]=LAUNCH10",
      },
    },
    description: "One payment. Yours forever.",
    features: [
      "All Drafft features",
      "Lifetime updates",
      "Offline-first, private data",
      "Optional multiuser (bring your own database)",
      "Up to 5 personal devices",
      "Commercial use allowed",
    ],
    featured: true,
    cta: "Get Drafft",
    umamiEvent: "cta-purchase-perpetual",
  },
];

export default tiers;
