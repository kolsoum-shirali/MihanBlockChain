<template>
  <div class="text-[#666] text-sm leading-6">
    <span>میهن بلاکچین</span><span class="mx-2">/</span> <span>اخبار</span
    ><span class="mx-2">/</span>
    <span :class="{ 'text-[#38bdf8] font-bold': !breadCrumbs.title }">{{
      breadCrumbs.category
    }}</span>
    <span class="mx-2" v-if="breadCrumbs.title">/</span>
    <span class="font-bold text-[#38bdf8]">{{ breadCrumbs?.title }}</span>
  </div>
</template>

<script setup>
const props = defineProps(["breadCrumbs"]);
const { breadCrumbs } = props;
</script>

<style lang="scss" scoped></style>
