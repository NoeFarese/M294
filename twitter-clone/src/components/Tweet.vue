<script setup>

import {formatDistanceToNow} from "date-fns";

const props = defineProps({
  user: Object,
  text: String,
  created_at: String
})
</script>

<template>
  <div class="tweet">
    <div class="tweet__avatar">
      <img :src="`https://i.pravatar.cc/100?u=${props.user.id}`" alt=""/>
    </div>
    <div class="tweet__content">
      <div class="tweet__header">
        <span class="tweet__author">{{ props.user.name }}</span>
        <span class="tweet__timestamp">{{formatDistanceToNow(new Date(created_at), { addSuffix: true }) }}</span>
      </div>
      <div class="tweet__text">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>