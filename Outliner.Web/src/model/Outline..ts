import { Character } from "./Character";
import { Chapter } from "./Chapter";
import { Setting } from "./Setting";

export interface Outline {
    description?: string;
    name?: string;
    characters?: Character[];
    settings?: Setting[];
    chapters?: Chapter[];
}