// Purchases are handled by itch.io, which acts as Merchant of Record:
// it collects payment, handles VAT, and processes refunds.
export const STORE_URL = "https://baj.itch.io/drafft-2";

const tiers = [
  {
    name: "Drafft",
    id: "perpetual",
    href: "/download",
    price: {
      once: {
        price: "$39.90",
        checkoutHref: STORE_URL,
        // Optional sale display. Outside the sale window the card shows `price`.
        discountedPrice: "$29.92",
        discountedNote: "Creator Day & Black Friday on itch.io — 25% off",
        saleStartsAt: "2026-11-27T08:00:00Z",
        saleEndsAt: "2026-12-02T23:59:59Z",
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
