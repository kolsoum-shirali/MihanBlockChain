<template>
  <div class="border-t-2">
    <CommonSingleArticle
      v-for="(singleArticle, index) in articlesList"
      :key="index"
      :singleArticle="singleArticle"
    >
    </CommonSingleArticle>
    <div class="q-pa-lg flex flex-center" dir="ltr">
      <q-pagination
        v-model="currentPage"
        :max="totalPages"
        :max-pages="1"
        color="black"
        direction-links
        boundary-links
        icon-first="skip_previous"
        icon-last="skip_next"
        icon-prev="fast_rewind"
        icon-next="fast_forward"
        @change="paginate"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["articles"]);
const { articles } = props;
const articlesList = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const perPage = 10;
onMounted(() => {
  paginate();
});
const paginate = async () => {
  const offset = (await perPage) * (currentPage.value - 1);
  totalPages.value = await Math.ceil(articles.length / perPage);
  articlesList.value = await [];
  articlesList.value = await articles.slice(
    offset,
    perPage * currentPage.value
  );
};
watch(currentPage, (newValue, oldValue) => {
  paginate();
});
</script>
