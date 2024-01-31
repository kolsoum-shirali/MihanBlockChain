<template>
  <div class="flex justify-between text-white text-sm leading-8">
    <div class="[w-23%]">
      <span class="caption text-base font-bold pl-10 pr-3 pt-2 pb-3">بلاگ</span>
      <ul class="mt-7">
        <li v-for="(item, index) in blogs" :key="index" class="hover:cursor-pointer hover:text-[#38bdf8] transition-colors custom-font-12">
          <i class="icon-circle ml-2"></i> {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="[w-23%]">
      <span class="caption text-base font-bold pl-10 pr-3 pt-2 pb-3"
        >سرویس ها</span
      >
      <ul class="mt-7">
        <li v-for="(item, index) in services" :key="index" class="hover:cursor-pointer hover:text-[#38bdf8] transition-colors custom-font-12">
          <i class="icon-circle ml-2"></i> {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="[w-23%]">
      <span class="caption text-base font-bold pl-10 pr-3 pt-2 pb-3"
        >قیمت ارز دیجیتال</span
      >
      <ul class="mt-7">
        <li v-for="(item, index) in digitalForeignCurrency" :key="index" class="hover:cursor-pointer hover:text-[#38bdf8] transition-colors custom-font-12">
          <i class="icon-circle ml-2"></i> {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="[w-23%]">
      <span class="caption text-base font-bold pl-10 pr-3 pt-2 pb-3"
        >میهن بلاکچین</span
      >
      <ul class="mt-7">
        <li v-for="(item, index) in mihanBlockChain" :key="index" class="hover:cursor-pointer hover:text-[#38bdf8] transition-colors custom-font-12">
          <i class="icon-circle ml-2"></i> {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const blogs = [
  { title: "اخبار" },
  { title: "آموزش" },
  { title: "تحلیل" },
  { title: "ایردراپ" },
  { title: "ویدیو" },
  { title: "میهن پادکست" },
];
const services = [
  { title: "قیمت لحظه‌ای ارزهای دیجیتال" },
  { title: "مقایسه قیمت صرافی‌ها" },
  { title: "ماشین حساب ارز دیجیتال" },
  { title: "واژه نامه" },
  { title: "از کجا شروع کنم؟" },
];
const digitalForeignCurrency = [
  { title: "قیمت بیت کوین" },
  { title: "قیمت تتر" },
  { title: "قیمت اتر" },
];
const mihanBlockChain = [
  { title: "درباره ما" },
  { title: "ارتباط با ما" },
  { title: "تبلیغات" },
  { title: "فرصت‌های شغلی" },
];
</script>

<style lang="scss" scoped>
.caption {
  background-color: #38bdf8;
  color: white;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 28% 100%);
}
.icon-circle {
  font-size: 5px;
}
</style>
