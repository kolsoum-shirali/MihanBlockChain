<template>
  <div class="w-[85%] mx-auto">
    <div class="flex justify-between mt-5">
      <div class="w-[65%] bg-white border border-[hsl(0,15%,91%)] rounded p-10">
        <CommonBreadCrumbs :breadCrumbs="breadCrumbs" />
        <div class="mt-10">
          <nuxt-link to="/category/news/bitcoin" class="bg-[#38bdf8] text-white px-3 py-2 rounded">{{ breadCrumbs.category }}</nuxt-link>
        </div>
        <PagesCategoryArticleDescription :selectedArticle="selectedArticle" />
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
const route = useRoute();
const selectedArticle = ref({});
const breadCrumbs = ref({ category: "اخبار بیت کوین" });
const { data } = await useAsyncData("articles-bitcoin", async () => {
  return await Promise.all([$fetch(`${BASE_URL}/Articles/${route.params.id}`)]);
});
selectedArticle.value = data.value[0];
breadCrumbs.value.title = data.value[0].title;
</script>

<style lang="scss" scoped></style>
