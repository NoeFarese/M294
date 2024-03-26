<script setup>
defineProps({
  title: String
})
</script>

<template>
  <section class="widget">
    <h2 class="widget__heading">
      {{ title }}
    </h2>
    <slot/>
  </section>
</template>

<style scoped>
</style>