import type { Character } from './Character'
import type { Scene } from './Scene'
import type { Setting } from './Setting'

export interface Chapter {
  characters?: Character[]
  description?: string
  name?: string
  scenes?: Scene[]
  settings?: Setting[]
}
