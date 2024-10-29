<template>
  <div class="w-[85%] mx-auto bg-white p-10 border border-[#ebe4e4] rounded">
    <CommonBreadCrumbs :breadCrumbs="breadCrumbs" />
    <PagesCurrencyHeadInfo />
    <PagesCurrencyDetailMainList />

  </div>
</template>

<script setup>
const breadCrumbs = { category: "لیست قیمت ارزهای دیجیتال" };
</script>

<style lang="scss" scoped></style>
