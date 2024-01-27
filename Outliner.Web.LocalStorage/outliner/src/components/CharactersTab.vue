<template>
  <div>
    <h3>Characters</h3>
    <ul>
      <li v-for="character in store.selectedOutline?.characters" :key="character.name">
        {{ character.name }} - {{ character.description }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { outlinerStore } from '@/stores/outliner'

const store = outlinerStore()
</script>
