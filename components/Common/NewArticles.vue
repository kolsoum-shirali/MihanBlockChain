<template>
  <div class="bg-white border border-[#ebe4e4] rounded mt-10">
    <div class="border-b py-5 text-center">
      <span class="text-lg font-bold pl-10 pr-3 pt-2 pb-3 text-[#00a8ff]"
        >تازه</span
      >
    </div>
    <div class="px-10 py-5">
      <div v-for="(item, index) in newArticles" :key="index" class="flex my-3">
        <div class="w-[30%] rounded">
          <img
            :src="`/_nuxt/assets/images/home/lastArticle/${item.img}`"
            class="rounded w-full h-full"
          />
        </div>
        <div class="w-[70%] font-bold p-3">
          <div class="hover:cursor-pointer">
            <h1
              class="description text-sm text-justify hover:text-[#00a8ff] transition-colors"
            >
              {{ item.title }}
            </h1>
            <div class="flex items-center text-xs text-[#666] mt-3">
              <i class="icon-clock"></i>
              <p class="mr-1 custom-font-10">{{ item.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const newArticles = [
  {
    title: "برای دریافت ایردراپ WEN فقط ۲ روز مهلت باقی مانده است",
    img: "1.jpg",
    date: "8 بهمن 1402 - 13:17",
  },
  {
    title:
      "ایردراپ ۷۰۰ میلیون دلار ارز دیجیتال در روزهای آتی؛ فصل ایردراپ‌ها شروع شده است؟",
    img: "2.jpg",
    date: "8 بهمن 1402 - 13:17",
  },
  {
    title: "نات کوین چیست؟ همه چیز درباره بازی تلگرامی Notcoin",
    img: "3.jpg",
    date: "8 بهمن 1402 - 13:17",
  },
];
</script>

<style lang="scss" scoped>
.description {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
