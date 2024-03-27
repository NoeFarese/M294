<script setup>
import { formatDistanceToNow } from "date-fns";
import IconHeart from "@/components/icons/IconHeart.vue";
import {checkAuth, likeTweet} from "@/api/requests";
import { useRouter } from "vue-router";

const props = defineProps({
  user: Object,
  text: String,
  created_at: String,
  likes: Number,
  id: Number,
  liked: Boolean
})

const emit = defineEmits(['reloadPost', 'retweet'])
const router = useRouter()

async function like() {
  const isLoggedIn = await checkAuth()
  try {
    if(isLoggedIn){
      await likeTweet(props.id);
      emit('reloadPost')
    } else {
      await router.push('/login')
    }
  } catch (error) {
    console.error('not able to like tweet', error)
  }
}
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
    <div class="likeButton">
      <IconHeart @click="like" :disabled="props.liked"/>
      {{ props.likes }}
    </div>
    <button class="retweetButton" @click="$emit('retweet', {user: user.name, text: text, date: created_at})">Retweet</button>
  </div>
</template>

<style scoped>
  .likeButton {
    justify-content: center;
    height: 30px;
    width: 30px;
  }

  .retweetButton {
    height: 50px;
    width: auto;
    border-radius: 14px;
    border-style: none;
    background-color: #264067;
    color: white;
  }
</style>