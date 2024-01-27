<template>
  <div>
    <nav class="navbar">
      <div class="container-fluid">
        <a class="nav-link" href="#" @click="selectMainTab(MainTabOptions.Settings)">Settings</a>
        <a class="nav-link" href="#" @click="selectMainTab(MainTabOptions.Characters)"
          >Characters</a
        >
        <a class="nav-link" href="#" @click="selectMainTab(MainTabOptions.Chapters)">Chapters</a>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { MainTabOptions } from '@/model/MainTabOptions'
import { outlinerStore } from '@/stores/outliner'

const store = outlinerStore()

function selectMainTab(tab: MainTabOptions) {
  store.selectMainTab(tab)
}
</script>
