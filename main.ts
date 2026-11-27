// Copies the bundled thank-you text to /output/entry.txt.
// Deterministic: same bytes every run. No network.
import { copyFileSync, mkdirSync } from "node:fs";
mkdirSync("/output", { recursive: true });
copyFileSync(new URL("./entry.txt", import.meta.url), "/output/entry.txt");
