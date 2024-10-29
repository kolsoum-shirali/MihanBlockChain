<template>
  <div class="bg-white border border-[#ebe4e4] rounded p-10 mt-10">
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
            :src="item.img"
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
import oneImg from "@/assets/images/home/article/1.jpg";
const items = [
  { title: "بیت کوین چیست؟", img: oneImg },
  { title: " اتریوم چیست؟", img: oneImg },
  { title: " تتر چیست؟", img: oneImg },
  { title: " پولکادات چیست؟", img: oneImg },
  { title: " کاردانو چیست؟", img: oneImg },
  { title: " بایننس کوین چیست؟", img: oneImg },
];
</script>

<style lang="scss" scoped>
.caption {
  background-color: black;
  color: white;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
}
</style>
