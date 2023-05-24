<template>
  <div class="flex place-items-center relative overflow-hidden">
    <img src="images/me.webp" alt="Picture of me" class="mx-auto opacity-1" />
    <ul>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
    </ul>
    <div class="line line--bottom h-[2px] bg-lime-400 absolute bottom-0"></div>
    <div
      class="line line--right w-[3px] bg-gradient-to-b from-transparent from-20% to-lime-400 absolute right-0"
    ></div>
    <div
      class="line line--left w-[3px] bg-gradient-to-b from-transparent from-20% to-lime-400 absolute left-0"
    ></div>

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
  filter: grayscale(1);
  /* max-width: 45rem; */
}
</style>
