<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ title }}</h5>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" v-model="localSubOutlineElement.name" />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea
            class="form-control"
            id="description"
            v-model="localSubOutlineElement.description"
          />
        </div>
        <div class="mb-3">
          <label for="notes" class="form-label">Notes</label>
          <textarea class="form-control" id="notes" v-model="localSubOutlineElement.notes" />
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-secondary">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISubOutlineElement } from '@/model/ISubOutlineElement'
import type { PropType } from 'vue'

const props = defineProps({
  subOutlineElement: {
    type: Object as PropType<ISubOutlineElement>,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const localSubOutlineElement: ISubOutlineElement = props.subOutlineElement
</script>
