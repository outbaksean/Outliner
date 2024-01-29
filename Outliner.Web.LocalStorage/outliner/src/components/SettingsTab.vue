<template>
  <div>
    <div class="container">
      <div class="row">
        <div>
          <button type="button" class="btn btn-primary" @click="setMainTabNewSetting">New</button>
        </div>
      </div>
    </div>
    <div v-for="setting in store.selectedOutline?.settings" :key="setting.name">
      <SubOutlineElement :sub-outline-element="setting" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { MainTabOptions } from '@/model/MainTabOptions'
import { outlinerStore } from '@/stores/outliner'
import SubOutlineElement from './SubOutlineElement.vue'

const store = outlinerStore()

function setMainTabNewSetting() {
  store.selectMainTab(MainTabOptions.NewSetting)
}
</script>
