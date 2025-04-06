import type { JpegOptions, WebpOptions, AvifOptions } from 'sharp';

export type ImageFormat = 'jpeg' | 'webp' | 'avif';

export interface ImageConfig {
  format: ImageFormat;
  jpegOptions?: JpegOptions;
  webpOptions?: WebpOptions;
  avifOptions?: AvifOptions;
}

export type SvgConfig = {
  width: number;
  height: number;
  embedFont: boolean;
};
