<template>
  <div class="wrap-videos mt-10">
    <div class="w-[80%] mx-auto py-10">
      <div class="flex justify-between">
        <span class="caption text-xl font-bold pl-10 pr-3 pt-2 pb-3"
          >ویدیوها</span
        >
        <button
          class="bg-[#0071bd] text-white rounded flex items-center px-3 text-sm"
        >
          مطالب بیشتر <i class="icon-rewind mt-1"></i>
        </button>
      </div>
      <div class="news-slider mt-8">
        <Carousel
          v-bind="settings"
          :breakpoints="breakpoints"
          dir="rtl"
          :wrapAround="true"
          ref="carousel"
          :autoplay="3000"
        >
          <Slide v-for="(item, index) in items" :key="index" class="py-5">
            <div>
              <div class="w-full h-[200px] rounded mb-3">
                <img
                  :src="`/_nuxt/assets/images/home/video/${item.img}`"
                  class="w-full h-full rounded"
                  :key="1"
                />
              </div>
              <nuxt-link
                to="/"
                class="hover:text-[#38bdf8] transition-colors text-sm font-bold"
                >{{ item.title }}</nuxt-link
              >
            </div>
          </Slide>
          <template #addons>
            <Pagination class="" />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
const settings = {
  itemsToShow: 3,
  snapAlign: "center",
};
const breakpoints = {
  400: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  578: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  768: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  992: {
    itemsToShow: 4,
    snapAlign: "start",
  },
  1400: {
    itemsToShow: 4,
    snapAlign: "start",
  },
};

const items = [
  {
    title: "ایردراپ توکن ALLY؛ چطور رمزارز سایت Earn Alliance را بگیریم؟",
    img: "1.jpg",
  },
  {
    title: "شرکت در مسابقه ۴۰,۰۰۰ دلاری بازی Storm Warfare + ویدیو",
    img: "2.jpg",
  },
  {
    title:
      "آموزش تحلیل تکنیکال؛ قسمت هفتم: استراتژی معاملاتی چرخه‌‌های قیمتی بازار + ویدیو",
    img: "3.jpg",
  },
  {
    title:
      "آموزش تحلیل تکنیکال؛ قسمت ششم: ورود به پولبک‌ها به روش البروکس + ویدیو",
    img: "4.jpg",
  },
];
</script>

<style lang="scss" scoped>
.caption {
  background-color: #38bdf8;
  color: white;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 18% 100%);
}
.wrap-videos {
  background-image: url("@/assets/images/home/video/back.jpg");
}
::v-deep .carousel__pagination-button::after {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
}
</style>
