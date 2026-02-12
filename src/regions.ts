/** Region groups that expand to multiple ISO 3166-1 alpha-2 codes. */
const regionGroups: Record<string, string[]> = {
  EU: [
    "at", "be", "bg", "hr", "cy", "cz", "dk", "ee", "fi", "fr",
    "de", "gr", "hu", "ie", "it", "lv", "lt", "lu", "mt", "nl",
    "pl", "pt", "ro", "sk", "si", "es", "se",
  ],
};

/** Display labels for region groups and individual codes. */
const regionLabels: Record<string, string> = {
  EU: "Unión Europea",
  CO: "Colombia",
};

/**
 * Resolve an array of region identifiers (which may include group names
 * like "EU") into a flat array of lowercase ISO country codes.
 */
export function resolveRegions(regions: string[]): string[] {
  return regions.flatMap((r) => {
    const upper = r.toUpperCase();
    return regionGroups[upper] ?? [r.toLowerCase()];
  });
}

/**
 * Return human-readable labels for the raw region array from frontmatter.
 * Groups like "EU" stay as one label rather than expanding to 27 countries.
 */
export function regionDisplayLabels(regions: string[]): string[] {
  return regions.map((r) => regionLabels[r.toUpperCase()] ?? r.toUpperCase());
}
