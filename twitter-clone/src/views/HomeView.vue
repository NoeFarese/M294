<script setup>
import Composer from "@/components/Composer.vue";
import Tweet from "@/components/Tweet.vue";
import LoginInfo from "@/components/LoginInfo.vue";
import {onMounted, ref} from 'vue'
import {checkAuth, fetchStream} from '@/api/requests'
import {useAuth} from '@/api/auth'

const { isLoggedIn } = useAuth()
const loading = ref(true)
const tweets = ref([])

onMounted(async () => {
  const response = await checkAuth()
  console.log('checkAuth Resultat', response)
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
</script>

<template>
  <main class="content">
    <!-- Login Info -->
    <LoginInfo v-if="!isLoggedIn"/>

    <!-- Composer -->
    <Composer v-if="isLoggedIn" @posted="reloadStream"/>

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
