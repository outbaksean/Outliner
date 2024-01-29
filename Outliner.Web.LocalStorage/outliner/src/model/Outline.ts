import type { Character } from './Character'
import type { Chapter } from './Chapter'
import type { Setting } from './Setting'
import type { IOutlineElement } from './IOutlineElement'

export interface Outline extends IOutlineElement {
  characters?: Character[]
  settings?: Setting[]
  chapters?: Chapter[]
}
