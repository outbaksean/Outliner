import { Setting } from "./Setting";

export interface Character {
    description?: string;
    name?: string;
    settings?: Setting[];
}