<template>
  <div class="w-[85%] mx-auto">
    <div class="flex justify-between mt-5">
      <div class="w-[65%] bg-white border border-[#ebe4e4] rounded p-10">
        <CommonBreadCrumbs />
        <PagesCategoryArticle />
        <PagesCategoryArticlesList />
      </div>
      <div class="w-[33%]">
        <CommonPriceDigitalCurrencies :prices="prices" />
        <CommonSelectedByEditor
          :selectedByEditorItems="selectedByEditorItems"
        />
       <div  class="sticky top-0 z-20">
        <CommonNewArticles :newArticles="newArticles" />
        <CommonCryptoCade/>
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
const selectedByEditorItems = [
  {
    title: "نفت به بالاترین قیمت ۲ ماه اخیر رسید",
    img: "expire.jpg",
  },
  {
    title: "بررسی دلایل افزایش قیمت بیت کوین؛ همچنان احتمال ریزش وجود دارد",
    img: "fax.jpg",
  },
  {
    title: "تحلیل تکنیکال قیمت بیت کوین و ۹ آلت کوین منتخب بازار؛ ۷ بهمن ۱۴۰۲",
    img: "notCoin.jpg",
  },
  {
    title:
      "ایردراپ ۷۰۰ میلیون دلار ارز دیجیتال در روزهای آتی؛ فصل ایردراپ‌ها شروع شده است؟",
    img: "artor.jpg",
  },
  {
    title: "بلاکچین Xai چیست؟ بررسی شبکه گیمینگ زای و ارز دیجیتال XAI",
    img: "etf.jpg",
  },
  {
    title: "گپ CME چیست؟ شکاف قیمت بیت کوین در بورس کالای شیکاگو",
    img: "exchange.jpg",
  },
];
const prices = [
  {
    title: " USDC",
    img: "solana.png",
    dollarPrice: "2,273.32",
    tomanPrice: "127,561,668.50",
    percentage: "2.45",
  },
  {
    title: " USDC",
    img: "avalanche-red.png",
    dollarPrice: "2,273.32",
    tomanPrice: "127,561,668.50",
    percentage: "2.13",
  },
  {
    title: " USDC",
    img: "binancecoin.png",
    dollarPrice: "2,273.32",
    tomanPrice: "127,561,668.50",
    percentage: "2.45",
  },
  {
    title: " USDC",
    img: "bitcoin-color.png",
    dollarPrice: "2,273.32",
    tomanPrice: "127,561,668.50",
    percentage: "2.45",
  },
  {
    title: " USDC",
    img: "cardano.png",
    dollarPrice: "2,273.32",
    tomanPrice: "127,561,668.50",
    percentage: "2.45",
  },
];
</script>

<style lang="scss" scoped></style>
