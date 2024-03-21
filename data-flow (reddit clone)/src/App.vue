<script setup>
import { faker } from '@faker-js/faker'
import {computed, ref} from 'vue'
import Post from './components/Post.vue'

const posts = ref([
  { id: 1, title: faker.lorem.words(10), text: faker.lorem.paragraph(), user: faker.internet.userName(), votes: 8 },
  { id: 2, title: faker.lorem.words(10), text: faker.lorem.paragraph(), user: faker.internet.userName(), votes: 0 },
  { id: 3, title: faker.lorem.words(10), text: faker.lorem.paragraph(), user: faker.internet.userName(), votes: -4 },
  { id: 4, title: faker.lorem.words(10), text: faker.lorem.paragraph(), user: faker.internet.userName(), votes: 0 },
  { id: 5, title: faker.lorem.words(10), text: faker.lorem.paragraph(), user: faker.internet.userName(), votes: -8 },
  { id: 6, title: faker.lorem.words(10), text: faker.lorem.paragraph(), user: faker.internet.userName(), votes: 4 },
  { id: 7, title: faker.lorem.words(10), text: faker.lorem.paragraph(), user: faker.internet.userName(), votes: 6 },
  { id: 8, title: faker.lorem.words(10), text: faker.lorem.paragraph(), user: faker.internet.userName(), votes: 3 },
  { id: 9, title: faker.lorem.words(10), text: faker.lorem.paragraph(), user: faker.internet.userName(), votes: 15 },
])

const sortedPosts = computed(() => posts.value.sort((a, b) => Number(b.votes) - Number(a.votes)))

function voteUp (id) {
  const post = posts.value.find(post => post.id === id)
  post.votes++;
}

function voteDown (id) {
  const post = posts.value.find(post => post.id === id)
  post.votes--;
}
</script>

<template>
  <div class="container">
    <Post v-for="post in sortedPosts"
        :key="post.id"
        :id="post.id"
        :title="post.title"
        :text="post.text"
        :user="post.user"
        :votes="post.votes"
        @voteUp="voteUp"
        @voteDown="voteDown"
    />
  </div>
</template>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 16px;
  background: #e34e2a;
}

.container {
  max-width: 800px;
  margin: 40px auto;
  border: 1px solid #fafafa;
  box-shadow: 0 0 2px rgba(0, 0, 0, .2);
  background: #fff;
  border-radius: 4px;
  position: relative;
}
</style>