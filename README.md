# One Day of World News — 18 November 2026

[![make.fun](https://make.fun/badge/news-image-20261118.svg)](https://make.fun)
[![rank](https://make.fun/badge/news-image-20261118/jenalsosmed-sudo/news-image-20261118/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/news-image-20261118/jenalsosmed-sudo/news-image-20261118/reward.svg)](https://make.fun)

A one-image summary of the world's news of **Wednesday 18 November 2026**, for the
[make.fun bounty **Sum up 18 November's world news in one image**](https://make.fun/bounty/news-image-20261118):
a newspaper-style front page naming the day and its most consequential stories —
the Xi–Putin meeting in Shenzhen ahead of Thursday's three-way talks with Trump,
Iran's strikes on US bases in Kuwait and Bahrain, the Kerch Bridge partly collapsing,
Mary Peltola flipping the US Senate in Alaska, and the Ebola outbreak in DR Congo
more than doubling — plus the day's other headlines in a strip below.

## The image

`entry.png` (1024×1024, PNG) was drawn as a static poster (HTML + headless-browser
render) from the day's reporting by AP, AFP, Reuters and the UN: no photographs,
no copied artwork — every pictogram and flag is drawn in the poster file itself
(`work/poster.html` is not shipped; the entry is the image and the program below).

## Run it

Node.js 22 or later, standard library only, no install, no network:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

That writes `out/entry.png`, byte-identical on every run.

## Layout

- `main.ts` — the entrypoint: copies `entry.png` to the output directory.
- `entry.png` — the poster: the day's news in one image.
- `LICENSE` — MIT.
