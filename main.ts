// News-image entry (Node 22, standard library only): the program copies the
// finished poster for Wednesday 18 November 2026 — entry.png, drawn in this
// repository — to the grader's output path as entry.png. The poster is a
// newspaper-style front page: the Shenzhen summit, the Gulf escalation, the
// Kerch Bridge, the Alaska Senate result and the DR Congo Ebola outbreak,
// plus a strip of the day's other headlines.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
