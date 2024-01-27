<template>
  <div class="bg-[#1f2024] text-[#ccc]">
    <div class="w-[80%] mx-auto flex items-center justify-between">
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
              <i v-if="item.subMenu" class="icon-caret-down mt-2 mr-1"></i>
            </div>
            <div
              v-if="item.subMenu"
              class="wrap-sub-menu absolute z-10 right-0 top-[70px] w-[200px] border-t-2 border-[#38bdf8] transition-all bg-[#1f2024] py-5 px-3 rounded-b-md"
            >
              <ul>
                <li
                  v-for="(option, index) in item.subMenuItems"
                  :key="index"
                  class="single-sub-menu relative hover:cursor-pointer text-sm my-4"
                >
                  <div class="caption-sub-menu">
                    <div class="title flex items-center justify-between">
                      <span>{{ option.title }}</span>
                      <i v-if="option?.subMenu" class="icon-rewind"></i>
                    </div>
                    <div
                      v-if="option?.subMenu"
                      class="secound-sub-menu absolute left-[-130px] top-0 bg-[#1f2024] rounded-l-md"
                    >
                      <ul class="px-3 py-1">
                        <li
                          v-for="(el, index) in option.subMenu"
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
        ></i>
        <div class="relative">
          <input
            type="text"
            placeholder="جستجو"
            class="search py-2 px-2 bg-transparent outline-0"
          />
          <i class="icon-search absolute left-2 top-3"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const menuOptions = [
  {
    title: "اخبار",
    subMenu: true,
    subMenuItems: [
      { title: "بیت کوین" },
      { title: "اتریوم" },
      { title: "آلتکوین" },
      { title: "بلاکچین" },
      { title: "اطلاعیه صرافی" },
      { title: "رمز ارز در ایران" },
      { title: "عمومی" },
    ],
  },
  {
    title: "آموزش",
    subMenu: true,
    subMenuItems: [
      { title: "کریپتو پدیا" },
      { title: "کریپتو کده" },
      { title: "کیف پول" },
      {
        title: "صرافی",
        subMenu: [{ title: "صرافی متمرکز" }, { title: "صرافی غیر متمرکز" }],
      },
      { title: "سرمایه گذاری" },
      { title: "ترید" },
      { title: "دیفای" },
      { title: "NFT" },
      { title: "بازی" },
      { title: "استخراج" },
      { title: "مقالات عمومی" },
    ],
  },
  {
    title: "تحلیل",
    subMenu: true,
    subMenuItems: [
      { title: "تحلیل تکنیکال" },
      { title: "تحلیل فاندامنتال" },
      { title: "تحلیل اقتصادی" },
      { title: "تحلیل آنچین" },
    ],
  },
  {
    title: "قیمت ارز دیجیتال",
    subMenu: true,
    subMenuItems: [
      { title: "قیمت لحظه ای ارز های دیجیتال" },
      { title: "قیمت بیت کوین" },
      { title: "قیمت اتریوم" },
      { title: "قیمت تتر" },
      { title: "ماشین حساب ارز دیجیتال" },
      { title: "مقایسه قیمت در صرافی های ایرانی" },
    ],
  },
  {
    title: "ویدیو",
    subMenu: true,
    subMenuItems: [
      { title: "آموزش مفاهیم" },
      { title: "تحلیل تکنیکال" },
      { title: "تحلیل آنچین" },
      { title: "لایو اینستاگرام" },
      {
        title: "صرافی",
      },
      { title: "بازی" },
      { title: "عمومی" },
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
