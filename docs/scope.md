# Scope

This project documents and removes exactly these five code points because they are the set currently handled by Zerowidth Cleaner: U+034F, U+00AD, U+200B, U+2060, and U+FEFF.

The list is an explicit tool scope, not a complete catalog of invisible Unicode characters. It does not include join controls such as U+200C and U+200D, bidirectional controls, variation selectors, or every character with the Unicode `Default_Ignorable_Code_Point` property.

The command-line tool removes the listed code points only. It does not normalize text, alter punctuation, infer intent, detect authorship, or claim to detect an AI watermark. Some listed characters have valid typographic, language, or encoding uses, so inspect removal counts before relying on the cleaned result.

