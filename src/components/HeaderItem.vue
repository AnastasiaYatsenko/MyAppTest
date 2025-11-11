<template>
  <header class="header">
    <h1>MyApp</h1>
    <div>Username</div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: $black;
  margin-bottom: 35px;
}

h1 {
  font-weight: 700;
  font-size: 2rem;
  line-height: 140%;
  letter-spacing: 0;
}
</style>
