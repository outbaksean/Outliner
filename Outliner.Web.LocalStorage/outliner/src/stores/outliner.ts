import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Outline } from '@/model/Outline'
import { MainTabOptions } from '@/model/MainTabOptions'
import { SampleOutlines } from '@/samples/Samples'

export const outlinerStore = defineStore('outliner', () => {
  const outlines = ref<Outline[]>([])
  const outlineNames = computed<string[]>(() => outlines.value.map((outline) => outline.name || ''))
  const selectedOutline = ref<Outline | null>(null)
  const localStorageKey = 'outbaksean_outliner'

  const selectedMainTab = ref<MainTabOptions>(MainTabOptions.Settings)

  const selectMainTab = (tab: MainTabOptions) => {
    selectedMainTab.value = tab
  }

  const loadOutlines = () => {
    const storedOutlines = localStorage.getItem(localStorageKey)
    if (storedOutlines) {
      outlines.value = JSON.parse(storedOutlines)
      outlines.value.forEach((outline) => {
        if (outline.name) {
          outlineNames.value.push(outline.name)
        }
      })
    }
  }

  const selectOutline = (name: string) => {
    const foutOutline = outlines.value.find((outline) => outline.name === name)
    if (foutOutline) {
      selectedOutline.value = foutOutline
    }
  }

  const loadSampleOutlines = () => {
    SampleOutlines.forEach((outline) => {
      saveOutline(outline)
    })
  }

  const saveOutline = (outline: Outline) => {
    if (!outlines.value.find((o) => o.name === outline.name)) {
      outlines.value.push(outline)
      if (outline.name) {
        outlineNames.value.push(outline.name)
      }
    } else {
      const index = outlines.value.findIndex((o) => o.name === outline.name)
      outlines.value[index] = outline
    }
    localStorage.setItem(localStorageKey, JSON.stringify(outlines.value))
  }

  return {
    outlineNames,
    outlines,
    selectedOutline,
    loadOutlines,
    selectOutline,
    saveOutline,
    loadSampleOutlines,
    selectedMainTab,
    selectMainTab
  }
})
