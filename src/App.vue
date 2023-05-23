<template>
  <the-header @show-main="showMain"></the-header>
  <main>
    <!-- v-if="headerDisplayed" -->
    <!-- <top-bar></top-bar> -->

    <!-- <section id="id1" class="test" ref="xxx"></section> -->
    <!-- <sections-wrapper>
      <about-me></about-me>
      <works></works>
      <skills></skills>
    </sections-wrapper> -->
    <creativity-scroll></creativity-scroll>
    <!-- <section id="id2"></section>
    <section id="id3"></section>
    <section id="id4"></section> -->

    <div class="wrapper"><footer></footer></div>

    <!-- <main></main> -->
  </main>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted, onBeforeUnmount } from "vue";
import TopBar from "./components/TopBar.vue";
import TheHeader from "./components/TheHeader.vue";
import SectionsWrapper from "./components/Sections/SectionsWrapper.vue";
import AboutMe from "./components/Sections/AboutMe.vue";
import Works from "./components/Sections/Works.vue";
import Skills from "./components/Sections/Skills.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CreativityScroll from "./components/Creativity/CreativityScroll.vue";
const headerDisplayed = ref(false);
const xxx = ref(null);
gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(Flip);

const showMain = () => {
  headerDisplayed.value = true;
};

const test = () => {
  // let state = Flip.getState(".name");
  // document
  //   .querySelector(".top-bar")
  //   .appendChild(document.querySelector(".name"));
  // Flip.from(state, { duration: 1, ease: "power1.out" });
  // document.querySelector(".top-bar").classList.add("fixed");
};
onBeforeUnmount(() => {
  window.scrollTo(0, 0);
});
onMounted(() => {
  // yes, we can add it to an entire timeline!
  // scrollTrigger: {
  //   trigger: ".test",
  //   pin: true, // pin the trigger element while active
  //   start: "center center", // when the top of the trigger hits the top of the viewport
  //   end: "+=500",
  //   pinSpacing: false, // end after scrolling 500px beyond the start
  //   scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  //   // snap: {
  //   //   snapTo: "#id3", // snap to the closest label in the timeline
  //   //   duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
  //   //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
  //   //   ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
  //   // },
  let testt = gsap.timeline();

  testt
    .from("#id2", {
      xPercent: 100,
    })
    .from("#id3", {
      xPercent: 100,
    })
    .from("#id4", {
      xPercent: -100,
    });

  ScrollTrigger.create({
    // animation: testt,
    // trigger: ".wrapper",
    // start: "top top",
    // end: () => "+=" + document.querySelector(".wrapper").offsetWidth,
    // scrub: 1,
    // pin: true,
    // markers: true,
    // pinSpacing: false,
    // anticipatePin: 1,
  });
});
</script>

<style scoped>
/* section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
} */
.fixed {
  position: fixed;
  top: 0;
}
.wrapper {
  height: 2000px;
  width: 100%;
  position: relative;
}

#id1 {
  background-color: red;
  /* height: 1000px; */
}
#id2 {
  background-color: blue;

  z-index: 1;
}
#id3 {
  background-color: green;

  z-index: 2;
}
#id4 {
  background-color: yellow;

  z-index: 3;
}
</style>
