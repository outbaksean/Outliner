<template>
  <div class="accordian" id="subOutlineElementAccordian">
    <div class="accordian-item">
      <h2 class="accordian-header">
        <button
          class="accordian-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSettings"
        >
          Settings
        </button>
      </h2>
      <div
        id="collapseSettings"
        class="accordian-collapse collapse show"
        data-bs-parent="#subOutlineElementAccordian"
      >
        <div class="accordian-body">
          <SettingsTab />
        </div>
      </div>
    </div>
    <div class="accordian-item">
      <h2 class="accordian-header">
        <button
          class="accordian-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseCharacters"
        >
          Characters
        </button>
      </h2>
      <div
        id="collapseCharacters"
        class="accordian-collapse collapse"
        data-bs-parent="#subOutlineElementAccordian"
      >
        <div class="accordian-body">
          <CharactersTab />
        </div>
      </div>
    </div>
    <div class="accordian-item">
      <h2 class="accordian-header">
        <button
          class="accordian-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseChapters"
        >
          Chapters
        </button>
      </h2>
      <div
        id="collapseChapters"
        class="accordian-collapse collapse"
        data-bs-parent="#subOutlineElementAccordian"
      >
        <div class="accordian-body">
          <ChaptersTab />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SettingsTab from './SettingsTab.vue'
import CharactersTab from './CharactersTab.vue'
import ChaptersTab from './ChaptersTab.vue'
</script>
```
