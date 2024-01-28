<template>
  <div class="bg-white rounded py-10 px-5 my-10">
    <span class="caption text-xl font-bold pl-10 pr-3 pt-2 pb-3">اخبار کوتاه</span>

    <div class="news-slider mt-8">
      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints"
        dir="rtl"
        :wrapAround="true"
        ref="carousel"
      >
        <Slide v-for="(item, index) in news" :key="index" class="py-5">
          <div class="carousel__item rounded-full overflow-hidden">
            <div class="w-[120px] h-[120px] rounded-full hover:cursor-pointer">
              <img
                :src="`/_nuxt/assets/images/home/news/${item.img}`"
                class="w-full h-full rounded-full"
              />
            </div>
          </div>
        </Slide>

        <template #addons>
          <navigation class="navigation-news" />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
const settings = {
  itemsToShow: 3,
  snapAlign: "center",
};
const breakpoints = {
  400: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  578: {
    itemsToShow: 5,
    snapAlign: "start",
  },
  768: {
    itemsToShow: 6,
    snapAlign: "start",
  },
  992: {
    itemsToShow: 8,
    snapAlign: "start",
  },
  1400: {
    itemsToShow: 8,
    snapAlign: "start",
  },
};

const news = [
  { img: "1.jpg" },
  { img: "2.jpg" },
  { img: "3.jpg" },
  { img: "4.jpg" },
  { img: "5.jpg" },
  { img: "6.jpg" },
  { img: "7.jpg" },
  { img: "8.jpg" },
  { img: "9.jpg" },
  { img: "10.jpg" },
];
</script>

<style lang="scss" scoped>
.carousel {
  &__item {
    outline-style: solid;
    outline-offset: 2px;
    outline-color: #9ca3af;
    &:hover img {
      transform: scale(1.2);
      -webkit-transform: scale(1.2);
      -moz-transform: scale(1.2);
      -ms-transform: scale(1.2);
      -o-transform: scale(1.2);
      transition-property: transform;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
  }
}
.caption {
    background-color: #38bdf8;
    color: white;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 29% 100%);

}
</style>
