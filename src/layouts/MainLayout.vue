<template>
  <div class="main-layout">
    <div class="container">
      <header-item />
    </div>

    <div class="container content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderItem from '@/components/HeaderItem.vue'
</script>

<style lang="scss" scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 50px;
  max-height: 100vh;

  .content {
    flex: 1;
    background-color: $content-bg-light;
    border-radius: $content-border-radius;
    box-shadow: $shadow-1;
    display: flex;
    align-items: stretch;
    height: 100%;
    overflow: hidden;
  }
}
</style>
