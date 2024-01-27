<template>
  <div>
    <div v-if="outlineNames.length">
      <select v-model="selectedOutlineName" class="form-select" @change="SelectOutline()">
        <option v-if="!selectedOutlineName" value="" disabled>Select an outline</option>
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
const outlineNames = store.outlineNames
const selectedOutlineName = ref('')

function SelectOutline() {
  store.selectOutline(selectedOutlineName.value)
}
</script>
