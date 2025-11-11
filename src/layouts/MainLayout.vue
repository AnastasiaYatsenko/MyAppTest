<template>
  <div class="main-layout">
    <div class="container">
      <header-item />
    </div>

    <div class="container content">
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderItem from '@/component/HeaderItem.vue'
</script>

<style lang="scss" scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 50px;
  box-sizing: border-box;

  .content {
    flex: 1;
    background-color: $content-bg-light;
    border-radius: $content-border-radius;
    box-shadow: $shadow-1;
  }
}
</style>
