<template>
  <div class="text-[#666] text-sm">
    <span>میهن بلاکچین</span><span class="mx-2">/</span> <span>اخبار</span
    ><span class="mx-2">/</span>
    <span class="font-bold text-[#38bdf8]">{{ breadCrumbs.category }}</span>
  </div>
</template>

<script setup>
const props = defineProps(["breadCrumbs"]);
const { breadCrumbs } = props;
</script>

<style lang="scss" scoped></style>
