<template>
  <div>
    <span class="caption text-lg font-bold pl-10 pr-3 pt-2 pb-3"
      >کریپتوکده</span
    >
    <div class="flex flex-wrap mt-10">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="w-[50%] flex flex-col items-center my-2 hover:text-[#38bdf8] transition-colors"
      >
        <div class="w-[120px] h-[120px] rounded-full hover:cursor-pointer">
          <img
            :src="`/_nuxt/assets/images/home/article/${item.img}`"
            class="rounded-full w-full h-full"
          />
        </div>
        <p class="text-sm mt-2 font-bold hover:cursor-pointer">
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  { title: "بیت کوین چیست؟", img: "1.jpg" },
  { title: " اتریوم چیست؟", img: "2.jpg" },
  { title: " تتر چیست؟", img: "3.jpg" },
  { title: " پولکادات چیست؟", img: "4.jpg" },
  { title: " کاردانو چیست؟", img: "5.jpg" },
  { title: " بایننس کوین چیست؟", img: "6.jpg" },
];
</script>

<style lang="scss" scoped>
.caption {
  background-color: black;
  color: white;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
}
</style>
