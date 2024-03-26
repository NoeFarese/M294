<script setup>
import IconLogin from "@/components/icons/IconLogin.vue";
import IconHome from "@/components/icons/IconHome.vue";
</script>

<template>
  <nav class="nav">
    <RouterLink to="/">
      <IconHome/>
      Stream
    </RouterLink>
    <RouterLink to="/login">
      <IconLogin/>
      Login
    </RouterLink>
  </nav>
</template>

<style scoped>
</style>