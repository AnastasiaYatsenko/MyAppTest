<template>
  <div class="document-viewer-wrapper">
    <div class="document-viewer">
      <ImageItem
        class="document-viewer__image"
        :image="document.image"
        :alt="document.name"
        width="424"
        height="286"
      />

      <div class="document-viewer__info">
        <div class="document-viewer__title text-title">{{ document.name }}</div>
        <div class="document-viewer__buttons">
          <button
            class="document-viewer__button document-viewer__button--primary"
            @click="handleDownload"
          >
            Скачать
          </button>
          <button
            class="document-viewer__button document-viewer__button--danger"
            @click="handleDelete"
            :disabled="!document.image"
          >
            Удалить
          </button>
        </div>
      </div>
      <div class="document-viewer__content">
        <div class="document-viewer__title text-title">Описание:</div>
        <p>
          {{ document.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageItem from '@/components/ImageItem.vue'

import type { Document } from '@/types/documents'

interface Props {
  document: Document
}

interface Emits {
  (event: 'document-download'): void
  (event: 'document-delete', documentId: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

function handleDownload(): void {
  emit('document-download')
}

function handleDelete(): void {
  emit('document-delete', props.document.id)
}
</script>

<style lang="scss" scoped>
.document-viewer-wrapper {
  padding: 30px;
  height: 100%;
}
.document-viewer {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 10px;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;

  &__image {
    max-width: 100%;
    height: auto;
    border: 1px solid $color-separator;
  }

  &__content p {
    color: $color-secondary;
  }

  &__title {
    margin-bottom: 14px;
  }

  &__button {
    border-radius: $border-radius;
    color: $color-dark;
    border-width: 1px;
    border-style: solid;
    border-color: $color-dark;
    height: 32px;
    min-width: 114px;
    padding: 5px 10px;
    background-color: transparent;

    &--primary {
      border-color: $color-primary;
      color: $color-primary;
    }

    &--danger {
      border-color: $color-danger;
      color: $color-danger;
    }
  }

  &__buttons {
    display: flex;
    gap: 17px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: min-content;
    gap: 30px;

    &__image {
      grid-area: 1 / 1 / 3 / 2;
    }

    &__info {
      grid-area: 1 / 2 / 2 / 3;
      align-self: start;
    }

    &__content {
      grid-area: 2 / 2 / 3 / 3;
      align-self: start;
    }
  }
}
</style>
