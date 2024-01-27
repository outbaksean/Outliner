import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Outline } from '@/model/Outline'

export const outlinerStore = defineStore('outliner', () => {
  const outlines = ref<Outline[]>([])
  const outlineNames = computed<string[]>(() => outlines.value.map((outline) => outline.name || ''))
  const selectedOutline = ref<Outline | null>(null)
  const localStorageKey = 'outbaksean_outliner'

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
    sampleOutlines.forEach((outline) => {
      saveOutline(outline)
    })
  }

  const sampleOutlines: Outline[] = [
    {
      name: 'Sample 1',
      description: 'A sample outline with a basic story',
      settings: [
        {
          name: 'Castle HummingWolf',
          description: 'The castle where the prince grew up.'
        },
        {
          name: "The Dragon's Den",
          description: 'Where the dragon lives.'
        }
      ],
      characters: [
        {
          name: 'Prince Heron',
          description: 'The main character, a young prince.'
        },
        {
          name: 'King Heron',
          description: 'The father of Prince Heron. A kingly king.'
        },
        {
          name: 'Dragon Smarg',
          description: 'The evil dragon.'
        }
      ],
      chapters: [
        {
          name: 'The lords squabble',
          description: 'King and Prince Heron argue about the dragon.',
          scenes: [
            {
              name: 'Search for a hero',
              description: 'King Heron discusses with his lords how to defeat the evil dragon.',
              characters: [
                {
                  name: 'Prince Heron',
                  description: 'The main character, a young prince.'
                },
                {
                  name: 'King Heron',
                  description: 'The father of Prince Heron. A kingly king.'
                },
                {
                  name: 'Dragon Smarg',
                  description: 'The evil dragon.'
                }
              ],
              settings: [
                {
                  name: 'Castle HummingWolf',
                  description: 'The castle where the prince grew up.'
                }
              ],
              content:
                'Prince heron watched his father pace the room. The king was clearly upset. "We must do something about the dragon," he said. "He\'s been terrorizing our people for too long." ...'
            },
            {
              name: 'Prince Heron sets out',
              description: 'Prince Heron decides it his duty to defeat the evil dragon himself.',
              characters: [
                {
                  name: 'Prince Heron',
                  description: 'The main character, a young prince.'
                },
                {
                  name: 'King Heron',
                  description: 'The father of Prince Heron. A kingly king.'
                },
                {
                  name: 'Dragon Smarg',
                  description: 'The evil dragon.'
                }
              ],
              settings: [
                {
                  name: 'Castle HummingWolf',
                  description: 'The castle where the prince grew up.'
                }
              ],
              content:
                'Prince Heron stepped forward. "Father," he said, "I will defeat the dragon." ...'
            }
          ],
          characters: [
            {
              name: 'Prince Heron',
              description: 'The main character, a young prince.'
            },
            {
              name: 'King Heron',
              description: 'The father of Prince Heron. A kingly king.'
            },
            {
              name: 'Dragon Smarg',
              description: 'The evil dragon.'
            }
          ],
          settings: [
            {
              name: 'Castle HummingWolf',
              description: 'The castle where the prince grew up.'
            }
          ]
        }
      ]
    },
    {
      name: 'Blank Sample',
      description: 'A sample outline with no content',
      settings: [],
      characters: [],
      chapters: []
    }
  ]

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
    loadSampleOutlines
  }
})
