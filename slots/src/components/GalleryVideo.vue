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
  <div class="video">
    <iframe
        class="video__iframe"
        width="640"
        height="425"
        :src="src"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
    ></iframe>
    <div class="video__description">
      {{ description }}
    </div>
  </div>
</template>

<style scoped>
.video__iframe {
  aspect-ratio: 640/425;
  max-width: 100%;
  height: auto;
  border: none;
}

.video__description {
  color: #9ca3af;
  font-size: .85rem;
  margin-top: 1rem;
}
</style>