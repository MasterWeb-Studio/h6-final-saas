// Bu dosya scaffolder tarafından üretilir — elle düzenleme.
export const designTokens = {
  "colors": {
    "primary": "#6366F1",
    "secondary": "#1F2937",
    "accent": "#F59E0B",
    "background": "#FAFAFA",
    "foreground": "#111827",
    "muted": "#6B7280",
    "border": "#E5E7EB"
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
