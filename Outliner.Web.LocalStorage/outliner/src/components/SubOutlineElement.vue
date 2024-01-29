<template>
  <div class="card m-2">
    <div class="card-body">
      <h5 class="card-title">{{ subOutlineElement.name }}</h5>
      <p class="card-text">{{ subOutlineElement.description }}</p>
      <ul>
        <li v-for="note in subOutlineElement.notes" :key="note">{{ note }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISubOutlineElement } from '@/model/ISubOutlineElement'
import type { PropType } from 'vue'

defineProps({
  subOutlineElement: {
    type: Object as PropType<ISubOutlineElement>,
    required: true
  }
})
</script>
