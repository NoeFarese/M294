<script setup>
import Widget from "@/components/Widget.vue";
import {fetchTopUsers} from "@/api/requests";
import {onMounted, ref} from "vue";

const topUsers = ref([])
const loading = ref(true)

onMounted(async () => {
  loading.value = true
  try {
    topUsers.value = await fetchTopUsers()
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <Widget title="Top User">
    <ul class="content-list" v-if="!loading">
      <li class="content-list__item" v-for="user in topUsers" :key="user.id">
        <a href="#">
          <span class="content-list__meta">{{ user.tweets_count }} Tweets</span>
          <span class="content-list__text">{{ user.name }}</span>
        </a>
      </li>
    </ul>

    <div class="loading" v-if="loading">
      Lade Top Users...
    </div>
  </Widget>
</template>

<style scoped>
</style>