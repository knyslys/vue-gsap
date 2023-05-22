<template>
  <div class="container mx-auto grid grid-cols-2">
    <div></div>
    <div class="list-wrapper fixed top-2/4">
      <span>hi</span>
    </div>
    <div class="section-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  let testt = gsap.timeline();

  testt
    .from("#about", {
      xPercent: 200,
      autoAlpha: 0,
    })
    .from("#works", {
      xPercent: 200,
      autoAlpha: 0,
    })
    .from("#skills", {
      xPercent: 200,
      autoAlpha: 0,
    });

  ScrollTrigger.create({
    animation: testt,
    trigger: ".section-wrapper",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    pin: true,
    markers: true,
    pinSpacing: true,
    anticipatePin: 1,
  });
});
</script>

<style scoped>
.section-wrapper {
  height: 3000px;
  position: relative;

  /* overflow: hidden; */
  /* background-color: white; */
}
</style>
