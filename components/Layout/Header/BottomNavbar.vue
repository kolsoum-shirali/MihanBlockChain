<template>
  <div class="bg-[#1f2024] text-[#ccc]">
    <div class="w-[85%] mx-auto flex items-center justify-between">
      <div class="w-[15%]">
        <img src="@/assets/images/logo.png" alt="logo" class="w-full h-full" />
      </div>
      <div class="w-[55%]">
        <div class="flex justify-between">
          <ul
            v-for="(item, index) in menuOptions"
            :key="index"
            class="relative single-menu hover:bg-[#38bdf8] py-6 px-1"
          >
            <div class="flex items-center hover:cursor-pointer">
              <span class="text-sm font-bold">{{ item.title }}</span>
              <i v-if="item.subMenu" class="icon-caret-down mr-1"></i>
            </div>
            <div
              v-if="item.subMenu"
              class="wrap-sub-menu absolute z-10 right-0 top-[68px] w-[200px] border-t-2 border-[#38bdf8] transition-all bg-[#1f2024] py-5 px-3 rounded-b-md"
            >
              <ul>
                <li
                  v-for="(option, index) in item.subMenuItems"
                  :key="index"
                  class="single-sub-menu relative hover:cursor-pointer text-sm my-4"
                >
                  <div class="caption-sub-menu">
                    <div class="title flex items-center justify-between">
                      <nuxt-link :to="option.path">{{
                        option.title
                      }}</nuxt-link>
                      <i v-if="option?.subItem" class="icon-rewind"></i>
                    </div>
                    <div
                      v-if="option?.subItem"
                      class="secound-sub-menu absolute left-[-120px] top-0 bg-[#1f2024] rounded-l-md"
                    >
                      <ul class="px-3 py-1">
                        <li
                          v-for="(el, index) in option?.subMenu"
                          :key="index"
                          class="hover:text-[#38bdf8] hover:cursor-pointer text-sm my-4"
                        >
                          {{ el.title }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
      <div class="w-[20%] flex justify-between items-center">
        <i
          class="icon-menu text-xl hover:text-[#38bdf8] hover:cursor-pointer"
          @click="showDrawerStatus(!showDrawer)"
        ></i>
        <div class="relative">
          <input
            type="text"
            placeholder="جستجو"
            class="search py-2 px-2 bg-transparent outline-0 text-sm"
          />
          <i class="icon-search absolute left-2 top-3"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~/store/global";
import { storeToRefs } from "pinia";
const globalStore = useGlobalStore();
const { showDrawerStatus } = globalStore;
const { showDrawer } = storeToRefs(globalStore);
const menuOptions = [
  {
    title: "اخبار",
    subMenu: true,
    subMenuItems: [
      { title: "بیت کوین", path: "/category/news/bitcoin", subItem: false },
      { title: "اتریوم", path: "/category/news/ethereum", subItem: false },
      { title: "آلتکوین", path: "/category/news/altcoin", subItem: false },
      { title: "بلاکچین", path: "/category/news/blockchain", subItem: false },
      {
        title: "اطلاعیه صرافی",
        path: "/category/news/exchange-announcement",
        subItem: false,
      },
      {
        title: "رمز ارز در ایران",
        path: "/category/news/cryptocurrency-in-iran",
        subItem: false,
      },
      { title: "عمومی", path: "/category/news/public", subItem: false },
    ],
  },
  {
    title: "آموزش",
    subMenu: true,
    subMenuItems: [
      { title: "کریپتو پدیا", path: "", subItem: false },
      { title: "کریپتو کده", path: "", subItem: false },
      { title: "کیف پول", path: "", subItem: false },
      {
        title: "صرافی",
        subItem: true,
        subMenu: [
          { title: "صرافی متمرکز", path: "" },
          { title: "صرافی غیر متمرکز", path: "" },
        ],
      },
      { title: "سرمایه گذاری", path: "", subItem: false },
      { title: "ترید", path: "", subItem: false },
      { title: "دیفای", path: "", subItem: false },
      { title: "NFT", path: "", subItem: false },
      { title: "بازی", path: "", subItem: false },
      { title: "استخراج", path: "", subItem: false },
      { title: "مقالات عمومی", path: "", subItem: false },
    ],
  },
  {
    title: "تحلیل",
    subMenu: true,
    subMenuItems: [
      { title: "تحلیل تکنیکال", subItem: false },
      { title: "تحلیل فاندامنتال", subItem: false },
      { title: "تحلیل اقتصادی", subItem: false },
      { title: "تحلیل آنچین", subItem: false },
    ],
  },
  {
    title: "قیمت ارز دیجیتال",
    subMenu: true,
    subMenuItems: [
      { title: "قیمت لحظه ای ارز های دیجیتال", subItem: false },
      { title: "قیمت بیت کوین", subItem: false },
      { title: "قیمت اتریوم", subItem: false },
      { title: "قیمت تتر", subItem: false },
      { title: "ماشین حساب ارز دیجیتال", subItem: false },
      { title: "مقایسه قیمت در صرافی های ایرانی", subItem: false },
    ],
  },
  {
    title: "ویدیو",
    subMenu: true,
    subMenuItems: [
      { title: "آموزش مفاهیم", subItem: false },
      { title: "تحلیل تکنیکال", subItem: false },
      { title: "تحلیل آنچین", subItem: false },
      { title: "لایو اینستاگرام", subItem: false },
      {
        title: "صرافی",
        subItem: false,
      },
      { title: "بازی", subItem: false },
      { title: "عمومی", subItem: false },
    ],
  },
  { title: "ایردراپ", subMenu: false },
  { title: "پروژه های کلاهبرداری", subMenu: false },
  { title: "میهن پادکست", subMenu: false },
];
</script>

<style lang="scss" scoped>
.search {
  border: 1px solid rgba(113, 112, 112, 0.681);
}
.wrap-sub-menu,
.secound-sub-menu {
  display: none;
}
.single-menu:hover .wrap-sub-menu {
  display: block;
}
.single-sub-menu:hover .caption-sub-menu .title {
  color: #38bdf8;
}
.caption-sub-menu:hover .secound-sub-menu {
  display: block !important;
}
</style>
