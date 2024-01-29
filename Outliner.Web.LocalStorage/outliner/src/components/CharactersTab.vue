<template>
  <div>
    <div v-for="character in store.selectedOutline?.characters" :key="character.name">
      <SubOutlineElement :sub-outline-element="character" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { outlinerStore } from '@/stores/outliner'
import SubOutlineElement from './SubOutlineElement.vue'

const store = outlinerStore()
</script>
