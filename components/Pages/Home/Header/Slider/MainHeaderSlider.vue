<template>
  <div class="header-slider text-[#ccc] py-10">
    <Carousel
      v-bind="settings"
      :breakpoints="breakpoints"
      dir="rtl"
      :wrapAround="true"
      :autoplay="2000"
      ref="carousel"
    >
      <Slide v-for="(item, index) in items" :key="index">
        <div class="carousel__item">
          <PagesHomeHeaderSliderSingleHeaderSlide :item="item" />
        </div>
      </Slide>

      <template #addons>
        <navigation class="navigation-header" />
        <pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const items = [
  {
    title: "نفت به بالاترین قیمت ۲ ماه اخیر رسید",
    description:
      "به دنبال رشد اقتصادی مثبت آمریکا و اخبار مربوط به بسته‌های محرک اقتصادی چین و همچنین بحران فعلی در منطقه",
    img: "expire.jpg",
  },
  {
    title: "بررسی دلایل افزایش قیمت بیت کوین؛ همچنان احتمال ریزش وجود دارد",
    description:
      "بیت کوین بالاخره روز گذشته اندکی از فاز رریزشی خارج شد و پس از انقضای ۴.۵ میلیارد دلار از قراردادهای آپشن به بالای",
    img: "fax.jpg",
  },
  {
    title: "تحلیل تکنیکال قیمت بیت کوین و ۹ آلت کوین منتخب بازار؛ ۷ بهمن ۱۴۰۲",
    description:
      "قیمت بیت کوین (BTC) در ساعات گذشته بیش از ۴٪ رشد کرده و برای لحظاتی از ۴۲٬۰۰۰ نیز دلار عبور کرده است. حال سوال",
    img: "notCoin.jpg",
  },
  {
    title:
      "ایردراپ ۷۰۰ میلیون دلار ارز دیجیتال در روزهای آتی؛ فصل ایردراپ‌ها شروع شده است؟",
    description:
      "همزمان با صعودی شدن بازار ارزهای دیجیتال در ماه‌های گذشته، تعداد زیادی از پروژه‌ها از ایردراپ توکن خود بین کاربران",
    img: "artor.jpg",
  },
  {
    title: "بلاکچین Xai چیست؟ بررسی شبکه گیمینگ زای و ارز دیجیتال XAI",
    description:
      "شبکه بازی زای (Xai) در ژوئن ۲۰۲۳ (خرداد) راه‌اندازی شد و در همین مدت کوتاه توانست به‌سرعت رشد کند و به یکی از",
    img: "etf.jpg",
  },
  {
    title: "گپ CME چیست؟ شکاف قیمت بیت کوین در بورس کالای شیکاگو",
    description:
      "احتمالا در تحلیل‌های بیت کوین، با مفهومی به نام گپ CME هم برخورد کرده‌اید. این گپ از تفاوت قیمت بسته شدن کندل",
    img: "exchange.jpg",
  },
];
const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};
const breakpoints = {
  400: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  578: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  768: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  992: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  1400: {
    itemsToShow: 3,
    snapAlign: "start",
  },
};
</script>

<style scoped lang="scss">
.carousel {
  &__slide {
    .carousel__item {
      width: 95%;
      margin: 0 auto;
    }
  }
}
</style>
