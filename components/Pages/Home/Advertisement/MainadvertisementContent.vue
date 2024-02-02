<template>
  <div>
    <div class="w-[85%] mx-auto bg-white p-10">
      <div>
        <span class="caption text-lg font-bold pl-10 pr-3 pt-2 pb-3"
          >تبلیغات</span
        >
      </div>
      <p class="text-justify leading-8 mt-10">
        میهن بلاکچین یک مرجع آموزشی، تحليلی و خبری در حوزه بلاکچین و ارزهای
        رمزنگاری شده است. مجموعه ما از سال ۱۳۹۵ به صورت جدی در زمینه سیستم های
        توزیع شده و غیرمتمرکز فعالیت داشته است.
      </p>
      <p class="text-justify leading-8 mt-10">
        میهن بلاکچین به دلیل نوپا بودن این تکنولوژی و عدم درک درست از فرصت هایی
        که این حوزه می تواند در اختیار جوامع قرار دهد، تبلیغات را با نظارت بیشتر
        و دقیق تری بررسی و منتشر می کند. به همین دلیل شرایط و قوانین تبلیغات در
        وبسایت به شرح زیر است:
      </p>
      <ul class="mt-10">
        <li
          v-for="(item, index) in options"
          :key="index"
          class="flex items-center leading-8"
        >
          <i class="icon-circle custom-font-10"></i
          ><span class="mr-2">{{ item.title }}</span>
        </li>
      </ul>
      <p class="mt-10 bg-[#ffe6e2] text-[#7c1100] px-3 py-5">
        تیم میهن بلاکچین حق نقد و بررسی کسب و کار شما را در هر زمانی خواهد داشت
        و تبلیغات شما در میهن بلاکچین تعهدی برای جلوگیری از این کار به همراه
        نخواهد داشت.
      </p>
      <p class="text-justify mt-10">
        برای ارتباط با تیم مارکتینگ میهن بلاکچین و اطلاع از قیمت ها می توانید
        درخواست خود را به تلگرام تبلیغات میهن بلاکچین ارسال کنید.
      </p>
      <div class="flex justify-center items-center">
        <button
          class="bg-[#38bdf8] text-white px-5 py-2 rounded mt-5 hover:bg-[#238cc8] transition-colors"
        >
          ارتباط با بخش تبلیغات (تلگرام)
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const options = [
  {
    title:
      "زمینه و نوع فعالیت اگهی دهنده توسط تیم میهن بلاکچین بررسی و تایید خواهد شد.",
  },
  {
    title:
      "محتوای آگهی قبل از درج در سایت توسط میهن بلاکچین بررسی و تایید می شود.",
  },
  {
    title: "در صورت انتخاب رپورتاژ آگهی، حتما قوانین مربوطه به آن مطالعه شود.",
  },
  {
    title:
      "زمان اجرای تبلیغات، حداقل ۲ روز بعد از واریز و نهایی شدن تبلیغ می باشد.",
  },
];
</script>

<style lang="scss" scoped>
.caption {
  background-color: #38bdf8;
  color: white;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 100%);
}
</style>
