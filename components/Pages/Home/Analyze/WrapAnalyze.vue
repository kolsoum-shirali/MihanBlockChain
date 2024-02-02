<template>
  <div class="w-[85%] mx-auto py-10 bg-[#1f2024] my-10">
    <div class="bg-black flex">
      <div
        v-for="(item, index) in tabs"
        :key="index"
        class="p-5 text-white hover:cursor-pointer transition-colors hover:text-[#38bdf8]"
        :class="{ 'bg-[#2c2e32]': item.active }"
        @click="selectedTab(item.number)"
      >
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div v-if="selectedItem.tab === 1" class="tab-content" :key="1">
      <PagesHomeAnalyzeSingleTabContent :singleTabContent="selectedItem" />
    </div>
    <div v-if="selectedItem.tab === 2" class="tab-content" :key="2">
      <PagesHomeAnalyzeSingleTabContent :singleTabContent="selectedItem" />
    </div>
    <div v-if="selectedItem.tab === 3" class="tab-content" :key="3">
      <PagesHomeAnalyzeSingleTabContent :singleTabContent="selectedItem" />
    </div>
    <div v-if="selectedItem.tab === 4" class="tab-content" :key="4">
      <PagesHomeAnalyzeSingleTabContent :singleTabContent="selectedItem" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
