<template>
  <div>
    <h1>First Outline</h1>
    <div v-if="outlineNames.length">
      <select v-model="selectedOutlineName" class="form-select w-50">
        <option v-for="outlineName in outlineNames" :key="outlineName">
          {{ outlineName }}
        </option>
      </select>
    </div>
    <div v-else>
      <p>No outlines founds.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { outlinerStore } from '@/stores/outliner'
import { ref } from 'vue'

const store = outlinerStore()
await store.loadOutlines()
const outlineNames = store.outlineNames
const selectedOutlineName = ref('')
</script>
