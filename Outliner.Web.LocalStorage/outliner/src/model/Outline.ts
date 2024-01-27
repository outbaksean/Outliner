import type { Character } from './Character'
import type { Chapter } from './Chapter'
import type { Setting } from './Setting'

export interface Outline {
  description?: string
  name?: string
  characters?: Character[]
  settings?: Setting[]
  chapters?: Chapter[]
}
