// Bu dosya scaffolder tarafından üretilir — elle düzenleme.
export const designTokens = {
  "colors": {
    "primary": "#6366F1",
    "secondary": "#1E1B4B",
    "accent": "#F472B6",
    "background": "#FAFAFB",
    "foreground": "#0F172A",
    "muted": "#64748B",
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
    "radius": "lg",
    "density": "airy",
    "containerWidth": "normal"
  },
  "mood": [
    "modern",
    "innovative",
    "clean",
    "approachable",
    "energetic"
  ]
} as const;

export type DesignTokensShape = typeof designTokens;
