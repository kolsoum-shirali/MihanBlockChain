<template>
  <div class="bg-[#1f2024] text-[#ccc]">
    <div class="w-[80%] mx-auto flex items-center justify-between">
      <div class="w-[15%]">
        <img src="@/assets/images/logo.png" alt="logo" class="w-full hfull" />
      </div>
      <div class="w-[55%]">
        <div class="flex justify-between">
          <ul v-for="(item, index) in menuOptions" :key="index" class="hover:cursor-pointer hover:bg-[#38bdf8] py-6 px-1">
            <div class="flex items-center">
              <span class="text-sm font-bold">{{ item.title }}</span>
              <i v-if="item.subMenu" class="icon-caret-down mt-2 mr-1"></i>
            </div>
          </ul>
        </div>
      </div>
      <div class="w-[20%] flex justify-between items-center">
        <i class="icon-menu text-xl hover:text-[#38bdf8] hover:cursor-pointer"></i>
        <div class="relative">
          <input type="text" placeholder="جستجو" class="py-2 px-2 bg-transparent outline-0 border  border-[#f3f4f6]" />
          <i class="icon-search absolute left-2 top-3 "></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const menuOptions = [
  { title: "اخبار", subMenu: true },
  { title: "آموزش", subMenu: true },
  { title: "تحلیل", subMenu: true },
  { title: "قیمت ارز دیجیتال", subMenu: true },
  { title: "ویدیو", subMenu: true },
  { title: "ایردراپ", subMenu: false },
  { title: "پروژه های کلاهبرداری", subMenu: false },
  { title: "میهن پادکست", subMenu: false },
];
</script>

<style lang="scss" scoped>


</style>
