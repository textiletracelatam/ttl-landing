export const appConfig = {
  name: "Textile Trace Latam",
  email: "contacto@textiletracelatam.com",
  location: "Bogotá, Colombia",
  logo: "https://d1yei2z3i6k35z.cloudfront.net/15861133/69715e5480fa7_logonegrosinfondo.png",
  ttlApiHost: import.meta.env.PUBLIC_TTL_API_HOST || "http://localhost:9090", // env ready
  footerLinks: [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Blog", href: "/blog" },
    { name: "Empleo", href: "/empleo" },
    { name: "Aliados", href: "/aliados" },
  ],
};
