<template>
  <div class="wrap-img rounded-xl overflow-hidden relative text-white">
  
    <div class="h-[350px] rounded-xl">
      <img
        :src="`/_nuxt/assets/images/home/header/${item.img}`"
        class="h-full rounded-xl article-img"
      />
    </div>
    <div
      class="absolute right-0 left-0 bottom-0 top-0 bg-[#0000007c] p-4 rounded-xl overlay"
    >
      <div class="w-full h-full flex flex-col justify-end">
        <div class="content">
          <p class="text-2xl font-bold hover:cursor-pointer">
            {{ item.title }}
          </p>
          <p class="text-base mt-2 hover:cursor-pointer">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["item"]);
const { item } = props;
</script>

<style scoped lang="scss">
.content p:nth-child(1) {
  transition: all 0.5s ease-in-out;
  transform: translateY(30px);
}
.content p:nth-child(2) {
  direction: rtl;
  transform: translateY(30px);
  opacity: 0;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}
.wrap-img:hover .content p:nth-child(1) {
  transform: translateY(-30px);
  transition: all 0.5s ease-in-out;
}
.wrap-img:hover .content p:nth-child(2) {
  transform: translateY(-20px);
  transition: all 0.5s ease-in-out;
  opacity: 1;
}
.wrap-img:hover .article-img {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>
