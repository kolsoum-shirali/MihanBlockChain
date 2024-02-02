<template>
  <div class="bg-white border border-[#ebe4e4] rounded p-10">
    <span class="caption text-lg font-bold pl-10 pr-3 pt-2 pb-3"
      >قیمت ارزهای دیجیتال</span
    >
    <div class="mt-10 text-sm font-bold">
      <div
        v-for="(item, index) in prices"
        :key="index"
        class="flex justify-between border my-1 rounded-md px-2 py-3 even:bg-gray-100"
      >
        <div class="flex items-center text-[#01a433]">
          <span>{{ item.percentage }} %</span>
          <i class="icon-caret-up"></i>
        </div>
        <div class="text-center">
          <p>{{ item.dollarPrice }} $</p>
          <p class="text-[#aeaeae] mt-2">{{ item.tomanPrice }} تومان</p>
        </div>
        <div class="flex items-center">
          <span>{{ item.title }}</span>
          <div class="w-[30px] h-[30px] mr-2">
            <img
              :src="`/_nuxt/assets/images/home/digital/${item.img}`"
              class="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <button
          class="bg-[#38bdf8] text-white px-5 py-2 rounded mt-5 hover:bg-[#238cc8] transition-colors w-[60%]"
        >
          مشاهده لیست کامل
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["prices"]);
const { prices } = props;
</script>

<style lang="scss" scoped>
.caption {
  background-color: black;
  color: white;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
}
</style>
