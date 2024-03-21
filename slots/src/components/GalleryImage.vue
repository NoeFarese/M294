<script setup>
import { computed } from 'vue';

const props = defineProps({
  src: String,
  description: String
})

const src = computed(() => props.src)
const description = computed(() => props.description)
</script>

<template>
  <div class="image">
    <img class="image__img" :src="src" alt=""/>
    <p class="image__description">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.image__img {
  aspect-ratio: 640/425;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}

.image__description {
  color: #9ca3af;
  font-size: .85rem;
  margin-top: 1rem;
}
</style>