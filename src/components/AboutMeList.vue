<template>
  <li class="list flex place-items-center gap-x-4 text-3xl" ref="ss">
    <span>About</span>
    <div class="about-circlecheck h-2 w-2 bg-white rounded-full"></div>
  </li>
  <li class="list flex place-items-center gap-x-4 text-3xl" ref="ss">
    <span>Works</span>
    <div class="about-circlecheck h-2 w-2 bg-white rounded-full ml-auto"></div>
  </li>
  <li class="list flex place-items-center gap-x-4 text-3xl" ref="ss">
    <span>Skills</span>
    <div class="about-circlecheck h-2 w-2 bg-white rounded-full ml-auto"></div>
  </li>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import gsap from "gsap";
onMounted(() => {
  let l = gsap.timeline();
  l.from(".list", {
    x: 500,
    stagger: 0.2,
  }).to(".list", {
    x: 20,
    stagger: 0.2,
  });
});
</script>

<style scoped>
.green {
  background-color: green !important;
}
</style>
