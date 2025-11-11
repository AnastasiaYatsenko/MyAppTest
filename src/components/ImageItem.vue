<template>
  <img :src="imgSrc" :alt="alt" @error="onImageError" :width="width" :height="height" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  image: string | null
  alt: string
  width: string | number
  height: string | number
}

const props = defineProps<Props>()

const fallbackSrc: string = '/images/fallback-img.png'

const imageError = ref(false)

const imgSrc = computed((): string => {
  if (!props.image || imageError.value) return fallbackSrc
  return props.image
})

function onImageError(): void {
  imageError.value = true
}
</script>
