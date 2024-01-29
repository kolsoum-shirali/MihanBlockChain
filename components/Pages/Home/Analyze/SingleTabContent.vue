<template>
  <div class="bg-[#2c2e32] rounded text-white flex justify-between p-10 text-justify">
    <div class="w-[30%]">
      <div class="relative w-full h-[230px] rounded">
        <img
          :src="`/_nuxt/assets/images/home/analyze/technical/${caption.img}`"
          class="w-full h-full rounded"
        />
        <nuxt-link
          to="/"
          class="article-type absolute z-10 bottom-1 left-1 text-white px-5 py-1 rounded-md transition-colors text-sm font-bold"
          >{{ caption.type }}</nuxt-link
        >
      </div>
      <p class="text-lg font-bold mt-3">{{ caption.title }}</p>
    </div>
    <div class="w-[66%] flex flex-wrap">
      <div v-for="(item, index) in items" :key="index" class="w-[50%] flex">
        <div class="w-[30%] h-[80px] rounded">
          <img
            :src="`/_nuxt/assets/images/home/analyze/technical/${item.img}`"
            class="w-full h-full rounded"
          />
        </div>
        <div class="w-[70%]">
          <div class="py-2 px-4">
            <p
              class="text-sm cursor-pointer hover:text-[#38bdf8] transition-colors"
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
const caption = {
  title:
    "۲ روز تا جلسه فدرال رزرو برای تعیین نرخ بهره؛ ۵ نکته مهم که باید در هفته جاری مدنظر قرار داد",
  img: "bitcoin-price-in-this-week.jpg",
  type: "تحلیل تکنیکال",
};
const items = [
  {
    title:
      "تحلیل تکنیکال قیمت بیت کوین، سولانا، آوالانچ، RNDR و سویی: ۹ بهمن ۱۴۰۲",
    img: "1.jpg",
  },
  {
    title: "تحلیل تکنیکال قیمت بیت کوین و ۹ آلت کوین منتخب بازار؛ ۷ بهمن ۱۴۰۲",
    img: "2.jpg",
  },
  { title: "تحلیل آنچین و تکنیکال قیمت بیت کوین؛ ۱ بهمن ۱۴۰۲", img: "3.jpg" },
  {
    title:
      "تحلیل تکنیکال قیمت بیت کوین و ۴ آلت کوین با پتانسیل رشد؛ ۲۵ دی ۱۴۰۲",
    img: "4.jpg",
  },
  {
    title: "تحلیل تکنیکال قیمت بیت کوین و ۹ آلت کوین منتخب بازار؛ ۲۳ دی ۱۴۰۲",
    img: "5.jpg",
  },
  {
    title: "آیا قیمت آربیتروم باز هم افزایش خواهد یافت؟ بررسی دلایل احتمالی",
    img: "6.jpg",
  },
];
</script>

<style lang="scss" scoped>
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
