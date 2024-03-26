<script setup>
import Composer from "@/components/Composer.vue";
import Tweet from "@/components/Tweet.vue";
import LoginInfo from "@/components/LoginInfo.vue";
import { onMounted, ref } from 'vue'
import { fetchStream } from '@/api/requests'

const loading = ref(true)

onMounted(async () => {
  loading.value = true
  try {
    const stream = await fetchStream()
    console.log('Stream geladen', stream)
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})

</script>

<template>
  <main class="content">

    <!-- Login Info -->
    <LoginInfo/>

    <!-- Composer -->
    <Composer/>

    <!-- Stream -->
    <section class="stream" v-if="loading === false">
      <!-- Tweet -->
      <Tweet
          v-for="tweet in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
          :user="{ id: 1, name: 'John Doe'}"
          :text="'Lorem ipsum dolor med'"
          :created-at="'2023-01-01T12:00:00Z'"
       />
    </section>

    <div class="loading" v-if="loading === true">
      Lade Tweets...
    </div>
  </main>
</template>
