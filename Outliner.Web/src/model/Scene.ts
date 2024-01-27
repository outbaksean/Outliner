import { Character } from "./Character";
import { Setting } from "./Setting";

export interface Scene {
    description?: string;
    name?: string;
    characters?: Character[];
    settings?: Setting[];
}