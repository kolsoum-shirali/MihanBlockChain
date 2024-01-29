<template>
  <div class="w-[80%] mx-auto py-10">
    <div class="bg-black flex">
      <div
        v-for="(item, index) in tabs"
        :key="index"
        class="p-5 text-white hover:cursor-pointer transition-colors hover:bg-[#2c2e32] hover:text-[#38bdf8]"
      >
        <span>{{ item.title }}</span>
      </div>
    </div>
    <PagesHomeAnalyzeSingleTabContent />
  </div>
</template>

<script setup>
const tabs = [
  { title: "تحلیل تکنیکال", number: 1 },
  { title: "تحلیل آنچین", number: 2 },
  { title: "تحلیل اقتصادی", number: 3 },
  { title: "تحلیل فاندامنتال", number: 4 },
];
</script>

<style lang="scss" scoped></style>