onMounted(() => {
  selectedItem.value = options.value.technical;
});
const tabs = ref([
  { title: "تحلیل تکنیکال", number: 1, active: true },
  { title: "تحلیل آنچین", number: 2, active: false },
  { title: "تحلیل اقتصادی", number: 3, active: false },
  { title: "تحلیل فاندامنتال", number: 4, active: false },
]);
const selectedItem = ref({});
const options = ref({
  technical: {
    tab: 1,
    caption: {
      title:
        "۲ روز تا جلسه فدرال رزرو برای تعیین نرخ بهره؛ ۵ نکته مهم که باید در هفته جاری مدنظر قرار داد",
      img: "bitcoin-price-in-this-week.jpg",
      type: "تحلیل تکنیکال",
      address: "technical",
    },
    items: [
      {
        title:
          "تحلیل تکنیکال قیمت بیت کوین، سولانا، آوالانچ، RNDR و سویی: ۹ بهمن ۱۴۰۲",
        img: "1.jpg",
      },
      {
        title:
          "تحلیل تکنیکال قیمت بیت کوین و ۹ آلت کوین منتخب بازار؛ ۷ بهمن ۱۴۰۲",
        img: "2.jpg",
      },
      {
        title: "تحلیل آنچین و تکنیکال قیمت بیت کوین؛ ۱ بهمن ۱۴۰۲",
        img: "3.jpg",
      },
      {
        title:
          "تحلیل تکنیکال قیمت بیت کوین و ۴ آلت کوین با پتانسیل رشد؛ ۲۵ دی ۱۴۰۲",
        img: "4.jpg",
      },
      {
        title:
          "تحلیل تکنیکال قیمت بیت کوین و ۹ آلت کوین منتخب بازار؛ ۲۳ دی ۱۴۰۲",
        img: "5.jpg",
      },
      {
        title:
          "آیا قیمت آربیتروم باز هم افزایش خواهد یافت؟ بررسی دلایل احتمالی",
        img: "6.jpg",
      },
    ],
  },
  anchin: {
    tab: 2,
    caption: {
      title:
        "۲ روز تا جلسه فدرال رزرو برای تعیین نرخ بهره؛ ۵ نکته مهم که باید در هفته جاری مدنظر قرار داد",
      img: "bitcoin-price-in-this-week.jpg",
      type: "تحلیل تکنیکال",
      address: "anchin",
    },
    items: [
      {
        title: "تحلیل آنچین و تکنیکال قیمت بیت کوین؛ ۱ بهمن ۱۴۰۲",
        img: "1.jpg",
      },
      {
        title:
          "آیا قیمت آربیتروم باز هم افزایش خواهد یافت؟ بررسی دلایل احتمالی",
        img: "2.jpg",
      },
      {
        title:
          "تحلیل دیتای آنچین بیت کوین؛ آیا قیمت در کوتاه مدت اصلاح خواهد شد؟",
        img: "3.jpg",
      },
      {
        title:
          "تحلیل فاندامنتال، آنچین و تکنیکال اینجکتیو؛ آیا INJ ارزش خرید دارد؟",
        img: "4.jpg",
      },
      {
        title:
          "گزارش پایان سال گلسنود؛ بررسی جامع داده‌های آنچین بازار کریپتو در سال ۲۰۲۳",
        img: "5.jpg",
      },
      {
        title:
          "تحلیل اختصاصی قیمت بیت کوین با استفاده از دیتای آنچین؛ احتمال ریزش بیشتر قیمت وجود دارد",
        img: "6.jpg",
      },
    ],
  },
  economic: {
    tab: 3,
    caption: {
      title:
        "۲ روز تا جلسه فدرال رزرو برای تعیین نرخ بهره؛ ۵ نکته مهم که باید در هفته جاری مدنظر قرار داد",
      img: "bitcoin-price-in-this-week.jpg",
      type: "تحلیل تکنیکال",
      address: "economic",
    },
    items: [
      {
        title: "آیا بحران خاورمیانه قیمت نفت را بیش از این افزایش خواهد داد؟",
        img: "1.jpg",
      },
      {
        title:
          "بازگشت همبستگی معکوس بیت کوین با شاخص قدرت دلار آمریکا (DXY)؛ تاثیر انتخابات آمریکا بر قیمت BTC چیست؟",
        img: "2.jpg",
      },
      {
        title:
          "پیش‌بینی اقتصاددانان بارکلیز: احتمال شروع کاهش نرخ بهره آمریکا از ماه مارس (اسفند)",
        img: "3.jpg",
      },
      {
        title:
          "ارتباط بیت کوین و اقتصاد آمریکا؛ آیا آمریکا روی قیمت بیت کوین اثر می‌گذارد؟",
        img: "4.jpg",
      },
      {
        title:
          "تورم منفی گریبان‌گیر اقتصاد چین؛ آیا سیاست‌های انبساطی چین بر رشد بازار کریپتو تاثیر می‌گذارد؟",
        img: "5.jpg",
      },
      {
        title:
          "تحلیل وضعیت ترازنامه فدرال رزرو؛ آیا آمریکا نقدینگی را از بازار بیت کوین و سهام جمع خواهد کرد؟",
        img: "6.jpg",
      },
    ],
  },
  foundemental: {
    tab: 4,
    caption: {
      title:
        "تحلیل فاندامنتال و تکنیکال پنکیک سواپ؛ آیا قیمت CAKE می‌تواند به ۵ دلار برسد؟",
      img: "Pancakeswap.jpg",
      type: "تحلیل فاندمنتال",
      address: "foundemental",
    },
    items: [
      {
        title:
          "تحلیل فاندامنتال و تکنیکال پروتکل مینا؛ آیا قیمت MINA به ۲ دلار خواهد رسید؟",
        img: "1.jpg",
      },
      {
        title:
          "تحلیل فاندامنتال، آنچین و تکنیکال اینجکتیو؛ آیا INJ ارزش خرید دارد؟ ",
        img: "2.jpg",
      },
      {
        title:
          " تحلیل فاندامنتال، آنچین و تکنیکال آوالانچ؛ آیا AVAX به روند صعودی خود ادامه خواهد داد؟",
        img: "3.jpg",
      },
      {
        title:
          "تحلیل فاندامنتال، آنچین و تکنیکال کاردانو؛ آیا ADA ارزش خرید دارد؟",
        img: "4.jpg",
      },
      {
        title:
          "تحلیل فاندامنتال و تکنیکال LINK؛ آیا خرید ارز دیجیتال چین لینک ارزش دارد؟",
        img: "5.jpg",
      },
      {
        title: "بررسی مکانیسم و تاثیر ETF اسپات بیت کوین روی بازار + ویدیو",
        img: "6.jpg",
      },
    ],
  },
});
const selectedTab = async (number) => {
  tabs.value.forEach((item,index)=>{
    item.number === number ? item.active = true : item.active = false
  })
  switch (number) {
    case 1:
      selectedItem.value = await options.value.technical;
      break;
    case 2:
      selectedItem.value = await options.value.anchin;
      break;
    case 3:
      selectedItem.value = await options.value.economic;
      break;
    case 4:
      selectedItem.value = await options.value.foundemental;
      break;
  }
};
</script>

<style lang="scss" scoped>
</style>
