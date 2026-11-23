import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const line =
  "While I was robbing a bank in GTA 6, my coding agent merged to production, fixed 300 bugs, and told my boss 'per my last commit' — HR thinks I had a breakthrough week.";

// Ensure the output directory exists before writing the single entry line.
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, `${line}\n`, "utf8");
