<template>
  <div class="bg-white border border-[#ebe4e4] rounded p-10 mt-10">
    <span class="caption text-lg font-bold pl-10 pr-3 pt-2 pb-3"
      >منتخب سردبیر</span
    >
    <div class="header-slider text-[#ccc] mt-8">
      <Carousel v-bind="settings" dir="rtl" :wrapAround="true" ref="carousel">
        <Slide v-for="(item, index) in selectedByEditorItems" :key="index">
          <div class="carousel__item">
            <div class="relative">
              <div class="h-[350px] rounded-xl">
                <img
                  :src="`/_nuxt/assets/images/home/header/${item.img}`"
                  class="h-full rounded-xl article-img"
                />
              </div>
              <p
                class="absolute z-20 text-lg text-white font-bold bottom-0 right-[20px] my-2 hover:cursor-pointer"
              >
                {{ item.title }}
              </p>
              <div class="absolute z-10 right-0 left-0 bottom-0 top-0 bg-[#0000007c] rounded-xl"></div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <navigation class="navigation-header" />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
const props = defineProps(["selectedByEditorItems"]);
const { selectedByEditorItems } = props;

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};
</script>

<style scoped lang="scss">
.caption {
  background-color: black;
  color: white;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
}

.carousel {
  &__slide {
    .carousel__item {
      width: 95%;
      margin: 0 auto;
    }
  }
}
</style>
