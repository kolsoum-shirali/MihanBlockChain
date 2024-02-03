<template>
  <div class="mt-5">
    <div class="flex flex-wrap justify-between">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="my-3 w-[32%] rounded border border-[#ebe4e4]"
      >
        <div class="flex">
          <div class="relative w-[33%] h-ful rounded">
            <img
              :src="`/_nuxt/assets/images/home/padcast/${item.img}`"
              class="rounded w-full h-full"
            />
            <div
              class="absolute right-0 bottom-0 z-20 flex items-center justify-center bg-[#38bdf8] hover:cursor-pointer hover:bg-[#00000092] transition-colors"
            >
              <i class="icon-triangle-right text-white text-3xl"></i>
            </div>
          </div>
          <div class="w-[70%] font-bold p-3">
            <div>
              <div class="flex items-center text-xs text-[#666]">
                <i class="icon-clock"></i>
                <p class="mr-1 custom-font-10">{{ item.date }}</p>
              </div>
              <h1
                class="description mt-3 text-sm text-justify hover:text-[#38bdf8] transition-colors hover:cursor-pointer"
              >
                {{ item.title }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    title:
      "میهن پادکست – سراب سود قطعی؛ چگونه رویاها به توهم و شکست تبدیل می‌شوند؟",
    img: "1.jpg",
    date: "20 شهریور 1402 - 22:03",
  },
  {
    title:
      "میهن پادکست – بررسی عمیق پروژه WorldCoin؛ چه آینده‌ای در انتظار سم آلتمن و پروژه‌اش است؟",
    img: "2.jpg",
    date: "20 شهریور 1402 - 22:03",
  },
  {
    title:
      "میهن پادکست – اودیسه اقتصاد، قسمت دوم | قرون وسطی و دوره طلایی اسلام",
    img: "3.jpg",
    date: "20 شهریور 1402 - 22:03",
  },
  {
    title: "میهن پادکست – بررسی جنگ تراشه‌ها و اثر آن بر آینده جهان",
    img: "4.jpg",
    date: "20 شهریور 1402 - 22:03",
  },
  {
    title:
      "میهن پادکست – اودیسه اقتصاد، قسمت اول | تمدن بین‌النهرین تا یونان باستان",
    img: "5.jpg",
    date: "20 شهریور 1402 - 22:03",
  },
  {
    title: "میهن پادکست – بررسی عمیق استانداردهای توکن‌سازی روی شبکه بیت کوین",
    img: "6.jpg",
    date: "20 شهریور 1402 - 22:03",
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
