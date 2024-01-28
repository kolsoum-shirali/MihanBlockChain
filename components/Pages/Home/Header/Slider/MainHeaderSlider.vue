<template>
  <div class="header-slider bg-[#e9e9e9] text-[#ccc] py-10">
    <div class="w-[80%] mx-auto">
      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints"
        dir="rtl"
        :wrapAround="true"
        :autoplay="2000"
        ref="carousel"
        v-model="currentSlide"
      >
        <Slide v-for="(item, index) in items" :key="index">
          <div class="carousel__item">
            <PagesHomeHeaderSliderSingleHeaderSlide :item="item" />
          </div>
        </Slide>

        <template #addons>
          <navigation class="navigation-header" />
          <pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const items = [
  {
    title: "نفت به بالاترین قیمت ۲ ماه اخیر رسید",
    description:
      "نفت به بالاترین قیمت ۲ ماه اخیر رسیدنفت به بالاترین قیمت ۲ ماه اخیر نفت به بالاترین قیمت ۲ ماه اخیر رسیدنفت به بالاترین قیمت ۲ ماه اخیر رسید",
    img: "expire.jpg",
  },
  {
    title: "نفت به بالاترین قیمت ۲ ماه اخیر رسید",
    description:
      "نفت به بالاترین قیمت ۲ ماه اخیر رسیدنفت به بالاترین قیمت ۲ ماه اخیر نفت به بالاترین قیمت ۲ ماه اخیر رسیدنفت به بالاترین قیمت ۲ ماه اخیر رسید",
    img: "fax.jpg",
  },
  {
    title: "نفت به بالاترین قیمت ۲ ماه اخیر رسید",
    description:
      "نفت به بالاترین قیمت ۲ ماه اخیر رسیدنفت به بالاترین قیمت ۲ ماه اخیر نفت به بالاترین قیمت ۲ ماه اخیر رسیدنفت به بالاترین قیمت ۲ ماه اخیر رسید",
    img: "notCoin.jpg",
  },
  {
    title: "نفت به بالاترین قیمت ۲ ماه اخیر رسید",
    description:
      "نفت به بالاترین قیمت ۲ ماه اخیر رسیدنفت به بالاترین قیمت ۲ ماه اخیر نفت به بالاترین قیمت ۲ ماه اخیر رسیدنفت به بالاترین قیمت ۲ ماه اخیر رسید",
    img: "artor.jpg",
  },
  {
    title: "نفت به بالاترین قیمت ۲ ماه اخیر رسید",
    description:
      "نفت به بالاترین قیمت ۲ ماه اخیر رسیدنفت به بالاترین قیمت ۲ ماه اخیر نفت به بالاترین قیمت ۲ ماه اخیر رسیدنفت به بالاترین قیمت ۲ ماه اخیر رسید",
    img: "etf.jpg",
  },
  {
    title: "نفت به بالاترین قیمت ۲ ماه اخیر رسید",
    description:
      "نفت به بالاترین قیمت ۲ ماه اخیر رسیدنفت به بالاترین قیمت ۲ ماه اخیر نفت به بالاترین قیمت ۲ ماه اخیر رسیدنفت به بالاترین قیمت ۲ ماه اخیر رسید",
    img: "exchange.jpg",
  },
];
const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};
const breakpoints = {
  400: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  578: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  768: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  992: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  1400: {
    itemsToShow: 3,
    snapAlign: "start",
  },
};
</script>

<style scoped lang="scss">
.carousel {
  &__slide {
    .carousel__item {
      width: 95%;
      margin: 0 auto;
    }
  }
}
</style>
