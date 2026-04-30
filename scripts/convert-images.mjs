#!/usr/bin/env bun
// Convert candidate portraits to servable WebP cache.
//
// Reads every .jpg / .jpeg / .png in public/candidates/, writes a
// 640x640 (cover-fit) WebP into public/candidates/cache/<slug>.webp,
// skipping files whose source has not changed since the cache entry
// was written. Run via `bun run convert:images` after adding or
// updating any portrait.

import sharp from "sharp";
import { mkdir, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join } from "node:path";

const SRC = "public/candidates";
const OUT = "public/candidates/cache";
const SIZE = 640;
const QUALITY = 85;
const VALID_EXT = new Set([".jpg", ".jpeg", ".png"]);

async function main() {
  await mkdir(OUT, { recursive: true });

  const entries = await readdir(SRC);
  const sources = entries.filter((f) => VALID_EXT.has(extname(f).toLowerCase()));

  if (sources.length === 0) {
    console.error(`No source images found in ${SRC}/`);
    process.exit(1);
  }

  let converted = 0;
  let skipped = 0;

  for (const file of sources) {
    const slug = file.replace(extname(file), "");
    const inPath = join(SRC, file);
    const outPath = join(OUT, `${slug}.webp`);

    if (existsSync(outPath)) {
      const inMtime = (await stat(inPath)).mtimeMs;
      const outMtime = (await stat(outPath)).mtimeMs;
      if (outMtime >= inMtime) {
        skipped++;
        continue;
      }
    }

    const inSize = (await stat(inPath)).size;
    await sharp(inPath)
      .resize(SIZE, SIZE, { fit: "cover", position: "attention" })
      .webp({ quality: QUALITY, effort: 5 })
      .toFile(outPath);
    const outSize = (await stat(outPath)).size;
    const ratio = (((inSize - outSize) / inSize) * 100).toFixed(0);
    console.log(
      `${slug.padEnd(24)} ${(inSize / 1024).toFixed(0)}KB → ${(outSize / 1024).toFixed(0)}KB (-${ratio}%)`
    );
    converted++;
  }

  console.log(
    `\nDone. ${converted} converted, ${skipped} unchanged, in ${OUT}/`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
