<template>
  <input
    class="input"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    :disabled="isLoading"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
import { debounce } from '@/utils/debounce'

interface Props {
  type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url'
  placeholder?: string
  modelValue?: string | number
  isLoading?: boolean
}

interface Emits {
  (event: 'update:model-value', value: string | number): void
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  modelValue: '',
})

const emit = defineEmits<Emits>()

const debouncedEmit = debounce((value: string | number) => {
  emit('update:model-value', value)
}, 500)

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  let value: string | number = target.value

  if (props.type === 'number' && target.value) {
    value = target.valueAsNumber || Number(target.value)
  }

  debouncedEmit(value)
}
</script>

<style lang="scss" scoped>
.input {
  font-family: $font-family;
  padding-left: 24px;
  padding-right: 24px;
  height: 49px;
  border-radius: $border-radius;
  color: $color-dark;
  border: 2px solid $gray-200;

  &::placeholder {
    color: $color-secondary;
  }
}
</style>
