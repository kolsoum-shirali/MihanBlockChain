<template>
  <div>
    <h1 class="text-3xl font-bold text-center mt-10">
      قیمت ارزهای دیجیتال به صورت لحظه ای
    </h1>
    <div class="my-20">
      <div class="my-5 flex items-center justify-between">
        <div class="flex items-center w-[30%]">
          <span>نمایش :</span>
          <q-select
            filled
            v-model="selectedShowCounter"
            :options="showCounter"
            class="mr-2"
          />
        </div>
        <div class="w-[30%]">
          <q-select
            filled
            v-model="searchedResult"
            use-input
            input-debounce="0"
            label="جستجو کنید"
            :options="options"
            @filter="filterFn"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
      </div>
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="bg-grey-2 text-grey-7"
          active-color="primary"
          indicator-color="black"
          align="justify"
        >
          <q-tab name="completeList" label="لیست کامل" />
          <q-tab name="mostChanges" label="بیشترین تغییرات" />
        </q-tabs>
        <q-tab-panels v-model="tab" animated class="bg-primary text-white">
          <q-tab-panel name="completeList">
            <PagesCurrencyDetailCompleteListTab />
          </q-tab-panel>
          <q-tab-panel name="mostChanges"> </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script setup>
const tab = ref("completeList");
const selectedShowCounter = ref(50);
const showCounter = [10, 20, 30, 40, 50];
const searchedResult = ref(null);
const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];
const options = ref(stringOptions);
const filterFn = (val, update) => {
  if (val === "") {
    update(() => {
      options.value = stringOptions;
    });
    return;
  }
  update(() => {
    const needle = val.toLowerCase();
    options.value = stringOptions.filter(
      (v) => v.toLowerCase().indexOf(needle) > -1
    );
  });
};
</script>

<style lang="scss" scoped></style>
