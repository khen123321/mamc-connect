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
    website:
      process.env.NEXT_PUBLIC_MAMC_WEBSITE_URL ?? "https://mamc.vercel.app/",
    facebook:
      process.env.NEXT_PUBLIC_MAMC_FACEBOOK_URL ??
      "https://www.facebook.com/MadonnaAndChildMC",
    google:
      process.env.NEXT_PUBLIC_MAMC_GOOGLE_URL ??
      "https://search.google.com/local/writereview?placeid=ChIJy_Z9xS7z_zIRYzXdjpQay4Y",
    survey:
      process.env.NEXT_PUBLIC_MAMC_SURVEY_URL ??
      "https://mamc-surveyform.vercel.app/",
    hospitalMap: process.env.NEXT_PUBLIC_MAMC_HOSPITAL_MAP_URL ?? "",
    tapTapTap: "https://www.taptaptap.shop/products",
  },
} as const;

export const formatTelephoneHref = (phoneNumber: string) =>
  `tel:${phoneNumber.replace(/[^+\d]/g, "")}`;
