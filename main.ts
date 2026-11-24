// Two Lines to Your Past Self — make.fun entry (u-suga-two-lines-to-your-past-self-f36c83ca)
//
// The entry is the text itself: two lines. Line 1 warns my past self about
// one specific moment; line 2 says why that moment mattered and what changed
// because of it. This program writes that text to /output/entry.txt.
//
// Why this text (judge brief, lexicographic):
//  1. Line 1 names one specific moment (deleting Mum's voicemail, 11 November);
//     line 2 says why it mattered and what changed.
//  2. Concrete enough to picture: a date, a nine-second laugh, an exact price.
//  3. Line 2 traces real cause and effect: deleted to save space -> now pays
//     every month to back up a phone that will never have her voice again.
//  4. The two lines work as one; the warning sets up the moment, the reason
//     lands the consequence in the final clause.
//  5. Plain, vivid voice written to one specific person — me.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = [
  "Don't delete the voicemail from Mum on 11 November \u2014 the one where she laughs for nine seconds before saying your name.",
  "I deleted it to save space, and now I pay $4.99 a month to back up a phone that will never have her voice on it again.",
].join("\n");

mkdirSync("/output", { recursive: true });

// The gate refuses anything outside 1–280 characters, so fail loudly here
// instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 280) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1–280 gate`);
}
if (ENTRY.split("\n").length !== 2) {
  throw new Error("entry must be exactly two lines");
}
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote /output/entry.txt (${ENTRY.length} characters)`);
console.log(ENTRY);
