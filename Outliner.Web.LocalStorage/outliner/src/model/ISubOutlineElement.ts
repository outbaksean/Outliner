import type { IOutlineElement } from './IOutlineElement'

export interface ISubOutlineElement extends IOutlineElement {
  notes?: string[]
  characterNames?: string[]
  settingNames?: string[]
  sceneNames?: string[]
}
