<template>
  <div class="bg-white p-10">
    <div>
      <span class="caption text-lg font-bold pl-10 pr-3 pt-2 pb-3"
        >ارتباط با ما</span
      >
    </div>
    <div class="flex justify-between flex-wrap mt-10">
      <div class="w-[47%]">
        <div class="flex flex-col">
          <label>نام و نام خانوادگی :</label>
          <input
            type="text"
            class="outline-transparent border mt-2 hover:bg-[#9999992a] focus:bg-[#9999992a] h-[40px] px-3 transition-colors"
          />
        </div>
      </div>
      <div class="w-[47%]">
        <div class="flex flex-col">
          <label>پست الکترونیکی:</label>
          <input
            type="text"
            class="outline-transparent border mt-2 hover:bg-[#9999992a] focus:bg-[#9999992a] h-[40px] px-3 transition-colors"
          />
        </div>
      </div>
      <div class="w-[47%] mt-5">
        <div class="flex flex-col">
          <label>عنوان پیام:</label>
          <input
            type="text"
            class="outline-transparent border mt-2 hover:bg-[#9999992a] focus:bg-[#9999992a] h-[40px] px-3 transition-colors"
          />
        </div>
      </div>
      <div class="w-[100%] mt-5">
        <div class="flex flex-col">
          <label>پیام شما:</label>
          <textarea
            class="outline-transparent border mt-2 hover:bg-[#9999992a] focus:bg-[#9999992a] p-5 transition-colors"
            rows="10"
          ></textarea>
        </div>
      </div>
      <button
        class="bg-[#38bdf8] text-white px-5 py-2 rounded mt-5 hover:bg-[#238cc8] transition-colors"
      >
        ارسال
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.caption {
  background-color: #38bdf8;
  color: white;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 24% 100%);
}
</style>
