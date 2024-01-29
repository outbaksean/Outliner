<template>
  <div class="p-2 m-2">
    <SelectOutline />
  </div>
  <div v-if="selectedOutline">
    {{ selectedOutline.name }} - {{ selectedOutline.description }}
    <OutlineAccordian />
  </div>
  <div v-else>
    <p>No outline selected.</p>
  </div>
</template>

<script setup lang="ts">
import SelectOutline from './components/SelectOutline.vue'
import MainSelector from './components/MainSelector.vue'
import MainTab from './components/MainTab.vue'
import { outlinerStore } from '@/stores/outliner'
import { storeToRefs } from 'pinia'
import OutlineAccordian from './components/OutlineAccordian.vue'

const store = outlinerStore()
store.loadOutlines()
store.loadSampleOutlines()

const { selectedOutline } = storeToRefs(store)
</script>
