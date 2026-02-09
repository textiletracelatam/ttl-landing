import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const home = defineCollection({
  loader: glob({ pattern: "home.md", base: "src/content/home" }),
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
  loader: glob({ pattern: "about.md", base: "src/content/about" }),
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
  loader: glob({ pattern: "**/*.md", base: "src/content/about/values" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    image: z.string(),
    category: z.string(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/about/team" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

export const collections = { home, pages, values, team, blog };
