<template>
  <section
    id="works"
    class="section-panel flex flex-col place-content-center p-4"
  >
    <div class="about-text flex flex-col gap-y-2">
      <h1 class="text-4xl work-name" :key="wName">{{ wName }}</h1>
      <p :key="desc" class="description">
        {{ desc }}
      </p>
    </div>
    <works-gallery @change-desc="setDescription"></works-gallery>
  </section>
</template>

<script setup>
import WorksGallery from "./Works/WorksGallery.vue";
import { ref, onMounted, onUpdated, watch } from "vue";
import SplitType from "split-type";
import gsap from "gsap";
const desc = ref("");
const wName = ref("");

const setDescription = (newDesc, newName) => {
  desc.value = newDesc;
  wName.value = newName;
};
onUpdated(() => {
  animateWorkDescription();
});

onMounted(() => {
  animateWorkDescription();
});

const animateWorkDescription = () => {
  let par = SplitType.create(".description");
  let namePar = SplitType.create(".work-name");
  let descAnimation = gsap.timeline();
  let nameAnimation = gsap.timeline();
  nameAnimation
    .from(
      namePar.chars,
      {
        autoAlpha: 0,
        x: -2,
        stagger: 0.3,
      },
      "-=1.5"
    )
    .to(namePar.chars, {
      autoAlpha: 1,
      x: 0,
    });
  descAnimation
    .from(par.words, {
      autoAlpha: 0,
      stagger: 0.05,
    })
    .to(par.words, {
      y: 0.5,
      stagger: 0.05,
      ease: "rough",
    });
};
</script>

<style scoped>
section {
  height: 100%;
  /* background-color: rgba(255, 54, 4, 1); */
  position: absolute;
  width: 100%;
  z-index: 2;
  top: 0;
  left: 0;
}
</style>
