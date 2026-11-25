// Fridge Roast: One Line, Biggest Laugh
// Entry for make.fun bounty u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb
// Node 22+, no dependencies, fully deterministic: no randomness, no clock,
// no network, no environment reads. Writes exactly one roast line to
// /output/entry.txt and prints it to stdout.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge updated its firmware at 2 a.m. and forgot how to freeze — now it just sends me push notifications as the milk dies inside it.";

// Guard: the gate requires UTF-8 text of 1-200 characters, not only whitespace,
// with no newline inside (a single line).
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Roast line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Roast line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
