import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const buttonColor = z.enum(["primary", "secondary", "neutral"]).default("primary");

const homeHero = defineCollection({
  loader: glob({ pattern: "hero.md", base: "content/home" }),
  schema: z.object({
    headline: z.string(),
    tagline: z.string().optional(),
    description: z.string().optional(),
    logoImage: z.string(),
    logoImageDark: z.string().optional(),
    logoAlt: z.string().default("Textile Trace Latam"),
    phoneMockupLight: z.string(),
    phoneMockupDark: z.string(),
    phoneMockupAlt: z.string().default("App screenshot"),
    ctaPrimaryText: z.string(),
    ctaPrimaryHref: z.string().default("#"),
    ctaPrimaryColor: buttonColor,
    ctaGhostText: z.string(),
    ctaGhostHref: z.string().default("#"),
    ctaGhostColor: buttonColor.default("neutral"),
  }),
});

const homeTrust = defineCollection({
  loader: glob({ pattern: "trust.md", base: "content/home" }),
  schema: z.object({
    tagline: z.string(),
    heading: z.string(),
    logos: z.array(
      z.object({
        name: z.string(),
        logo: z.string(),
      })
    ),
  }),
});

const homeFeatures = defineCollection({
  loader: glob({ pattern: "features.md", base: "content/home" }),
  schema: z.object({
    tagline: z.string(),
    heading: z.string(),
    features: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
        imageDark: z.string().optional(),
        imageAlt: z.string().optional(),
        phoneMockupLight: z.string().optional(),
        phoneMockupDark: z.string().optional(),
        phoneMockupAlt: z.string().optional(),
        codeSnippet: z
          .object({
            tabs: z.array(z.string()),
            activeTab: z.number(),
            code: z.string(),
          })
          .optional(),
      })
    ),
  }),
});

const homeHowItWorks = defineCollection({
  loader: glob({ pattern: "how-it-works.md", base: "content/home" }),
  schema: z.object({
    tagline: z.string(),
    heading: z.string(),
    steps: z.array(
      z.object({
        step: z.number(),
        title: z.string(),
        description: z.string(),
      })
    ),
  }),
});

const homeMission = defineCollection({
  loader: glob({ pattern: "mission.md", base: "content/home" }),
  schema: z.object({
    tagline: z.string(),
    heading: z.string(),
    description: z.string(),
    image: z.string(),
    imageDark: z.string().optional(),
    imageAlt: z.string().default("Mission image"),
    stats: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    ),
  }),
});

const homeBlog = defineCollection({
  loader: glob({ pattern: "blog.md", base: "content/home" }),
  schema: z.object({
    tagline: z.string(),
    heading: z.string(),
    description: z.string(),
    linkText: z.string(),
    linkHref: z.string().default("/blog"),
    postCount: z.number().default(5),
  }),
});

const homeCta = defineCollection({
  loader: glob({ pattern: "cta.md", base: "content/home" }),
  schema: z.object({
    heading: z.string(),
    description: z.string(),
    primaryText: z.string(),
    primaryHref: z.string().default("#"),
    primaryColor: buttonColor,
    ghostText: z.string(),
    ghostHref: z.string().default("#"),
    ghostColor: buttonColor.default("neutral"),
  }),
});

const nosotrosHero = defineCollection({
  loader: glob({ pattern: "hero.md", base: "content/nosotros" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const nosotrosMission = defineCollection({
  loader: glob({ pattern: "mission.md", base: "content/nosotros" }),
  schema: z.object({
    intro: z.string(),
    body: z.string(),
    stats: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    ),
  }),
});

const nosotrosTeam = defineCollection({
  loader: glob({ pattern: "team.md", base: "content/nosotros" }),
  schema: z.object({
    heading: z.string(),
    subheading: z.string(),
  }),
});

const empleoHero = defineCollection({
  loader: glob({ pattern: "hero.md", base: "content/empleo" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const empleoWhyJoin = defineCollection({
  loader: glob({ pattern: "why-join.md", base: "content/empleo" }),
  schema: z.object({
    tagline: z.string(),
    heading: z.string(),
    reasons: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    ),
  }),
});

const empleoValuesIntro = defineCollection({
  loader: glob({ pattern: "values-intro.md", base: "content/empleo" }),
  schema: z.object({
    tagline: z.string(),
    heading: z.string(),
  }),
});

const empleoCta = defineCollection({
  loader: glob({ pattern: "cta.md", base: "content/empleo" }),
  schema: z.object({
    heading: z.string(),
    description: z.string(),
    primaryText: z.string(),
    primaryHref: z.string().default("mailto:info@textiletrace.lat"),
    primaryColor: buttonColor,
    ghostText: z.string(),
    ghostHref: z.string().default("/nosotros"),
    ghostColor: buttonColor.default("neutral"),
  }),
});

const aliadosHero = defineCollection({
  loader: glob({ pattern: "hero.md", base: "content/aliados-page" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const aliadosForm = defineCollection({
  loader: glob({ pattern: "form.md", base: "content/aliados-page" }),
  schema: z.object({
    heading: z.string(),
    description: z.string(),
    image: z.string(),
    imageDark: z.string().optional(),
    imageAlt: z.string().default("Business collaboration"),
    submitText: z.string(),
    submitColor: buttonColor,
    fields: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        label: z.string(),
        type: z.string(),
        autocomplete: z.string().optional(),
        colSpan: z.number().optional(),
        hint: z.string().optional(),
        required: z.boolean().optional(),
      })
    ),
  }),
});

const aliadosCta = defineCollection({
  loader: glob({ pattern: "cta.md", base: "content/aliados-page" }),
  schema: z.object({
    heading: z.string(),
    description: z.string(),
    primaryText: z.string(),
    primaryHref: z.string().default("mailto:info@textiletrace.lat"),
    primaryColor: buttonColor,
    ghostText: z.string(),
    ghostHref: z.string().default("/nosotros"),
    ghostColor: buttonColor.default("neutral"),
  }),
});

const socials = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "content/socials" }),
  schema: z.object({
    name: z.string(),
    href: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const values = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "content/empleo/values" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    image: z.string(),
    imageDark: z.string().optional(),
    category: z.string(),
    ctaTitle: z.string().optional(),
    ctaMessage: z.string().optional(),
    ctaButtonText: z.string().optional(),
    ctaLink: z.string().optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "content/about/team" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string().optional(),
    image: z.string(),
    imageDark: z.string().optional(),
    order: z.number(),
    links: z
      .array(
        z.object({
          icon: z.string(),
          url: z.string(),
        })
      )
      .optional(),
  }),
});

const aliados = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "content/aliados" }),
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    logoDark: z.string(),
    url: z.string(),
    order: z.number(),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "content/legal" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
  }),
});

const soporte = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "content/soporte" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
  }),
});

const guias = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "content/guias" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    order: z.number(),
  }),
});

const servicios = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "content/servicios" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    monthlyPrice: z.string(),
    annualPrice: z.string(),
    cta: z.string(),
    cardColor: z.enum(["white", "primary", "black"]).default("white"),
    order: z.number(),
    features: z.array(z.string()),
  }),
});

export const collections = { homeHero, homeTrust, homeFeatures, homeHowItWorks, homeMission, homeBlog, homeCta, nosotrosHero, nosotrosMission, nosotrosTeam, empleoHero, empleoWhyJoin, empleoValuesIntro, empleoCta, aliadosHero, aliadosForm, aliadosCta, socials, values, team, blog, aliados, legal, soporte, guias, servicios };
