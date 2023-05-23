<template>
  <div class="bg-zinc-50 flex place-items-center relative overflow-hidden">
    <img src="images/me.webp" alt="Picture of me" class="mx-auto opacity-1" />
    <ul>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
    </ul>
    <div class="line line--bottom h-2 bg-lime-400 absolute bottom-0"></div>
    <div class="line line--right w-[6px] bg-lime-400 absolute right-0"></div>
    <div class="line line--left w-[6px] bg-lime-400 absolute left-0"></div>

    <img
      src="images/icons/icon-1.png"
      id="icon--1"
      class="absolute right-0 -bottom-5"
    />
  </div>
</template>

<script setup>
import { onMounted, watch } from "vue";
import gsap from "gsap";
const props = defineProps({
  drawLines: {
    type: Boolean,
  },
});

watch(
  () => props.drawLines,
  (newValue, oldValue) => {
    if (newValue) playLineAnimation();
  }
);

onMounted(() => {
  // playLineAnimation();
});
const playLineAnimation = () => {
  const lineB = gsap.timeline();
  const lineR = gsap.timeline({ paused: true });
  lineB.to(".line--bottom", {
    width: "100%",
    onComplete: () => {
      lineR.play();
    },
  });
  lineR
    .to(".line--right", {
      height: "100%",
    })
    .to(
      ".line--left",
      {
        height: "100%",
      },
      "-=0.5"
    );
};
</script>

<style scoped>
img {
  /* aspect-ratio: 16/9; */
  max-width: 15rem;
  /* max-height: 10rem; */
  display: block;
  /* max-width: 45rem; */
}
</style>
