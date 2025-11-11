<template>
  <div class="page-wrapper">
    <sidebar-item />
    <main class="page-content">
      <div class="page-content__empty" v-if="!activeDocument">
        Выберите документ, чтобы посмотреть его содержиое
      </div>
      <document-viewer
        v-else
        :document="activeDocument"
        @document-download="onDocumentDownload"
        @document-delete="onDocumentDelete"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import DocumentViewer from '@/components/DocumentViewer.vue'
import SidebarItem from '@/components/SidebarItem.vue'
import { computed } from 'vue'
import { useDocumentsStore } from '@/stores/documents'
import { downloadDocumentAsTxt } from '@/utils/download'

const store = useDocumentsStore()

const activeDocument = computed(() => store.activeDocument)

function onDocumentDownload() {
  if (!activeDocument.value) return

  downloadDocumentAsTxt(activeDocument.value.name, activeDocument.value.description)
}

function onDocumentDelete(id: number) {
  store.deleteDocument(id)
}
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
  justify-content: start;
  align-items: start;
  flex: 1;

  &__empty {
    align-self: center;
    text-align: center;
    flex: 1;
    color: $color-secondary;
  }
}
</style>
