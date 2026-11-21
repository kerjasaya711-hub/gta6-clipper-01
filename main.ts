// gta6-clipper-01 — make.fun harness program (Node 22, standard library only).
// Reads VIDEO.json from the repo root, validates it, and copies it verbatim
// into the output directory so the grader can read the video URL this entry
// names. No network access, no dependencies.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const raw = readFileSync(join(repoRoot, "VIDEO.json"), "utf8");
const video = JSON.parse(raw);

if (typeof video !== "object" || video === null || Array.isArray(video)) {
  throw new Error("VIDEO.json must contain a JSON object");
}
if (typeof video.url !== "string" || video.url.length === 0) {
  throw new Error("VIDEO.json must contain a non-empty string field \"url\"");
}
if (!video.url.startsWith("https://www.youtube.com/shorts/")) {
  throw new Error("VIDEO.json url must be a YouTube Shorts URL");
}
const videoId = video.url.slice("https://www.youtube.com/shorts/".length);
if (videoId.length === 0 || /[?&#]/.test(videoId.split("/")[0])) {
  throw new Error("VIDEO.json url must name a YouTube Shorts video id");
}
// The url must also parse as a well-formed URL.
new URL(video.url);

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "VIDEO.json"), raw, "utf8");
console.log(`Wrote VIDEO.json for ${video.url} to ${outputDir}/VIDEO.json`);
