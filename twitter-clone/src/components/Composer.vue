<script setup>
import { ref, watch } from 'vue';
const tweetText = ref('')

function updateTextLength(){
  const length = tweetText.value.length;
  const counter = document.querySelector('.stats__counter');
  if (counter) counter.textContent = length;
}

watch(tweetText, () => {
  updateTextLength()
})
</script>

<template>
  <form class="composer">
    <label class="composer__prompt">Was geht?</label>
    <textarea maxlength="160" class="composer__textarea" placeholder="Verfasse einen Tweet..." v-model="tweetText"/>
    <div class="composer__actions">
      <div class="composer__stats stats">
        <span class="stats__counter">0</span>
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