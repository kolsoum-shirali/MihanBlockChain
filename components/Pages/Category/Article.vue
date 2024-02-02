<template>
  <div class="mt-10 text-justify text-md">
    <h1 class="text-3xl font-bold">اخبار بیت کوین</h1>
    <p class="mt-5">
      بیت کوین به عنوان اولین ارز رمزنگاری شده جهان همواره از اهمیت زیادی
      برخوردار است و در بازار کریپتو به مقبولیت کافی رسیده است. بررسی و رصد
      اخبار بیت کوین به صورت لحظه‌ای یکی از فرایندهای مهم بازار رمزارزها است.
      برای آگاهی بیشتر از سرمایه‌گذاری در ارز دیجیتال و انجام معاملات و ترید،
      پیگیری اخبار قیمت بیت کوین کمک شایان ذکری می‌کند. اخبار ارز دیجیتال بیت
      کوین (Bitcoin) در میهن بلاکچین را در این صفحه مطالعه کنید.
    </p>
    <div class="mt-10">
      <div v-for="(item, index) in items" :key="index" class="my-7 border">
        <div
          class="bg-[rgba(0,0,0,.03)] cursor-pointer p-5 flex items-center justify-between"
          @click="showSection(index)"
        >
          <p class="">{{ item.question }}</p>
          <i :class="!item.show ? 'icon-caret-down' : 'icon-caret-up'"></i>
        </div>
        <div class="panel" :class="`item${index + 1}`">
          <p class="py-5">
            {{ item.response }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = ref([
  {
    show: false,
    question: "چگونه از اخبار بیت کوین مطلع شویم؟",
    response:
      "در بخش اخبار بیت کوین میهن بلاکچین می‌توانید هر گونه اخبار مرتبط با بیت کوین و تحلیل این رمزارز محبوب را دنبال کنید. همچنین می‌توانید اخبار بیت کوین را از سایت‌هایی مانند کوین دسک و کوین تلگراف دنبال کنید.",
  },
  {
    show: false,
    question: "چرا پیگیری اخبار بیت کوین مهم است؟",
    response:
      "از آنجاییکه بیت کوین به مقبولیت بیشتری نسبت به سایر ارزهای دیجیتال رسیده است، پیگیری اخبار بیت کوین به صورت لحظه‌ای، به تحلیل روند بازار و سرمایه‌گذاری در کریپتو کمک بسیاری می‌کند.",
  },
]);
const showSection = (indexValue) => {
  items.value[indexValue].show = !items.value[indexValue].show;
  const panel = document.querySelector(`.item${indexValue + 1}`);
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
};
</script>

<style lang="scss" scoped>
.panel {
  padding: 0px 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
</style>
