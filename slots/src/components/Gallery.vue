<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: String,
  description: String
})

const title = computed(() => props.title)
const description = computed(() => props.description)
</script>

<template>
  <section class="gallery">
    <h2 class="gallery__title">
      {{ title }}
    </h2>
    <p class="gallery__description">
      {{ description }}
    </p>
    <div class="gallery__images">
     <slot/>
    </div>
  </section>
</template>

<style scoped>
/** Gallery **/
.gallery + .gallery {
  margin-top: 4rem;
}

.gallery__title {
  font-weight: bold;
  font-size: 2rem;
  margin: 1rem 0;
  padding: 0;
}

.gallery__description {
  margin: 0;
  padding: 0;
  font-size: 1rem;
}

.gallery__images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  margin: 1rem 0;
}
</style>