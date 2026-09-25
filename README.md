# Invisible Unicode Character Reference

A compact reference dataset and dependency-free command-line cleaner for the five invisible Unicode formatting characters removed by [Zerowidth Cleaner](https://zerowidthcleaner.com/).

## What's included

- `data/characters.csv` — code point, Unicode character name, behavior, cleaner action, and a practical caution for each supported character.
- `docs/scope.md` — exactly what this list covers and what it does not claim to detect.
- `tools/clean-text.mjs` — a small Node.js command-line tool that removes only these five characters from UTF-8 text.

## Supported characters

| Code point | Unicode name | Character behavior |
| --- | --- | --- |
| U+034F | COMBINING GRAPHEME JOINER | Can block canonical reordering and distinguish sequences in collation or search. |
| U+00AD | SOFT HYPHEN | A discretionary hyphenation point; a hyphen may appear at a line break. |
| U+200B | ZERO WIDTH SPACE | Marks an optional line-break opportunity without visible width. |
| U+2060 | WORD JOINER | Prevents a line break at its position. |
| U+FEFF | BYTE ORDER MARK | Commonly used as a byte-order mark at the start of text; it also has a legacy word-joining use. |

## Use the command-line cleaner

Node.js is required; no package installation is needed.

```sh
node tools/clean-text.mjs input.txt > cleaned.txt
```

To read from standard input and print a JSON count report to standard error:

```sh
cat input.txt | node tools/clean-text.mjs --report > cleaned.txt
```

The tool never edits the input file. It writes cleaned text to standard output. With `--report`, the per-character removal counts go to standard error so the cleaned text can still be redirected separately.

## Important limits

Removal is not universally safe: these characters can carry intended line-breaking, joining, or encoding behavior. Review the report and keep an original copy when the text matters. This tool does not identify who wrote text, detect AI authorship, or detect statistical text watermarks. It removes only the five explicit code points listed above.

## Sources

Character names and behavior are described in the Unicode Consortium's [FAQ on unsupported and invisible characters](https://www.unicode.org/faq/unsup_char.html), [FAQ on combining marks](https://www.unicode.org/faq/char_combmark.html), and [Unicode Standard, Chapter 23](https://unicode.org/versions/latest/ch23.pdf). See [`docs/sources.md`](docs/sources.md) for the source notes.
