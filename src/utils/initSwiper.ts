import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

export function initSwiper(sliderName: string, swiperConfig: SwiperOptions) {
  return new Swiper(`.${sliderName}-swiper`, {
    modules: [Navigation, Pagination],
    speed: 700,
    loop: true,
    ...swiperConfig,
  });
}
