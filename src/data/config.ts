const config = {
  title: "Romela Grace M. Benig | Computer Engineer",
  description: {
    long: "Explore the portfolio of Romela, a computer engineer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Romela, a computer engineer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Romela",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Romela Grace M. Benig",
  email: "romelagracebenig@gmail.com",
  site: "https://romelagracebenig.site",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/GraceBenig53973",
    linkedin: "https://www.linkedin.com/in/romela-grace-benig-468772239/",
    instagram: "https://www.instagram.com/roms_ellah/",
    facebook: "https://www.facebook.com/romela.benig23",
    github: "https://github.com/RomelaGrace",
  },
};
export { config };
