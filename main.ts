// One Line, One Laugh — make.fun entry
// Writes the winning one-liner to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My rice cooker has beeped at 6:12 every morning for 412 days. Today it beeped at 6:13. I stood in the kitchen for a full minute, waiting for the apology.";

// The gate allows 1–200 characters; refuse to write an over-long line.
if (LINE.length > 200) {
  throw new Error(`entry too long: ${LINE.length} characters (max 200)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
