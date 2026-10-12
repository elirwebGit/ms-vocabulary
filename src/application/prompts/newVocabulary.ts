export const newVocabulary = (term: string) =>
`Act as a linguist and create a vocabulary study guide in a Markdown table format. The topic is: ${term}.

I want to learn 5 key words or terms, and for each one, I also want to learn a related phrasal verb.

The table must contain exactly the following columns:
- Word (Main English word/term)
- Translation (Portuguese translation)
- Common Collocations (2 or 3 common combinations with the main word)
- Related Phrasal Verb (A common phrasal verb connected to the word's context + meaning)
- Micro-context (A single short sentence in English using the main word and the phrasal verb together or in the same scenario).

At the end of the table, create a short paragraph in English (approximately 40 to 50 words) that combines all 5 key terms and the 5 phrasal verbs studied into a single, fluid, and natural context.`;