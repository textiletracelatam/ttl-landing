import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

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

export const collections = { pages, values, team };
