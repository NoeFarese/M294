<script setup>
import { ref } from 'vue';
const email = ref('')
const password = ref('')

async function login () {
  console.log('login', email.value, password.value)
}
</script>

<template>
  <div class="login">
    <section class="login-wrapper">
      <form action="#" class="login-form" autocomplete="off" novalidate @submit.prevent="login">
        <div class="form-group">
          <label class="form-label" for="email">E-Mail</label>
          <input class="form-input" type="email" id="email" v-model="email"/>
          <div class="form-error">
            Ungültige E-Mail
          </div>
        </div>
        <div class="form-group">
          <label class="form-label" for="password">Passwort</label>
          <input class="form-input" type="password" id="password" v-model="password"/>
          <div class="form-error">
            Falsches Passwort
          </div>
        </div>
        <div class="form-group">
          <button :disabled="password === '' || email === ''" class="btn btn--primary btn--block">
            Login
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

