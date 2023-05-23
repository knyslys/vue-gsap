<template>
  <div class="bg-zinc-900">
    <div class="mx-auto grid grid-cols-1 lg:grid-cols-2 relative">
      <div></div>
      <div class="absolute top-0 w-full h-full">
        <div
          class="list-wrapper fixed top-[10vh] left-[3vh] w-full lg:top-2/4 lg:left-[15vw] lg:w-auto lg:translate-x-2/4 lg:-translate-y-2/4"
        >
          <ul
            class="flex gap-x-5 justify-start md:justify-center lg:flex-col gap-y-6"
            v-if="showList"
          >
            <AboutMeList></AboutMeList>
          </ul>
        </div>
      </div>
      <div class="section-wrapper" ref="el">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
// top-2/4 -translate-y-2/4 left-[10vh]
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted, ref, watch } from "vue";
import { useElementVisibility } from "@vueuse/core";
import AboutMeList from "../AboutMeList.vue";
const showList = ref(false);
const el = ref(null);
const ss = ref(null);
gsap.registerPlugin(ScrollTrigger);
let checkBoxes;
let sectionPanels;
let listAnim;
const aboutVisible = useElementVisibility(el);
watch(aboutVisible, (newValue, oldValue) => {
  console.log(newValue);

  // showList.value = newValue;
});

onMounted(() => {
  sectionPanels = document.querySelectorAll(".section-panel");
  setHeightToWrapper();
  // const itemNumber = document.querySelector(".item-number");
  // const sections = gsap.utils.toArray(".section-panel");

  // sections.forEach((section, i) => {
  //   ScrollTrigger.create({
  //     trigger: section,
  //     start: "top top",
  //     end: "bottom bottom",
  //     markers: true,
  //     onToggle: (self) => {
  //       console.log(i);
  //       // checkBoxes.forEach((checkBox) => {
  //       //   checkBoxes[i].classList.remove("green");
  //       //   console.log(checkBox);
  //       // });
  //       // checkBoxes[i].classList.add("green");
  //       // gsap.to(checkBoxes[i]),
  //       //   {
  //       //     duration: 0.2,
  //       //     opacity: self.isActive ? 1 : 0.2, // if active then 1 or else 0.5
  //       //     color: self.isActive ? "red" : "black",
  //       //   }; // if active then white or else black
  //     },
  //     // onLeaveBack: () => (itemNumber.innerText = i),
  //   });
  // });

  let testt = gsap.timeline();

  testt
    .from("#about", {
      xPercent: 200,
      autoAlpha: 0,
    })
    .to("#about", {
      xPercent: 0,
      autoAlpha: 0,
    })
    .to("#about", {
      xPercent: 200,
    })
    .from("#works", {
      display: "none",
      xPercent: 0,
      autoAlpha: 0,
    })
    .to("#works", {
      autoAlpha: 0,
      visibility: "hidden",
      // xPercent: 200,
    })
    .to("#works", {
      autoAlpha: 0,
      display: "none",
    })
    .from("#skills", {
      autoAlpha: 0,
      display: "none",
      // xPercent: 200,
    })
    .to("#skills", {
      autoAlpha: 0,
    })
    .to("#skills", { yPercent: 200 });

  ScrollTrigger.create({
    animation: testt,
    trigger: ".section-wrapper",
    // scroller: ".section-wrapper",
    start: "top top",
    end: "bottom -500%",
    scrub: true,
    pin: true,
    type: "touch,wheel,pointer",
    // normalizeScroll: true,
    onToggle: () => {
      showList.value = true;
    },
    onLeave: () => {
      showList.value = false;
    },
    onEnter: () => {
      showList.value = true;
    },
    onEnterBack: () => {
      console.log("Enterinu atgal");
      showList.value = true;
    },
    onLeaveBack: () => {
      showList.value = false;
    },
    onUpdate: () => {
      checkValues();
    },
    // markers: true,
    // pinSpacing: true,
    anticipatePin: 1,
    // onUpdate: checkValues,
  });
});
const setHeightToWrapper = () => {
  // sectionPanels = document.querySelectorAll(".section-panel");
  // let h;
  // sectionPanels.forEach((e) => {
  //   h += e.innerWidth;
  // });
  // el.value.innerHeight = h;
};
const checkValues = (i) => {
  if (!showList.value) return;
  checkBoxes = document?.querySelectorAll(".about-circlecheck");
  if (ScrollTrigger.isInViewport("#about", 0.2, true)) {
    console.log("esu ekrane");
    checkBoxes.forEach((c) => c.classList.remove("green"));
    checkBoxes[0].classList.add("green");
  } else if (ScrollTrigger.isInViewport("#works", 0.2, true)) {
    checkBoxes.forEach((c) => c.classList.remove("green"));
    checkBoxes[1].classList.add("green");
  } else if (ScrollTrigger.isInViewport("#skills", 0.2, true)) {
    checkBoxes.forEach((c) => c.classList.remove("green"));
    checkBoxes[2].classList.add("green");
  }
};

// document.querySelectorAll(".about-circlecheck").forEach((el, i) => {
//   el.classList.add("green");
// });
// document.querySelectorAll(".section-panel").forEach((el) => {
//   if ((ScrollTrigger.isInViewport(el), 1, true)) {
//     console.log("esu");
//   } else {
//     return;
//   }
// });
// if (ScrollTrigger.isInViewport("#about", 0.8, true)) {
//   document.querySelector("#about").classList.add("fadeout");
//   // console.log("esu");
//   // let testt = gsap.timeline();
//   // testt.to("#about", {
//   //   autoAlpha: 0,
//   //   scrollTrigger: {
//   //     animation: testt,
//   //     trigger: "#about",
//   //     start: "top top",
//   //     end: "bottom bottom",
//   //   },
//   // });
// } else {
//   document.querySelector("#about").classList.remove("fadeout");
// }
</script>

<style scoped>
.section-wrapper {
  position: relative;
  /* display: flex; */
  /* background-color: blue; */
  height: 100vh;
  overflow: hidden;
  /* height: 5000px; */
  /* overflow: hidden; */
  /* overflow: hidden; */
  /* background-color: white; */
}
.fadeout {
  opacity: 0 !important;
}
</style>
