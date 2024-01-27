<template>
  <div class="w-25 p-2 m-2">
    <SelectOutline />
  </div>
  <div v-if="selectedOutline">{{ selectedOutline.name }} - {{ selectedOutline.description }}</div>
  <div v-else>
    <p>No outline selected.</p>
  </div>
  <div class="p-2 m-2 fixed-bottom">
    <MainSelector />
  </div>
</template>

<script setup lang="ts">
import SelectOutline from './components/SelectOutline.vue'
import MainSelector from './components/MainSelector.vue'
import { outlinerStore } from '@/stores/outliner'
import { storeToRefs } from 'pinia'

const store = outlinerStore()
store.loadOutlines()
store.loadSampleOutlines()

const { selectedOutline } = storeToRefs(store)
</script>
