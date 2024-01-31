<template>
  <div class="bg-[#2c2e32] text-[#ccc]">
    <div class="w-[80%] mx-auto flex items-center justify-between">
      <div class="flex items-center w-[20%]">
        <i class="icon-clock text-xs"></i>
        <span class="text-xs mr-1">جمعه 6 بهمن 1402</span>
      </div>
      <div class="w-[35%]">
        <ul class="flex justify-end">
          <nuxt-link
            v-for="(item, index) in options"
            :key="index"
            :to="item.path"
            class="single-item hover:bg-[#17181b] hover:cursor-pointer hover:text-[#38bdf8] pt-4 pb-3 px-3 transition-colors"
          >
            {{ item.title }}
          </nuxt-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const options = [
  { title: "درباره ما", path: "/about-us" },
  { title: "ارتباط با ما", path: "/contact-us" },
  { title: "فرصت‌های شغلی", path: "/jobs-opportunity" },
  { title: "تعرفه تبلیغات", path: "/advertisement" },
];
</script>

<style lang="scss" scoped>
.single-item {
  font-size: 12px;
}
</style>
