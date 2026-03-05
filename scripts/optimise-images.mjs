#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);
const CODE_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".md",
]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
      continue;
    }
    files.push(full);
  }
  return files;
}

async function optimiseProject(projectPath) {
  const absProject = path.resolve(projectPath);
  const publicDir = path.join(absProject, "public");

  try {
    await fs.access(publicDir);
  } catch {
    console.log(`[skip] ${absProject} (no public directory)`);
    return;
  }

  const allPublicFiles = await walk(publicDir);
  const imageFiles = allPublicFiles.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return IMAGE_EXTENSIONS.has(ext);
  });

  const replacementMap = new Map();
  let convertedCount = 0;

  for (const file of imageFiles) {
    const ext = path.extname(file);
    const target = file.slice(0, -ext.length) + ".webp";

    try {
      await sharp(file)
        .rotate()
        .webp({ quality: 78, effort: 6, smartSubsample: true })
        .toFile(target);

      const relSource = `/${path.relative(publicDir, file).replaceAll(path.sep, "/")}`;
      const relTarget = relSource.replace(/\.[^./]+$/, ".webp");
      replacementMap.set(relSource, relTarget);
      convertedCount += 1;
    } catch (error) {
      console.error(`[error] Failed converting ${file}:`, error);
    }
  }

  const codeRoots = ["app", "components", "data", "lib"]
    .map((dir) => path.join(absProject, dir));

  let rewrittenFiles = 0;
  for (const root of codeRoots) {
    try {
      await fs.access(root);
    } catch {
      continue;
    }

    const files = await walk(root);
    for (const file of files) {
      if (!CODE_EXTENSIONS.has(path.extname(file).toLowerCase())) {
        continue;
      }

      const original = await fs.readFile(file, "utf8");
      let updated = original;

      for (const [from, to] of replacementMap) {
        updated = updated.split(from).join(to);
      }

      if (updated !== original) {
        await fs.writeFile(file, updated, "utf8");
        rewrittenFiles += 1;
      }
    }
  }

  console.log(
    `[done] ${absProject} converted=${convertedCount} rewritten_files=${rewrittenFiles}`,
  );
}

const targets = process.argv.slice(2);
if (targets.length === 0) {
  targets.push(".", "../sanning");
}

for (const target of targets) {
  await optimiseProject(target);
}
