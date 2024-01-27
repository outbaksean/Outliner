import type { Outline } from '@/api/models'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Client } from '@/api/client'
import { AnonymousAuthenticationProvider } from '@microsoft/kiota-abstractions'
import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary'

export const outlinerStore = defineStore('outliner', () => {
  const outlineNames = ref<string[]>([])
  const outlines = ref<Outline[]>([])
  const selectedOutline = ref<Outline>()
  const localStorageKey = 'outliner_outbsean'

  const loadOutlines = async () => {
    const client = GetClient()
    const apiOutlines = await client.api.outliner.get()
    if (apiOutlines) {
      outlines.value = apiOutlines
      outlineNames.value = apiOutlines.map((x) => x.name).filter((x) => x !== undefined) as string[]
    }
    localStorage.setItem(localStorageKey, JSON.stringify(outlines.value))
  }

  function selectOutline(name: string) {
    selectedOutline.value = outlines.value.find((x) => x.name === name)
  }

  function GetClient(): Client {
    const authProvider = new AnonymousAuthenticationProvider()
    const adapter = new FetchRequestAdapter(authProvider)
    adapter.baseUrl = 'https://localhost:7129'
    return new Client(adapter)
  }

  return { outlineNames, outlines, loadOutlines, selectOutline, selectedOutline }
})
