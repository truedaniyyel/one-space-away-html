import { SITE } from '@consts';
import satori from 'satori';
import type { Font } from 'satori';
import { html } from 'satori-html';
import type { SvgConfig } from '../types';

export async function generateSiteOgSvg(
  svgConfig: SvgConfig,
  fontsConfig: Font[]
) {
  const markup = html(`
  <div
    style="display: flex; width: 1200px; height: 630px; position: relative; font-family: sans-serif; color: #ffffff;"
  >

    <img
      src="https://ik.imagekit.io/truedaniyyel/one-space-away-og.webp?updatedAt=1743946773239" 
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;"
      alt="Interior Background"
    />


  <div
    style="
    display: flex;
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 20%, transparent 65%, transparent 65%, rgba(0, 0, 0, 0.7) 80%);
    "
  ></div>


    <div
      style="position: relative; z-index: 1; width: 100%; height: 100%;
            display: flex; flex-direction: column; justify-content: space-between;
            padding: 60px;"
    >
      <div style="font-size: 64px; font-weight: 500; line-height: 1.2;">
        ${SITE.TITLE}
      </div>
      <div
        style="display: flex; justify-content: space-between; align-items: center;"
      >
        <div style="font-size: 32px;">${SITE.CANONICAL_URL}</div>
        <div style="font-size: 32px;">${SITE.COMPANY_NAME}</div>
      </div>
    </div>
  </div>
`);

  return await satori(markup, {
    ...svgConfig,
    fonts: fontsConfig,
  });
}
