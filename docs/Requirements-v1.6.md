# Hyrule Atlas requirements and timeline audit — v1.6

Reviewed November 7, 2026. This audit replaces the earlier equipment-text inference with explicit prerequisites for every active record. The database has **272 active checks** and one archived duplicate token. All previous record IDs and milestone keys remain stable.

## Requirements

Each record now has a reviewed persistent requirement list. Alternatives are represented as alternatives, including the bean or Scarecrow routes to the Lake Hylia laboratory roof. Unknown requirements fail validation rather than being silently discarded. Rupees to spend, temporary bottle contents, local dungeon keys and room actions remain in the numbered guide; the tracker records permanent unlocks and collection progress, not current consumable stock.

The new events cover the seven dungeon rewards absent from the original data, waking Talon, opening the mountain gate, delivering Ruto’s Letter, reaching Blue Fire, thawing King Zora, unlocking return to childhood, draining the well, restoring the ranch and opening the sages’ castle bridge. The existing Gohma, Master Sword/Light Medallion and Gerudo rescue checks are labeled as events. There are 19 Event checks in total, including 16 new records.

- Light Arrows require all five adult temple reward events. Bow, Longshot and Hammer do not imply temple completion.
- The defense fairy requires the sages’ bridge, Golden Gauntlets, magic, Zelda’s Lullaby and the wallet capacity for the remake’s fee. The route explains the payment separately.
- Nocturne of Shadow requires Forest, Fire and Water rewards.
- Lake restoration checks require the Water reward.
- Returning to Young Link requires Forest completion, Prelude of Light and the sword-pedestal event. Fire Temple is independently reachable without requiring Forest completion first.
- Trading exchanges each require the preceding exchange. Mask sales and ordered prize chains use the same sequence frontier. Their later steps stay hidden even when locked records are included.

The generated [requirements table](Requirements.csv) lists every active record, its persistent prerequisites, ordered stages and sources.

## Ordered timeline work

Stages are stored as stable named keys inside the existing overall collectible. Only the next stage is actionable. Adjacent actions in the same timeline are merged into one stage; there is no fixed two-stage limit.

Both-timeline mode replaces the main checkbox with a progress counter and puts the ordered stage checkboxes inside the expanded guide. A single-timeline filter shows only an eligible current stage for that timeline and restores its main-row checkbox. Future timeline work is hidden even with Include locked enabled. Completed history can be reviewed under Completed.

Examples include Adult Fairy Note → Young Heart Piece, Young bean planting → Adult pickup, and Adult warp-song lesson → Young planting → Adult pickup. Learning a shared song or planting a particular soil patch can satisfy the same real preparation in another route. Planting never marks its later reward collected. The Lake Hylia roof preserves its independent Scarecrow alternative without recording a bean that was not planted.

Partial stages do not increment the overall collected count or health. Undo restores the preceding progress snapshot. Unchecking an earlier stage clears its later stages; unchecking an earlier exchange resets its later exchanges. Region badges use the exact filtered feed, while the remaining summary includes queued checks as waiting.

## Saves and inventory

Schema 6 stores partial stage progress alongside existing completion and milestone arrays. Old whole-item checks remain fully completed, including retired IDs. Legacy later trade exchanges backfill only their mandatory predecessors. Existing story evidence can establish earlier child rewards, thawing the king or Forest completion from Prelude; equipment and boss-heart picks do not invent adult medallions.

The native app keeps an untouched private copy of the previous save before its first v1.6 session. The export button exposes that copy. Current JSON exports include stage routes, stage keys and boss-heart picks. The package, signing certificate, preference store and storage key are unchanged; install the APK over the existing application.

The inventory has nine stone/medallion checkboxes. Boss Heart Containers remain separate from dungeon rewards and are enabled after their corresponding reward, while previously recorded heart pickups remain intact. Health still uses three starting hearts, one heart per four pieces, and up to eight boss pickups, with a 20-heart ceiling. Magic and capacity upgrades continue to follow completed items.

## Verification

`npm test` validates collectible coverage, source references, every prerequisite and stage reference, individual missing-medallion gates, sequence visibility, legacy migrations and normal progression through all 272 active checks. The simulation reaches every check without bypassing its requirements.

`npm run test:ui` exercises the rendered app with legacy saves, trade advancement, two- and three-stage routes, single-timeline filtering, partial completion totals, Undo, reload, backup restore, dungeon gates, inventory health/magic, filter-aware badges, optional keep-awake and phone/tablet widths.

## Reviewed sources

The guide retains its entry-level sources. These references support the newly explicit story gates:

- [Nintendo Life — Bow and elemental arrows](https://www.nintendolife.com/guides/zelda-ocarina-of-time-bow-arrow-fire-ice-light-arrows-switch-2)
- [Nintendo Life — Great Fairy fountains](https://www.nintendolife.com/guides/zelda-ocarina-of-time-great-fairy-fountain-locations-all-switch-2)
- [Nintendo Life — Remake walkthrough](https://www.nintendolife.com/guides/zelda-ocarina-of-time-walkthrough-switch-2-remake)
- [Zelda Central — Spiritual Stones and Medallions](https://zeldacentral.com/games/ocarina-of-time-remake/medallions-and-spiritual-stones/)
