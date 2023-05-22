<template>
  <div class="container mx-auto grid grid-cols-2">
    <div></div>
    <div class="list-wrapper fixed top-2/4 left-[20vw]">
      <ul class="flex flex-col gap-y-5" v-if="showList">
        <AboutMeList></AboutMeList>
        <!-- <li class="list flex place-items-center gap-x-4" ref="ss">
          <span>About</span>
          <div class="about-circlecheck h-2 w-2 bg-white rounded-full"></div>
        </li>
        <li class="list flex place-items-center gap-x-4" ref="ss">
          <span>Works</span>
          <div
            class="about-circlecheck h-2 w-2 bg-white rounded-full ml-auto"
          ></div>
        </li>
        <li class="list flex place-items-center gap-x-4" ref="ss">
          <span>Skills</span>
          <div
            class="about-circlecheck h-2 w-2 bg-white rounded-full ml-auto"
          ></div>
        </li> -->
      </ul>
    </div>

    <div class="section-wrapper" ref="el">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
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

  showList.value = newValue;
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
      autoAlpha: 0,
    })
    .to("#about", {
      xPercent: 200,
    })
    .from("#works", {
      xPercent: 200,
      autoAlpha: 0,
    })
    .to("#works", {
      autoAlpha: 0,
    })
    .to("#works", {
      xPercent: 200,
    })
    .from("#skills", {
      autoAlpha: 0,
      xPercent: 200,
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
    end: "bottom bottom",
    scrub: 1,
    pin: true,
    onUpdate: () => {
      checkValues();
    },
    onLeave: () => {
      showList.value = false;
    },
    onEnter: () => {
      showList.value = true;
    },
    markers: true,
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
  // checkBoxes.forEach((checkBox) => {
  //   console.log(checkBox);
  // });
  // checkBoxes[i].classList.add("green");
  // const checkBoxes = document.querySelectorAll(".about-circlecheck");
  // checkBoxes = document.querySelectorAll(".about-circlecheck");
  // console.log(checkBoxes);
  // if (ScrollTrigger.isInViewport("#about", 1, true)) {
  //   checkBoxes.forEach((c) => c.classList.remove("green"));
  //   checkBoxes[0].classList.add("green");
  // } else if (ScrollTrigger.isInViewport("#works", 1, true)) {
  //   checkBoxes.forEach((c) => c.classList.remove("green"));
  //   checkBoxes[1].classList.add("green");
  // } else if (ScrollTrigger.isInViewport("#skills", 1, true)) {
  //   checkBoxes.forEach((c) => c.classList.remove("green"));
  //   checkBoxes[2].classList.add("green");
  // }
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
  min-height: 5000px;
  /* overflow: hidden; */
  /* overflow: hidden; */
  /* background-color: white; */
}
.fadeout {
  opacity: 0 !important;
}
</style>
