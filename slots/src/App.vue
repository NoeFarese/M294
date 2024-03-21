<script setup>
import { ref } from 'vue'
import Gallery from "./components/Gallery.vue";
import GalleryImage from "./components/GalleryImage.vue";
import GalleryVideo from "./components/GalleryVideo.vue";

const galleries = ref([
  {
    title: 'Beispielgalerie A',
    description: 'Ein kurzer Beschreibungstext',
    items: [
      { type: 'image', src: 'https://unsplash.it/640/425?hash=a1', description: "Der Beschreibungstext zum Bild"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=b1', description: "Der Beschreibungstext zum Bild"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=c1', description: "Der Beschreibungstext zum Bild"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=d1', description: "Der Beschreibungstext zum Bild"},
      { type: 'video', src: 'https://www.youtube.com/embed/EkhFza9IhrM?controls=0', description: "Der Beschreibungstext zum Video"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=f1', description: "Der Beschreibungstext zum Bild"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=g1', description: "Der Beschreibungstext zum Bild"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=h1', description: "Der Beschreibungstext zum Bild"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=i1', description: "Der Beschreibungstext zum Bild"},
      { type: 'video', src: 'https://www.youtube.com/embed/EkhFza9IhrM?controls=0', description: "Der Beschreibungstext zum Video"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=k1', description: "Der Beschreibungstext zum Bild"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=l1', description: "Der Beschreibungstext zum Bild"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=m1', description: "Der Beschreibungstext zum Bild"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=n1', description: "Der Beschreibungstext zum Bild"},
    ]
  },
  {
    title: 'Beispielgalerie B',
    description: 'Ein anderer Beschreibungstext',
    items: [
      { type: 'image', src: 'https://unsplash.it/640/425?hash=a2', description: "Der Beschreibungstext zum Bild"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=b2', description: "Der Beschreibungstext zum Bild"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=c2', description: "Der Beschreibungstext zum Bild"},
      { type: 'video', src: 'https://www.youtube.com/embed/EkhFza9IhrM?controls=0', description: "Der Beschreibungstext zum Video"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=e2', description: "Der Beschreibungstext zum Bild"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=f2', description: "Der Beschreibungstext zum Bild"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=g2', description: "Der Beschreibungstext zum Bild"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=h2', description: "Der Beschreibungstext zum Bild"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=i2', description: "Der Beschreibungstext zum Bild"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=j2', description: "Der Beschreibungstext zum Bild"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=k2', description: "Der Beschreibungstext zum Bild"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=l2', description: "Der Beschreibungstext zum Bild"},
      { type: 'video', src: 'https://www.youtube.com/embed/EkhFza9IhrM?controls=0', description: "Der Beschreibungstext zum Video"},
      { type: 'image', src: 'https://unsplash.it/640/425?hash=n2', description: "Der Beschreibungstext zum Bild"},
    ]
  }
])

const components = ref({
  image: GalleryImage,
  video: GalleryVideo
})
</script>

<template>
  <div class="container" v-for="gallery in galleries">
    <Gallery :gallery="gallery" :title="gallery.title" :description="gallery.description">
      <component v-for="item in gallery.items" :key="item.src" :is="components[item.type]" :src="item.src" :description="item.description"/>
    </Gallery>
  </div>
</template>

<style>
</style>
