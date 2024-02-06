<template>
  <div class="border-t-2">
    <CommonSingleArticle
      v-for="(singleArticle, index) in articles"
      :key="index"
      :singleArticle="singleArticle"
    >
    </CommonSingleArticle>
  </div>
</template>

<script setup>
const props = defineProps(["articles"]);
const { articles } = props;
</script>
