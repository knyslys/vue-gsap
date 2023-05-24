<template>
  <div class="wrappers bg-zinc-900 relative">
    <div class="container mx-auto">
      <h1 class="creativity-logo logo--1 text-6xl">Passion</h1>
      <h1 class="creativity-logo logo--2 text-6xl">Eagirness</h1>
      <h1 class="creativity-logo logo--3 text-6xl">Excitment</h1>
      <div class="grid grid-cols-1 gap-x-2">
        <div class="leftd rounded-full opacity-0 z-10">
          <my-picture :drawLines="drawLines"></my-picture>
        </div>
        <div
          class="right flex flex-col gap-y-2 bg-white absolute w-full left-0 bottom-0"
        >
          <!-- <div class="bg-green-400 h-40">sdfsdf</div>
          <div class="bg-green-400 h-40">sdfsdf</div>
          <div class="bg-green-400 h-40">sdfsdf</div>
          <div class="bg-green-400 h-40">sdfsdf</div>
          <div class="bg-green-400 h-40">sdfsdf</div>
          <div class="bg-green-400 h-40">sdfsdf</div>
          <div class="bg-green-400 h-40">sdfsdf</div>
          <div class="bg-green-400 h-40">sdfsdf</div>
          <div class="bg-green-400 h-40">sdfsdf</div>
          <div class="bg-green-400 h-40">sdfsdf</div>
          <div class="bg-green-400 h-40">sdfsdf</div>
          <div class="bg-green-400 h-40">sdfsdf</div>
          <div class="bg-green-400 h-40">sdfsdf</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MyPicture from "../MyPicture.vue";
const drawLines = ref(false);
onMounted(() => {
  const tl = gsap.timeline();
  const tl2 = gsap.timeline();
  tl.from(".logo--1", { "clip-path": "inset(0 100% 0 0)" })
    .to(".logo--1", {
      "clip-path": "inset(0 0 0 0)",
    })
    .to(".logo--1", {
      "clip-path": "inset(0 0 100% 0)",
    })
    .from(".logo--2", {
      "clip-path": "inset(0 100% 0 0)",
    })
    .to(".logo--2", {
      "clip-path": "inset(0 0 100% 0)",
    })
    .from(".logo--3", {
      "clip-path": "inset(0 100% 0 0)",
    })
    .to(".logo--3", {
      "clip-path": "inset(0 0 100% 0)",
    });

  tl2.to("#icon--1", {
    x: -5000,
  });

  ScrollTrigger.create({
    animation: tl,

    trigger: ".wrappers",
    start: "top top",
    end: "bottom center",
    pin: ".leftd",
    scrub: 1,
    markers: true,
    onEnter: () => {
      playPictureAnimation();
    },
  });
  ScrollTrigger.create({
    animation: tl2,

    trigger: ".wrappers",
    start: "top top",
    end: "+=8000px",
    scrub: 1,
  });
});

const playPictureAnimation = () => {
  const tl = gsap.timeline();
  tl.from(".leftd", {
    y: -100,
    // scale: -1,
  })
    .to(".leftd", {
      x: 0,
      y: 0,
    })
    .to(
      ".leftd",
      {
        opacity: 1,
        onComplete: () => {
          setLines();
        },
        // scale: 1,
      },
      "-=0.3"
    );
  // .to(
  //   ".left",
  //   {
  //     scale: 1,
  //   },
  //   "-=2.5"
  // );
};
const setLines = () => {
  console.log("drawinti line");
  drawLines.value = true;
};
</script>

<style scoped>
.creativity-logo {
  color: Red;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 5vh;
  z-index: 10;
  writing-mode: vertical-rl;
}
.wrappers {
  min-height: 100vh;
}
.logo--1 {
  z-index: 3;
}
.logo--2 {
  /* clip-path: inset(0 100% 0 0); */
  /* background-color: red; */
  z-index: 2;
}
.logo--3 {
  /* clip-path: inset(0 100% 0 0); */
  z-index: 1;
}
.hallo {
  /* clip-path: inset(0 100% 0 0); */
}
</style>
