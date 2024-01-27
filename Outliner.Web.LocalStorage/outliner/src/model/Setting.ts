import type { Character } from "./Character";

export interface Setting {
    description?: string;
    name?: string;
    characters?: Character[];
}