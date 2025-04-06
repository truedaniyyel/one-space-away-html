import { generateOgImageForSite } from '@utils/og-images/generateOgImages';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    const image = await generateOgImageForSite();
    return new Response(image, {
      headers: {
        'Content-Type': 'image/webp',
      },
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Error generating OG image', { status: 500 });
  }
};
