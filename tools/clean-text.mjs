#!/usr/bin/env node

import { readFile } from "node:fs/promises";

const names = new Map([
  ["\u034F", "COMBINING GRAPHEME JOINER"],
  ["\u00AD", "SOFT HYPHEN"],
  ["\u200B", "ZERO WIDTH SPACE"],
  ["\u2060", "WORD JOINER"],
  ["\uFEFF", "BYTE ORDER MARK"]
]);

const args = process.argv.slice(2);
const report = args.includes("--report");
const inputPath = args.find((arg) => arg !== "--report");

if (args.includes("--help")) {
  process.stdout.write("Usage: node tools/clean-text.mjs [--report] [input-file]\nReads UTF-8 from a file or standard input; writes cleaned text to standard output.\n");
  process.exit(0);
}

const input = inputPath
  ? await readFile(inputPath, "utf8")
  : await new Promise((resolve, reject) => {
      let text = "";
      process.stdin.setEncoding("utf8");
      process.stdin.on("data", (chunk) => { text += chunk; });
      process.stdin.on("end", () => resolve(text));
      process.stdin.on("error", reject);
    });

const counts = new Map();
const output = [...input].filter((character) => {
  if (!names.has(character)) return true;
  counts.set(character, (counts.get(character) || 0) + 1);
  return false;
}).join("");

process.stdout.write(output);

if (report) {
  const removed = Object.fromEntries(
    [...counts].map(([character, count]) => [
      `U+${character.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")} ${names.get(character)}`,
      count
    ])
  );
  process.stderr.write(`${JSON.stringify({ removed }, null, 2)}\n`);
}

