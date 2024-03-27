<script setup>
import Composer from "@/components/Composer.vue";
import Tweet from "@/components/Tweet.vue";
import LoginInfo from "@/components/LoginInfo.vue";
import { onMounted, ref } from 'vue'
import { checkAuth, fetchStream } from '@/api/requests'
import { useAuth } from '@/api/auth'

const { isLoggedIn } = useAuth()
const loading = ref(true)
const tweets = ref([])
let response = null

onMounted(async () => {
  response = await checkAuth()
})

onMounted( () => reloadStream())

async function reloadStream(){
  loading.value = true
  try {
    tweets.value = await fetchStream()
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

function isTweetLiked(tweet) {
  if (!response || !response.data.liked_tweets) return false
  return response.data.liked_tweets.includes(tweet.id)
}
</script>

<template>
  <main class="content">
    <LoginInfo v-if="!isLoggedIn"/>

    <Composer v-if="isLoggedIn" @posted="reloadStream"/>

    <section class="stream" v-if="!loading">
      <!-- Tweet -->
      <Tweet v-for="tweet in tweets" :key="tweet.id"
          :user="tweet.user"
          :text="tweet.text"
          :created_at="tweet.created_at"
          :likes="tweet.likes"
          :id="tweet.id"
          :liked="isTweetLiked(tweet)"
          @reloadPost="reloadStream"
       />
    </section>

    <div class="loading" v-if="loading">
      Lade Tweets...
    </div>
  </main>
</template>
