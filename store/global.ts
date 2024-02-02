import { defineStore } from "pinia";

export const useGlobalStore = defineStore("globalStore", () => {
  const showDrawer = ref(false);
  function showDrawerStatus(value: any) {
    showDrawer.value = value;
  }
  return { showDrawerStatus, showDrawer };
});
