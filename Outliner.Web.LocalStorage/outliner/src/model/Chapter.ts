import type { ISubOutlineElement } from './ISubOutlineElement'
import type { Scene } from './Scene'

export interface Chapter extends ISubOutlineElement {
  scenes?: Scene[]
}
