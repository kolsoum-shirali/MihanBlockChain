<template>
  <div class="flex justify-between items-center py-7 border-b my-5">
    <div v-for="(item, index) in option" :key="index" class="flex items-center">
      <div class="w-[35px] h-[40px]">
        <img
          :src="`/_nuxt/assets/images/digitalCurrency/${item.img}`"
          class="w-full h-full"
        />
      </div>
      <span class="mr-1">{{ item.title }}</span>
      <span class="text-[#73cfff] mr-1">{{ item.value }}</span>
    </div>
  </div>
</template>

<script setup>
const option = [
  {
    title: " ارزش کل بازار:",
    value: " 2.04 تریلیون دلار",
    img: "marketcap.png",
  },
  {
    title: "حجم معاملات(24ساعت)",
    value: "81.71 میلیارد دلار",
    img: "24hvol.png",
  },
  {
    title: " سهم بیت کوین از بازار: ",
    value: " 48.85 درصد",
    img: "btcdominance.png",
  },
  {
    title: "نرخ تتر(میانگین صرافی ها)",
    value: " 57,429.00 تومان",
    img: "tether.png",
  },
];
</script>

<style lang="scss" scoped></style>
