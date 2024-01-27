<template>
  <div class="w-25 p-2 m-2">
    <SelectOutline />
  </div>
  <div v-if="selectedOutline">
    {{ selectedOutline.name }}
  </div>
  <div v-else>
    <p>No outline selected.</p>
  </div>
</template>

<script setup lang="ts">
import SelectOutline from './SelectOutline.vue'
import { outlinerStore } from '@/stores/outliner'
import { storeToRefs } from 'pinia'

const store = outlinerStore()
await store.loadOutlines()

const { selectedOutline } = storeToRefs(store)
</script>
