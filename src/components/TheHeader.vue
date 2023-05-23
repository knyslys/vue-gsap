<template>
  <header
    class="min-h-screen flex flex-col place-content-center bg-zinc-200 relative overflow-hidden"
  >
    <div class="box absolute top-2/4 left-2/4 h-10 w-10 bg-zinc-900"></div>
    <container>
      <div
        class="presentation-text flex flex-col place-content-start place-items-start gap-y-6"
      >
        <h1 class="name text-5xl inline-block">Vakaris Serbenta</h1>
        <span class="job text-xl">Front<span>-</span>End Developer</span>
      </div>
    </container>
    <div
      class="header-bottom absolute bottom-[5vh] left-2/4 -translate-x-2/4 flex flex-col place-items-center gap-y-2"
    >
      <span> Check my works </span>
      <div
        class="scroll-box rounded-full bg-white flex place-content-center place-items-center cursor-pointer"
      >
        <Icon
          icon="mdi:arrow-bottom-circle"
          class="scroll-box--icon text-zinc-800 text-3xl"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import SplitType from "split-type";
import { Icon } from "@iconify/vue";

const emits = defineEmits(["show-main"]);
//now animate each character into place from 100px above, fading in:
onMounted(() => {
  console.log(document.querySelector(".top-bar"));
  let splitName = SplitType.create(".name");
  let splitJob = SplitType.create(".job");
  let headerTl = gsap.timeline();
  let bx = gsap.timeline();
  bx.to(".box", {
    rotate: 360,
    duration: 5,
  })
    .to(".box", {
      rotate: 0,
      duration: 1,
    })
    .to(".box", {
      rotate: 0,

      top: 0,
      right: 0,
      height: "100%",
      width: "50%",

      onComplete: () => {
        nameAnimation.play();
      },
    })
    .to(".box", {
      height: "100%",
      width: "100%",
      left: 0,
      duration: 2.5,
      // ease: "slow(0.1, 2, false)",
    });

  let nameAnimation = gsap.from(splitName.chars, {
    duration: 1,
    y: 150,
    autoAlpha: 0,
    stagger: 0.15,
    // ease: "back.out(1.25)",
    ease: "slow(0.5,0.8)",
    backgroundColor: "#000",
    borderRadius: "50px",
    padding: 10,
    color: "#fff",
    paused: true,
    onComplete: () => {
      jobAnimation.play();
    },
    // onComplete: () => jobAnimation.play(),
  });

  let jobAnimation = gsap.from(splitJob.words, {
    duration: 1,
    y: 50,
    autoAlpha: 0,
    stagger: 0.6,
    paused: true,
    onComplete: () => checkMyWorks.play(),
  });

  //check my works animation
  let checkMyWorks = gsap.timeline({ paused: true });
  checkMyWorks
    .from(".header-bottom span", {
      y: -50,
      opacity: 0,
    })
    .to(".header-bottom span", {
      y: -5,
      opacity: 1,
      ease: "back.out(1.25)",
      duration: 0.4,
    })
    .from(".header-bottom .scroll-box", {
      y: 50,
      opacity: 0,
    })
    .to(".header-bottom .scroll-box", {
      y: 0,
      opacity: 1,
      ease: "back.out(2)",
      onComplete: () => {
        emits("show-main");
      },
    });
  // let checkMyWorksCircle = gsap.timeline();
  // checkMyWorksCircle
  //   .from(".header-bottom .scroll-box", {
  //     y: 50,
  //     opacity: 0,
  //   })
  //   .to(".header-bottom .scroll-box", {
  //     y: 0,
  //     opacity: 1,
  //     ease: "back.out(2)",
  //     delay: 2,
  //   });
});
</script>

<style scoped>
.name {
  mask-mode: difference;
}
header {
  /* clip-path: polygon(85% 0, 100% 0, 100% 100%, 85% 100%); */
  /* clip-path: polygon(
    0% 0%,
    0% 100%,
    25% 100%,
    25% 25%,
    75% 25%,
    75% 75%,
    25% 75%,
    25% 100%,
    100% 100%,
    100% 0%
  ); */
}
.scroll-box--icon {
  transition: 0.3s all linear;
}
.box {
  /* clip-path: polygon(26% 0, 100% 0, 100% 100%, 26% 100%); */
}
.scroll-box:hover .scroll-box--icon {
  transform: translateY(1px);
}
</style>
