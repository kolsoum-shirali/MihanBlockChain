<template>
  <div>
    <div class="bg-white p-10">
      <div>
        <span class="caption text-lg font-bold pl-10 pr-3 pt-2 pb-3"
          >شبکه های اجتماعی</span
        >
      </div>
      <div class="mt-6">
        <div class="flex flex-wrap items-center">
          <i
            v-for="(item, index) in socials"
            :key="index"
            :class="[item.icon, item.bg]"
            class="hover:cursor-pointer text-2xl mx-1 text-white p-2 rounded-sm hover:text-[#38bdf8] transition-colors mt-6"
          ></i>
        </div>
      </div>
    </div>
    <div class="bg-white mt-5 py-5 px-10">
      <div
        v-for="(item, index) in options"
        :key="index"
        class="text-white px-3 py-2 my-2 rounded-sm flex items-center"
        :class="item.bg"
      >
        <i class="icon-telegram"></i>
        <a
          :href="item.address"
          class="hover:cursor-pointer text-sm mr-2"
          >{{ item.title }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const socials = [
  { icon: "icon-facebook-with-circle", bg: "bg-[#4080ff]" },
  { icon: "icon-linkedin-with-circle", bg: "bg-[#238cc8]" },
  { icon: "icon-telegram", bg: "bg-[#08c]" },
  { icon: "icon-video", bg: "bg-[#df0f50]" },
  { icon: "icon-youtube", bg: "bg-[#ef4e41]" },
  { icon: "icon-twitter", bg: "bg-[#40bff5]" },
  { icon: "icon-instagram", bg: "bg-[#c13584]" },
];
const options = [
  {
    title: " ارتباط مستقیم با پشتیبانی (ایمیل)",
    bg: "bg-[#b02b2c]",
    address: "mailto:contact@mihanblockchain.com",
  },
  {
    title: " ارتباط مستقیم با پشتیبانی (تلگرام)",
    bg: "bg-[#38bdf8]",
    address: "https://t.me/mblockchain",
  },
];
</script>

<style lang="scss" scoped>
.caption {
  background-color: black;
  color: white;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 17% 100%);
}
</style>
