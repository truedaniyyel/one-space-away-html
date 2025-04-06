import { readFileSync } from 'fs';
import type { ImageConfig, SvgConfig } from './types';
import type { Font } from 'satori';

const DMSans400 = readFileSync(
  `${process.cwd()}/public/og-fonts/dm-sans-v15-latin-regular.ttf`
);
const DMSans500 = readFileSync(
  `${process.cwd()}/public/og-fonts/dm-sans-v15-latin-500.ttf`
);

export const DEFAULT_IMAGE: ImageConfig = {
  format: 'webp',
  webpOptions: {
    quality: 90,
  },
};

export const DEFAULT_SVG: SvgConfig = {
  width: 1200,
  height: 630,
  embedFont: true,
};

export const DEFAULT_FONTS: Font[] = [
  {
    name: 'DM Sans',
    data: DMSans400,
    weight: 400,
    style: 'normal',
  },
  {
    name: 'DM Sans',
    data: DMSans500,
    weight: 500,
    style: 'normal',
  },
];
