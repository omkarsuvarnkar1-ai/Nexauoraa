/**
 * Nexaouraa Consultancy - Tailwind CSS Configuration
 * Derived from Executive Precision Consulting Design System (DESIGN.md)
 */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#000f1d",
        "primary-container": "#0f2537",
        "on-primary": "#ffffff",
        "on-primary-container": "#788da3",
        "inverse-primary": "#b3c9e0",
        "primary-fixed": "#cfe5fd",
        "primary-fixed-dim": "#b3c9e0",
        "on-primary-fixed": "#061d2f",
        "on-primary-fixed-variant": "#34495c",

        "secondary": "#126c3a",
        "secondary-container": "#9ef2b3",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#19713e",
        "secondary-fixed": "#a1f5b5",
        "secondary-fixed-dim": "#85d89b",
        "on-secondary-fixed": "#00210d",
        "on-secondary-fixed-variant": "#005229",

        "tertiary": "#140c00",
        "tertiary-container": "#2f2100",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#ad840c",
        "tertiary-fixed": "#ffdf9a",
        "tertiary-fixed-dim": "#efc04b",
        "on-tertiary-fixed": "#251a00",
        "on-tertiary-fixed-variant": "#5a4300",

        "surface": "#f9f9ff",
        "surface-bright": "#f9f9ff",
        "surface-dim": "#cfdaf2",
        "surface-variant": "#d8e3fb",
        "surface-tint": "#4c6075",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f0f3ff",
        "surface-container": "#e7eeff",
        "surface-container-high": "#dee8ff",
        "surface-container-highest": "#d8e3fb",

        "background": "#f9f9ff",
        "on-background": "#111c2d",
        "on-surface": "#111c2d",
        "on-surface-variant": "#43474c",
        "inverse-surface": "#263143",
        "inverse-on-surface": "#ecf1ff",

        "outline": "#74777d",
        "outline-variant": "#c3c7cd",

        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",

        "gold-accent": "#c59a27",
        "gold-bright": "#e5b23a",
        "gold-warm": "#d4a017"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "sm": "0.125rem",
        "md": "0.25rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "2xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "1.5rem",
        "gutter-mobile": "1rem",
        "margin": "3rem",
        "margin-mobile": "1.25rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem"
      },
      fontFamily: {
        "brand": ["Montserrat", "sans-serif"],
        "display-lg": ["Montserrat", "sans-serif"],
        "display-lg-mobile": ["Montserrat", "sans-serif"],
        "headline-xl": ["Montserrat", "sans-serif"],
        "headline-xl-mobile": ["Montserrat", "sans-serif"],
        "headline-lg": ["Montserrat", "sans-serif"],
        "headline-md": ["Montserrat", "sans-serif"],
        "headline-sm": ["Montserrat", "sans-serif"],
        "title-md": ["Montserrat", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "label-lg": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "label-technical": ["Inter", "sans-serif"]
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "display-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "800" }],
        "headline-xl": ["36px", { lineHeight: "44px", letterSpacing: "-0.015em", fontWeight: "700" }],
        "headline-xl-mobile": ["26px", { lineHeight: "34px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-lg": ["28px", { lineHeight: "36px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-md": ["22px", { lineHeight: "30px", letterSpacing: "-0.005em", fontWeight: "600" }],
        "headline-sm": ["18px", { lineHeight: "26px", fontWeight: "600" }],
        "title-md": ["16px", { lineHeight: "24px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["15px", { lineHeight: "24px", fontWeight: "400" }],
        "body-sm": ["13px", { lineHeight: "20px", fontWeight: "400" }],
        "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "600" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "600" }],
        "label-technical": ["11px", { lineHeight: "14px", letterSpacing: "0.08em", fontWeight: "700" }]
      }
    }
  }
};

