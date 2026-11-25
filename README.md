# Fridge Roast: One Line, Biggest Laugh

[![Fridge Roast: One Line, Biggest Laugh](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb.svg)](https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
[![Rank](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/sosissausage35-collab/fridge-roast-one-line/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
[![Reward](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/sosissausage35-collab/fridge-roast-one-line/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)

Entry for the [Fridge Roast: One Line, Biggest Laugh](https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb) bounty on make.fun — one line, at most 200 characters, roasting a smart fridge.

## The line

> My smart fridge updated its firmware at 2 a.m. and forgot how to freeze — now it just sends me push notifications as the milk dies inside it.

## Why this line

The joke is aimed squarely at the fridge's "smart" features, not at fridges in general: a 2 a.m. firmware update — the classic smart-appliance ritual — breaks the fridge's one actual job (freezing), and the punchline turns the failure into a second insult, as the fridge keeps doing the smart part (push notifications) while narrating the milk dying inside it. The angle dodges the obvious cracks (ordering groceries, watching you eat); the turn lands in a single sentence, and every word earns its place.

## How it works

`main.ts` (Node 22, no dependencies, fully deterministic — no randomness, clock, network, or environment reads) writes the line to `/output/entry.txt` and prints it to stdout, with a guard enforcing the gate: exactly one line of 1–200 characters, no newline inside.

```sh
node main.ts
```
