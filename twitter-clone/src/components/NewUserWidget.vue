<script setup>
import Widget from "@/components/Widget.vue";
import { onMounted, ref } from "vue";
import {fetchNewUsers} from "@/api/requests";
import { format } from "date-fns";

const newUsers = ref([])
const loading = ref(true)

onMounted(async () => {
  loading.value = true
  try {
    newUsers.value = await fetchNewUsers()
    console.log('new users',fetchNewUsers())
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <Widget title="Neue User">
    <ul class="content-list" v-if="!loading">
      <li class="content-list__item" v-for="user in newUsers" :key="newUsers.id">
        <a href="#">
          <span class="content-list__meta">{{ format(new Date(user.created_at), 'dd.MM.yyyy HH:mm') }}</span>
          <span class="content-list__text">{{ user.name }}</span>
        </a>
      </li>
    </ul>

    <div class="loading" v-if="loading">
      Lade new users...
    </div>
  </Widget>
</template>

<style scoped>
</style>