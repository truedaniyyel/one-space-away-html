// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { SITE } from "./src/consts";

import sitemap from "@astrojs/sitemap";
import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  site: SITE.CANONICAL_URL,
  output: "static",

  fonts: [
    {
      provider: fontProviders.local(),
      name: "DMSans",
      cssVariable: "--font-dm-sans",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/DMSans.woff2"],
            weight: "normal",
            style: "normal",
          },
        ],
      },
    },
  ],

  integrations: [sitemap(), favicons()],

  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "object-src 'self'",
        "connect-src 'self'",
        "base-uri 'self'",
        "img-src 'self' https://ik.imagekit.io/truedaniyyel/ data:",
        "media-src 'self' https://ik.imagekit.io/truedaniyyel/",
        "font-src 'self' data: https://fonts.gstatic.com",
        "frame-src 'self' https://www.google.com/",
        "frame-ancestors 'none'",
        "worker-src 'self'",
        "manifest-src 'none'",
        "form-action 'self'",
      ],
    },
  },
});
