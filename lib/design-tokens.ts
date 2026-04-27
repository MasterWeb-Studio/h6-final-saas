// Bu dosya scaffolder tarafından üretilir — elle düzenleme.
export const designTokens = {
  "colors": {
    "primary": "#6366F1",
    "secondary": "#0F172A",
    "accent": "#F472B6",
    "background": "#FAFAFA",
    "foreground": "#0F172A",
    "muted": "#64748B",
    "border": "#E2E8F0"
  },
  "typography": {
    "headingFont": "Inter",
    "bodyFont": "Inter",
    "headingWeight": 600,
    "bodyWeight": 400,
    "scale": "normal"
  },
  "layout": {
    "style": "minimal",
    "radius": "lg",
    "density": "normal",
    "containerWidth": "normal"
  },
  "mood": [
    "modern",
    "innovative",
    "clean",
    "approachable",
    "technical"
  ]
} as const;

export type DesignTokensShape = typeof designTokens;
