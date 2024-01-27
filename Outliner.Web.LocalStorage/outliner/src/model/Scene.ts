import type { Character } from './Character'
import type { Setting } from './Setting'

export interface Scene {
  description?: string
  name?: string
  content?: string
  characters?: Character[]
  settings?: Setting[]
}
