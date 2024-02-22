<template>
  <div class="w-[85%] mx-auto">
    <div class="flex justify-between mt-5">
      <div class="w-[65%] bg-white border border-[hsl(0,15%,91%)] rounded p-10">
        <CommonBreadCrumbs :breadCrumbs="breadCrumbs" />
        <PagesCategoryArticle
          :questions="questions"
          :articleContent="articleContent"
        />
        <PagesCategoryArticlesList :articles="articles" />
      </div>
      <div class="w-[33%]">
        <CommonPriceDigitalCurrencies />
        <CommonSelectedByEditor />
        <CommonNewArticles />
        <CommonCryptoCade />
      </div>
    </div>
  </div>
</template>

<script setup>
import { BASE_URL } from "~~/composables/api/api.config";
const articles = ref([]);
const breadCrumbs = { category: "اخبار بیت کوین" };
onBeforeMount(() => {
  useFetch(`${BASE_URL}/Articles`)
    .then((res) => {
      articles.value = res.data.value;
      console.log(articles.value, "response");
    })
    .catch((err) => {
      console.log(err);
    });
});

const articleContent = ref({
  title: "اخبار بیت کوین",
  description:
    "بیت کوین به عنوان اولین ارز رمزنگاری شده جهان همواره از اهمیت زیادی برخوردار است و در بازار کریپتو به مقبولیت کافی رسیده است. بررسی و رصد اخبار بیت کوین به صورت لحظه‌ای یکی از فرایندهای مهم بازار رمزارزها است. برای آگاهی بیشتر از سرمایه‌گذاری در ارز دیجیتال و انجام معاملات و ترید، پیگیری اخبار قیمت بیت کوین کمک شایان ذکری می‌کند. اخبار ارز دیجیتال بیت کوین (Bitcoin) در میهن بلاکچین را در این صفحه مطالعه کنید.",
});
const questions = ref([
  {
    show: false,
    question: "چگونه از اخبار بیت کوین مطلع شویم؟",
    response:
      "در بخش اخبار بیت کوین میهن بلاکچین می‌توانید هر گونه اخبار مرتبط با بیت کوین و تحلیل این رمزارز محبوب را دنبال کنید. همچنین می‌توانید اخبار بیت کوین را از سایت‌هایی مانند کوین دسک و کوین تلگراف دنبال کنید.",
  },
  {
    show: false,
    question: "چرا پیگیری اخبار بیت کوین مهم است؟",
    response:
      "از آنجاییکه بیت کوین به مقبولیت بیشتری نسبت به سایر ارزهای دیجیتال رسیده است، پیگیری اخبار بیت کوین به صورت لحظه‌ای، به تحلیل روند بازار و سرمایه‌گذاری در کریپتو کمک بسیاری می‌کند.",
  },
]);
</script>

<style lang="scss" scoped></style>
