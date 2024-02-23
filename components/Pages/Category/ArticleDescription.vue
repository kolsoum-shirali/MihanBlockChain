<template>
  <div class="text-justify">
    <h1 class="text-black text-xl font-bold leading-10 mt-10">
        {{ selectedArticle.title }}
      </h1>
    <div class="flex items-center text-base mt-5">
      <div class="flex items-center">
        <i class="icon-user-circle-o"></i>
        <span class="mr-1 font-bold">{{ selectedArticle.authore }}</span>
      </div>
      <div class="flex items-center mr-5">
        <i class="icon-clock"></i>
        <span class="mr-1">{{ selectedArticle.date }}</span>
      </div>
    </div>
    <img
      :src="`/_nuxt/assets/images/home/lastArticle/${selectedArticle.img}`"
      class="rounded w-full h-full mt-5"
    />
    <div class="mt-[50px]">
      <p class="leading-8">{{ selectedArticle.description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["selectedArticle"]);
const { selectedArticle } = props;
</script>

<style lang="scss" scoped></style>
