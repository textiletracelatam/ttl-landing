import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const home = defineCollection({
  loader: glob({ pattern: "home.md", base: "src/content/home" }),
  schema: z.object({
    heroTagline: z.string(),
    heroHeadline: z.string(),
    heroDescription: z.string(),
    ctaPrimary: z.string(),
    ctaGhost: z.string(),
    trustLogos: z.array(
      z.object({
        name: z.string(),
        logo: z.string(),
      })
    ),
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

const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/about/team" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

export const collections = { home, pages, values, team };
