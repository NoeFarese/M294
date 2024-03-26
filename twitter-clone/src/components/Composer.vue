<script setup>
import { ref } from 'vue';
import { createTweet } from '@/api/requests'

const tweetText = ref('')
const emit = defineEmits(['posted'])

function submit() {
  createTweet(tweetText.value)
  emit('posted')
  tweetText.value = ''
}

</script>

<template>
  <form class="composer" @submit.prevent="submit()">
    <label class="composer__prompt">Was geht?</label>
    <textarea maxlength="160" class="composer__textarea" placeholder="Verfasse einen Tweet..." v-model="tweetText"/>
    <div class="composer__actions">
      <div class="composer__stats stats">
        <span class="stats__counter">{{ tweetText.length }}</span>
        <span class="stats__max">/ 160</span>
      </div>
      <button :disabled="tweetText.length < 5" class="btn btn--primary">
        Tweet veröffentlichen
      </button>
    </div>
  </form>
</template>

<style scoped>

</style>