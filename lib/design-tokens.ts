// Bu dosya scaffolder tarafından üretilir — elle düzenleme.
export const designTokens = {
  "colors": {
    "primary": "#6366F1",
    "secondary": "#8B5CF6",
    "accent": "#EC4899",
    "background": "#FAFAFA",
    "foreground": "#0F172A",
    "muted": "#64748B",
    "border": "#E2E8F0"
  },
  "typography": {
    "headingFont": "Inter",
    "bodyFont": "Inter",
    "headingWeight": 700,
    "bodyWeight": 400,
    "scale": "normal"
  },
  "layout": {
    "style": "minimal",
    "radius": "md",
    "density": "normal",
    "containerWidth": "normal"
  },
  "mood": [
    "modern",
    "innovative",
    "approachable",
    "clean",
    "energetic"
  ]
} as const;

export type DesignTokensShape = typeof designTokens;
