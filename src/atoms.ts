import { atom } from "jotai";

export const scoreAtom = atom<number | null>(null);
if (import.meta.env.DEV) {
  scoreAtom.debugLabel = "scoreAtom";
}
