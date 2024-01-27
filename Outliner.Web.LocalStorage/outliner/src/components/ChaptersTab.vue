<template>
  <div>
    <h3>Chapters</h3>
    <ul>
      <li v-for="chapter in store.selectedOutline?.chapters" :key="chapter.name">
        {{ chapter.name }} - {{ chapter.description }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { outlinerStore } from '@/stores/outliner'

const store = outlinerStore()
</script>
