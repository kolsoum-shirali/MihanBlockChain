<template>
  <div class="bg-[#f4f9ff] border border-[#ebe4e4] rounded-lg p-4">
  <div class="flex items-end justify-center">
    <span>{{ singleChart.title }}</span>
    <div class="w-[30px] h-[30px] mr-2">
        <img
          :src="`/_nuxt/assets/images/home/digital/${singleChart.img}`"
          class="w-full h-full"
        />
      </div>
  </div>
    <div class="mt-4">
      <Line :data="data" :options="options" />
    </div>
  </div>
</template>

<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#f87979",
      data: [40, 39, 10, 40, 39, 80, 40],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};
const props = defineProps(["singleChart"]);
const { singleChart } = props;

</script>