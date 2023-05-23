<template>
  <div class="gallery mt-4 relative" ref="el">
    <div
      class="absolute top-2/4 -translate-y-2/4 right-0 text-5xl cursor-pointer duration-500 hover:translate-x-2"
      @click="swiperRef.slideNext()"
    >
      <Icon icon="raphael:arrowright" />
    </div>
    <div
      class="absolute top-2/4 -translate-y-2/4 left-0 text-5xl cursor-pointer duration-500 hover:-translate-x-2"
      @click="swiperRef.slidePrev()"
    >
      <Icon icon="raphael:arrowleft" />
    </div>
    <swiper
      @swiper="onSwiper"
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      }"
      :pagination="true"
      :bulletClass="test"
      :modules="modules"
      class="mySwiper max-w-md"
    >
      <swiper-slide v-for="img in works"
        ><work-image :img="img.img" :name="img.name"></work-image
      ></swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination } from "swiper";
import { ref, onMounted, watch, watchEffect } from "vue";
import { useElementVisibility } from "@vueuse/core";
import { useSwiper } from "swiper/vue";
import { useElementStyle } from "@vueuse/motion";
import { Icon } from "@iconify/vue";
import WorkImage from "./WorkImage.vue";
import "swiper/css";
import "swiper/css/pagination";
import gsap from "gsap";
const el = ref(null);
const swiperRef = ref();
const elIsVisible = useElementVisibility(el);
const modules = [EffectCoverflow, Pagination];
const works = [
  {
    name: "Chatzy",
    desc: "Introducing a nostalgic chat application that takes you back in time, built using Vue.js and Firebase. This project marks my first exploration into Firebase, bringing a touch of vintage charm to modern-day communication. ",
    img: "images/works/chatzy.webp",
    site: "https://remarkable-lokum-9c58d2.netlify.app",
    source: "https://github.com/knyslys/chat-application",
  },
  {
    name: "JSComputers",
    desc: "Introducing a user-friendly eShop prototype built with Vue.js, specifically tailored for purchasing prebuilt PCs. ",
    img: "images/works/pc.webp",
    site: "https://superb-chimera-7e90db.netlify.app",
    source: "https://github.com/knyslys/vue-eshop",
  },
  {
    name: "Weather application",
    desc: "Introducing a charming weather application that combines simplicity and cuteness, providing you with weather information for any city of your choice.",
    img: "images/works/weather.webp",
    site: "https://stunning-dieffenbachia-f61a66.netlify.app",
    source: "https://github.com/knyslys/vue-weather-prebuilt",
  },
  {
    name: "Bike design application",
    desc: "Introducing an simple bike designer application that allows user to change colors of the bike and It's parts ",
    img: "images/works/bike.webp",
    site: "https://golden-sprinkles-5ec21c.netlify.app",
    source: "https://github.com/knyslys/bike-designer",
  },
  {
    name: "Hedgehog gaming deals",
    desc: "Introducing a delightful website that shows best gaming deals available at the moment from Steam, GoG, Uplay, Humble Store.  Built using React.js, this site showcases a simple and charming design.",
    img: "images/works/games.webp",
    site: "https://hilarious-maamoul-fdbbf4.netlify.app",
    source: "https://github.com/knyslys/hedgehog-deals",
  },
];

watch(elIsVisible, (newValue, oldValue) => {
  const workSection = document.querySelector("#works");
  console.log(elIsVisible.value);
  console.log(workSection.style.opacity);
  if (workSection.style.opacity > 0 && newValue) {
    console.log("hitinu");
    playAnim();
  }
});

const playAnim = () => {
  let tl = gsap.timeline();

  tl.fromTo(
    el.value,
    {
      autoAlpha: 0,
      y: -50,
    },
    {
      autoAlpha: 1,
      y: 50,
    }
  );
};

onMounted(() => {
  // console.log(style.opacity);
  // gsap.to(".gallery", {
  //   y: 20,
  // });
});
const onSwiper = (sl) => {
  swiperRef.value = sl;
};
</script>

<style scoped>
.gallery {
  /* clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%); */
}
.swiper-pagination-bullet {
  background-color: green !important;
}
</style>
