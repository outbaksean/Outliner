<template>
  <div>
    <div v-for="chapter in store.selectedOutline?.chapters" :key="chapter.name">
      <SubOutlineElement :sub-outline-element="chapter" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { outlinerStore } from '@/stores/outliner'
import SubOutlineElement from './SubOutlineElement.vue'

const store = outlinerStore()
</script>
