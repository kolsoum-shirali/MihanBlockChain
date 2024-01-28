<template>
  <Carousel
    v-bind="settings"
    :breakpoints="breakpoints"
    dir="rtl"
    :wrapAround="true"
    ref="carousel"
  >
    <Slide v-for="(item, index) in charts" :key="index">
      <div class="carousel__item">
        <PagesHomeChartSingleChart :singleChart="item" />
      </div>
    </Slide>

    <template #addons>
      <navigation class="home-chart-navigation" />
    </template>
  </Carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};
const breakpoints = {
  400: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  578: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  768: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  992: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  1400: {
    itemsToShow: 3,
    snapAlign: "start",
  },
};
import { Carousel, Slide, Navigation } from "vue3-carousel";
const charts = [
  {
    title: " USDC",
    img: "solana.png",
    dollarPrice: "$2,273.32",
    tomanPrice: "127,561,668.50 تومان ",
  },
  {
    title: " USDC",
    img: "avalanche-red.png",
    dollarPrice: "$2,273.32",
    tomanPrice: "127,561,668.50 تومان ",
  },
  {
    title: " USDC",
    img: "binancecoin.png",
    dollarPrice: "$2,273.32",
    tomanPrice: "127,561,668.50 تومان ",
  },
  {
    title: " USDC",
    img: "bitcoin-color.png",
    dollarPrice: "$2,273.32",
    tomanPrice: "127,561,668.50 تومان ",
  },
  {
    title: " USDC",
    img: "cardano.png",
    dollarPrice: "$2,273.32",
    tomanPrice: "127,561,668.50 تومان ",
  },
  {
    title: " USDC",
    img: "solana.png",
    dollarPrice: "$2,273.32",
    tomanPrice: "127,561,668.50 تومان ",
  },
  {
    title: " USDC",
    img: "ethereum.png",
    dollarPrice: "$2,273.32",
    tomanPrice: "127,561,668.50 تومان ",
  },
  {
    title: " USDC",
    img: "ripple.png",
    dollarPrice: "$2,273.32",
    tomanPrice: "127,561,668.50 تومان ",
  },
  {
    title: " USDC",
    img: "solana.png",
    dollarPrice: "$2,273.32",
    tomanPrice: "127,561,668.50 تومان ",
  },
  {
    title: " USDC",
    img: "staked-ether.png",
    dollarPrice: "$2,273.32",
    tomanPrice: "127,561,668.50 تومان ",
  },
  {
    title: " USDC",
    img: "tether-color.png",
    dollarPrice: "$2,273.32",
    tomanPrice: "127,561,668.50 تومان ",
  },
  {
    title: " USDC",
    img: "usd-coin.png",
    dollarPrice: "$2,273.32",
    tomanPrice: "127,561,668.50 تومان ",
  },
];
</script>

<style scoped lang="scss">
.carousel {
  &__slide {
    .carousel__item {
      width: 95%;
      margin: 0 auto;
    }
  }
}
</style>
