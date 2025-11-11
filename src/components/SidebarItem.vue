<template>
  <aside class="sidebar">
    <div class="search-bar">
      <div class="title text-title">Поиск документа</div>
      <InputItem v-model="documentId" type="text" placeholder="Введите ID документа" />
    </div>

    <div>
      <div class="title text-title">Результаты</div>
      <div class="text-secondary">Ничего не найдено</div>
      <div>результаты</div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import InputItem from '@/components/InputItem.vue'
import { ref } from 'vue'

const documentId = ref<string>('')
</script>

<style lang="scss" scoped>
.sidebar {
  padding: 30px;
  border-right: 1px solid $color-separator;

  .search-bar {
    margin-bottom: 30px;
  }

  .title {
    margin-bottom: 14px;
  }
}

</style>
