<template>
  <div class="relative flex justify-between mt-5">
    <div class="w-[65%]">
      <div class="bg-white rounded p-10 border-2 border-[#ebe4e4]">
        <PagesHomeContentMainLastArticles />
      </div>
    </div>
    <div class="w-[33%]">
      <div class="sticky top-0 z-50">
        <div class="bg-white rounded p-10 border-2 border-[#ebe4e4]">
          <PagesHomeContentMostViewedArticles />
        </div>
        <CommonCryptoCade />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
