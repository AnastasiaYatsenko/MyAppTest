<template>
  <div class="page-wrapper">
    <sidebar-item />
    <main class="page-content">
      <div v-if="document">Выберите документ, чтобы посмотреть его содержиое</div>
      <document-viewer v-else />
    </main>
  </div>
</template>

<script setup lang="ts">
import DocumentViewer from '@/components/DocumentViewer.vue'
import SidebarItem from '@/components/SidebarItem.vue'
import { ref } from 'vue'

const document = ref(null)
</script>

<style lang="scss" scoped>
.page-wrapper {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.page-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
</style>
