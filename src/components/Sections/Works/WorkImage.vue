<template>
  <div class="wrapper">
    <img :src="props.img" :alt="props.name" />
  </div>
</template>

<script setup>
const props = defineProps({
  img: {
    type: String,
  },
  name: {
    type: String,
  },
  desc: {
    type: String,
  },
  site: {
    type: String,
  },
  source: {
    type: String,
  },
});
</script>

<style scoped>
.wrapper {
}
.test {
  height: 2000px;
  background-color: red;
}
</style>
