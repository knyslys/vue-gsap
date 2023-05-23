<template>
  <div
    ref="el"
    class="top-bar p-4 bg-opacity-100 bg-zinc-900"
    :class="{ fixed: showTopBar }"
  ></div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import gsap from "gsap";
import Flip from "gsap/Flip";
import { useElementVisibility } from "@vueuse/core";
const scrolledTop = ref();
const el = ref(null);
const headerIsVisible = useElementVisibility(document.querySelector("header"));
const topNavIsVisible = useElementVisibility(el);
const showTopBar = ref(false);

gsap.registerPlugin(Flip);

watch([headerIsVisible, topNavIsVisible], ([newValHead, newValueNav]) => {
  if (!newValHead) {
    setFixed();
  } else if (newValHead) resetFixed();
});

const setFixed = async () => {
  await el.value.classList.add("fixed");
  showTopBar.value = true;
  let headerTextEl = document.querySelector(".name");
  let headerTextState = Flip.getState(headerTextEl);
  el.value.appendChild(headerTextEl);
  Flip.from(headerTextState, { duration: 1, fontSize: 20, ease: "power1.out" });
};

const resetFixed = () => {
  el.value.classList.remove("fixed");
  showTopBar.value = false;
  let headerTextEl = document.querySelector(".name");
  let headerPresentationEl = document.querySelector(".presentation-text");
  let headerTextState = Flip.getState(headerTextEl);
  headerPresentationEl.prepend(headerTextEl);
  Flip.from(headerTextState, {
    duration: 1,
    scale: 1,
    fontSize: 48,
    autoRound: false,
    lineHeight: "27px",
    ease: "power1.out",
  });
};

onMounted(() => {
  window.addEventListener("scroll", setTopValue);
  // let tl = gsap.timeline();
  // tl.from(el.value, {
  //   y: -50,
  // });
  // ScrollTrigger.create({
  //   animation: tl,
  //   trigger: el.value,
  //   endTrigger: "footer",
  //   markers: true,
  //   start: "top,top",
  //   end: "9000",
  //   pin: true,
  //   snap: false,
  // });
});

const setTopValue = () => {
  scrolledTop.value = window.top.scrollY;
};
</script>

<style scoped>
.top-bar {
  transition: 0.2s all linear;
}
.fixed {
  position: fixed;
  animation: fixedAnim 1s linear;
  width: 100%;
  top: 0;
  background-color: rgb(39 39 42);
  z-index: 5000;
}

@keyframes fixedAnim {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
