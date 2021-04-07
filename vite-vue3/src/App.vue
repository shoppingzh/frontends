<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <button @click="a++">
      点击次数：{{ a }}
    </button>
  </div>
  <div style="margin-top: 20px;">
    {{ b }}
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const a = ref(1)
const b = computed(() => a.value * a.value)

console.log(a)

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>