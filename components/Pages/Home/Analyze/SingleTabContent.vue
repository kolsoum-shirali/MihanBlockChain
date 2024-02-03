<template>
  <div
    class="bg-[#2c2e32] rounded text-white flex justify-between p-10 text-justify"
  >
    <div class="w-[30%]">
      <div class="wrap-img relative w-full h-[230px] rounded overflow-hidden ">
        <img
          :src="`/_nuxt/assets/images/home/analyze/${singleTabContent.caption.address}/${singleTabContent.caption.img}`"
          class="w-full h-full rounded transition-transform"
          :key="1"
        />
        <div class="overlay transition-colors"></div>
        <nuxt-link
          to="/"
          class="article-type absolute z-10 bottom-1 left-1 text-white px-5 py-1 rounded-md transition-colors custom-font-12 font-bold"
          >{{ singleTabContent.caption.type }}</nuxt-link
        >
      </div>
      <p class="description transition-colors hover:cursor-pointer text-lg font-bold mt-3 hover:text-[#38bdf8]">{{ singleTabContent.caption.title }}</p>
    </div>
    <div class="w-[66%] flex flex-wrap">
      <div
        v-for="(item, index) in singleTabContent.items"
        :key="index"
        class="w-[50%] flex"
      >
        <div class="w-[30%] h-[80px] rounded">
          <img
            :src="`/_nuxt/assets/images/home/analyze/${singleTabContent.caption.address}/${item.img}`"
            class="w-full h-full rounded"
          />
        </div>
        <div class="w-[70%]">
          <div class="py-2 px-4">
            <p
              class="description text-sm cursor-pointer hover:text-[#38bdf8] transition-colors"
            >
              {{ item.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["singleTabContent"]);
const { singleTabContent } = props;
</script>

<style lang="scss" scoped>
.description {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
  img{
    transform: scale(1.1);
  }
}


.article-type {
  background: linear-gradient(
    90deg,
    rgba(22, 31, 43, 1) 70%,
    rgba(0, 168, 255, 1) 100%
  );
  &:hover {
    background: #38bdf8;
  }
}
</style>
