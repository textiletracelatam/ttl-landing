import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const home = defineCollection({
  loader: glob({ pattern: "home.md", base: "content/home" }),
  schema: z.object({
    heroHeadline: z.string(),
    heroTagline: z.string(),
    heroDescription: z.string(),
    heroImage: z.string().optional(),
    ctaPrimary: z.string(),
    ctaGhost: z.string(),
    trustTagline: z.string().optional(),
    trustHeading: z.string().optional(),
    trustLogos: z.array(
      z.object({
        name: z.string(),
        logo: z.string(),
      })
    ),
    featuresTagline: z.string().optional(),
    featuresHeading: z.string(),
    featuresDescription: z.string(),
    features: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
    howItWorksHeading: z.string(),
    howItWorksSteps: z.array(
      z.object({
        step: z.number(),
        title: z.string(),
        description: z.string(),
      })
    ),
    aboutTagline: z.string().optional(),
    aboutHeading: z.string().optional(),
    aboutDescription: z.string().optional(),
    aboutImage: z.string().optional(),
    statsHeading: z.string(),
    stats: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    ),
    ctaHeading: z.string(),
    ctaDescription: z.string(),
    ctaPrimaryText: z.string(),
    ctaGhostText: z.string(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "about.md", base: "content/about" }),
  schema: z.object({
    heroTitle: z.string(),
    heroDescription: z.string(),
    heroImages: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
      })
    ),
    missionTitle: z.string(),
    missionIntro: z.string(),
    missionBody: z.string(),
    stats: z.array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    ),
    teamImage: z.object({
      src: z.string(),
      alt: z.string(),
      credit: z.string().optional(),
    }),
    valuesHeading: z.string(),
    valuesSubheading: z.string(),
    teamHeading: z.string(),
    teamSubheading: z.string(),
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
    category: z.string(),
    ctaTitle: z.string().optional(),
    ctaMessage: z.string().optional(),
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
    order: z.number(),
    links: z
      .array(
        z.object({
          icon: z.enum(["linkedin", "twitter", "github", "instagram", "website"]),
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
    featured: z.boolean().optional(),
    order: z.number(),
    features: z.array(z.string()),
  }),
});

export const collections = { home, pages, values, team, blog, aliados, legal, soporte, guias, servicios };
