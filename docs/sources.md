# Source notes

- The Unicode Consortium's [FAQ on unsupported and invisible characters](https://www.unicode.org/faq/unsup_char.html) names zero-width spaces, soft hyphens, word joiners, and related invisible characters.
- The Unicode Consortium's [FAQ on combining marks](https://www.unicode.org/faq/char_combmark.html) explains that U+034F is a combining mark, is invisible, and can affect canonical ordering, collation, searching, and distinctions between otherwise canonically equivalent sequences.
- The Unicode Standard's [Chapter 23](https://unicode.org/versions/latest/ch23.pdf) describes U+200B as a line-break opportunity, U+2060 as a word-joining character, and U+00AD as a discretionary hyphenation point; it also describes U+FEFF's historical joining use.
- The Unicode Character Database publishes the authoritative character names in [`UnicodeData.txt`](https://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt). The CSV uses those formal names for the five code points in this project's explicit tool scope.
