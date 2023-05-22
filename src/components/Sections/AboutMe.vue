<template>
  <section
    id="about"
    class="section-panel flex flex-col place-content-center p-4"
  >
    <div class="about-text flex flex-col gap-y-2">
      <h1 class="text-4xl">About me</h1>
      <p>
        Hi, I'm a front end developer who loves coding and creating beautiful
        websites. Coding has been my passion since childhood, when I used to
        make game scripts and mods for fun. I was fascinated by how I could
        manipulate the game world with code and create new experiences for
        myself and others
      </p>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // ScrollTrigger.create({
  //   trigger: "#abut",
  //   start: "top top",
  //   end: "bottom bottom",
  //   scrub: 1,
  //   pin: true,
  //   markers: true,
  //   // pinSpacing: true,
  //   anticipatePin: 1,
  //   // onUpdate: checkValues,
  //   onUpdate: () => {
  //     if (ScrollTrigger.isInViewport("#about", 1, true)) {
  //       console.log("esu");
  //     }
  //   },
  // });
});
</script>

<style scoped>
section {
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
}

.fadeout {
  transition: 1s all linear;
  opacity: 0 !important;
}
</style>
