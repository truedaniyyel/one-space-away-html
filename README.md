# One Space Away - Interior Design Template

**One Space Away** is single-page template built for interior designers, architects, and home stylists.

<img width="1910" height="915" alt="PageSpeed Insights" src="https://github.com/user-attachments/assets/8b3bd9cf-6e91-4624-bda5-aa5cf71e950b" />

**Features**

- Astro 6.0 Ready:
  - Native Font Optimization
  - Pre-configured CSP (Content Security Policy) and security headers (optimized for Cloudflare, easily adaptable for Vercel or Netlify).
    <img width="1910" height="915" alt="HTTP Observatory" src="https://github.com/user-attachments/assets/4a38f8c3-c851-4239-a0b5-73f80fe8be57" />
- Responsive: mobile, tablet, and desktop devices.
- Stack: Astro (HTML, CSS, and JS) with minimal dependencies.

## Deployment

You will find a `_headers `file located in the `/public` folder. This file handles the Content Security Policy (CSP) and XSS protections mainly for Cloudflare.

If you are deploying to Vercel or Netlify, simply move these rules to a `vercel.json` or `netlify.toml` file respectively.

## Media & Image Optimization

### Local Optimization (Default)

By default, the template uses Astro’s built-in `<Image />` component for automatic optimization (WebP/AVIF conversion, resizing).

```astro
import consultationImage from '/src/assets/images/consultation.jpg';

<div class="process-step-image-wrapper">
   <Image
     src={consultationImage}
     alt="Interior Design Consultation"
     class="media"
   />
</div>
```

### Cloudinary Integration (Optional)

For top-tier loading speeds and high-resolution assets, you can easily swap to [Astro-Cloudinary](https://docs.astro.build/en/guides/media/cloudinary/).

```
pnpm add astro-cloudinary
```

```astro
import { CldImage } from 'astro-cloudinary';

<CldImage
  src="your-public-id"
  width="800"
  height="600"
  alt="Project Transformation"
/>
```

## Fonts

All local fonts are stored in `src/assets/fonts/`. To add or change fonts:

1. Drop your `.woff2` files into the fonts folder.
2. Update the `astro.config.mjs` font provider:

```mjs
fonts: [
    {
      provider: fontProviders.local(),
      name: "YourFontName",
      cssVariable: "--font-custom",
      options: {
        variants: [{
            src: ["./src/assets/fonts/YourFont.woff2"],
            weight: "normal",
            style: "normal",
          }],
      },
    },
  ],
```

3. Update the variable in `src/styles/_reset.css`:

```css
font-family: var(--font-custom), system-ui, sans-serif;
```

*For more info on using remote fonts (Google Fonts, etc.), check the [Astro Font Provider Reference](https://docs.astro.build/en/reference/font-provider-reference/).*

## Technical Details

Carousels: Powered by **Swiper.js.** Initialization logic is in `utils/initSwiper.ts`.
