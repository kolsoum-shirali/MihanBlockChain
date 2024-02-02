<template>
  <div class="bg-black py-5">
    <div class="w-[85%] mx-auto text-white text-sm flex justify-between">
      <p class="custom-font-12">
        © 2024 - تمامی حقوق مادی و معنوی این وبسایت نزد میهن بلاکچین محفوظ است
      </p>
      <ul class="flex items-center">
        <nuxt-link
          v-for="(item, index) in items"
          :key="index"
          :to="item.path"
          class="single-item mx-2 hover:cursor-pointer hover:text-[#38bdf8] transition-colors custom-font-12"
        >
          {{ item.title }}
        </nuxt-link>
        <!-- <li v-for="(item, index) in items" :key="index" class="mx-2 hover:cursor-pointer hover:text-[#38bdf8] transition-colors custom-font-12">
        {{ item.title }}
      </li> -->
      </ul>
    </div>
  </div>
</template>

<script setup>
const items = [
  { title: "درباره ما", path: "/about-us" },
  { title: "ارتباط با ما", path: "/contact-us" },
  { title: "فرصت‌های شغلی", path: "/jobs-opportunity" },
  { title: "تعرفه تبلیغات", path: "/advertisement" },
];
</script>

<style lang="scss" scoped></style>
