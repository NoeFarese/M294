<script setup>
import { ref } from 'vue';
import { createTweet } from '@/api/requests'

const emit = defineEmits(['posted', 'updateText'])
const props = defineProps({
  text:String
})
function submit() {
  createTweet(props.text)
  emit('posted')
  emit("updateText", '')
}

</script>

<template>
  <form class="composer" @submit.prevent="submit()">
    <label class="composer__prompt">Was geht?</label>
    <textarea maxlength="160" class="composer__textarea" placeholder="Verfasse einen Tweet..."
              :value="props.text"
              @input="$emit('updateText', $event.target.value)"/>
    <div class="composer__actions">
      <div class="composer__stats stats">
        <span class="stats__counter">{{ props.text.length }}</span>
        <span class="stats__max">/ 160</span>
      </div>
      <button :disabled="props.text.length < 5" class="btn btn--primary">
        Tweet veröffentlichen
      </button>
    </div>
  </form>
</template>

<style scoped>

</style>