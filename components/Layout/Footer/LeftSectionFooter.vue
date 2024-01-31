<template>
  <div class="text-white">
    <div class="w-[300px]">
      <img
        src="@/assets/images/home/footer/mihan.png"
        alt="mihan"
        class="w-full"
      />
    </div>
    <p class="mt-5 text-justify custom-font-12 leading-7">
      میهن بلاکچین مرجعی آموزشی، تحلیلی و خبری در حوزه تکنولوژی بلاکچین، رمزارز
      بیت کوین و دیگر رمزارزها است. مجموعه میهن بلاکچین به‌طور پیوسته هدف گسترش
      تکنولوژی بلاک چین و ارزهای دیجیتال در ایران و در سطح جهانی را دنبال
      می‌کند.
    </p>
    <div class="flex justify-center items-center mt-5">
      <i
        v-for="(item, index) in socials"
        :key="index"
        :class="item.icon"
        class="hover:cursor-pointer text-xl mx-1 hover:text-[#38bdf8] transition-colors"
      ></i>
    </div>
  </div>
</template>

<script setup>
const socials = [
  { icon: "icon-facebook-with-circle" },
  { icon: "icon-linkedin-with-circle" },
  { icon: "icon-telegram" },
  { icon: "icon-video" },
  { icon: "icon-youtube" },
  { icon: "icon-twitter" },
  { icon: "icon-instagram" },
];
</script>

<style lang="scss" scoped></style>
