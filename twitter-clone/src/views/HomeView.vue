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
let retweetText = ref('');

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

function retweet(tweet){
  retweetText.value = `Geposted von ${tweet.user} am ${tweet.date} \n\n ${tweet.text}`
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function setRetweetText(text){
  retweetText.value = text
}
</script>

<template>
  <main class="content">
    <LoginInfo v-if="!isLoggedIn"/>
    <Composer v-if="isLoggedIn" @posted="reloadStream" :text="retweetText" @updateText="setRetweetText"/>

    <Transition name="slide-fade">
      <section class="stream" v-if="!loading">
        <Tweet v-for="tweet in tweets" :key="tweet.id"
               :user="tweet.user"
               :text="tweet.text"
               :created_at="tweet.created_at"
               :likes="tweet.likes"
               :id="tweet.id"
               :liked="isTweetLiked(tweet)"
               @reloadPost="reloadStream"
               @retweet="retweet"
        />
      </section>
    </Transition>

    <div class="loading" v-if="loading">
      Lade Tweets...
    </div>
  </main>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(200px);
  opacity: 0;
}
</style>
