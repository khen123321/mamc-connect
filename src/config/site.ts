export const siteConfig = {
  hospital: {
    name: "Madonna and Child Medical Center",
    shortName: "MCMC",
    tagline: "Where Compassion meets Excellence",
    location: "Cagayan de Oro City, Philippines",
    address: "J.V. Seriña St., Brgy. Carmen, Cagayan de Oro City, Philippines",
    foundedYear: "1976",
  },
  assets: {
    logoHorizontal: "/brand/mcmc-logo-horizontal.png",
    logoVertical: "/brand/mcmc-logo-vertical.png",
    logoMark: "/brand/mcmc-logo-mark.png",
    heroImage: "/images/mcmc-hero-hospital.jpg",
  },
  contact: {
    infoDeskLabel: "Info Desk",
    infoDeskHours: "Monday-Saturday, 8:00 AM-5:00 PM",
    primaryPhone: "(088) 858-4105",
    secondaryPhone: "(088) 858-3962",
    mobilePhone: "0917 118 9756",
    emergencyAvailability: "24/7 Emergency Care",
  },
  links: {
    mainSite: process.env.NEXT_PUBLIC_MAMC_MAIN_SITE_URL ?? "http://localhost:3000",
    survey: process.env.NEXT_PUBLIC_MAMC_SURVEY_URL ?? "http://localhost:3001",
    queue: process.env.NEXT_PUBLIC_MAMC_QUEUE_URL ?? "",
    maps: process.env.NEXT_PUBLIC_MAMC_MAPS_URL ?? "",
    facebook: process.env.NEXT_PUBLIC_MAMC_FACEBOOK_URL ?? "",
    tapTapTap: "https://www.taptaptap.shop/products",
  },
} as const;

export const formatTelephoneHref = (phoneNumber: string) =>
  `tel:${phoneNumber.replace(/[^+\d]/g, "")}`;
