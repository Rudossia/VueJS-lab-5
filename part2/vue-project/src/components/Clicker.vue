<script setup>
import { ref } from 'vue'

const props = defineProps({
  amount: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits(['button-clicked'])

const count = ref(0)

function increaseCount() {
  count.value += props.amount
  emit('button-clicked')
}
</script>

<template>
  <div class="clicker">
    <p>Очки: {{ count }}</p>

    <div class="click-area" @click="increaseCount">
      <slot>
        <button>Нажми</button>
      </slot>
    </div>
  </div>
</template>
