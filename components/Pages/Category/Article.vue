<template>
  <div class="mt-10 text-justify text-md">
    <h1 class="text-3xl font-bold">{{ articleContent.title }}</h1>
    <p class="mt-5">
      {{ articleContent.description }}
    </p>
    <div class="mt-10">
      <div v-for="(item, index) in questions" :key="index" class="my-7 border">
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
const props = defineProps(["questions", "articleContent"]);
const { questions } = props;
const { articleContent } = props;
const showSection = (indexValue) => {
  questions[indexValue].show = !questions[indexValue].show;
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
