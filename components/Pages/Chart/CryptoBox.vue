<template>
  <div class="bg-[#f4f9ff] border border-[#ebe4e4] rounded-lg p-4">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="flex items-center my-2"
    >
      <div class="w-[30px] h-[30px]">
        <img
          :src="`/_nuxt/assets/images/home/chart/${item.img}`"
          class="w-full h-full"
        />
      </div>
      <p class="text-sm font-bold mr-2">
        {{ item.title }}
        <span>{{ item.value }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  { title: " حجم کل بازار: ", value: " 1.70 تریلیون دلار ", img: "market.png" },
  {
    title: " معاملات 24 ساعت: ",
    value: " 35.69 میلیارد دلار ",
    img: "transaction.png",
  },
  { title: " سهم بیت کوین: ", value: " 48.45 درصد", img: "bitcoin.png" },
  { title: " نرخ تتر: ", value: "55,672.50  تومان", img: "tether.png" },
];
</script>

<style lang="scss" scoped></style>
