<template>
  <div class="w-[80%] mx-auto">
    <div class="flex justify-between">
      <span class="caption text-xl font-bold pl-10 pr-3 pt-2 pb-3"
        >میهن پادکست</span
      >
      <button
        class="bg-[#0071bd] text-white rounded flex items-center px-3 text-sm"
      >
        مطالب بیشتر <i class="icon-rewind mt-1"></i>
      </button>
    </div>
    <div class="flex justify-between my-5">
      <div class="wrap-img relative w-[30%] overflow-hidden rounded">
        <img
          :src="`/_nuxt/assets/images/home/padcast/${mainPadcast.img}`"
          class="rounded w-full h-full transition-transform"
        />
        <nuxt-link
          to="/"
          class="article-type absolute z-20 bottom-0 left-0 text-white px-5 py-1 rounded-md transition-colors"
          >میهن پادکست</nuxt-link
        >
        <div class="overlay z-10 rounded transition-colors"></div>
      </div>
      <div class="rounded w-[70%] text-[#666] p-5 transition-colors">
        <div>
          <div class="flex items-center text-sm">
            <div class="flex items-center">
              <i class="icon-user-circle-o"></i>
              <span class="mr-1">{{ mainPadcast.authore }}</span>
            </div>
            <div class="flex items-center mr-2">
              <i class="icon-clock"></i>
              <span class="mr-1">{{ mainPadcast.date }}</span>
            </div>
          </div>
          <div class="mt-2">
            <h1
              class="text-black hover:text-[#38bdf8] text-lg font-bold text-justify hover:cursor-pointer"
            >
              {{ mainPadcast.title }}
            </h1>
            <p class="description text-sm mt-2 text-justify">
              {{ mainPadcast.description }}
            </p>
            <button
              class="bg-[#38bdf8] text-white rounded flex items-center px-3 py-3 text-sm mt-5"
            >
              بیشتر بخوانید <i class="icon-rewind mt-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <PagesHomeMihanPadcastPostItems />
  </div>
</template>

<script setup>
const mainPadcast = {
  img: "mihan_podcast_odyssey.jpg",
  title:
    "میهن پادکست – اودیسه اقتصاد، قسمت سوم | عصر اکتشاف و مکتب مرکانتیلیسم",
  description:
    "اوضاع اقتصاد جهانی بعد از قرون وسطی چه شد؟ تفکر بلونیسم یا زراندوزی چگونه شکل گرفت و عصر طلایی را رقم زد؟ در قسمت هفتادونهم میهن پادکست بعد از گذر از عصر تاریکی به سراغ عصر اکتشاف رفتیم و مکتب اقتصادی مرکانتیلیسم رو بررسی کردیم. شما می‌توانید میهن پادکست را از پلتفرم‌های صوتی کست باکس، اسپاتیفای و اپل پادکست بشنوید. برای گوش دادن به بقیه قسمت‌های میهن پادکست از طریق سایت، می‌توانید به لینک زیر مراجعه کنید: میهن پادکست",
  authore: "علیرضا جعفری",
  date: "3 مهر 1402 - 22:03",
};
</script>

<style lang="scss" scoped>
.caption {
  background-color: #38bdf8;
  color: white;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 18% 100%);
}

.description {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.article-type {
  background: linear-gradient(
    90deg,
    rgba(22, 31, 43, 1) 70%,
    rgba(0, 168, 255, 1) 100%
  );
  &:hover {
    background: #38bdf8;
  }
}
.wrap-img:hover {
  .overlay {
    background: #0000007c;
    position: absolute;
    content: "";
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }
  img {
    transform: scale(1.1);
  }
}
</style>
