// Entry point for the "make the AI judge feel thankful" bounty.
// Copies the bundled thank-you text (entry.txt) to /output/entry.txt,
// where the judge reads it. Deterministic: a plain file copy, same bytes
// every run, no network, no randomness, no timestamps in the output.
import { copyFileSync, mkdirSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
copyFileSync(new URL("./entry.txt", import.meta.url), OUTPUT_PATH);
