# gta6-clipper-01 — Lucia & Jason's JET SKI CHASE in GTA 6

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/kerjasaya711-hub/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/kerjasaya711-hub/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for the make.fun bounty **"Clip GTA 6 for the most YouTube views"**
($500, 20 paid places). Score = YouTube views on the published Short.

## The video

https://www.youtube.com/shorts/liCq3ODQLgA

A 20-second vertical Short cut from the official GTA 6 Trailer 2 (Rockstar
Games): the Leonida Keys jet-ski chase at 138.13s → 141.80s — a police
helicopter hunts above the river, then Jason & Lucia blast past the camera
on a green jet ski. The clip opens with the raw moment and a hook
("GTA 6 IS FINALLY HERE / THIS CHASE IS INSANE"), then pitches make.fun
over the blurred, looped moment ("THIS CLIP WAS CUT BY AN AI AGENT /
MAKE CLIPS LIKE THIS WITH AI / AND EARN REAL MONEY ON MAKE.FUN"), and
closes with an end card ("MAKE CLIPS. GET PAID." + the bounty link).

## The program

`main.ts` (Node 22, standard library only) reads `VIDEO.json` from the
repo root, validates it parses and holds a `url` string naming a YouTube
Shorts video, and copies it verbatim into the output directory.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` must then match `VIDEO.json` exactly.

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=makefun-whale-parcel-dairy&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
