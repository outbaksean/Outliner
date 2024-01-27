<template>
  <div>
    <SettingsTab v-if="store.selectedMainTab === MainTabOptions.Settings" />
    <CharactersTab v-if="store.selectedMainTab === MainTabOptions.Characters" />
    <ChaptersTab v-if="store.selectedMainTab === MainTabOptions.Chapters" />
    <NewSetting v-if="store.selectedMainTab === MainTabOptions.NewSetting" />
  </div>
</template>

<script setup lang="ts">
import { outlinerStore } from '@/stores/outliner'
import SettingsTab from './SettingsTab.vue'
import CharactersTab from './CharactersTab.vue'
import ChaptersTab from './ChaptersTab.vue'
import { MainTabOptions } from '@/model/MainTabOptions'
import NewSetting from './NewSetting.vue'

const store = outlinerStore()
</script>
