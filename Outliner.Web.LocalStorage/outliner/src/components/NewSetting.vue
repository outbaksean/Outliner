<template>
  <h3>New Setting</h3>
  <div class="input-group>">
    <span class="input-group-text">Name</span>
    <input type="text" class="form-control" v-model="settingToSave.name" />
  </div>
  <div class="input-group>">
    <span class="input-group-text">Description</span>
    <textarea class="form-control" v-model="settingToSave.description"></textarea>
  </div>
  <button type="button" class="btn btn-primary" @click="saveSetting">Save</button>
</template>

<script setup lang="ts">
import { MainTabOptions } from '@/model/MainTabOptions'
import type { Setting } from '@/model/Setting'
import { outlinerStore } from '@/stores/outliner'

const store = outlinerStore()

const settingToSave: Setting = {
  name: '',
  description: ''
}

const saveSetting = () => {
  store.selectedOutline?.settings?.push(settingToSave)
  if (store.selectedOutline) {
    store.saveOutline(store.selectedOutline)
  }

  store.selectMainTab(MainTabOptions.Settings)
}
</script>
