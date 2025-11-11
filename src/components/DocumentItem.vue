<template>
  <button class="document-item" :class="{ 'document-item--active': isActive }" @click="handleClick">
    <ImageItem
      class="document-item__image"
      :image="document.image"
      :alt="document.name"
      width="70"
      height="70"
    />

    <div class="document-item__info">
      <div class="document-item__name">{{ document.name }}</div>
      <div class="document-item__weight">12 mb</div>
    </div>
  </button>
</template>

<script setup lang="ts">
import ImageItem from '@/components/ImageItem.vue'

import type { Document } from '@/types/documents'

interface Props {
  document: Document
  isActive: boolean
}

interface Emits {
  (event: 'document-clicked', id: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

function handleClick(): void {
  emit('document-clicked', props.document.id)
}
</script>

<style lang="scss" scoped>
.document-item {
  display: flex;
  border-radius: $border-radius;
  overflow: hidden;
  box-shadow: $shadow-1;
  padding: 0;
  border: none;
  width: 100%;
  background-color: $white;

  &__image {
    object-fit: cover;
  }

  &__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: 5px;
    color: $color-dark;
    padding: 15px;
    border-left: 1px solid $color-separator;
  }

  &__name {
    font-weight: 600;
  }

  &__weight {
    color: $color-secondary;
  }

  &.document-item--active {
    .document-item {
      &__info {
        background-color: $color-primary;
        border-left: 1px solid $color-primary;
      }

      &__name {
        color: $white;
      }

      &__weight {
        color: $gray-300;
      }
    }
  }
}
</style>
