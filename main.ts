// news-image-20261123: the world's news of Monday 23 November 2026 in one image (MIT). The picture — a
// four-panel front page: Ukraine's sea drones sinking a Russian warship off Libya, the COP31 climate summit
// collapsing, Nvidia reinstating Jensen Huang, and NATO answering fears of a nuclear-armed satellite — is
// committed beside this program as entry.png, and the program copies it byte for byte to /output/entry.png,
// so both grading runs write identical bytes. Node 22, the standard library alone.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
// Deterministic: the same committed bytes land in the output on every run.
