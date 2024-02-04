import type { Outline } from '@/model/Outline'

export const SampleOutlines: Outline[] = [
  {
    name: 'Sample 1',
    description: 'A sample outline with a basic story',
    settings: [
      {
        name: 'Castle HummingWolf',
        description: 'The castle where the prince grew up.',
        notes: ['The castle is made of stone.', 'The castle is surrounded by a moat.'],
        characterNames: ['Prince Heron', 'King Heron']
      },
      {
        name: "The Dragon's Den",
        description: 'Where the dragon lives.',
        notes: [
          'The dragon is very evil.',
          'The dragon is very smelly.',
          'The dragon is very large.'
        ],
        characterNames: ['Dragon Smarg']
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
            characterNames: ['Prince Heron', 'King Heron', 'Dragon Smarg'],
            settingNames: ['Castle HummingWolf'],
            content:
              'Prince heron watched his father pace the room. The king was clearly upset. "We must do something about the dragon," he said. "He\'s been terrorizing our people for too long." ...'
          },
          {
            name: 'Prince Heron sets out',
            description: 'Prince Heron decides it his duty to defeat the evil dragon himself.',
            characterNames: ['Prince Heron', 'King Heron', 'Dragon Smarg'],
            settingNames: ['Castle HummingWolf'],
            content:
              'Prince Heron stepped forward. "Father," he said, "I will defeat the dragon." ...'
          }
        ],
        characterNames: ['Prince Heron', 'King Heron', 'Dragon Smarg'],
        settingNames: ['Castle HummingWolf']
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
