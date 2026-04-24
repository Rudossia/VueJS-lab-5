<script setup>
import Clicker from './components/Clicker.vue'

function handleButtonClicked(n) {
  alert(`Clicker ${n} clicked!`)
}
</script>

<template>
  <div class="container">
    <h1>100 Clickers</h1>

    <div class="grid">
      <Clicker
        v-for="n in 100"
        :key="n"
        :amount="1"
        @button-clicked="handleButtonClicked(n)"
      >
        <button>Нажми</button>
      </Clicker>
    </div>
  </div>
</template>
