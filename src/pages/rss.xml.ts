import rss from '@astrojs/rss';
import { SITE } from '@consts';

type Context = {
  site: string;
};

export async function GET(context: Context) {
  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: [],
  });
}
