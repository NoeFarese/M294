<script setup>
import Composer from "@/components/Composer.vue";
import Tweet from "@/components/Tweet.vue";
import LoginInfo from "@/components/LoginInfo.vue";
import { onMounted, ref } from 'vue'
import { fetchStream } from '@/api/requests'

const loading = ref(true)
const tweets = ref([])

onMounted(async () => {
  loading.value = true
  try {
    const stream = await fetchStream()
    tweets.value = stream
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
      <Tweet v-for="tweet in tweets" :key="tweet.id"
          :user="tweet.user"
          :text="tweet.text"
          :created_at="tweet.created_at"
       />
    </section>

    <div class="loading" v-if="loading === true">
      Lade Tweets...
    </div>
  </main>
</template>
