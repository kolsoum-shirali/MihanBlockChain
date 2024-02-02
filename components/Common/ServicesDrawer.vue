<template>
  <div
    :class="showDrawer ? 'show-drawer' : 'hidden-drawer'"
    class="fixed top-0 right-0 w-[25%] bottom-0 h-full bg-[#1f2024] text-white z-50"
  >
    <div class="px-5 py-5">
      <p class="text-center"><i class="icon-time text-xl"></i></p>
      <div class="mt-6">
        <span class="caption text-md font-bold pl-10 pr-3 pt-2 pb-3"
          >سرویس های میهن بلاکچین</span
        >
      </div>
      <div class="mt-10 flex flex-wrap justify-between items-center">
        <nuxt-link :to="item.path"
          v-for="(item, index) in items"
          :key="index"
          class="w-[33%] flex flex-col items-center justify-center py-5 px-3 hover:bg-[#00a8ff] hover:cursor-pointer transition-colors"
        >
        <img
              :src="`/_nuxt/assets/images/services/${item.img}`"
              width="50px"
              height="50px"
            />
            <p class="custom-font-12 text-center mt-3">
              {{ item.title }}
            </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~/store/global";
import { storeToRefs } from "pinia";
const globalStore = useGlobalStore();
const { showDrawerStatus } = globalStore;
const { showDrawer } = storeToRefs(globalStore);
const items = [
  { title: "قیمت ارزهای دیجیتال", img: "statistics.png",path:'/cryptocurrency-prices' },
  { title: "مقایسه قیمت صرافی ها", img: "compare.png",path:'/exchange-prices' },
  { title: "ماشین حساب ارزهای دیجیتال", img: "sings.png",path:'/converter-calculator' },
  { title: "واژه نامه بلاکچین", img: "lesson.png",path:'/dictionary' },
  { title: "از کجا شروع کنم؟", img: "brain.png",path:'/' },
  { title: "فروم میهن بلاکچین", img: "help.png",path:'/' },
  { title: "مسابقات", img: "medal.png" },
];
</script>

<style lang="scss" scoped>
.caption {
  background-color: black;
  color: white;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
}
.hidden-drawer {
  transform: translateX(100%);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 2s;
}
.show-drawer {
  opacity: 1;
  transform: translateX(0);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 2s;
}
</style>
