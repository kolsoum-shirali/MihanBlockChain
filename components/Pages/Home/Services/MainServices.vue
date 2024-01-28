<template>
  <div class="flex justify-between my-10">
    <div
      v-for="(item, index) in services"
      :key="index"
      class="single-service hover:cursor-pointer rounded w-[19%] p-5 text-white flex flex-col items-center justify-center"
    >
      <div class="w-[30px] h-[30px]">
        <img
          :src="`/_nuxt/assets/images/services/${item.img}`"
          class="w-full h-full"
        />
      </div>
      <p class="text-center mt-3 text-sm">{{ item.title }}</p>
    </div>
  </div>
</template>

<script setup>
const services = [
  { title: "قیمت ارزهای دیجیتال", img: "statistics.png" },
  { title: "مقایسه قیمت صرافی ها", img: "compare.png" },
  { title: "ماشین حساب ارزهای دیجیتال", img: "sings.png" },
  { title: "از کجا شروع کنم؟", img: "brain.png" },
  { title: "واژه نامه بلاکچین", img: "lesson.png" },
];
</script>

<style lang="scss" scoped>
.single-service {
  background: linear-gradient(
    90deg,
    rgba(22, 31, 43, 1) 70%,
    rgba(0, 168, 255, 1) 100%
  );
}
.single-service:hover {
  background: #38bdf8;
  transition: all 0.3s ease-in-out;
}
</style>
