<template>
  <aside class="sidebar">
    <div class="search-bar">
      <div class="title text-title">Поиск документа</div>
      <input-item
        v-model="documentId"
        type="text"
        placeholder="Введите ID документа"
        :is-loading="store.isLoading"
      />
      <div v-if="store.error" class="error-message">{{ store.error }}</div>
    </div>

    <div class="documents-list">
      <div class="title text-title">Результаты</div>
      <div v-if="store.isLoading" class="text-secondary">Ищем...</div>

      <template v-else>
        <div v-if="!documents.length" class="text-secondary">Ничего не найдено</div>
        <ul v-else class="scroll">
          <li v-for="document in documents" :key="document.id">
            <document-item
              :document="document"
              :is-active="document.id === activeDocumentId"
              @document-clicked="onDocumentClicked"
            />
          </li>
        </ul>
      </template>
    </div>
  </aside>
</template>

<script setup lang="ts">
import InputItem from '@/components/InputItem.vue'
import DocumentItem from '@/components/DocumentItem.vue'

import { ref, computed, watch } from 'vue'
import { useDocumentsStore } from '@/stores/documents'

const store = useDocumentsStore()

const documentId = ref<string>('')
const documents = computed(() => store.documents)

const activeDocumentId = computed(() => store.activeDocumentId)

function onDocumentClicked(id: number) {
  store.setActiveDocumentId(id)
}

watch(documentId, (newVal) => {
  store.setSearchQuery(newVal)
  store.loadDocuments()
})
</script>

<style lang="scss" scoped>
.error-message {
  color: $color-danger;
  margin-top: 5px;
}

.sidebar {
  width: 280px;
  padding: 30px;
  border-right: 1px solid $color-separator;
  display: flex;
  flex-direction: column;
  height: 100%;

  .search-bar {
    margin-bottom: 30px;
  }

  .title {
    margin-bottom: 14px;
  }

  .documents-list {
    height: 100%;
    max-height: 100%;
    overflow-y: auto;

    ul {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }
}
</style>
