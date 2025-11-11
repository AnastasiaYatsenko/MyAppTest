import { defineStore } from 'pinia'
import type { Document } from '@/types/documents'
import { fetchDocuments as fetchDocumentsApi } from '@/api/documents'

export const useDocumentsStore = defineStore('documents', {
  state: () => ({
    documents: [] as Document[],
    activeDocumentId: null as number | null,
    searchQuery: '' as string,
    error: '' as string,
    isLoading: false as boolean,
  }),
  actions: {
    setActiveDocumentId(id: number | null) {
      this.activeDocumentId = id
    },
    setDocuments(docs: Document[]) {
      this.documents = docs
    },
    setSearchQuery(query: string) {
      this.searchQuery = query
    },
    async loadDocuments() {
      try {
        this.isLoading = true
        this.setActiveDocumentId(null)

        const data = await fetchDocumentsApi(this.searchQuery)

        this.setDocuments(data)

        this.error = ''
      } catch (err) {
        this.error = 'Ошибка при загрузке документов'

        this.setDocuments([])
      } finally {
        this.isLoading = false
      }
    },
  },
  getters: {
    activeDocument: (state) =>
      state.documents.find((doc) => doc.id === state.activeDocumentId) || null,
  },
})
