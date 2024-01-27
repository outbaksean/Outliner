<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-1"><h3>Settings</h3></div>
        <div class="col-2">
          <button type="button" class="btn btn-primary" @click="setMainTabNewSetting">New</button>
        </div>
      </div>
    </div>
    <div class="card" v-for="setting in store.selectedOutline?.settings" :key="setting.name">
      <div class="card-body">
        <h5 class="card-title">{{ setting.name }}</h5>
        <p class="card-text">{{ setting.description }}</p>
      </div>
    </div>
    <!-- <ul>
      <li v-for="setting in store.selectedOutline?.settings" :key="setting.name">
        {{ setting.name }} - {{ setting.description }}
      </li>
    </ul> -->
  </div>
</template>

<script setup lang="ts">
import { MainTabOptions } from '@/model/MainTabOptions'
import { outlinerStore } from '@/stores/outliner'

const store = outlinerStore()

function setMainTabNewSetting() {
  store.selectMainTab(MainTabOptions.NewSetting)
}
</script>
