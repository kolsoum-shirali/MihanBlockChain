<template>
  <div class="flex justify-between mt-5">
    <div class="w-[65%] bg-white rounded p-10">
      <span class="caption text-xl font-bold pl-10 pr-3 pt-2 pb-3"
        >آخرین مطالب</span
      >
      <PagesHomeContentMainLastArticles />
    </div>
    <div class="w-[33%] bg-white rounded p-10">
      <PagesHomeContentMostViewedArticles />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.caption {
  background-color: #38bdf8;
  color: white;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 29% 100%);
}
</style>
