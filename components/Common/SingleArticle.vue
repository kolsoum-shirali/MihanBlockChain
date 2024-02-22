<template>
  <div class="flex justify-between my-5">
    <div class="wrap-img relative w-[30%] overflow-hidden rounded">
      <img
        :src="`/_nuxt/assets/images/home/lastArticle/${singleArticle.img}`"
        class="rounded w-full h-full transition-transform"
      />
      <slot articleType></slot>
      <div class="overlay rounded transition-colors"></div>
    </div>
    <div
      class="wrap-content rounded w-[70%] text-[#666] p-5 hover:bg-[#38bdf8] hover:text-white transition-colors"
    >
      <div class="hover:cursor-pointer">
        <div class="flex items-center text-sm">
          <div class="flex items-center">
            <i class="icon-user-circle-o"></i>
            <span class="mr-1 custom-font-10">{{ singleArticle.authore }}</span>
          </div>
          <div class="flex items-center mr-2">
            <i class="icon-clock"></i>
            <span class="mr-1 custom-font-10">{{ singleArticle.date }}</span>
          </div>
        </div>
        <div class="mt-2">
          <h1 class="title text-black text-lg font-bold text-justify">
            {{ singleArticle.title }}
          </h1>
          <p class="description custom-font-12 mt-2 text-justify">
            {{ singleArticle.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["singleArticle"]);
const { singleArticle } = props;
console.log(singleArticle,"singleArticle")
console.log("singleArticle")
</script>

<style lang="scss" scoped>
.description {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.wrap-content:hover .title {
  color: white !important;
}
.wrap-img:hover {
  .overlay {
    background: #0000007c;
    position: absolute;
    content: "";
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }
  img {
    transform: scale(1.1);
  }
}
</style>
