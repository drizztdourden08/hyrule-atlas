const guideDatabase={
  "version": 6,
  "edition": "Ocarina of Time — Nintendo Switch 2 remake",
  "reviewed": "2026-11-07",
  "logic": {
    "aliases": {
      "Hyrule Field access": [
        "Adult access"
      ],
      "Deku Tree access": [
        "Deku Tree cleared"
      ],
      "Sword": [
        "Kokiri Sword",
        "Adult access",
        "Trade Sequence:11",
        "Equipment:6"
      ],
      "Slingshot": [
        "Upgrade:0",
        "Upgrade:1"
      ],
      "Bow": [
        "Upgrade:2",
        "Upgrade:3"
      ],
      "Bomb Bag": [
        "Upgrade:4",
        "Upgrade:5"
      ],
      "Hookshot": [
        "Longshot"
      ],
      "Silver Gauntlets": [
        "Upgrade:15",
        "Upgrade:16"
      ],
      "Golden Gauntlets": [
        "Upgrade:16"
      ],
      "Goron Bracelet": [
        "Upgrade:14",
        "Upgrade:15",
        "Upgrade:16"
      ],
      "Silver Scale": [
        "Upgrade:12",
        "Upgrade:13",
        "Golden Scale"
      ],
      "Golden Scale": [
        "Upgrade:13"
      ],
      "Goron Tunic": [
        "Equipment:2"
      ],
      "Zora Tunic": [
        "Equipment:3"
      ],
      "Mirror Shield": [
        "Equipment:1"
      ],
      "Hover Boots": [
        "Equipment:4"
      ],
      "Magic": [
        "Great Fairy:0",
        "Great Fairy:3"
      ],
      "Din Fire": [
        "Great Fairy:0",
        "progress:26"
      ],
      "Epona": [
        "Side Quest:1"
      ],
      "Bottle": [
        "Bottle:0",
        "Bottle:1",
        "Bottle:2",
        "Bottle:3",
        "Bottle:4"
      ],
      "Deku Sticks": [
        "Equipment:8",
        "Upgrade:6",
        "Upgrade:7"
      ],
      "Deku Nuts": [
        "Equipment:9",
        "Upgrade:8",
        "Upgrade:9"
      ],
      "Skull Mask": [
        "Mask:1"
      ],
      "Mask of Truth": [
        "Mask:4"
      ],
      "Fire Arrows": [
        "Side Quest:10"
      ]
    },
    "sequences": {
      "Adult trading quest": [
        "Trade Sequence:0",
        "Trade Sequence:1",
        "Trade Sequence:2",
        "Trade Sequence:3",
        "Trade Sequence:4",
        "Trade Sequence:5",
        "Trade Sequence:6",
        "Trade Sequence:7",
        "Trade Sequence:8",
        "Trade Sequence:9",
        "Trade Sequence:10",
        "Trade Sequence:11"
      ],
      "Mask sales": [
        "Mask:0",
        "Mask:1",
        "Mask:2",
        "Mask:3"
      ],
      "Bombchu Bowling prizes": [
        "Equipment:7",
        "Upgrade:5",
        "Heart Piece:12"
      ],
      "Horseback archery prizes": [
        "Heart Piece:30",
        "Upgrade:3"
      ],
      "Skulltula family rewards": [
        "Upgrade:10",
        "Equipment:10",
        "Upgrade:11",
        "Side Quest:13",
        "Heart Piece:19",
        "Side Quest:9"
      ],
      "Poe Collector rewards": [
        "Bottle:4",
        "Side Quest:6"
      ],
      "Deku Stick capacity": [
        "Upgrade:6",
        "Upgrade:7"
      ],
      "Deku Nut capacity": [
        "Upgrade:8",
        "Upgrade:9"
      ]
    },
    "adultDungeonRewards": [
      "Event:forest",
      "Event:fire",
      "Event:water",
      "Event:shadow",
      "Event:spirit"
    ],
    "migrationProofs": [
      {
        "if": "Adult access",
        "grant": [
          "progress:4",
          "Event:dodongo",
          "Event:jabu",
          "Event:king-moved"
        ]
      },
      {
        "if": "Zelda Letter",
        "grant": [
          "Event:talon-awake"
        ]
      },
      {
        "if": {
          "any": [
            "Mask access",
            "Upgrade:14"
          ]
        },
        "grant": [
          "Event:mountain-gate"
        ]
      },
      {
        "if": "Equipment:3",
        "grant": [
          "Event:blue-fire",
          "Event:king-thawed"
        ]
      },
      {
        "if": "Iron Boots",
        "grant": [
          "Event:blue-fire"
        ]
      },
      {
        "if": "Prelude of Light",
        "grant": [
          "Event:forest",
          "Event:time-travel"
        ]
      }
    ]
  },
  "sources": {
    "c01": {
      "title": "Kokiri Forest Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/kokiri-forest/"
    },
    "c02": {
      "title": "The Great Deku Tree Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/great-deku-tree/"
    },
    "c03": {
      "title": "Leaving Kokiri Forest Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/kokiri-forest-to-hyrule-field/"
    },
    "c04": {
      "title": "Hyrule Castle Town Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/hyrule-castle-town/"
    },
    "c05": {
      "title": "Hyrule Castle Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/hyrule-castle/"
    },
    "c06": {
      "title": "Kakariko Village Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/kakariko-village/"
    },
    "c07": {
      "title": "Graveyard Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/graveyard/"
    },
    "c08": {
      "title": "Lon Lon Ranch Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/lon-lon-ranch/"
    },
    "c09": {
      "title": "Gerudo Valley Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/gerudo-valley/"
    },
    "c10": {
      "title": "Lake Hylia Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/lake-hylia/"
    },
    "c11": {
      "title": "Lost Woods and Sacred Grove Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/lost-woods-and-sacred-grove/"
    },
    "c12": {
      "title": "Death Mountain Trail and Goron City Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/death-mountain-trail-and-goron-city/"
    },
    "c13": {
      "title": "Dodongo Cavern Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/dodongo-cavern/"
    },
    "c14": {
      "title": "Death Mountain Summit and Crater Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/death-mountain-summit-and-crater/"
    },
    "c15": {
      "title": "Bombchu Bowling and the Great Fairy of Power Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/bombchu-bowling-and-spin-attack/"
    },
    "c16": {
      "title": "Zora River and Zora Domain Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/zora-river-and-zora-domain/"
    },
    "c17": {
      "title": "Lord Jabu-Jabu’s Belly Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/lord-jabu-jabus-belly/"
    },
    "c18": {
      "title": "Errands Before the Temple of Time Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/last-child-errands/"
    },
    "c19": {
      "title": "Temple of Time Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/temple-of-time/"
    },
    "c20": {
      "title": "Ingo Ranch and Epona Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/ingo-ranch-and-epona/"
    },
    "c21": {
      "title": "Kakariko Village and the Hookshot Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/kakariko-and-the-hookshot/"
    },
    "c22": {
      "title": "Sacred Grove as an Adult Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/sacred-grove-adult/"
    },
    "c23": {
      "title": "Forest Temple Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/forest-temple/"
    },
    "c24": {
      "title": "Poes, the Hall of Fallen Foes and Lake Hylia Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/poes-and-lake-hylia-as-an-adult/"
    },
    "c25": {
      "title": "Goron City as an Adult Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/goron-city-adult/"
    },
    "c26": {
      "title": "Fire Temple Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/fire-temple/"
    },
    "c27": {
      "title": "Double Magic and Death Mountain Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/double-magic-and-death-mountain/"
    },
    "c28": {
      "title": "Ice Cavern Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/ice-cavern/"
    },
    "c29": {
      "title": "The Biggoron Sword Route Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/biggoron-sword-route/"
    },
    "c30": {
      "title": "Water Temple Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/water-temple/"
    },
    "c31": {
      "title": "Kakariko Village and the Nocturne of Shadow Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/nocturne-of-shadow/"
    },
    "c32": {
      "title": "Bottom of the Well Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/bottom-of-the-well/"
    },
    "c33": {
      "title": "Treasure Box Shop and the Way to the Shadow Temple Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/treasure-chest-game/"
    },
    "c34": {
      "title": "Shadow Temple Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/shadow-temple/"
    },
    "c35": {
      "title": "Gerudo Fortress Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/gerudo-fortress/"
    },
    "c36": {
      "title": "Mirage Desert and Evil Desert Colossus Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/mirage-desert-and-desert-colossus/"
    },
    "c37": {
      "title": "Spirit Temple Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/spirit-temple/"
    },
    "c38": {
      "title": "Gerudo Proving Grounds Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/gerudo-proving-grounds/"
    },
    "c39": {
      "title": "Last Heart Pieces and Gold Skulltulas Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/final-collectibles/"
    },
    "c40": {
      "title": "Ganondorf’s Castle Walkthrough",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/walkthrough/ganondorfs-castle/"
    },
    "r01": {
      "title": "Gold Skulltula Locations",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/gold-skulltula-locations/"
    },
    "r02": {
      "title": "Heart Piece Locations",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/heart-pieces/"
    },
    "r03": {
      "title": "Bottle Locations",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/bottles/"
    },
    "r04": {
      "title": "Capacity Upgrades",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/equipment-upgrades/"
    },
    "r05": {
      "title": "Great Fairy Fountains",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/great-fairy-fountains/"
    },
    "r06": {
      "title": "Magic Bean Locations",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/soft-soil-locations/"
    },
    "r07": {
      "title": "Mask Trading Sequence",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/mask-guide/"
    },
    "r08": {
      "title": "Biggoron Sword Trading Sequence",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/biggoron-sword-guide/"
    },
    "r09": {
      "title": "Big Poes",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/big-poes/"
    },
    "r10": {
      "title": "Ocarina Songs",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/ocarina-songs/"
    },
    "r12": {
      "title": "Side Quests",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/side-quests/"
    },
    "r13": {
      "title": "Mini-Games",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/mini-games/"
    },
    "r14": {
      "title": "Items and Equipment",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/items-equipment/"
    },
    "r16": {
      "title": "Shops and Prices",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/shops-and-prices/"
    },
    "r18": {
      "title": "Hyrule Maps",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/maps/"
    },
    "v90": {
      "title": "Zelda OOT Remake: Lost Woods map, how to navigate",
      "url": "https://www.videogameschronicle.com/guide/zelda-oot-remake-lost-woods-map-how-to-navigate/"
    },
    "v91": {
      "title": "Zelda OOT Remake: All Kakariko Village Cucco locations",
      "url": "https://www.videogameschronicle.com/guide/zelda-oot-remake-all-kakariko-village-cucco-locations/"
    },
    "g01": {
      "title": "Zelda Ocarina of Time Remake Walkthrough – Chapter 1: Kokiri Forest, Getting a Sword and Shield",
      "url": "https://www.gamerguruguides.com/guides/ocarina-of-time-remake-walkthrough-part-1"
    },
    "g02": {
      "title": "Zelda Ocarina of Time Remake Walkthrough – Chapter 2: Inside The Great Deku Tree",
      "url": "https://www.gamerguruguides.com/guides/ocarina-of-time-remake-walkthrough-part-2"
    },
    "g03": {
      "title": "Zelda Ocarina of Time Remake Walkthrough – Chapter 3: Market & Hyrule Castle",
      "url": "https://www.gamerguruguides.com/guides/ocarina-of-time-remake-walkthrough-part-3"
    },
    "g05": {
      "title": "Zelda Ocarina of Time Remake Walkthrough – Chapter 5: Kakariko Village & Graveyard",
      "url": "https://www.gamerguruguides.com/guides/ocarina-of-time-remake-walkthrough-part-5"
    },
    "g06": {
      "title": "Zelda Ocarina of Time Remake Walkthrough – Chapter 6: Goron City & Lost Woods",
      "url": "https://www.gamerguruguides.com/guides/ocarina-of-time-remake-walkthrough-part-6"
    },
    "g08": {
      "title": "Zelda Ocarina of Time Remake Walkthrough – Chapter 8: Death Mountain Crater & Zora River",
      "url": "https://www.gamerguruguides.com/guides/ocarina-of-time-remake-walkthrough-part-8"
    },
    "g09": {
      "title": "Zelda Ocarina of Time Remake Walkthrough – Chapter 9: Zora Domain & Zora Fountain",
      "url": "https://www.gamerguruguides.com/guides/ocarina-of-time-remake-walkthrough-part-9"
    },
    "g10": {
      "title": "Zelda Ocarina of Time Remake Walkthrough – Chapter 10: Inside Lord Jabu Jabu’s Belly",
      "url": "https://www.gamerguruguides.com/guides/ocarina-of-time-remake-walkthrough-part-10"
    },
    "n01": {
      "title": "All Gold Skulltula Locations & Rewards In Zelda: Ocarina Of Time",
      "url": "https://www.nintendolife.com/guides/zelda-ocarina-of-time-gold-skulltula-locations-rewards-switch-2"
    },
    "p01": {
      "title": "The Legend of Zelda Ocarina of Time Remake Gold Skulltula Locations guide: All 100 Token Locations",
      "url": "https://www.rpgsite.net/guide/21634-the-legend-zelda-ocarina-time-remake-gold-skulltula-locations-guide-all-100-token-locations"
    },
    "p02": {
      "title": "The Legend of Zelda: Ocarina of Time Remake Minimalist 100% Walkthrough - All Items, Gold Skulltula Tokens, & Heart Pieces",
      "url": "https://www.rpgsite.net/guide/21671-the-legend-zelda-ocarina-time-remake-minimalist-100-walkthrough-all-items-gold-skulltula-tokens-heart-pieces"
    },
    "v01": {
      "title": "All Inside the Deku Tree Gold Skulltula Locations in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-inside-the-deku-tree-gold-skulltula-locations-in-zelda-ocarina-of-time-switch-2/"
    },
    "v02": {
      "title": "All Kokiri Forest Gold Skulltula Locations in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-kokiri-forest-gold-skulltula-locations-in-zelda-ocarina-of-time-switch-2/"
    },
    "v03": {
      "title": "All Hyrule Field Gold Skulltula locations in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-hyrule-field-gold-skulltulas-in-zelda-ocarina-of-time-switch-2/"
    },
    "v04": {
      "title": "All Hyrule Castle Gold Skulltula locations in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-hyrule-castle-gold-skulltula-locations-in-zelda-ocarina-of-time-switch-2/"
    },
    "v05": {
      "title": "All Kakariko Village Gold Skulltula locations in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-kakariko-village-gold-skulltula-locations-in-zelda-ocarina-of-time-switch-2/"
    },
    "v06": {
      "title": "All Lon Lon Ranch Gold Skulltula locations in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/lon-lon-ranch-gold-skulltulas/"
    },
    "v07": {
      "title": "All Goron City and Death Mountain Trail Gold Skulltulas in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-goron-city-and-death-mountain-trail-gold-skulltulas-in-zelda-ocarina-of-time-switch-2/"
    },
    "v08": {
      "title": "All Dodongo's Cavern Gold Skulltula locations in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-dodongos-cavern-gold-skulltula-locations-in-zelda-ocarina-of-time-switch-2/"
    },
    "v09": {
      "title": "All Death Mountain Crater Gold Skulltula locations in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-death-mountain-crater-gold-skulltula-locations-in-zelda-ocarina-of-time-switch-2/"
    },
    "v10": {
      "title": "All Zora River, Domain, and Fountain Gold Skulltulas in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-zora-river-domain-and-fountain-gold-skulltulas-in-zelda-ocarina-of-time-switch-2/"
    },
    "v11": {
      "title": "All Jabu Jabu’s Belly Gold Skulltulas Locations in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-jabu-jabus-belly-gold-skulltulas-locations-in-zelda-ocarina-of-time-switch-2/"
    },
    "v12": {
      "title": "All Forest Temple Gold Skulltula locations in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-forest-temple-gold-skulltulas/"
    },
    "v13": {
      "title": "All Fire Temple Gold Skulltula Locations in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-fire-temple-gold-skulltula-locations-in-zelda-ocarina-of-time-switch-2/"
    },
    "v14": {
      "title": "All Ice Cavern Gold Skulltula Locations in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-ice-cavern-gold-skulltula-locations-in-zelda-ocarina-of-time-switch-2/"
    },
    "v15": {
      "title": "All Lake Hylia Gold Skulltula locations in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-lake-hylia-gold-skulltula-locations-in-zelda-ocarina-of-time-switch-2/"
    },
    "v16": {
      "title": "All Water Temple Gold Skulltula locations in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-water-temple-gold-skulltula-locations-in-zelda-ocarina-of-time-switch-2/"
    },
    "v17": {
      "title": "All Bottom of the Well Gold Skulltula locations in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-bottom-of-the-well-gold-skulltula-locations-in-zelda-ocarina-of-time-switch-2/"
    },
    "v18": {
      "title": "All Shadow Temple Gold Skulltula Locations in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-shadow-temple-gold-skulltula-locations-in-zelda-ocarina-of-time-switch-2/"
    },
    "v19": {
      "title": "All Gerudo Valley Gold Skulltulas Locations in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-gerudo-valley-gold-skulltulas-locations-in-zelda-ocarina-of-time-switch-2/"
    },
    "v20": {
      "title": "All Spirit Temple Gold Skulltula Locations in Zelda: Ocarina of Time Switch 2",
      "url": "https://www.videogameschronicle.com/guide/all-spirit-temple-gold-skulltula-locations-in-zelda-ocarina-of-time-switch-2/"
    },
    "ni-heart": {
      "title": "Remake Heart Piece Locations — Nintendo Insider",
      "url": "https://www.nintendo-insider.com/zelda-ocarina-of-time-remake-heart-piece-locations-guide/"
    },
    "p03": {
      "title": "Remake 100% Walkthrough — Respec",
      "url": "https://www.respec.net/guide/276-the-legend-zelda-ocarina-time-remake-walkthrough-100-completion-guide-with-all-switch-2-changes"
    },
    "nl-heart": {
      "title": "Remake Heart Piece Locations — Nintendo Life",
      "url": "https://www.nintendolife.com/guides/zelda-ocarina-of-time-heart-piece-locations-switch-2"
    },
    "nl-epona": {
      "title": "How to Get Epona — Nintendo Life",
      "url": "https://www.nintendolife.com/guides/zelda-ocarina-of-time-horse-epona-how-to-get-switch-2"
    },
    "nl-scarecrow": {
      "title": "Scarecrow Song — Nintendo Life",
      "url": "https://www.nintendolife.com/guides/zelda-ocarina-of-time-scarecrows-song-switch-2"
    },
    "nl-fairy": {
      "title": "Remake Great Fairy Fountains — Nintendo Life",
      "url": "https://www.nintendolife.com/guides/zelda-ocarina-of-time-great-fairy-fountain-locations-all-switch-2"
    },
    "nl-arrows": {
      "title": "Bow and Arrow Types — Nintendo Life",
      "url": "https://www.nintendolife.com/guides/zelda-ocarina-of-time-bow-arrow-fire-ice-light-arrows-switch-2"
    },
    "v-trade": {
      "title": "Biggoron Trading Sequence — VGC",
      "url": "https://www.videogameschronicle.com/guide/zelda-oot-biggorons-sword-trade-sequence-quest/"
    },
    "rk-scale": {
      "title": "Remake Diving and Scales — Raider King",
      "url": "https://raiderking.com/ocarina-of-time-remake-how-to-dive-deeper-zora-scale-locations/"
    },
    "s-hookshot": {
      "title": "Find the Hookshot — Shacknews",
      "url": "https://www.shacknews.com/article/151278/how-to-find-the-hookshot-the-legend-of-zelda-ocarina-of-time"
    },
    "nl-ice": {
      "title": "Ice Cavern Walkthrough — Nintendo Life",
      "url": "https://www.nintendolife.com/guides/zelda-ocarina-of-time-ice-cavern-walkthrough-switch-2"
    },
    "fb-gear": {
      "title": "Remake equipment — FinalBoss",
      "url": "https://finalboss.io/zelda-oot-switch-2-weapons-shields-tunics"
    },
    "s4-songs": {
      "title": "All 12 remake songs — SPACE4GAMES",
      "url": "https://space4games.com/en/games-en/zelda-ocarina-of-time-remake-all-songs-inputs/"
    },
    "click-echo": {
      "title": "Remake Echo Gem — The Click",
      "url": "https://www.theclick.gg/ocarina-of-time-switch-2-echo-gem/"
    },
    "np-hearts": {
      "title": "Remake Heart Pieces — NintendoPress",
      "url": "https://nintendopress.com/in-deep/zelda-ocarina-of-time-all-36-heart-piece-locations-guide/"
    },
    "v6-medallions": {
      "title": "Remake Spiritual Stones and Medallions",
      "url": "https://zeldacentral.com/games/ocarina-of-time-remake/medallions-and-spiritual-stones/"
    },
    "v6-story": {
      "title": "Remake main story walkthrough",
      "url": "https://www.nintendolife.com/guides/zelda-ocarina-of-time-walkthrough-switch-2-remake"
    }
  },
  "entries": {
    "Gold Skulltula:0": {
      "name": "Compass-room alcove",
      "area": "Deku Tree",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Slingshot"
      ],
      "steps": [
        "Enter the third-floor Compass room and step on the floor switch to lift its platforms.",
        "Cross the raised platforms toward the small side alcove on the south wall.",
        "Defeat the gold spider on the alcove wall.",
        "Walk into its token before leaving the room."
      ],
      "sources": [
        "v01"
      ],
      "note": "",
      "requires": [
        "Deku Tree access",
        "Slingshot"
      ]
    },
    "Gold Skulltula:1": {
      "name": "Basement vine wall",
      "area": "Deku Tree",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Slingshot"
      ],
      "steps": [
        "Break the large web in the central shaft and land in the basement pool.",
        "Turn back toward the vines that climb out of the water.",
        "Aim the Slingshot at the gold spider above the vines and shoot it.",
        "Climb the vines to touch the token."
      ],
      "sources": [
        "v01"
      ],
      "note": "",
      "requires": [
        "Deku Tree access",
        "Slingshot"
      ]
    },
    "Gold Skulltula:2": {
      "name": "Basement barred grate",
      "area": "Deku Tree",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Slingshot"
      ],
      "steps": [
        "From the basement pool, find the torch and the web-covered passage.",
        "Face the barred grate on the north side of this room.",
        "Shoot the gold spider on the bars, or jump-slash if it is within reach.",
        "Touch the token; opening the nearby web is not the token itself."
      ],
      "sources": [
        "v01"
      ],
      "note": "",
      "requires": [
        "Deku Tree access",
        "Slingshot"
      ]
    },
    "Gold Skulltula:3": {
      "name": "Guardhouse crate",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Sword"
      ],
      "steps": [
        "Enter Castle Town across the drawbridge and take the guardhouse door immediately to the right.",
        "Walk past the pots to the wooden crates at the back.",
        "Roll into the suspicious crate to expose the gold spider.",
        "Defeat it and pick up its token."
      ],
      "sources": [
        "g03"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Sword"
      ]
    },
    "Gold Skulltula:4": {
      "name": "Castle-garden tree",
      "area": "Hyrule Castle",
      "age": "Child",
      "time": "Night",
      "equipment": [
        "Sword"
      ],
      "steps": [
        "Enter the castle grounds and follow the route used to reach Talon and the moat.",
        "Find the tree near the vines and hedge-maze approach.",
        "At night, roll directly into its trunk to knock down the spider.",
        "Defeat it on the ground and collect its token."
      ],
      "sources": [
        "v04"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Sword"
      ]
    },
    "Gold Skulltula:5": {
      "name": "Graveyard soft soil",
      "area": "Graveyard",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bottle",
        "Bottled bug"
      ],
      "steps": [
        "Enter the Graveyard from Kakariko and take the left-hand incline.",
        "Find the bare soil near the tree on the west side.",
        "Release a bottled bug while standing beside that soil; a bean is not required.",
        "Defeat the spider that emerges and touch its token."
      ],
      "sources": [
        "v05"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Bottle"
      ]
    },
    "Gold Skulltula:6": {
      "name": "Construction-site wall",
      "area": "Kakariko",
      "age": "Child",
      "time": "Night",
      "equipment": [
        "Slingshot"
      ],
      "steps": [
        "Enter Kakariko after dark and find the unfinished brick building in the village center.",
        "Walk around its scaffold and check the wall facing the Cucco pen.",
        "Shoot or slash the gold spider.",
        "Climb or walk onto the scaffold to reach the dropped token."
      ],
      "sources": [
        "v05"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Slingshot"
      ]
    },
    "Gold Skulltula:7": {
      "name": "Outside the House of Skulltula",
      "area": "Kakariko",
      "age": "Child",
      "time": "Night",
      "equipment": [
        "Sword"
      ],
      "steps": [
        "Make it night and locate the House of Skulltula, the cursed family’s house.",
        "Stand outside its front entrance and inspect the wall beside the door.",
        "Defeat the visible gold spider.",
        "Collect the token outside before entering to claim any family rewards."
      ],
      "sources": [
        "v05"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Sword"
      ]
    },
    "Gold Skulltula:8": {
      "name": "Village entrance tree",
      "area": "Kakariko",
      "age": "Child",
      "time": "Night",
      "equipment": [
        "Sword"
      ],
      "steps": [
        "Go to the lone tree near Kakariko’s lower entrance after dark.",
        "Run toward the trunk and roll into it.",
        "Defeat the spider that drops down.",
        "Pick up the token from the ground."
      ],
      "sources": [
        "g05"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Sword"
      ]
    },
    "Gold Skulltula:9": {
      "name": "Watchtower ladder",
      "area": "Kakariko",
      "age": "Child",
      "time": "Night",
      "equipment": [
        "Slingshot"
      ],
      "steps": [
        "Find the village watchtower on the uphill route toward the Death Mountain gate.",
        "Wait until night and look up its tall ladder.",
        "Shoot the gold spider with the Slingshot from below.",
        "Climb the ladder to reach the token it leaves behind."
      ],
      "sources": [
        "g05"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Slingshot"
      ]
    },
    "Gold Skulltula:10": {
      "name": "House below the mountain gate",
      "area": "Kakariko",
      "age": "Child",
      "time": "Night",
      "equipment": [
        "Sword"
      ],
      "steps": [
        "Climb toward the guard at the Death Mountain Trail gate.",
        "Before the gate, go around the house on the left.",
        "At night, inspect the rear wall and defeat the gold spider.",
        "Walk up to its token to finish the pickup."
      ],
      "sources": [
        "v05"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Sword"
      ]
    },
    "Gold Skulltula:11": {
      "name": "Ranch entrance tree",
      "area": "Lon Lon Ranch",
      "age": "Child",
      "time": "Night",
      "equipment": [
        "Sword"
      ],
      "steps": [
        "Enter Lon Lon Ranch and go behind the building on your left.",
        "Find the smaller tree behind it; visit after dark for the listed remake route.",
        "Roll into the trunk to knock down the gold spider.",
        "Defeat it and pick up the token."
      ],
      "sources": [
        "v06"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Sword"
      ]
    },
    "Gold Skulltula:12": {
      "name": "Corral shelter — legacy duplicate",
      "area": "Lon Lon Ranch",
      "age": "Child",
      "time": "Not an additional remake pickup",
      "equipment": [],
      "steps": [
        "Do not search for a fourth token using this older ranch description.",
        "Use the active ranch entries for the tree, entrance-building window, and ruined tower.",
        "Keep this archived record to review your older checkmark; it does not increase the remake token total."
      ],
      "sources": [
        "v06"
      ],
      "note": "The old ranch list counted an extra shelter. This archive preserves its checkmark without adding another remake token.",
      "retired": true,
      "requires": [
        "Hyrule Field access"
      ]
    },
    "Gold Skulltula:13": {
      "name": "Valley cow-ledge soft soil",
      "area": "Gerudo Valley",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bottle",
        "Bottled bug",
        "Cucco"
      ],
      "steps": [
        "Find a Cucco near the canyon overlook and lift it.",
        "Glide down toward the low grassy shelf beside the waterfall and cow.",
        "Find the bare soil on that shelf and release a bottled bug.",
        "Defeat the gold spider and collect its token before leaving the ledge."
      ],
      "sources": [
        "c09"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Bottle"
      ]
    },
    "Gold Skulltula:14": {
      "name": "Lakeside Laboratory soft soil",
      "area": "Lake Hylia",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bottle",
        "Bottled bug"
      ],
      "steps": [
        "Walk to the Lakeside Laboratory and inspect the ground beside its entrance.",
        "Find the small bare soil patch near the laboratory wall.",
        "Release a bottled bug onto the patch.",
        "Defeat the emerging spider and collect its token; planting a bean is a separate task."
      ],
      "sources": [
        "v15"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Bottle"
      ]
    },
    "Gold Skulltula:15": {
      "name": "Southwest shore crawlspace",
      "area": "Lake Hylia",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Sword"
      ],
      "steps": [
        "Go to the far southwestern rocky edge of Lake Hylia.",
        "Look for a small tunnel or crawlspace in the low rocky outcrop.",
        "Crawl into the hidden room and inspect its wall.",
        "Defeat the gold spider and take its token."
      ],
      "sources": [
        "v15"
      ],
      "note": "This replaces the old “island pillar” directions; the remake route is a shore crawlspace.",
      "requires": [
        "Hyrule Field access",
        "Sword"
      ]
    },
    "Gold Skulltula:16": {
      "name": "Know-It-All Brothers’ house",
      "area": "Kokiri Forest",
      "age": "Child",
      "time": "Night",
      "equipment": [
        "Sword"
      ],
      "steps": [
        "Enter Kokiri Forest at night.",
        "Go to the house at the southwestern or far-western edge of the village.",
        "Walk around behind it and inspect the back wall.",
        "Defeat the gold spider and touch its token."
      ],
      "sources": [
        "v02"
      ],
      "note": "",
      "requires": [
        "Sword"
      ]
    },
    "Gold Skulltula:17": {
      "name": "Lost Woods first soil patch",
      "area": "Lost Woods",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bottle",
        "Bottled bug"
      ],
      "steps": [
        "Start at the Lost Woods entrance from Kokiri Forest.",
        "Take the left tunnel, then left again.",
        "Find the soft soil on the left of the clearing and release a bottled bug.",
        "Defeat the emerging gold spider and collect the token."
      ],
      "sources": [
        "v02"
      ],
      "note": "",
      "requires": [
        "Bottle"
      ]
    },
    "Gold Skulltula:18": {
      "name": "Lost Woods Scrub clearing soil",
      "area": "Lost Woods",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bottle",
        "Bottled bug",
        "Deku Shield"
      ],
      "steps": [
        "From the Kokiri Forest entrance, take right, left, right, left, left.",
        "Use your shield to stop the two Scrubs from interrupting you.",
        "Release a bottled bug on the soil at the back-right of the clearing.",
        "Defeat the gold spider and collect its token; plant a bean here separately for the adult ledge."
      ],
      "sources": [
        "v90"
      ],
      "note": "",
      "requires": [
        "Bottle",
        "Deku Shield"
      ]
    },
    "Gold Skulltula:19": {
      "name": "Behind the Kokiri Shop",
      "area": "Kokiri Forest",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bottle",
        "Bottled bug"
      ],
      "steps": [
        "Find the Kokiri Shop, the building with the red roof.",
        "Walk behind it to the bare soil.",
        "Release a bottled bug next to the patch.",
        "Defeat the emerging gold spider and pick up its token."
      ],
      "sources": [
        "v02"
      ],
      "note": "",
      "requires": [
        "Bottle"
      ]
    },
    "Gold Skulltula:20": {
      "name": "Soil outside Dodongo Cavern",
      "area": "Death Mountain Trail",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bottle",
        "Bottled bug"
      ],
      "steps": [
        "Climb Death Mountain Trail to the entrance of Dodongo Cavern.",
        "Stand beside the soft soil directly outside the dungeon.",
        "Release a bottled bug onto the patch.",
        "Defeat the spider that comes out and collect its token."
      ],
      "sources": [
        "v07"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Event:mountain-gate",
        "Bottle"
      ]
    },
    "Gold Skulltula:21": {
      "name": "Bomb-staircase upper vines",
      "area": "Dodongo Cavern",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Slingshot",
        "Goron Bracelet"
      ],
      "steps": [
        "Reach the western room with the long chain of Bomb Flowers.",
        "Set a flower in the gap to trigger the chain and lower the huge staircase.",
        "Climb to the top, loop around the rear of the stairs, and inspect the upper vines.",
        "Shoot the gold spider and climb or jump to its token."
      ],
      "sources": [
        "v08"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Goron Bracelet",
        "Event:mountain-gate",
        "Slingshot"
      ]
    },
    "Gold Skulltula:22": {
      "name": "Baby Dodongo hall side room",
      "area": "Dodongo Cavern",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bomb Bag",
        "Slingshot"
      ],
      "steps": [
        "From the main hall, enter the long corridor on the eastern side of 1F.",
        "Find the cracked wall along the Baby Dodongo route.",
        "Blast it with a bomb and enter the small side chamber.",
        "Defeat the gold spider on the wall and take its token."
      ],
      "sources": [
        "v08"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Goron Bracelet",
        "Event:mountain-gate",
        "Bomb Bag",
        "Slingshot"
      ]
    },
    "Gold Skulltula:23": {
      "name": "Block-puzzle room behind the skull",
      "area": "Dodongo Cavern",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bomb Bag"
      ],
      "steps": [
        "Open the giant skull’s mouth by dropping a bomb into each eye from the bridge above.",
        "Enter the mouth and follow the route to the block-pushing room.",
        "Bomb the cracked wall in that room and enter the space behind it.",
        "Defeat or move past the Armos statue, then take the gold spider’s token."
      ],
      "sources": [
        "c13"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Goron Bracelet",
        "Event:mountain-gate",
        "Bomb Bag"
      ]
    },
    "Gold Skulltula:24": {
      "name": "Cracked wall above the lower trail",
      "area": "Death Mountain Trail",
      "age": "Both",
      "time": "Any time",
      "equipment": [
        "Bomb Bag"
      ],
      "steps": [
        "Start from the lower trail above Kakariko and inspect the rock face along the uphill path.",
        "Find the visibly cracked wall, rather than the red Hammer rocks.",
        "Place a bomb against it and move back.",
        "Enter the exposed alcove, defeat the gold spider, and take the token."
      ],
      "sources": [
        "v07"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Bomb Bag"
      ]
    },
    "Gold Skulltula:25": {
      "name": "Goron City boulder-maze crate",
      "area": "Goron City",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bomb Bag"
      ],
      "steps": [
        "Enter the boulder-filled side room on the upper western side of Goron City.",
        "Use bombs to clear a route through the ordinary breakable rocks.",
        "Reach the wooden crate at the back of the maze and break it.",
        "Defeat the gold spider and collect its token."
      ],
      "sources": [
        "c14"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Event:mountain-gate",
        "Bomb Bag"
      ]
    },
    "Gold Skulltula:26": {
      "name": "Crater entrance crate",
      "area": "Death Mountain Crater",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Full health"
      ],
      "steps": [
        "Climb to Death Mountain’s summit and heal before entering the crater.",
        "Enter from the summit and turn left immediately.",
        "Dash to the wooden crates and roll into the farther one.",
        "Defeat the exposed gold spider, collect the token, and leave before the heat timer expires."
      ],
      "sources": [
        "v09"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Event:mountain-gate"
      ]
    },
    "Gold Skulltula:27": {
      "name": "Bean Seller soft soil",
      "area": "Zora River",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bottle",
        "Bottled bug"
      ],
      "steps": [
        "Follow Zora River to the Bean Seller near its lower gate.",
        "Find the bare soil beside him; this entry is not a tree-roll pickup.",
        "Release a bottled bug onto the patch.",
        "Defeat the gold spider and collect the token."
      ],
      "sources": [
        "v10"
      ],
      "note": "The remake adds a soil token by the Bean Seller; the old “entrance tree” description was misleading.",
      "requires": [
        "Hyrule Field access",
        "Bottle"
      ]
    },
    "Gold Skulltula:28": {
      "name": "Lowest level below Domain entrance",
      "area": "Zora River",
      "age": "Child",
      "time": "Night",
      "equipment": [
        "Boomerang"
      ],
      "steps": [
        "Follow the river to the final bridge and waterfall leading into Zora Domain.",
        "At night, drop carefully to the lowest ledge below that approach.",
        "Look behind the stone column or under the bridge for the gold spider.",
        "Throw the Boomerang to defeat it and bring the token back to you."
      ],
      "sources": [
        "g10"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Boomerang"
      ]
    },
    "Gold Skulltula:29": {
      "name": "Fountain’s southern tree",
      "area": "Zora Fountain",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Sword"
      ],
      "steps": [
        "Walk out behind King Zora into Zora Fountain.",
        "Follow the southern edge toward the Great Fairy side of the area.",
        "Find the lone tree with the gold glint and roll into its trunk.",
        "Defeat the falling spider and collect its token."
      ],
      "sources": [
        "c17"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Zelda Lullaby",
        "Event:king-moved",
        "Sword"
      ]
    },
    "Gold Skulltula:30": {
      "name": "Dungeon Map room vines",
      "area": "Jabu-Jabu Belly",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Slingshot"
      ],
      "steps": [
        "Reach the basement room with a water switch and the large Dungeon Map chest.",
        "Raise the water and move across toward the vines opposite the chest.",
        "Look up the wall above those vines for the gold spider.",
        "Shoot it, then climb the vines to collect its token."
      ],
      "sources": [
        "v11"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Event:king-moved",
        "Bottle",
        "Slingshot"
      ]
    },
    "Gold Skulltula:31": {
      "name": "Lower main chamber wall",
      "area": "Jabu-Jabu Belly",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Boomerang"
      ],
      "steps": [
        "Obtain the Boomerang and clear the colored tentacles blocking the main chamber’s holes.",
        "Drop through the newly accessible hole to the basement.",
        "Look along the wall of the large lower chamber for the first gold spider.",
        "Use the Boomerang to defeat it and retrieve its token."
      ],
      "sources": [
        "v11"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Event:king-moved",
        "Bottle",
        "Boomerang"
      ]
    },
    "Gold Skulltula:32": {
      "name": "Hall toward Big Octo",
      "area": "Jabu-Jabu Belly",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Boomerang"
      ],
      "steps": [
        "From the basement chamber reached after clearing the tentacles, take the corridor toward Big Octo.",
        "Stop before the next fight and look above and to the left along the passage.",
        "Locate the second gold spider on the high wall or ceiling.",
        "Throw the Boomerang to collect its token."
      ],
      "sources": [
        "v11"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Event:king-moved",
        "Bottle",
        "Boomerang"
      ]
    },
    "Gold Skulltula:33": {
      "name": "Vines before Barinade",
      "area": "Jabu-Jabu Belly",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Boomerang",
        "Slingshot"
      ],
      "steps": [
        "Reach the last chamber before the boss entrance.",
        "Look up at the large vine-covered column and the high platforms.",
        "Shoot the gold spider or hit it with the Boomerang.",
        "Climb to the token or retrieve it with the Boomerang before entering the boss room."
      ],
      "sources": [
        "v11"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Event:king-moved",
        "Bottle",
        "Boomerang",
        "Slingshot"
      ]
    },
    "Gold Skulltula:34": {
      "name": "Fountain southern rock wall",
      "area": "Zora Fountain",
      "age": "Child",
      "time": "Night",
      "equipment": [
        "Boomerang"
      ],
      "steps": [
        "Return to Zora Fountain at night after obtaining the Boomerang.",
        "Follow the south wall past the submerged arch and ruined stonework.",
        "Look high on the rock face across from the ruins for the gold spider.",
        "Use the Boomerang to defeat it and recover the token from the wall."
      ],
      "sources": [
        "g10"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Zelda Lullaby",
        "Event:king-moved",
        "Boomerang"
      ]
    },
    "Gold Skulltula:35": {
      "name": "Deku Tree web-side passage",
      "area": "Deku Tree",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Deku Stick",
        "Slingshot"
      ],
      "steps": [
        "Reach the room where three Gohma Larvae drop from the ceiling.",
        "Light a Deku Stick at a torch and burn the web on the left.",
        "Enter the short passage and inspect the vines on the far wall.",
        "Shoot the gold spider and climb to its token."
      ],
      "sources": [
        "c02"
      ],
      "note": "The remake removes the old Bombs/Boomerang backtracking requirement for this token.",
      "requires": [
        "Deku Tree access",
        "Deku Sticks",
        "Slingshot"
      ]
    },
    "Gold Skulltula:36": {
      "name": "Ranch entrance-building window",
      "area": "Lon Lon Ranch",
      "age": "Child",
      "time": "Night",
      "equipment": [
        "Boomerang"
      ],
      "steps": [
        "Return to the ranch at night with the Boomerang.",
        "Look up the outside wall of the buildings near the ranch entrance.",
        "Find the gold spider by the high window above the entrance-side wall.",
        "Hit it with the Boomerang and use the returning throw to collect its token."
      ],
      "sources": [
        "v06"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Boomerang"
      ]
    },
    "Gold Skulltula:37": {
      "name": "Ranch ruined tower",
      "area": "Lon Lon Ranch",
      "age": "Child",
      "time": "Night",
      "equipment": [
        "Boomerang"
      ],
      "steps": [
        "At night, follow the edge of the racetrack to the ruined stone building in the northeast corner.",
        "Search its broken wall and interior from outside.",
        "Aim the Boomerang at the gold spider you can see there.",
        "Recover its token before moving back to the ranch entrance."
      ],
      "sources": [
        "v06"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Boomerang"
      ]
    },
    "Gold Skulltula:38": {
      "name": "Under the first valley bridge",
      "area": "Gerudo Valley",
      "age": "Child",
      "time": "Night",
      "equipment": [
        "Boomerang"
      ],
      "steps": [
        "Enter Gerudo Valley from Hyrule Field after dark.",
        "Stop at the first small plank bridge, before the main canyon crossing.",
        "Look beneath the bridge at the wall or underside near its far end.",
        "Use the Boomerang to defeat the spider and bring its token back."
      ],
      "sources": [
        "c18"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Boomerang"
      ]
    },
    "Gold Skulltula:39": {
      "name": "Laboratory exterior wall",
      "area": "Lake Hylia",
      "age": "Child",
      "time": "Night",
      "equipment": [
        "Boomerang"
      ],
      "steps": [
        "Walk to the Lakeside Laboratory after dark.",
        "Step onto the nearby suspension bridge and turn toward the back of the building.",
        "Look up the exterior wall for the gold spider.",
        "Use the Boomerang to hit it and retrieve the token."
      ],
      "sources": [
        "v15"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Boomerang"
      ]
    },
    "Gold Skulltula:40": {
      "name": "Behind Dampé’s hut",
      "area": "Graveyard",
      "age": "Child",
      "time": "Night",
      "equipment": [
        "Boomerang"
      ],
      "steps": [
        "Enter the Graveyard at night with the Boomerang.",
        "Walk behind Dampé’s hut near the graveyard edge.",
        "Inspect the high wall and fence on its right side.",
        "Throw the Boomerang at the gold spider and recover its token."
      ],
      "sources": [
        "c18"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Boomerang"
      ]
    },
    "Gold Skulltula:41": {
      "name": "Upper Dodongo room",
      "area": "Dodongo Cavern",
      "age": "Both",
      "time": "Any time",
      "equipment": [
        "Bomb Bag",
        "Slingshot"
      ],
      "steps": [
        "Use the upper crossing above the giant skull to reach the northeastern room with two Dodongos.",
        "Defeat them safely with bombs or attacks from behind.",
        "Inspect the upper ledge and break the suspicious rock in this chamber.",
        "Defeat the revealed gold spider and collect its token."
      ],
      "sources": [
        "v08"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Goron Bracelet",
        "Bomb Bag",
        "Slingshot"
      ]
    },
    "Gold Skulltula:42": {
      "name": "Cliff above Impa’s house",
      "area": "Kakariko",
      "age": "Adult",
      "time": "Night",
      "equipment": [
        "Hookshot"
      ],
      "steps": [
        "Return to Kakariko at night as an adult.",
        "Stand near Impa’s house and Hookshot the vines on the cliff to its left.",
        "Climb onto the roof and turn toward the high rock wall.",
        "Hookshot the gold spider and retrieve its token."
      ],
      "sources": [
        "c31"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Hookshot"
      ]
    },
    "Gold Skulltula:43": {
      "name": "Ruins outside Ganon Castle",
      "area": "Ganon Castle",
      "age": "Adult",
      "time": "Night",
      "equipment": [
        "Hookshot"
      ],
      "steps": [
        "Approach the ruined castle grounds as an adult.",
        "Before crossing into Ganon Castle, inspect the ruined building walls and the rock beside the entrance arch.",
        "Look for the gold spider on the outside of the ruins.",
        "Use the Hookshot to defeat it and collect its token."
      ],
      "sources": [
        "n01"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Hookshot"
      ]
    },
    "Gold Skulltula:44": {
      "name": "Twins’ house tree branch",
      "area": "Kokiri Forest",
      "age": "Adult",
      "time": "Night",
      "equipment": [
        "Hookshot"
      ],
      "steps": [
        "Return to Kokiri Forest as an adult after dark.",
        "Find the House of the Twins at the southeastern side of the village.",
        "Look above the house along the large tree branch.",
        "Hookshot the gold spider to pull its token back."
      ],
      "sources": [
        "c22"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Hookshot"
      ]
    },
    "Gold Skulltula:45": {
      "name": "Lost Woods grown-bean ledge",
      "area": "Lost Woods",
      "age": "Adult",
      "time": "Night",
      "equipment": [
        "Hookshot",
        "Bean planted in Scrub clearing"
      ],
      "steps": [
        "As a child, plant a bean in the soil reached by right, left, right, left, left from the Lost Woods entrance.",
        "Return as an adult at night.",
        "Ride the grown plant to the elevated ledge above the clearing.",
        "Defeat the gold spider and collect its token before dropping down."
      ],
      "sources": [
        "c22"
      ],
      "note": "",
      "related": [
        "Magic Bean:2"
      ],
      "requires": [
        "Adult access",
        "Hookshot"
      ],
      "crossTime": true,
      "timelineStages": [
        {
          "key": "plant",
          "age": "Child",
          "title": "Plant the bean: Lost Woods Scrub clearing",
          "requires": [
            "Magic Bean",
            "Deku Shield"
          ],
          "evidence": "Magic Bean:2",
          "completeAlso": [
            "Magic Bean:2"
          ]
        },
        {
          "key": "collect",
          "age": "Adult",
          "title": "Lost Woods grown-bean ledge",
          "requires": [
            "Adult access",
            "Hookshot"
          ]
        }
      ]
    },
    "Gold Skulltula:46": {
      "name": "Sacred Meadow east wall",
      "area": "Sacred Forest Meadow",
      "age": "Adult",
      "time": "Night",
      "equipment": [
        "Hookshot"
      ],
      "steps": [
        "Cross the Moblin maze toward the stairs leading to the Forest Temple.",
        "Before climbing the final approach, take the ladder up onto the maze walls.",
        "At night, turn toward the eastern wall and locate the gold spider.",
        "Use the Hookshot to take its token."
      ],
      "sources": [
        "c22"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Hookshot"
      ]
    },
    "Gold Skulltula:47": {
      "name": "Forest Temple entrance vines",
      "area": "Forest Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot"
      ],
      "steps": [
        "Enter the Forest Temple’s first courtyard and defeat the Wolfos.",
        "Climb the vines on the large tree at the side of the room.",
        "Look near the upper branches and wall for the gold spider.",
        "Hookshot it or climb into its token after defeating it."
      ],
      "sources": [
        "v12"
      ],
      "note": "",
      "requires": [
        "Hookshot",
        "Saria Song",
        "Adult access",
        "Hookshot"
      ]
    },
    "Gold Skulltula:48": {
      "name": "Forest Temple north hall wall",
      "area": "Forest Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot"
      ],
      "steps": [
        "Enter the central hall where four torches surround the elevator.",
        "Climb the stairs toward the northern doorway.",
        "Turn right and inspect the back of the northern wall.",
        "Hookshot the gold spider and collect its token."
      ],
      "sources": [
        "v12"
      ],
      "note": "",
      "requires": [
        "Hookshot",
        "Saria Song",
        "Adult access",
        "Hookshot"
      ]
    },
    "Gold Skulltula:49": {
      "name": "Northeast courtyard Scarecrow ledge",
      "area": "Forest Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot",
        "Scarecrow song activated"
      ],
      "steps": [
        "Reach the northeastern outdoor room with the stream.",
        "Push the block down to create the lower shortcut.",
        "Turn around, look above the stream, and play your Scarecrow Song at the summon point.",
        "Hookshot to the scarecrow and collect the gold spider’s token on the ledge."
      ],
      "sources": [
        "c23"
      ],
      "note": "This courtyard token needs the Scarecrow route in the remake; the older island-only directions were incomplete.",
      "crossTime": true,
      "requires": [
        "Hookshot",
        "Saria Song",
        "Adult access",
        "Hookshot",
        "Side Quest:8"
      ],
      "timelineStages": [
        {
          "key": "teach",
          "age": "Child",
          "title": "Teach Bonooru the custom Scarecrow tune",
          "requires": [
            "Hyrule Field access",
            "Ocarina"
          ],
          "evidence": "Side Quest:7",
          "completeAlso": [
            "Side Quest:7"
          ]
        },
        {
          "key": "collect",
          "age": "Adult",
          "title": "Activate the Scarecrow tune, then Northeast courtyard Scarecrow ledge",
          "requires": [
            "Hookshot",
            "Saria Song",
            "Adult access",
            "Hookshot",
            "Ocarina"
          ],
          "completeAlso": [
            "Side Quest:8"
          ]
        }
      ]
    },
    "Gold Skulltula:50": {
      "name": "Northwest courtyard balcony",
      "area": "Forest Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot"
      ],
      "steps": [
        "After collecting the Boss Key, drop through the route that returns you to the northwestern courtyard balcony.",
        "Stay on the upper ledge rather than jumping down.",
        "Follow the ledge toward its corner and inspect the wall near the southern side.",
        "Hookshot the gold spider and recover the token."
      ],
      "sources": [
        "v12"
      ],
      "note": "",
      "requires": [
        "Hookshot",
        "Saria Song",
        "Adult access",
        "Hookshot"
      ]
    },
    "Gold Skulltula:51": {
      "name": "Rotating basement recess",
      "area": "Forest Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot"
      ],
      "steps": [
        "Reach the rotating basement immediately before Phantom Ganon.",
        "Push the wall handles to rotate the chamber and reveal its side alcoves.",
        "Find the small recess containing green pots.",
        "Defeat the gold spider inside and collect the token before opening the boss route."
      ],
      "sources": [
        "v12"
      ],
      "note": "",
      "requires": [
        "Hookshot",
        "Saria Song",
        "Adult access",
        "Hookshot"
      ]
    },
    "Gold Skulltula:52": {
      "name": "Baby Dodongo hall Scarecrow ledge",
      "area": "Dodongo Cavern",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot",
        "Scarecrow song activated"
      ],
      "steps": [
        "Return as an adult to the eastern 1F Baby Dodongo corridor.",
        "Stop near the middle and look up the north wall for the balcony.",
        "Play the Scarecrow Song you taught as a child and reactivated as an adult.",
        "Hookshot to the scarecrow, then defeat the gold spider and take its token."
      ],
      "sources": [
        "c25"
      ],
      "note": "",
      "crossTime": true,
      "requires": [
        "Hyrule Field access",
        "Goron Bracelet",
        "Adult access",
        "Hookshot",
        "Side Quest:8"
      ],
      "timelineStages": [
        {
          "key": "teach",
          "age": "Child",
          "title": "Teach Bonooru the custom Scarecrow tune",
          "requires": [
            "Hyrule Field access",
            "Ocarina"
          ],
          "evidence": "Side Quest:7",
          "completeAlso": [
            "Side Quest:7"
          ]
        },
        {
          "key": "collect",
          "age": "Adult",
          "title": "Activate the Scarecrow tune, then Baby Dodongo hall Scarecrow ledge",
          "requires": [
            "Hyrule Field access",
            "Goron Bracelet",
            "Adult access",
            "Hookshot",
            "Ocarina"
          ],
          "completeAlso": [
            "Side Quest:8"
          ]
        }
      ]
    },
    "Gold Skulltula:53": {
      "name": "Goron City suspended platform",
      "area": "Goron City",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot"
      ],
      "steps": [
        "Enter Goron City as an adult.",
        "Walk along the upper entrance level toward the northern side.",
        "Turn back and look at the ceiling behind the suspended central platform.",
        "Hookshot the gold spider and retrieve its token."
      ],
      "sources": [
        "v07"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Hookshot"
      ]
    },
    "Gold Skulltula:54": {
      "name": "Crater warp-point soft soil",
      "area": "Death Mountain Crater",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bottle",
        "Bottled bug",
        "Bolero of Fire",
        "Full health"
      ],
      "steps": [
        "Learn Bolero of Fire during the adult story, then return to the past.",
        "Play Bolero of Fire as a child to reach the crater warp point.",
        "Quickly release a bottled bug on the nearby soft soil.",
        "Defeat the gold spider, take its token, and warp or leave before the heat timer runs out."
      ],
      "sources": [
        "v09"
      ],
      "note": "",
      "requires": [
        "Bottle",
        "Bolero of Fire"
      ],
      "timelineStages": [
        {
          "key": "learn-warp",
          "age": "Adult",
          "title": "Learn Bolero of Fire",
          "requires": [
            "Adult access",
            "Goron Tunic",
            "Hookshot",
            "Ocarina"
          ],
          "evidence": "progress:33",
          "completeAlso": [
            "progress:33"
          ]
        },
        {
          "key": "soil-token",
          "age": "Child",
          "title": "Crater warp-point soft soil",
          "requires": [
            "Bottle",
            "Bolero of Fire"
          ]
        }
      ],
      "crossTime": true
    },
    "Gold Skulltula:55": {
      "name": "Lava-room Song of Time route",
      "area": "Fire Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot",
        "Song of Time"
      ],
      "steps": [
        "Enter the large eastern lava room on 1F.",
        "Ride the rising platform in its northwestern corner.",
        "Play Song of Time beside the blue block to open the side route.",
        "Pass the Flying Tiles and Like Like, then collect the gold spider on the rear wall."
      ],
      "sources": [
        "v13"
      ],
      "note": "",
      "requires": [
        "Goron Tunic",
        "Hookshot",
        "Adult access",
        "Hookshot",
        "Song of Time"
      ]
    },
    "Gold Skulltula:56": {
      "name": "Boulder-maze cracked wall",
      "area": "Fire Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Bomb Bag",
        "Hookshot"
      ],
      "steps": [
        "Reach the lower level of the rolling-boulder maze.",
        "Work along the right-hand route toward the northeast corner.",
        "Place a bomb against the cracked or hollow-sounding wall.",
        "Enter the revealed alcove and Hookshot the gold spider’s token."
      ],
      "sources": [
        "v13"
      ],
      "note": "",
      "requires": [
        "Goron Tunic",
        "Hookshot",
        "Adult access",
        "Hookshot",
        "Bomb Bag"
      ]
    },
    "Gold Skulltula:57": {
      "name": "Upper Scarecrow tower",
      "area": "Fire Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot",
        "Scarecrow song activated"
      ],
      "steps": [
        "Reach the upper rolling-boulder room and finish the section chased by flames.",
        "At the far end, look up and play the Scarecrow Song.",
        "Hookshot to the scarecrow, then to the small elevator across from it.",
        "Ride upward and collect the gold spider at the top of the tower."
      ],
      "sources": [
        "v13"
      ],
      "note": "",
      "crossTime": true,
      "requires": [
        "Goron Tunic",
        "Hookshot",
        "Adult access",
        "Hookshot",
        "Side Quest:8"
      ],
      "timelineStages": [
        {
          "key": "teach",
          "age": "Child",
          "title": "Teach Bonooru the custom Scarecrow tune",
          "requires": [
            "Hyrule Field access",
            "Ocarina"
          ],
          "evidence": "Side Quest:7",
          "completeAlso": [
            "Side Quest:7"
          ]
        },
        {
          "key": "collect",
          "age": "Adult",
          "title": "Activate the Scarecrow tune, then Upper Scarecrow tower",
          "requires": [
            "Goron Tunic",
            "Hookshot",
            "Adult access",
            "Hookshot",
            "Ocarina"
          ],
          "completeAlso": [
            "Side Quest:8"
          ]
        }
      ]
    },
    "Gold Skulltula:58": {
      "name": "Room beyond Scarecrow tower",
      "area": "Fire Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot",
        "Scarecrow song activated"
      ],
      "steps": [
        "Follow the upper Scarecrow route to the tower elevator.",
        "After taking the previous token, go through the doorway at the top.",
        "Turn toward the wall on your right in the adjoining treasure room.",
        "Hookshot the second gold spider and retrieve its token."
      ],
      "sources": [
        "v13"
      ],
      "note": "",
      "crossTime": true,
      "requires": [
        "Goron Tunic",
        "Hookshot",
        "Adult access",
        "Hookshot",
        "Side Quest:8"
      ],
      "timelineStages": [
        {
          "key": "teach",
          "age": "Child",
          "title": "Teach Bonooru the custom Scarecrow tune",
          "requires": [
            "Hyrule Field access",
            "Ocarina"
          ],
          "evidence": "Side Quest:7",
          "completeAlso": [
            "Side Quest:7"
          ]
        },
        {
          "key": "collect",
          "age": "Adult",
          "title": "Activate the Scarecrow tune, then Room beyond Scarecrow tower",
          "requires": [
            "Goron Tunic",
            "Hookshot",
            "Adult access",
            "Hookshot",
            "Ocarina"
          ],
          "completeAlso": [
            "Side Quest:8"
          ]
        }
      ]
    },
    "Gold Skulltula:59": {
      "name": "Hammer-block side room",
      "area": "Fire Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hammer",
        "Hookshot"
      ],
      "steps": [
        "Obtain the Megaton Hammer, then return to the northwestern side of 1F.",
        "Smash the blocks sealing the side route with the Hammer.",
        "Follow the opened path into the tile-room sequence before the later Flare Dancer.",
        "Inspect the rear wall, defeat the gold spider, and take its token."
      ],
      "sources": [
        "c26"
      ],
      "note": "",
      "requires": [
        "Goron Tunic",
        "Hookshot",
        "Adult access",
        "Hookshot",
        "Hammer"
      ]
    },
    "Gold Skulltula:60": {
      "name": "Hammer rock near the crater",
      "area": "Death Mountain Trail",
      "age": "Adult",
      "time": "Night",
      "equipment": [
        "Hammer",
        "Hookshot"
      ],
      "steps": [
        "Return to the upper Death Mountain Trail after dark.",
        "Find the red Hammer-breakable boulder near the crater approach.",
        "Smash it with the Megaton Hammer.",
        "Defeat the exposed gold spider and retrieve its token."
      ],
      "sources": [
        "v07"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Hookshot",
        "Hammer"
      ]
    },
    "Gold Skulltula:61": {
      "name": "Hammer rock near Goron City",
      "area": "Death Mountain Trail",
      "age": "Adult",
      "time": "Night",
      "equipment": [
        "Hammer",
        "Hookshot"
      ],
      "steps": [
        "Leave Goron City for Death Mountain Trail at night.",
        "Inspect the ledges near the city entrance, above the Dodongo Cavern side of the trail.",
        "Break the red boulder with the Megaton Hammer.",
        "Defeat the gold spider behind it and collect the token."
      ],
      "sources": [
        "p01"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Hookshot",
        "Hammer"
      ]
    },
    "Gold Skulltula:62": {
      "name": "River grown-bean ledge",
      "area": "Zora River",
      "age": "Adult",
      "time": "Night",
      "equipment": [
        "Hookshot",
        "Bean planted by Bean Seller"
      ],
      "steps": [
        "Plant a bean beside the Bean Seller while you are a child.",
        "Return to Zora River as an adult at night and step onto the grown plant.",
        "Ride it to the raised middle section of the river, then cross the small gap.",
        "Hookshot the gold spider on the wall and retrieve its token."
      ],
      "sources": [
        "v10"
      ],
      "note": "",
      "related": [
        "Magic Bean:0"
      ],
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Hookshot"
      ],
      "crossTime": true,
      "timelineStages": [
        {
          "key": "plant",
          "age": "Child",
          "title": "Plant the bean: beside the Zora River seller",
          "requires": [
            "Hyrule Field access",
            "Magic Bean"
          ],
          "evidence": "Magic Bean:0",
          "completeAlso": [
            "Magic Bean:0"
          ]
        },
        {
          "key": "collect",
          "age": "Adult",
          "title": "River grown-bean ledge",
          "requires": [
            "Hyrule Field access",
            "Adult access",
            "Hookshot"
          ]
        }
      ]
    },
    "Gold Skulltula:63": {
      "name": "High wall at the final river bridge",
      "area": "Zora River",
      "age": "Adult",
      "time": "Night",
      "equipment": [
        "Hookshot"
      ],
      "steps": [
        "Go to the last bridge before the waterfall into Zora Domain.",
        "At night, look high on the northwestern rock wall beyond the bridge.",
        "Stand on the stone railing to get a clear line of sight.",
        "Hookshot the gold spider; use the Longshot if your current position is out of range."
      ],
      "sources": [
        "v10"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Hookshot"
      ]
    },
    "Gold Skulltula:64": {
      "name": "Frozen Domain waterfall wall",
      "area": "Zora Domain",
      "age": "Adult",
      "time": "Night",
      "equipment": [
        "Hookshot"
      ],
      "steps": [
        "Enter frozen Zora Domain.",
        "Climb to the ledge where the childhood diving game started.",
        "At night, face the wall to the left of the frozen waterfall.",
        "Hookshot the gold spider above the ledge and retrieve its token."
      ],
      "sources": [
        "v10"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Zelda Lullaby",
        "Adult access",
        "Hookshot"
      ]
    },
    "Gold Skulltula:65": {
      "name": "Ice Cavern spinning-blade room",
      "area": "Ice Cavern",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot"
      ],
      "steps": [
        "Enter the first large room with spinning blades and icicles.",
        "Move to a safe edge while watching the blades’ path.",
        "Look high on the wall for the gold spider.",
        "Use the Hookshot to defeat it and pull the token down."
      ],
      "sources": [
        "v14"
      ],
      "note": "",
      "requires": [
        "Zelda Lullaby",
        "Adult access",
        "Hookshot"
      ]
    },
    "Gold Skulltula:66": {
      "name": "Ice Cavern Compass-room wall",
      "area": "Ice Cavern",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot",
        "Bottle",
        "Blue Fire"
      ],
      "steps": [
        "Follow the eastern corridor to the room containing the Compass.",
        "Use Blue Fire on red ice blocking the route, refilling your bottle at a blue flame if needed.",
        "Inspect the far wall near the Compass side of the room.",
        "Hookshot the gold spider and retrieve the token."
      ],
      "sources": [
        "v14"
      ],
      "note": "",
      "requires": [
        "Zelda Lullaby",
        "Adult access",
        "Hookshot",
        "Event:blue-fire"
      ]
    },
    "Gold Skulltula:67": {
      "name": "Ice Cavern sliding-block ceiling",
      "area": "Ice Cavern",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot"
      ],
      "steps": [
        "Reach the room with the large sliding block and silver collectibles.",
        "Before leaving after the puzzle, stop near its entrance.",
        "Look up at the ceiling above the block-puzzle area.",
        "Hookshot the gold spider and collect its token."
      ],
      "sources": [
        "v14"
      ],
      "note": "",
      "requires": [
        "Zelda Lullaby",
        "Adult access",
        "Hookshot",
        "Event:blue-fire"
      ]
    },
    "Gold Skulltula:68": {
      "name": "Laboratory tank crate",
      "area": "Lake Hylia",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Iron Boots",
        "Hookshot",
        "Zora Tunic"
      ],
      "steps": [
        "Enter the Lakeside Laboratory as an adult.",
        "Equip the Iron Boots and sink to the bottom of the large tank.",
        "Break the wooden crate at the bottom to expose the gold spider.",
        "Use the Hookshot to defeat it and retrieve its token, then remove the boots to surface."
      ],
      "sources": [
        "p01"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Hookshot",
        "Iron Boots",
        "Zora Tunic"
      ]
    },
    "Gold Skulltula:69": {
      "name": "Water Temple middle-level bomb wall",
      "area": "Water Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Bomb Bag",
        "Iron Boots",
        "Hookshot"
      ],
      "steps": [
        "Set the temple water to the middle level.",
        "Enter the blue-lit eastern side room and locate the cracked wall.",
        "Bomb the wall and go into the small opening.",
        "Defeat the gold spider and collect its token."
      ],
      "sources": [
        "v16"
      ],
      "note": "The old “south corridor floor” description is replaced by the remake’s middle-level bomb-wall route.",
      "requires": [
        "Iron Boots",
        "Zora Tunic",
        "Hookshot",
        "Zelda Lullaby",
        "Adult access",
        "Hookshot",
        "Bomb Bag"
      ]
    },
    "Gold Skulltula:70": {
      "name": "Longshot whirlpool river",
      "area": "Water Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Longshot",
        "Iron Boots"
      ],
      "steps": [
        "Defeat Dark Link and obtain the Longshot.",
        "Continue down into the river with several whirlpools.",
        "Pause on a safe bank partway along and look above the water near the later whirlpools.",
        "Longshot the gold spider and retrieve its token before continuing downstream."
      ],
      "sources": [
        "v16"
      ],
      "note": "",
      "requires": [
        "Iron Boots",
        "Zora Tunic",
        "Hookshot",
        "Zelda Lullaby",
        "Adult access",
        "Longshot"
      ]
    },
    "Gold Skulltula:71": {
      "name": "High-water basement route",
      "area": "Water Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Iron Boots",
        "Longshot"
      ],
      "steps": [
        "Raise the water to its highest level and return to the central chamber.",
        "Equip the Iron Boots and descend to the basement route.",
        "Follow the underwater passage rather than searching the old waterfall-wall location.",
        "Look along the route for the gold spider and use the Longshot to collect its token."
      ],
      "sources": [
        "c30"
      ],
      "note": "Remake guides describe a high-water basement route here; this replaces the old “waterfall room” directions.",
      "requires": [
        "Iron Boots",
        "Zora Tunic",
        "Hookshot",
        "Zelda Lullaby",
        "Adult access",
        "Longshot"
      ]
    },
    "Gold Skulltula:72": {
      "name": "Top inside the central pillar",
      "area": "Water Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Longshot"
      ],
      "steps": [
        "Obtain the Longshot before attempting this pickup.",
        "Enter the hollow central pillar and look upward along its inside walls.",
        "Climb or move to the highest accessible position inside.",
        "Longshot the gold spider near the top and collect its token."
      ],
      "sources": [
        "v16"
      ],
      "note": "",
      "requires": [
        "Iron Boots",
        "Zora Tunic",
        "Hookshot",
        "Zelda Lullaby",
        "Adult access",
        "Longshot"
      ]
    },
    "Gold Skulltula:73": {
      "name": "Boss-Key rolling-ball tunnel",
      "area": "Water Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Longshot",
        "Iron Boots"
      ],
      "steps": [
        "Follow the northern first-floor route toward the Boss Key.",
        "Enter the room where boulders roll out of the high tunnels and fall beside the water.",
        "Look into the tunnel above the small waterfall or rolling-ball drop.",
        "Use the Longshot to collect the gold spider’s token without standing in the boulders’ path."
      ],
      "sources": [
        "v16"
      ],
      "note": "",
      "requires": [
        "Iron Boots",
        "Zora Tunic",
        "Hookshot",
        "Zelda Lullaby",
        "Adult access",
        "Longshot"
      ]
    },
    "Gold Skulltula:74": {
      "name": "Lake island treetop",
      "area": "Lake Hylia",
      "age": "Adult",
      "time": "Night",
      "equipment": [
        "Longshot",
        "Water Temple completed"
      ],
      "steps": [
        "Complete the Water Temple and return to Lake Hylia after dark.",
        "Find the large tree on the island in the middle of the lake.",
        "Aim the Longshot at its upper trunk or branch to reach the top.",
        "Defeat the gold spider and collect the token there."
      ],
      "sources": [
        "v15"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Longshot",
        "Event:water"
      ]
    },
    "Gold Skulltula:75": {
      "name": "Castle moat tree — Song of Storms grotto",
      "area": "Hyrule Castle",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Song of Storms",
        "Boomerang"
      ],
      "steps": [
        "Learn Song of Storms from the adult windmill musician, then return to the child timeline at the Temple of Time.",
        "Enter the Hyrule Castle grounds from Castle Town. Follow the sneaking route past the guard checkpoint toward the castle-side moat.",
        "Continue to the corner where Talon slept before you woke him with the Cucco on your first castle visit. The town entrance gate is not the destination.",
        "Find the lone tree in that corner and the colored ground plant beside it. Stand by the plant and play Song of Storms to uncover the hole.",
        "Drop into the grotto and follow the cave to the gold spider, then use the Boomerang to defeat it and retrieve its token."
      ],
      "sources": [
        "v04"
      ],
      "note": "Start from the moat corner used during the Zelda infiltration, not the Castle Town gate. This entry previously said only “near the gate.”",
      "crossTime": true,
      "requires": [
        "Hyrule Field access",
        "Boomerang"
      ],
      "timelineStages": [
        {
          "key": "learn-storms",
          "age": "Adult",
          "title": "Learn Song of Storms",
          "requires": [
            "Adult access",
            "Ocarina"
          ],
          "evidence": "progress:20",
          "completeAlso": [
            "progress:20"
          ]
        },
        {
          "key": "collect",
          "age": "Child",
          "title": "Castle moat tree — Song of Storms grotto",
          "requires": [
            "Hyrule Field access",
            "Boomerang"
          ]
        }
      ]
    },
    "Gold Skulltula:76": {
      "name": "Well central coffin chamber",
      "area": "Bottom of the Well",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Lens of Truth",
        "Deku Stick",
        "Boomerang"
      ],
      "steps": [
        "Drain Kakariko’s well with Song of Storms and obtain the Lens of Truth inside.",
        "Explore the western chamber off the central part of the dungeon.",
        "Light a Deku Stick and burn the coffin in that chamber.",
        "Defeat the revealed gold spider and retrieve its token."
      ],
      "sources": [
        "v17"
      ],
      "note": "The remake route is a coffin chamber; the old “west locked room behind pots” instructions were not reliable.",
      "crossTime": true,
      "requires": [
        "Event:well-drained",
        "Boomerang"
      ],
      "timelineStages": [
        {
          "key": "learn-storms",
          "age": "Adult",
          "title": "Learn Song of Storms",
          "requires": [
            "Adult access",
            "Ocarina"
          ],
          "evidence": "progress:20",
          "completeAlso": [
            "progress:20"
          ]
        },
        {
          "key": "collect",
          "age": "Child",
          "title": "Well central coffin chamber",
          "requires": [
            "Event:well-drained",
            "Boomerang"
          ]
        }
      ]
    },
    "Gold Skulltula:77": {
      "name": "Well central locked chamber",
      "area": "Bottom of the Well",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Lens of Truth",
        "Boomerang",
        "Small Key"
      ],
      "steps": [
        "Use the Lens of Truth while exploring the outer corridors to find a hidden Small Key chest.",
        "Return to the central chamber and unlock its sealed side room.",
        "Keep the Lens on to follow the safe route past invisible pits.",
        "Defeat the gold spider and collect its token with the Boomerang."
      ],
      "sources": [
        "v17"
      ],
      "note": "",
      "crossTime": true,
      "requires": [
        "Event:well-drained",
        "Boomerang"
      ],
      "timelineStages": [
        {
          "key": "learn-storms",
          "age": "Adult",
          "title": "Learn Song of Storms",
          "requires": [
            "Adult access",
            "Ocarina"
          ],
          "evidence": "progress:20",
          "completeAlso": [
            "progress:20"
          ]
        },
        {
          "key": "collect",
          "age": "Child",
          "title": "Well central locked chamber",
          "requires": [
            "Event:well-drained",
            "Boomerang"
          ]
        }
      ]
    },
    "Gold Skulltula:78": {
      "name": "Well Like Like room",
      "area": "Bottom of the Well",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Lens of Truth",
        "Boomerang"
      ],
      "steps": [
        "Explore the eastern side of the well with the Lens of Truth active.",
        "Use it to identify the concealed route into the Like Like chamber.",
        "Defeat or move safely around the Like Like so it cannot swallow your equipment.",
        "Find the gold spider behind it and use the Boomerang to recover its token."
      ],
      "sources": [
        "v17"
      ],
      "note": "",
      "crossTime": true,
      "requires": [
        "Event:well-drained",
        "Boomerang"
      ],
      "timelineStages": [
        {
          "key": "learn-storms",
          "age": "Adult",
          "title": "Learn Song of Storms",
          "requires": [
            "Adult access",
            "Ocarina"
          ],
          "evidence": "progress:20",
          "completeAlso": [
            "progress:20"
          ]
        },
        {
          "key": "collect",
          "age": "Child",
          "title": "Well Like Like room",
          "requires": [
            "Event:well-drained",
            "Boomerang"
          ]
        }
      ]
    },
    "Gold Skulltula:79": {
      "name": "Shadow Temple invisible blades",
      "area": "Shadow Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Lens of Truth",
        "Hookshot"
      ],
      "steps": [
        "Reach B3 and explore the far southeastern side chamber.",
        "Activate the Lens of Truth to see the invisible spinning blades.",
        "Move through the blade gaps and defeat the enemies sealing the way.",
        "Inspect the rear wall and Hookshot the gold spider’s token."
      ],
      "sources": [
        "v18"
      ],
      "note": "",
      "requires": [
        "Nocturne of Shadow",
        "Magic",
        "Din Fire",
        "Adult access",
        "Hookshot",
        "Lens of Truth",
        "Hover Boots"
      ]
    },
    "Gold Skulltula:80": {
      "name": "Shadow Temple falling spikes",
      "area": "Shadow Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot",
        "Lens of Truth"
      ],
      "steps": [
        "Reach the southern B3 chamber with the falling spike traps.",
        "Pull the movable block out and use it to hold up the traps as you cross.",
        "Use the block-supported route to reach the top of the spike platform.",
        "Defeat the gold spider there and collect its token before leaving."
      ],
      "sources": [
        "v18"
      ],
      "note": "",
      "requires": [
        "Nocturne of Shadow",
        "Magic",
        "Din Fire",
        "Adult access",
        "Hookshot",
        "Lens of Truth",
        "Hover Boots"
      ]
    },
    "Gold Skulltula:81": {
      "name": "Shadow Temple fan corridor",
      "area": "Shadow Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot",
        "Lens of Truth"
      ],
      "steps": [
        "Find the center-eastern B3 corridor with fans.",
        "Wait for a safe opening, then Hookshot across the gap.",
        "Turn around immediately after landing and inspect the hidden recess behind you.",
        "Use the Lens if needed, then defeat the gold spider and retrieve its token."
      ],
      "sources": [
        "v18"
      ],
      "note": "This is the remake’s fan-corridor pickup, replacing the older “flaming skull room” directions.",
      "requires": [
        "Nocturne of Shadow",
        "Magic",
        "Din Fire",
        "Adult access",
        "Hookshot",
        "Lens of Truth",
        "Hover Boots"
      ]
    },
    "Gold Skulltula:82": {
      "name": "Shadow Temple ferry Scarecrow",
      "area": "Shadow Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Longshot",
        "Scarecrow song activated"
      ],
      "steps": [
        "Reach the large ferry chamber, but do not start the boat yet.",
        "Move the block on the left to expose the Scarecrow position.",
        "Play your Scarecrow Song and Longshot up to the ledge.",
        "Collect the gold spider’s token, then return to the ferry route."
      ],
      "sources": [
        "v18"
      ],
      "note": "",
      "crossTime": true,
      "requires": [
        "Nocturne of Shadow",
        "Magic",
        "Din Fire",
        "Adult access",
        "Longshot",
        "Lens of Truth",
        "Hover Boots",
        "Side Quest:8"
      ],
      "timelineStages": [
        {
          "key": "teach",
          "age": "Child",
          "title": "Teach Bonooru the custom Scarecrow tune",
          "requires": [
            "Hyrule Field access",
            "Ocarina"
          ],
          "evidence": "Side Quest:7",
          "completeAlso": [
            "Side Quest:7"
          ]
        },
        {
          "key": "collect",
          "age": "Adult",
          "title": "Activate the Scarecrow tune, then Shadow Temple ferry Scarecrow",
          "requires": [
            "Nocturne of Shadow",
            "Magic",
            "Din Fire",
            "Adult access",
            "Longshot",
            "Lens of Truth",
            "Hover Boots",
            "Ocarina"
          ],
          "completeAlso": [
            "Side Quest:8"
          ]
        }
      ]
    },
    "Gold Skulltula:83": {
      "name": "Shadow Temple three skull pots",
      "area": "Shadow Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Bomb Bag",
        "Longshot",
        "Lens of Truth"
      ],
      "steps": [
        "Go to the far-western room containing three large spinning skull pots.",
        "Stand back and throw a bomb into each pot opening.",
        "Destroy all three rather than searching an empty wall.",
        "Collect the gold spider’s token that appears after the pots are broken."
      ],
      "sources": [
        "c34"
      ],
      "note": "",
      "requires": [
        "Nocturne of Shadow",
        "Magic",
        "Din Fire",
        "Adult access",
        "Longshot",
        "Lens of Truth",
        "Hover Boots",
        "Bomb Bag"
      ]
    },
    "Gold Skulltula:84": {
      "name": "Behind the carpenter camp",
      "area": "Gerudo Valley",
      "age": "Adult",
      "time": "Night",
      "equipment": [
        "Longshot"
      ],
      "steps": [
        "Cross the broken valley bridge as an adult using Epona or the Longshot.",
        "Go around the carpenter camp or merchant tent on the far side.",
        "At night, inspect the cliff directly behind the camp.",
        "Longshot the gold spider and retrieve its token."
      ],
      "sources": [
        "v19"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Longshot",
        {
          "any": [
            "Longshot",
            "Epona"
          ]
        }
      ]
    },
    "Gold Skulltula:85": {
      "name": "Carpenter-camp stone arch",
      "area": "Gerudo Valley",
      "age": "Adult",
      "time": "Night",
      "equipment": [
        "Hookshot"
      ],
      "steps": [
        "At night, walk from the carpenter camp toward the nearby stone arch.",
        "Find the pillar beside the large gray rocks.",
        "Look up the pillar or underside of the arch for the gold spider.",
        "Hookshot it, or use the Longshot if your position is too far away."
      ],
      "sources": [
        "v19"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Hookshot",
        {
          "any": [
            "Longshot",
            "Epona"
          ]
        }
      ]
    },
    "Gold Skulltula:86": {
      "name": "Fortress exterior high wall",
      "area": "Gerudo Fortress",
      "age": "Adult",
      "time": "Night",
      "equipment": [
        "Longshot",
        "Gerudo Card"
      ],
      "steps": [
        "Rescue the four carpenters so the Gerudo let you move freely.",
        "Make it night and walk around the fortress exterior.",
        "Inspect the high wall beside the upper doors and gaps; the remake guide places it on the eastern outside wall.",
        "Longshot the gold spider and retrieve its token."
      ],
      "sources": [
        "n01"
      ],
      "note": "",
      "requires": [
        {
          "any": [
            "Longshot",
            "Epona"
          ]
        },
        "Adult access",
        "Longshot",
        "Gerudo Card"
      ]
    },
    "Gold Skulltula:87": {
      "name": "Archery-range far target",
      "area": "Gerudo Fortress",
      "age": "Adult",
      "time": "Night",
      "equipment": [
        "Longshot",
        "Gerudo Card"
      ],
      "steps": [
        "With the Gerudo Pass, go to the horseback archery grounds after dark.",
        "Walk toward the large target at the far end of the course.",
        "Inspect the face or back of the high target for the gold spider.",
        "Use the Longshot to collect its token; playing the archery game is not required for this pickup."
      ],
      "sources": [
        "n01"
      ],
      "note": "",
      "requires": [
        {
          "any": [
            "Longshot",
            "Epona"
          ]
        },
        "Adult access",
        "Longshot",
        "Gerudo Card"
      ]
    },
    "Gold Skulltula:88": {
      "name": "Wasteland stone shelter",
      "area": "Haunted Wasteland",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Longshot",
        "Lens of Truth"
      ],
      "steps": [
        "Cross the quicksand and follow the flags into the desert.",
        "Stop at the stone shelter used to find the phantom guide.",
        "Go down into its lower chamber and inspect the walls.",
        "Defeat the gold spider and retrieve its token before continuing across the wasteland."
      ],
      "sources": [
        "v19"
      ],
      "note": "",
      "requires": [
        "Gerudo Card",
        "Lens of Truth",
        "Magic",
        {
          "any": [
            "Longshot",
            "Hover Boots"
          ]
        },
        "Adult access",
        "Longshot"
      ]
    },
    "Gold Skulltula:89": {
      "name": "Spirit Temple entrance soil",
      "area": "Desert Colossus",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bottle",
        "Bottled bug",
        "Requiem of Spirit"
      ],
      "steps": [
        "Learn Requiem of Spirit on the adult visit, then return to the past.",
        "Warp to Desert Colossus and walk beside the Spirit Temple entrance.",
        "Release a bottled bug on the soft soil there.",
        "Defeat the gold spider and collect its token; planting a bean afterward helps with later adult pickups."
      ],
      "sources": [
        "v19"
      ],
      "note": "",
      "requires": [
        "Requiem of Spirit",
        "Event:time-travel",
        "Bottle"
      ],
      "timelineStages": [
        {
          "key": "learn-warp",
          "age": "Adult",
          "title": "Learn Requiem of Spirit",
          "requires": [
            "Adult access",
            "Ocarina",
            "Gerudo Card",
            "Lens of Truth",
            "Magic",
            {
              "any": [
                "Longshot",
                "Hover Boots"
              ]
            }
          ],
          "evidence": "progress:36",
          "completeAlso": [
            "progress:36"
          ]
        },
        {
          "key": "child-task",
          "age": "Child",
          "title": "Spirit Temple entrance soil",
          "requires": [
            "Requiem of Spirit",
            "Event:time-travel",
            "Bottle"
          ]
        }
      ],
      "crossTime": true
    },
    "Gold Skulltula:90": {
      "name": "Colossus grown-bean rock",
      "area": "Desert Colossus",
      "age": "Adult",
      "time": "Night",
      "equipment": [
        "Bean planted at Spirit Temple"
      ],
      "steps": [
        "As a child, plant a bean in the soil outside the Spirit Temple.",
        "Return as an adult at night and ride the grown plant.",
        "Stay aboard until it passes the raised rock with the gold spider.",
        "Jump onto the rock, defeat the spider, and collect the token."
      ],
      "sources": [
        "r06"
      ],
      "note": "",
      "related": [
        "Magic Bean:9"
      ],
      "requires": [
        {
          "any": [
            "Requiem of Spirit",
            {
              "all": [
                "Gerudo Card",
                "Lens of Truth",
                "Magic",
                {
                  "any": [
                    "Longshot",
                    "Hover Boots"
                  ]
                }
              ]
            }
          ]
        },
        "Adult access"
      ],
      "crossTime": true,
      "timelineStages": [
        {
          "key": "learn-warp",
          "age": "Adult",
          "title": "Learn Requiem of Spirit",
          "requires": [
            "Adult access",
            "Ocarina",
            "Gerudo Card",
            "Lens of Truth",
            "Magic",
            {
              "any": [
                "Longshot",
                "Hover Boots"
              ]
            }
          ],
          "evidence": "progress:36",
          "completeAlso": [
            "progress:36"
          ]
        },
        {
          "key": "plant",
          "age": "Child",
          "title": "Plant the bean: Spirit Temple entrance",
          "requires": [
            "Requiem of Spirit",
            "Event:time-travel",
            "Magic Bean",
            "Requiem of Spirit"
          ],
          "evidence": "Magic Bean:9",
          "completeAlso": [
            "Magic Bean:9"
          ]
        },
        {
          "key": "collect",
          "age": "Adult",
          "title": "Colossus grown-bean rock",
          "requires": [
            {
              "any": [
                "Requiem of Spirit",
                {
                  "all": [
                    "Gerudo Card",
                    "Lens of Truth",
                    "Magic",
                    {
                      "any": [
                        "Longshot",
                        "Hover Boots"
                      ]
                    }
                  ]
                }
              ]
            },
            "Adult access"
          ]
        }
      ]
    },
    "Gold Skulltula:91": {
      "name": "Colossus northern bird wall",
      "area": "Desert Colossus",
      "age": "Adult",
      "time": "Night",
      "equipment": [
        "Longshot"
      ],
      "steps": [
        "Leave the Spirit Temple entrance at night.",
        "Walk north toward the rocky wall where the birds gather.",
        "Look along the high rock face rather than only at the old oasis-palm location.",
        "Use the Longshot to defeat the gold spider and collect its token."
      ],
      "sources": [
        "c36"
      ],
      "note": "The remake area guide places this token on the northern rock wall, not an oasis palm.",
      "requires": [
        {
          "any": [
            "Requiem of Spirit",
            {
              "all": [
                "Gerudo Card",
                "Lens of Truth",
                "Magic",
                {
                  "any": [
                    "Longshot",
                    "Hover Boots"
                  ]
                }
              ]
            }
          ]
        },
        "Adult access",
        "Longshot"
      ]
    },
    "Gold Skulltula:92": {
      "name": "Spirit child-side grating",
      "area": "Spirit Temple",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Boomerang"
      ],
      "steps": [
        "Enter the Spirit Temple as a child and begin the small child-only route.",
        "Take the right-hand room when that branch becomes accessible.",
        "Inspect the grating beyond the early crossing or silver-collectible puzzle.",
        "Use the Boomerang to defeat the gold spider and retrieve its token through the bars."
      ],
      "sources": [
        "v20"
      ],
      "note": "",
      "requires": [
        "Requiem of Spirit",
        "Event:time-travel",
        "Boomerang"
      ],
      "timelineStages": [
        {
          "key": "learn-warp",
          "age": "Adult",
          "title": "Learn Requiem of Spirit",
          "requires": [
            "Adult access",
            "Ocarina",
            "Gerudo Card",
            "Lens of Truth",
            "Magic",
            {
              "any": [
                "Longshot",
                "Hover Boots"
              ]
            }
          ],
          "evidence": "progress:36",
          "completeAlso": [
            "progress:36"
          ]
        },
        {
          "key": "child-task",
          "age": "Child",
          "title": "Spirit child-side grating",
          "requires": [
            "Requiem of Spirit",
            "Event:time-travel",
            "Boomerang"
          ]
        }
      ],
      "crossTime": true
    },
    "Gold Skulltula:93": {
      "name": "Spirit five-crystal exit",
      "area": "Spirit Temple",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Boomerang"
      ],
      "steps": [
        "Complete the child-side room containing the five crystals or silver collectibles.",
        "Go through the door that opens after the puzzle.",
        "Stop on the next side and turn back toward the doorway.",
        "Look above or beside the exit for the gold spider and collect its token with the Boomerang."
      ],
      "sources": [
        "v20"
      ],
      "note": "",
      "requires": [
        "Requiem of Spirit",
        "Event:time-travel",
        "Boomerang"
      ],
      "timelineStages": [
        {
          "key": "learn-warp",
          "age": "Adult",
          "title": "Learn Requiem of Spirit",
          "requires": [
            "Adult access",
            "Ocarina",
            "Gerudo Card",
            "Lens of Truth",
            "Magic",
            {
              "any": [
                "Longshot",
                "Hover Boots"
              ]
            }
          ],
          "evidence": "progress:36",
          "completeAlso": [
            "progress:36"
          ]
        },
        {
          "key": "child-task",
          "age": "Child",
          "title": "Spirit five-crystal exit",
          "requires": [
            "Requiem of Spirit",
            "Event:time-travel",
            "Boomerang"
          ]
        }
      ],
      "crossTime": true
    },
    "Gold Skulltula:94": {
      "name": "Spirit statue-side passage",
      "area": "Spirit Temple",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Boomerang"
      ],
      "steps": [
        "Follow the child route toward the Iron Knuckle, passing the large statue chamber.",
        "Check the passage and ledge on the statue’s right side.",
        "Before leaving toward the fight, look above the doorway and the curved stair passage.",
        "Hit the gold spider with the Boomerang and retrieve its token."
      ],
      "sources": [
        "p01"
      ],
      "note": "",
      "requires": [
        "Requiem of Spirit",
        "Event:time-travel",
        "Boomerang"
      ],
      "timelineStages": [
        {
          "key": "learn-warp",
          "age": "Adult",
          "title": "Learn Requiem of Spirit",
          "requires": [
            "Adult access",
            "Ocarina",
            "Gerudo Card",
            "Lens of Truth",
            "Magic",
            {
              "any": [
                "Longshot",
                "Hover Boots"
              ]
            }
          ],
          "evidence": "progress:36",
          "completeAlso": [
            "progress:36"
          ]
        },
        {
          "key": "child-task",
          "age": "Child",
          "title": "Spirit statue-side passage",
          "requires": [
            "Requiem of Spirit",
            "Event:time-travel",
            "Boomerang"
          ]
        }
      ],
      "crossTime": true
    },
    "Gold Skulltula:95": {
      "name": "Spirit adult rolling-boulder nook",
      "area": "Spirit Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Song of Time",
        "Hookshot"
      ],
      "steps": [
        "Enter the adult-side room with rolling boulders.",
        "Look in the back-left corner for the blue Time Block.",
        "Play Song of Time to move it out of the nook.",
        "Defeat the gold spider revealed behind the block and collect its token."
      ],
      "sources": [
        "v20"
      ],
      "note": "",
      "requires": [
        {
          "any": [
            "Requiem of Spirit",
            {
              "all": [
                "Gerudo Card",
                "Lens of Truth",
                "Magic",
                {
                  "any": [
                    "Longshot",
                    "Hover Boots"
                  ]
                }
              ]
            }
          ]
        },
        "Adult access",
        "Hookshot",
        "Silver Gauntlets",
        "Song of Time"
      ]
    },
    "Gold Skulltula:96": {
      "name": "Spirit statue Scarecrow ledge",
      "area": "Spirit Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Longshot",
        "Scarecrow song activated"
      ],
      "steps": [
        "Return to the chamber with the giant statue as an adult.",
        "After collecting the Small Key on the statue’s hand, look high toward its upper-left or northwestern corner.",
        "Play your Scarecrow Song at the summon point.",
        "Longshot to the scarecrow and collect the gold spider’s token beside it."
      ],
      "sources": [
        "v20"
      ],
      "note": "",
      "crossTime": true,
      "requires": [
        {
          "any": [
            "Requiem of Spirit",
            {
              "all": [
                "Gerudo Card",
                "Lens of Truth",
                "Magic",
                {
                  "any": [
                    "Longshot",
                    "Hover Boots"
                  ]
                }
              ]
            }
          ]
        },
        "Adult access",
        "Longshot",
        "Silver Gauntlets",
        "Side Quest:8"
      ],
      "timelineStages": [
        {
          "key": "teach",
          "age": "Child",
          "title": "Teach Bonooru the custom Scarecrow tune",
          "requires": [
            "Hyrule Field access",
            "Ocarina"
          ],
          "evidence": "Side Quest:7",
          "completeAlso": [
            "Side Quest:7"
          ]
        },
        {
          "key": "collect",
          "age": "Adult",
          "title": "Activate the Scarecrow tune, then Spirit statue Scarecrow ledge",
          "requires": [
            {
              "any": [
                "Requiem of Spirit",
                {
                  "all": [
                    "Gerudo Card",
                    "Lens of Truth",
                    "Magic",
                    {
                      "any": [
                        "Longshot",
                        "Hover Boots"
                      ]
                    }
                  ]
                }
              ]
            },
            "Adult access",
            "Longshot",
            "Silver Gauntlets",
            "Ocarina"
          ],
          "completeAlso": [
            "Side Quest:8"
          ]
        }
      ]
    },
    "Gold Skulltula:97": {
      "name": "Fountain Silver Gauntlets cave",
      "area": "Zora Fountain",
      "age": "Adult",
      "time": "Night",
      "equipment": [
        "Silver Gauntlets",
        "Lens of Truth",
        "Hookshot"
      ],
      "steps": [
        "Go to the southeastern side of Zora Fountain near the Great Fairy route.",
        "Lift the silver boulder with the Silver Gauntlets and enter the cave.",
        "Use the Lens of Truth to reveal the invisible spiders, clear the route, and climb the vines.",
        "At night, turn back above the vines and Hookshot the gold spider’s token."
      ],
      "sources": [
        "c39"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Zelda Lullaby",
        "Adult access",
        "Hookshot",
        "Silver Gauntlets",
        "Lens of Truth"
      ]
    },
    "Gold Skulltula:98": {
      "name": "Field tree near Kokiri entrance",
      "area": "Hyrule Field",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Sword"
      ],
      "steps": [
        "Leave Kokiri Forest and find the isolated tree near the eastern forest entrance.",
        "Identify it by its position near the end of the river rather than a group of trees.",
        "Roll directly into the trunk to drop the gold spider.",
        "Defeat it and pick up its token."
      ],
      "sources": [
        "v03"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Sword"
      ]
    },
    "Gold Skulltula:99": {
      "name": "Southern woodland grotto",
      "area": "Hyrule Field",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bomb Bag",
        "Slingshot"
      ],
      "steps": [
        "Go south across Hyrule Field toward the Lake Hylia entrance.",
        "Search among the trees for the cracked ground marking a grotto.",
        "Bomb it, drop inside, and defeat the ordinary large Skulltula.",
        "Look up the cave wall for the gold spider, defeat it, and collect its token."
      ],
      "sources": [
        "v03"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Bomb Bag",
        "Slingshot"
      ]
    },
    "Gold Skulltula:100": {
      "name": "Marsh grotto: child then adult",
      "area": "Hyrule Field",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Bomb Bag",
        "Child visit completed"
      ],
      "steps": [
        "As a child, find the cracked grotto entrance in the marsh southeast of Lon Lon Ranch.",
        "Bomb it open, go inside, and defeat the ordinary Skulltula.",
        "Return to the same grotto as an adult; check the wooden crate for the gold version.",
        "Break the crate, defeat the gold spider, and pick up its token."
      ],
      "sources": [
        "v03"
      ],
      "note": "The child visit is required; arriving only as an adult can leave this pickup unavailable.",
      "crossTime": true,
      "requires": [
        "Hyrule Field access",
        "Adult access"
      ],
      "timelineStages": [
        {
          "key": "prepare-grotto",
          "age": "Child",
          "title": "Bomb open the marsh grotto and defeat its ordinary spider",
          "requires": [
            "Hyrule Field access",
            "Bomb Bag"
          ]
        },
        {
          "key": "collect-token",
          "age": "Adult",
          "title": "Marsh grotto: child then adult",
          "requires": [
            "Hyrule Field access",
            "Adult access"
          ]
        }
      ]
    },
    "Heart Piece:0": {
      "name": "Kakariko rooftop man",
      "area": "Kakariko",
      "age": "Both",
      "time": "Day",
      "equipment": [
        "Cucco as Young Link, or Hookshot as Adult Link"
      ],
      "steps": [
        "Carry a Cucco up toward the windmill and use its glide to cross the tall fence into the enclosed yard.",
        "Throw the birds toward the village, but stay in the yard and climb the ladder behind the windmill.",
        "Lift the Cucco on the upper ledge and glide toward the purple rooftops in the village center.",
        "Follow the roof to the seated man and speak to him for the Heart Piece."
      ],
      "sources": [
        "c06"
      ],
      "note": "The Cucco route works as Young Link. Adult Link can reach the rooftop using the Hookshot.",
      "requires": [
        "Hyrule Field access"
      ],
      "perAgeRequires": {
        "Child": [],
        "Adult": [
          "Hookshot"
        ]
      }
    },
    "Heart Piece:1": {
      "name": "Dampé’s grave-digging prize",
      "area": "Graveyard",
      "age": "Child",
      "time": "Night",
      "equipment": [
        "Rupees for repeated digs"
      ],
      "steps": [
        "Enter the Graveyard at night and speak to the living Dampé near the digging mounds.",
        "Follow him and ask him to dig at a mound, paying the quoted fee.",
        "If he mentions hard ground, decide whether to pay the extra amount; that prompt does not guarantee a Heart Piece.",
        "Keep trying different digs until the Heart Piece appears, then walk up and collect it."
      ],
      "sources": [
        "ni-heart"
      ],
      "note": "Correction: this is not guaranteed on the fourth dig. First-hand remake reports describe random results, including rocks after extra payment. Bring spare rupees and follow the price in your game.",
      "requires": [
        "Hyrule Field access"
      ]
    },
    "Heart Piece:2": {
      "name": "Ranch storeroom crawlspace",
      "area": "Lon Lon Ranch",
      "age": "Child",
      "time": "Any time",
      "equipment": [],
      "steps": [
        "Follow the ranch fence to the ruined stone building with the red door.",
        "Enter its storeroom and inspect the crates at the back.",
        "Pull the nearest crates out, then push the others aside to reveal the low crawlspace.",
        "Crawl through to the small round chamber and pick up the Heart Piece."
      ],
      "sources": [
        "c08"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access"
      ]
    },
    "Heart Piece:3": {
      "name": "Valley chest ledge",
      "area": "Gerudo Valley",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Cucco"
      ],
      "steps": [
        "Follow the canyon path from Hyrule Field until you reach the Cucco near the wide gap.",
        "Pick it up and stand at the edge facing the rock shelf across the canyon.",
        "Jump while holding the Cucco and steer toward the shelf rather than falling into the river.",
        "Land beside the chest and open it for the Heart Piece."
      ],
      "sources": [
        "c09"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access"
      ]
    },
    "Heart Piece:4": {
      "name": "Valley waterfall-side chamber",
      "area": "Gerudo Valley",
      "age": "Both",
      "time": "Any time",
      "equipment": [],
      "steps": [
        "Reach the low cow-pasture area beside the waterfall in Gerudo Valley.",
        "Follow the narrow cliff path along the stream instead of swimming away.",
        "Climb the stone stairs up the canyon wall and enter the small wooden chamber at the top.",
        "Walk into the Heart Piece inside."
      ],
      "sources": [
        "c09"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access"
      ]
    },
    "Heart Piece:5": {
      "name": "Child fishing prize",
      "area": "Lake Hylia",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "10 rupees",
        "Normal fishing lure"
      ],
      "steps": [
        "Enter the Fishing Pond hut at Lake Hylia and pay for a rod.",
        "Use the ordinary lure and cast near one of the larger fish; gently move the lure until it bites.",
        "Hook the fish and reel while matching its swimming direction, easing off if the line is about to break.",
        "Show a record-sized catch to the pond owner and finish the session to claim the Heart Piece."
      ],
      "sources": [
        "c10"
      ],
      "note": "The remake guide records a 56 cm winning fish. Use the owner’s current record and reward dialogue; fish caught with the banned sinking lure do not qualify.",
      "requires": [
        "Hyrule Field access"
      ]
    },
    "Heart Piece:6": {
      "name": "Return Richard the white dog",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Night",
      "equipment": [],
      "steps": [
        "Find the woman in Castle Town’s back streets who is looking for Richard.",
        "At night, search the alley northwest of the fountain for the small white dog.",
        "Walk close enough that the white dog follows you; make sure a different dog has not taken its place.",
        "Lead Richard back to his owner and speak to her for the Heart Piece."
      ],
      "sources": [
        "c11"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access"
      ]
    },
    "Heart Piece:7": {
      "name": "Skull Kids’ memory game",
      "area": "Lost Woods",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Ocarina"
      ],
      "steps": [
        "From the Lost Woods entrance, take the right-hand tunnel to the target clearing.",
        "Drop to the lower stumps, stand on the stump facing the Skull Kids, and take out your Ocarina.",
        "Repeat each phrase shown or played to you; finish a whole session for the first rupee prize.",
        "Accept two more sessions and complete the third successfully to receive the Heart Piece."
      ],
      "sources": [
        "p02"
      ],
      "note": "You need three completed sessions, not just three individual phrases. A failed phrase may restart that session.",
      "requires": [
        "Ocarina"
      ]
    },
    "Heart Piece:8": {
      "name": "Play Saria’s Song for Skull Kid",
      "area": "Lost Woods",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Ocarina",
        "Saria Song"
      ],
      "steps": [
        "Learn Saria’s Song from Saria in the Sacred Forest Meadow.",
        "Return to the Lost Woods entrance and take the left tunnel to the lone Skull Kid.",
        "Stand on the stump facing him and take out your Ocarina.",
        "Play Saria’s Song, finish his dialogue, and collect the Heart Piece."
      ],
      "sources": [
        "r02"
      ],
      "note": "",
      "requires": [
        "Ocarina",
        "Saria Song"
      ]
    },
    "Heart Piece:9": {
      "name": "Goron City spinning pot",
      "area": "Goron City",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Goron Bracelet",
        "Deku Stick"
      ],
      "steps": [
        "Open Darunia’s room and obtain the Goron Bracelet.",
        "Light a Deku Stick at the fire in his room, then light the torches around the large pot chamber.",
        "Climb to the next level and pick up a Bomb Flower overlooking the spinning pot.",
        "Time your throw so the bomb drops into the pot’s opening; repeat if you only get rupees.",
        "Collect the Heart Piece when it is thrown out."
      ],
      "sources": [
        "g06"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Event:mountain-gate",
        "Goron Bracelet",
        "Deku Sticks"
      ]
    },
    "Heart Piece:10": {
      "name": "Crater net-wall nook",
      "area": "Death Mountain Crater",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot",
        "Goron Tunic"
      ],
      "steps": [
        "Enter the crater as an adult wearing the Goron Tunic.",
        "From the lower temple approach, Hookshot toward the summit tunnel without leaving the crater.",
        "Face the crater’s center and find the pair of climbable metal meshes.",
        "Climb or drop between them onto the narrow ledge and collect the Heart Piece."
      ],
      "sources": [
        "c14"
      ],
      "note": "The child Business Scrub purchase is a separate piece.",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Goron Tunic",
        "Hookshot"
      ]
    },
    "Heart Piece:11": {
      "name": "Roof below the owl landing",
      "area": "Kakariko",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "Summit owl ride"
      ],
      "steps": [
        "Climb to the top of Death Mountain and speak to Kaepora Gaebora.",
        "Accept his ride down to Kakariko and wait until he leaves you on the upper rooftops.",
        "Cross the blue roof tiles and locate the neighboring lower red roof by the cow barn.",
        "Drop onto that roof and collect the Heart Piece before jumping to the ground."
      ],
      "sources": [
        "g08"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Event:mountain-gate",
        "Bomb Bag"
      ]
    },
    "Heart Piece:12": {
      "name": "Bombchu Bowling Heart Piece",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "Bombchu Bowling open",
        "Rupees"
      ],
      "steps": [
        "Enter the Bombchu Bowling Alley once its deliveries have arrived.",
        "Pay the displayed fee and clear all three lane stages by sending Bombchus into the targets.",
        "Win the earlier Bombchu and large Bomb Bag prizes, then play the next prize round.",
        "Complete that round and collect the Heart Piece from the attendant."
      ],
      "sources": [
        "c15"
      ],
      "note": "The remake route lists 10 rupees per round and the Heart Piece after the first two prizes. Check the prize being offered before paying for another round.",
      "requires": [
        "Hyrule Field access",
        "Equipment:7",
        "Upgrade:5",
        "Event:dodongo"
      ]
    },
    "Heart Piece:13": {
      "name": "River pillar — high-island Cucco route",
      "area": "Zora River",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Cucco",
        "Bomb Bag"
      ],
      "steps": [
        "Carry the lower river Cucco upstream to the raised ledge near the second rusted gate.",
        "Throw it onto the ledge, climb after it, then glide toward the climbable vines downriver.",
        "Climb to the high island; bomb the opening if sealed and take the Cucco inside.",
        "Take that bird outside and glide from the high island to the Heart Piece pillar."
      ],
      "sources": [
        "np-hearts"
      ],
      "note": "Use the high island; a low riverbank jump can fall short.",
      "requires": [
        "Hyrule Field access",
        "Bomb Bag"
      ]
    },
    "Heart Piece:14": {
      "name": "River waterfall platform",
      "area": "Zora River",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Cucco"
      ],
      "steps": [
        "Carry a Cucco upstream to the final winding path below the Domain waterfall.",
        "Face back downriver toward the separate Heart Piece platform.",
        "Glide onto that platform and collect the piece."
      ],
      "sources": [
        "np-hearts"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access"
      ]
    },
    "Heart Piece:15": {
      "name": "Zora Domain torch chest",
      "area": "Zora Domain",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Deku Stick"
      ],
      "steps": [
        "Find the lit torch near King Zora’s upper area and ready a Deku Stick.",
        "Carry its flame down through the Domain, lighting the unlit torches on the route past the shop.",
        "Continue through the dark corridor and light the pair of torch pillars in the final chamber.",
        "Open the chest that appears for the Heart Piece; relight missed or expired torches if no chest appears."
      ],
      "sources": [
        "g09"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Zelda Lullaby",
        "Deku Sticks"
      ]
    },
    "Heart Piece:16": {
      "name": "Graveyard grown-bean ledge",
      "area": "Graveyard",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Bean planted in Graveyard"
      ],
      "steps": [
        "Buy a Magic Bean as a child and plant it in the Graveyard’s soft soil near the tree.",
        "Return to the same spot as an adult.",
        "Stand on the grown plant and ride it above the stone wall.",
        "Step onto the high ledge or block and pick up the Heart Piece."
      ],
      "sources": [
        "c21"
      ],
      "note": "",
      "related": [
        "Magic Bean:4"
      ],
      "requires": [
        "Hyrule Field access",
        "Adult access"
      ],
      "crossTime": true,
      "timelineStages": [
        {
          "key": "plant",
          "age": "Child",
          "title": "Plant the bean: Graveyard upper soil",
          "requires": [
            "Hyrule Field access",
            "Magic Bean"
          ],
          "evidence": "Magic Bean:4",
          "completeAlso": [
            "Magic Bean:4"
          ]
        },
        {
          "key": "collect",
          "age": "Adult",
          "title": "Graveyard grown-bean ledge",
          "requires": [
            "Hyrule Field access",
            "Adult access"
          ]
        }
      ]
    },
    "Heart Piece:17": {
      "name": "Windmill upper platform",
      "area": "Windmill",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot race completed"
      ],
      "steps": [
        "Complete Dampé’s first race and open the Hookshot chest.",
        "Follow the exit tunnel; use Song of Time at the blue block if it obstructs the route.",
        "Climb into the windmill’s upper floor and jump onto its moving central platform.",
        "Ride around to the Heart Piece ledge, jump across, and collect it before dropping to the village."
      ],
      "sources": [
        "c21"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Hookshot"
      ]
    },
    "Heart Piece:18": {
      "name": "Dampé race under one minute",
      "area": "Graveyard",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot"
      ],
      "steps": [
        "Return to Dampé’s grave after winning the Hookshot.",
        "Speak to his ghost and accept another run through the course.",
        "Stay close to his lantern, cut corners on the safe floor, and avoid the flames he drops.",
        "Reach the finish in under one minute, then claim the Heart Piece reward or chest."
      ],
      "sources": [
        "c21"
      ],
      "note": "The first race gives the Hookshot; this Heart Piece is the faster repeat-race reward.",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Hookshot"
      ]
    },
    "Heart Piece:19": {
      "name": "House of Skulltula: 50 tokens",
      "area": "Kakariko",
      "age": "Both",
      "time": "Any time",
      "equipment": [
        "50 Gold Skulltula tokens"
      ],
      "steps": [
        "Collect 50 different Gold Skulltula tokens; the tracker’s overall percentage is not your token count.",
        "Enter the House of Skulltula in Kakariko.",
        "Speak to the Cursed Rich Man and finish any earlier reward dialogue.",
        "Claim the Heart Piece for the 50-token milestone."
      ],
      "sources": [
        "r01"
      ],
      "note": "You do not need all 100 tokens for this Heart Piece.",
      "requires": [
        "50 Gold Skulltula tokens",
        "Side Quest:13"
      ]
    },
    "Heart Piece:20": {
      "name": "Lake watchtower deck",
      "area": "Lake Hylia",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Bean planted at Lakeside Laboratory, or activated Scarecrow Song and Hookshot"
      ],
      "steps": [
        "As an adult, start beside the Lakeside Laboratory.",
        "Ride the bean planted here as a child to the roof, or summon the Scarecrow and Hookshot up.",
        "Climb the roof tower’s ladder and collect the Heart Piece."
      ],
      "sources": [
        "c24"
      ],
      "note": "",
      "related": [
        "Magic Bean:7"
      ],
      "requires": [
        "Hyrule Field access",
        "Adult access"
      ],
      "crossTime": true,
      "stageRoutes": {
        "bean": {
          "label": "Planted laboratory bean",
          "stages": [
            {
              "key": "plant",
              "age": "Child",
              "title": "Plant the bean: Lakeside Laboratory",
              "requires": [
                "Hyrule Field access",
                "Magic Bean"
              ],
              "evidence": "Magic Bean:7",
              "completeAlso": [
                "Magic Bean:7"
              ]
            },
            {
              "key": "collect",
              "age": "Adult",
              "title": "Lake watchtower deck",
              "requires": [
                "Hyrule Field access",
                "Adult access"
              ]
            }
          ]
        },
        "scarecrow": {
          "label": "Scarecrow + Hookshot",
          "stages": [
            {
              "key": "teach",
              "age": "Child",
              "title": "Teach Bonooru the custom Scarecrow tune",
              "requires": [
                "Hyrule Field access",
                "Ocarina"
              ],
              "evidence": "Side Quest:7",
              "completeAlso": [
                "Side Quest:7"
              ]
            },
            {
              "key": "collect",
              "age": "Adult",
              "title": "Activate the Scarecrow tune and Hookshot to the roof",
              "requires": [
                "Adult access",
                "Ocarina",
                "Hookshot"
              ],
              "completeAlso": [
                "Side Quest:8"
              ]
            }
          ]
        }
      }
    },
    "Heart Piece:21": {
      "name": "Laboratory deep-dive prize",
      "area": "Lake Hylia",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Golden Scale"
      ],
      "steps": [
        "Win the Golden Scale at the adult Fishing Pond using the normal lure.",
        "Enter the Lakeside Laboratory and jump into the large water tank.",
        "Dive all the way to the bottom or grate using the scale’s extended dive, then return to the surface.",
        "Speak to the scientist and claim the Heart Piece for touching the bottom."
      ],
      "sources": [
        "r13"
      ],
      "note": "Do the qualifying dive with the Golden Scale; simply sinking with Iron Boots is not a substitute for the diving reward.",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Golden Scale"
      ]
    },
    "Heart Piece:22": {
      "name": "Mountain grown-bean route",
      "area": "Death Mountain Trail",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Bean planted outside Dodongo Cavern"
      ],
      "steps": [
        "As a child, plant a bean in the soil near Dodongo Cavern.",
        "Return as an adult and climb to the large grown plant by the trail sign.",
        "Ride the plant route up the mountainside, changing to the next plant or ledge as needed.",
        "Continue past the rope bridge and climb the short rocky steps to the Heart Piece nook."
      ],
      "sources": [
        "c25"
      ],
      "note": "",
      "related": [
        "Magic Bean:5"
      ],
      "requires": [
        "Hyrule Field access",
        "Adult access"
      ],
      "crossTime": true,
      "timelineStages": [
        {
          "key": "plant",
          "age": "Child",
          "title": "Plant the bean: outside Dodongo Cavern",
          "requires": [
            "Hyrule Field access",
            "Event:mountain-gate",
            "Magic Bean"
          ],
          "evidence": "Magic Bean:5",
          "completeAlso": [
            "Magic Bean:5"
          ]
        },
        {
          "key": "collect",
          "age": "Adult",
          "title": "Mountain grown-bean route",
          "requires": [
            "Hyrule Field access",
            "Adult access"
          ]
        }
      ]
    },
    "Heart Piece:23": {
      "name": "Crater lava-island bean ride",
      "area": "Death Mountain Crater",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Bean planted at crater warp point",
        "Goron Tunic",
        "Bolero of Fire"
      ],
      "steps": [
        "As a child, warp to the crater and plant a bean beside the warp point.",
        "Return as an adult with protection from the heat.",
        "Ride the grown plant from the red-rock path, then transfer to the next plant or outcrop.",
        "Jump onto the small island surrounded by lava and collect the Heart Piece."
      ],
      "sources": [
        "c27"
      ],
      "note": "",
      "related": [
        "Magic Bean:6"
      ],
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Goron Tunic",
        "Bolero of Fire"
      ],
      "crossTime": true,
      "timelineStages": [
        {
          "key": "learn-warp",
          "age": "Adult",
          "title": "Learn Bolero of Fire",
          "requires": [
            "Adult access",
            "Goron Tunic",
            "Hookshot",
            "Ocarina"
          ],
          "evidence": "progress:33",
          "completeAlso": [
            "progress:33"
          ]
        },
        {
          "key": "plant",
          "age": "Child",
          "title": "Plant the bean: crater warp point",
          "requires": [
            "Magic Bean",
            "Bolero of Fire"
          ],
          "evidence": "Magic Bean:6",
          "completeAlso": [
            "Magic Bean:6"
          ]
        },
        {
          "key": "collect",
          "age": "Adult",
          "title": "Crater lava-island bean ride",
          "requires": [
            "Hyrule Field access",
            "Adult access",
            "Goron Tunic",
            "Bolero of Fire"
          ]
        }
      ]
    },
    "Heart Piece:24": {
      "name": "Fountain ice-floe ledge",
      "area": "Zora Fountain",
      "age": "Adult",
      "time": "Any time",
      "equipment": [],
      "steps": [
        "Enter frozen Zora Fountain from behind King Zora.",
        "Climb onto the line of ice blocks and look across to the higher slabs.",
        "Jump from block to block, using the taller ice to gain height rather than falling into the gaps.",
        "Follow the chain to the far ledge and pick up the Heart Piece."
      ],
      "sources": [
        "c28"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Zelda Lullaby",
        "Adult access"
      ]
    },
    "Heart Piece:25": {
      "name": "Fountain underwater cave",
      "area": "Zora Fountain",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Zora Tunic",
        "Iron Boots"
      ],
      "steps": [
        "Obtain the Zora Tunic and equip it before entering the deep water.",
        "Cross the ice toward the open water near the stone pillar.",
        "Dive or use Iron Boots to descend beneath the ice and enter the dark submerged cave.",
        "Follow the green rupees to the Heart Piece at the far end, then surface safely."
      ],
      "sources": [
        "c28"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Zelda Lullaby",
        "Adult access",
        "Zora Tunic",
        "Iron Boots"
      ]
    },
    "Heart Piece:26": {
      "name": "Frogs 1 of 2 — Song of Storms",
      "area": "Zora River",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Ocarina",
        "Song of Storms"
      ],
      "steps": [
        "Learn Song of Storms from the adult windmill musician, then return to Young Link.",
        "At the river’s frog log, stand on the Ocarina spot and bring out the instrument.",
        "Play Song of Storms and collect the Heart Piece after the frogs celebrate.",
        "The separate insect-catching reward is listed as Frogs 2 of 2."
      ],
      "sources": [
        "c31"
      ],
      "note": "Each frog reward has its own Heart Piece checkbox.",
      "start": "Zora River as Young Link: look for the northern side alcove about halfway along the river. The blue frog sits on a stump by the musical log.",
      "related": [
        "Heart Piece:27"
      ],
      "crossTime": true,
      "requires": [
        "Hyrule Field access",
        "Ocarina",
        "Song of Storms"
      ],
      "timelineStages": [
        {
          "key": "learn-storms",
          "age": "Adult",
          "title": "Learn Song of Storms",
          "requires": [
            "Adult access",
            "Ocarina"
          ],
          "evidence": "progress:20",
          "completeAlso": [
            "progress:20"
          ]
        },
        {
          "key": "collect",
          "age": "Child",
          "title": "Frogs 1 of 2 — Song of Storms",
          "requires": [
            "Hyrule Field access",
            "Ocarina",
            "Song of Storms"
          ]
        }
      ]
    },
    "Heart Piece:27": {
      "name": "Frogs 2 of 2 — insect-catching game",
      "area": "Zora River",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Ocarina",
        "Zelda Lullaby",
        "Saria Song",
        "Epona Song",
        "Sun Song",
        "Song of Time"
      ],
      "steps": [
        "Stand on the frog log as Young Link and bring out the Ocarina.",
        "Play Zelda’s Lullaby, Saria’s Song, Epona’s Song, Sun’s Song and Song of Time once each.",
        "Check that all five frogs are large, then accept their insect-catching game.",
        "Use the displayed note for the frog with an insect above it; retry if you miss.",
        "Finish the game and collect this separate Heart Piece."
      ],
      "sources": [
        "np-hearts"
      ],
      "note": "",
      "start": "Use the same northern river alcove and musical log as the Song of Storms reward. Both rewards are collected as Young Link.",
      "related": [
        "Heart Piece:26"
      ],
      "requires": [
        "Hyrule Field access",
        "Ocarina",
        "Zelda Lullaby",
        "Saria Song",
        "Epona Song",
        "Sun Song",
        "Song of Time"
      ]
    },
    "Heart Piece:28": {
      "name": "Treasure Box Shop final chest",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Night",
      "equipment": [
        "Lens of Truth",
        "Magic",
        "10 rupees"
      ],
      "steps": [
        "Enter the Treasure Box Shop in Castle Town’s back streets at night.",
        "Pay the fee and activate the Lens of Truth in the first two-chest room.",
        "Open the chest containing the key, unlock the next door, and repeat for all five rooms.",
        "Open the single final prize chest to receive the Heart Piece."
      ],
      "sources": [
        "c33"
      ],
      "note": "Refill magic before entering. A wrong chest ends the run, so inspect before opening.",
      "crossTime": true,
      "requires": [
        "Hyrule Field access",
        "Lens of Truth",
        "Magic"
      ],
      "timelineStages": [
        {
          "key": "learn-storms",
          "age": "Adult",
          "title": "Learn Song of Storms",
          "requires": [
            "Adult access",
            "Ocarina"
          ],
          "evidence": "progress:20",
          "completeAlso": [
            "progress:20"
          ]
        },
        {
          "key": "collect",
          "age": "Child",
          "title": "Treasure Box Shop final chest",
          "requires": [
            "Hyrule Field access",
            "Lens of Truth",
            "Magic"
          ]
        }
      ]
    },
    "Heart Piece:29": {
      "name": "Fortress high-terrace chest",
      "area": "Gerudo Fortress",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Longshot",
        "Scarecrow song activated",
        "Gerudo Card"
      ],
      "steps": [
        "Rescue the carpenters and climb the fortress’s brick-wall routes to the terrace above the walled yard.",
        "Look across toward the higher ledge and its Scarecrow summon point.",
        "Play your Scarecrow Song and Longshot to the scarecrow.",
        "Open the chest beside the torch for the Heart Piece."
      ],
      "sources": [
        "c35"
      ],
      "note": "",
      "crossTime": true,
      "requires": [
        {
          "any": [
            "Longshot",
            "Epona"
          ]
        },
        "Adult access",
        "Longshot",
        "Gerudo Card",
        "Side Quest:8"
      ],
      "timelineStages": [
        {
          "key": "teach",
          "age": "Child",
          "title": "Teach Bonooru the custom Scarecrow tune",
          "requires": [
            "Hyrule Field access",
            "Ocarina"
          ],
          "evidence": "Side Quest:7",
          "completeAlso": [
            "Side Quest:7"
          ]
        },
        {
          "key": "collect",
          "age": "Adult",
          "title": "Activate the Scarecrow tune, then Fortress high-terrace chest",
          "requires": [
            {
              "any": [
                "Longshot",
                "Epona"
              ]
            },
            "Adult access",
            "Longshot",
            "Gerudo Card",
            "Ocarina"
          ],
          "completeAlso": [
            "Side Quest:8"
          ]
        }
      ]
    },
    "Heart Piece:30": {
      "name": "Horseback archery Heart Piece",
      "area": "Gerudo Fortress",
      "age": "Adult",
      "time": "Day",
      "equipment": [
        "Epona",
        "Bow",
        "Gerudo Card",
        "30 rupees"
      ],
      "steps": [
        "Ride Epona to the archery attendant under the red awning.",
        "Pay for a round and prepare to aim as Epona automatically follows the course.",
        "Shoot the targets as you pass, aiming near their centers and saving arrows for the large targets.",
        "Finish with at least 750 points and speak to the attendant for the Heart Piece."
      ],
      "sources": [
        "r02"
      ],
      "note": "The route guide reports 750 points; published sources disagree. Use the attendant’s displayed Heart Piece target. The quiver is a separate prize.",
      "requires": [
        {
          "any": [
            "Longshot",
            "Epona"
          ]
        },
        "Adult access",
        "Epona",
        "Bow",
        "Gerudo Card"
      ]
    },
    "Heart Piece:31": {
      "name": "Colossus stone-arch bean ride",
      "area": "Desert Colossus",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Bean planted outside Spirit Temple"
      ],
      "steps": [
        "Plant a bean outside the Spirit Temple while in the child timeline.",
        "Return as an adult and step onto the grown plant.",
        "Stay aboard as it rises past the stone arch and the red-rock ridge.",
        "Jump off when level with the Heart Piece ledge and pick it up."
      ],
      "sources": [
        "c36"
      ],
      "note": "",
      "related": [
        "Magic Bean:9"
      ],
      "requires": [
        {
          "any": [
            "Requiem of Spirit",
            {
              "all": [
                "Gerudo Card",
                "Lens of Truth",
                "Magic",
                {
                  "any": [
                    "Longshot",
                    "Hover Boots"
                  ]
                }
              ]
            }
          ]
        },
        "Adult access"
      ],
      "crossTime": true,
      "timelineStages": [
        {
          "key": "learn-warp",
          "age": "Adult",
          "title": "Learn Requiem of Spirit",
          "requires": [
            "Adult access",
            "Ocarina",
            "Gerudo Card",
            "Lens of Truth",
            "Magic",
            {
              "any": [
                "Longshot",
                "Hover Boots"
              ]
            }
          ],
          "evidence": "progress:36",
          "completeAlso": [
            "progress:36"
          ]
        },
        {
          "key": "plant",
          "age": "Child",
          "title": "Plant the bean: Spirit Temple entrance",
          "requires": [
            "Requiem of Spirit",
            "Event:time-travel",
            "Magic Bean",
            "Requiem of Spirit"
          ],
          "evidence": "Magic Bean:9",
          "completeAlso": [
            "Magic Bean:9"
          ]
        },
        {
          "key": "collect",
          "age": "Adult",
          "title": "Colossus stone-arch bean ride",
          "requires": [
            {
              "any": [
                "Requiem of Spirit",
                {
                  "all": [
                    "Gerudo Card",
                    "Lens of Truth",
                    "Magic",
                    {
                      "any": [
                        "Longshot",
                        "Hover Boots"
                      ]
                    }
                  ]
                }
              ]
            },
            "Adult access"
          ]
        }
      ]
    },
    "Heart Piece:32": {
      "name": "Graveyard movable-headstone chest",
      "area": "Graveyard",
      "age": "Child",
      "time": "Night",
      "equipment": [],
      "steps": [
        "Go to the row of graves before the Royal Composers’ Tomb after dark.",
        "Face east and pull back the headstone at the far right of that row.",
        "Drop into the opening and follow the short underground route.",
        "Open the large chest for the Heart Piece, then use the exit to return to the Graveyard."
      ],
      "sources": [
        "ni-heart"
      ],
      "note": "This replaces the vague “crypt chest” route and removes the blanket Bomb Bag requirement. If the first grave is empty, check the other movable graves in the same right-hand row.",
      "requires": [
        "Hyrule Field access"
      ]
    },
    "Heart Piece:33": {
      "name": "Field moat-side Business Scrub",
      "area": "Hyrule Field",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bomb Bag",
        "100 rupees",
        "Adult Fairy Note read"
      ],
      "steps": [
        "Outside Castle Town, stand at the field-side drawbridge and search the grass to the right of its gate for cracked ground.",
        "Bomb that patch and enter the grotto to find the Business Scrub.",
        "If you do not know its password, return to this spot as an adult and read the Fairy Note on the tree opposite the hole.",
        "Return as a child, give the password from that note, and pay 100 rupees for the Heart Piece."
      ],
      "sources": [
        "nl-heart"
      ],
      "note": "This grotto is outside Castle Town. It is different from the castle-grounds Song of Storms tree where Talon slept.",
      "crossTime": true,
      "requires": [
        "Hyrule Field access",
        "Bomb Bag"
      ],
      "timelineStages": [
        {
          "key": "read-note",
          "age": "Adult",
          "title": "Read the Fairy Note by the castle-moat Scrub grotto",
          "requires": [
            "Adult access",
            "Hyrule Field access",
            "Bomb Bag"
          ]
        },
        {
          "key": "collect",
          "age": "Child",
          "title": "Return, give the password and buy the Heart Piece",
          "requires": [
            "Hyrule Field access",
            "Bomb Bag"
          ]
        }
      ]
    },
    "Heart Piece:34": {
      "name": "Western field chest by Gerudo entrance",
      "area": "Hyrule Field",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Adult Fairy Note read"
      ],
      "steps": [
        "As an adult, go to the western edge of Hyrule Field beside the entrance toward Gerudo Valley and the desert.",
        "Find the small chest in the shaded recess beneath the canyon wall; it appears already opened in this timeline.",
        "Read the nearby Fairy Note, then return to the Temple of Time and become a child.",
        "Return to that same western recess and open the chest for the Heart Piece."
      ],
      "sources": [
        "nl-heart"
      ],
      "note": "The adult visit explains the unlocked chest. This is by the Gerudo-side field exit, not beside the Castle Town moat.",
      "crossTime": true,
      "requires": [
        "Hyrule Field access"
      ],
      "timelineStages": [
        {
          "key": "read-note",
          "age": "Adult",
          "title": "Read the Fairy Note beside the western field chest",
          "requires": [
            "Adult access",
            "Hyrule Field access"
          ]
        },
        {
          "key": "collect",
          "age": "Child",
          "title": "Return to the chest and collect the Heart Piece",
          "requires": [
            "Hyrule Field access"
          ]
        }
      ]
    },
    "Heart Piece:35": {
      "name": "Crater Business Scrub purchase",
      "area": "Death Mountain Crater",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Deku Shield",
        "100 rupees",
        "Full health"
      ],
      "steps": [
        "Enter the crater from the summit as a child with full health and at least 100 rupees.",
        "Follow the southern cliff side near the net you can climb down.",
        "Raise the Deku Shield to reflect the Business Scrub’s shot back at it.",
        "Speak to the surrendered Scrub and buy the Heart Piece, then leave before the heat timer expires."
      ],
      "sources": [
        "r02"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Event:mountain-gate",
        "Deku Shield"
      ]
    },
    "Bottle:0": {
      "name": "Potion Shop escaped-bug bottle",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Day",
      "equipment": [],
      "steps": [
        "From the town fountain plaza, find the Potion Shop and speak to its distressed shopkeeper.",
        "Accept his request to catch the escaped bug; he lends you the empty bottle for the task.",
        "Assign that bottle to your item slot and follow the bug around the shop floor.",
        "Corner it against a wall or the pots, stand close, and swing the bottle to catch it.",
        "Speak to the shopkeeper again. Keep the bottle containing his Red Potion reward; it becomes empty after use."
      ],
      "sources": [
        "r03"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access"
      ]
    },
    "Bottle:1": {
      "name": "Cucco Lady’s seven-Cucco bottle",
      "area": "Kakariko",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "Cucco"
      ],
      "steps": [
        "Speak to the Cucco Lady beside the pen near the village entrance.",
        "Return the birds by the entrance, construction site, brick pile, crate near the low houses, and stairs toward Death Mountain.",
        "For the enclosed yard, carry a bird to the windmill steps and glide over the fence; throw both birds toward the village.",
        "Stay inside that yard and climb the ladder behind the windmill to the final upper bird. Use it for the rooftop Heart Piece first if needed.",
        "Carry or throw all seven birds into the pen, then speak to the Cucco Lady for the bottle."
      ],
      "sources": [
        "v91"
      ],
      "note": "All seven are outdoors in Kakariko. If a bird is on the brick pile, glide over using another Cucco or knock it down with the Slingshot.",
      "requires": [
        "Hyrule Field access"
      ]
    },
    "Bottle:2": {
      "name": "Talon’s Super Cucco bottle",
      "area": "Lon Lon Ranch",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "Talon returned from Hyrule Castle"
      ],
      "steps": [
        "Wake Talon at Hyrule Castle and let him return to the ranch.",
        "Enter the ranch house during the day and speak to him among the chickens.",
        "Accept the Super Cucco challenge and watch where his three special birds land.",
        "During the 30-second timer, pick up birds until he confirms all three special ones are found; each correct bird reduces the remaining count.",
        "Finish his dialogue to receive Lon Lon Milk in a bottle. Drink its servings later to free the bottle."
      ],
      "sources": [
        "c08"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Event:talon-awake"
      ]
    },
    "Bottle:3": {
      "name": "Ruto’s Letter bottle",
      "area": "Lake Hylia",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Silver Scale"
      ],
      "steps": [
        "Win the Silver Scale from the diving game in Zora Domain.",
        "Use the underwater passage from the Domain pool to Lake Hylia, or approach the lake by land.",
        "Find the wooden post in the water near the passage and dive to the visible bottle below it.",
        "Collect the bottle containing Ruto’s Letter and return to King Zora.",
        "Show him the letter while standing on his speaking platform; after he moves aside, the bottle is available for other contents."
      ],
      "sources": [
        "c16"
      ],
      "note": "The letter is a story item inside the bottle. Merely buying or catching a fish does not clear the letter before you show it to King Zora.",
      "requires": [
        "Hyrule Field access",
        "Silver Scale"
      ]
    },
    "Bottle:4": {
      "name": "Poe Collector’s fifth bottle",
      "area": "Hyrule Castle Town",
      "age": "Adult",
      "time": "Dusk or night",
      "equipment": [
        "Epona",
        "Bow",
        "Empty bottle"
      ],
      "steps": [
        "Ride Epona across Hyrule Field and look for purple Poe flames or lantern-marked obstacles.",
        "Ride into or over a marked spot to make a Big Poe appear, then shoot it with the Bow before it escapes.",
        "Dismount and bottle the glowing spirit left behind; a free bottle is required for every spirit you carry.",
        "Sell the bottled Big Poes to the Poe Collector in Castle Town, checking his points total after each batch.",
        "Reach 500 points from five Big Poes and claim the extra empty bottle."
      ],
      "sources": [
        "c24"
      ],
      "note": "Regular Poes do not substitute for the Big Poe point requirement. The 1,000-point prize is a separate reward.",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Epona",
        "Bow",
        "Bottle"
      ]
    },
    "Mask:0": {
      "name": "Keaton Mask",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "Mask access"
      ],
      "steps": [
        "Visit the Happy Mask Shop during daylight after the Death Mountain guard mentions it.",
        "Borrow the Keaton Mask and wear it to the guard at the mountain gate in Kakariko.",
        "Agree to sell it to him for 15 rupees.",
        "Return to the shop and repay its 10-rupee price to unlock the next loan."
      ],
      "sources": [
        "r07"
      ],
      "note": "",
      "requires": [
        "Mask access"
      ]
    },
    "Mask:1": {
      "name": "Skull Mask",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "Keaton Mask sold",
        "Saria Song"
      ],
      "steps": [
        "Repay the Keaton Mask and borrow the Skull Mask from the Happy Mask Shop.",
        "Before selling it, use it at the Lost Woods Forest Stage if you still need the 30-stick upgrade.",
        "From the Lost Woods entrance, turn left and stand before the lone Skull Kid; play Saria’s Song if he is not yet friendly.",
        "Wear the mask and sell it for 10 rupees, then return and repay the shop’s 20-rupee price."
      ],
      "sources": [
        "c11"
      ],
      "note": "Selling and borrowing are separate steps. If you sell before using the Forest Stage, return to the shop to borrow it again.",
      "requires": [
        "Mask:0",
        "Saria Song"
      ]
    },
    "Mask:2": {
      "name": "Spooky Mask",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "Skull Mask sold"
      ],
      "steps": [
        "Repay the Skull Mask debt and borrow the Spooky Mask.",
        "Travel through Kakariko to the Graveyard during the day, when the gravekeeper-playing boy is outside.",
        "Wear the mask and speak to him to sell it for 50 rupees.",
        "Return to the Happy Mask Shop and repay 30 rupees to unlock the Bunny Hood."
      ],
      "sources": [
        "r07"
      ],
      "note": "",
      "requires": [
        "Mask:1"
      ]
    },
    "Mask:3": {
      "name": "Bunny Hood",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Day, then dusk",
      "equipment": [
        "Spooky Mask sold",
        "Running Man appeared"
      ],
      "steps": [
        "Repay the Spooky Mask and borrow the Bunny Hood.",
        "Search Hyrule Field’s road circuit around Lon Lon Ranch for the Running Man; the main-story Spiritual Stones must be collected for this stage.",
        "Follow him until he stops or can be spoken to, keeping the hood equipped.",
        "Sell him the hood, then return to the shop and repay its 50-rupee price."
      ],
      "sources": [
        "r07"
      ],
      "note": "Do not confuse the runner with the adult race challenge. His payment and stopping behavior differ from old-version descriptions; use the offer shown in your game.",
      "requires": [
        "Mask:2",
        "Event:jabu"
      ]
    },
    "Mask:4": {
      "name": "Mask of Truth",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "All four mask sales repaid"
      ],
      "steps": [
        "Complete the four mask sales in order and repay each mask’s debt.",
        "Return to the Happy Mask Shop in daylight and settle the Bunny Hood payment.",
        "Borrow the Mask of Truth from the special reserve.",
        "Wear it for Gossip Stones and the Forest Stage nut upgrade."
      ],
      "sources": [
        "r16"
      ],
      "note": "",
      "requires": [
        "Mask:3"
      ]
    },
    "Mask:5": {
      "name": "Goron Mask",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "Mask of Truth unlocked"
      ],
      "steps": [
        "Finish all four mask sales and repay the final debt.",
        "Return to the Happy Mask Shop during daylight.",
        "Choose the Goron Mask from the additional masks now available, exchanging your current loan if asked.",
        "Keep it equipped for character reactions; no buyer or additional sale is required."
      ],
      "sources": [
        "r16"
      ],
      "note": "",
      "requires": [
        "Mask:3"
      ]
    },
    "Mask:6": {
      "name": "Zora Mask",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "Mask of Truth unlocked"
      ],
      "steps": [
        "Complete the Happy Mask Shop trading sequence and pay the Bunny Hood debt.",
        "Visit the shop in the daytime and inspect its expanded selection.",
        "Borrow the Zora Mask, returning your current mask if the shopkeeper asks.",
        "Use it for NPC reactions; this is a borrowed bonus mask, not a new trade destination."
      ],
      "sources": [
        "r16"
      ],
      "note": "",
      "requires": [
        "Mask:3"
      ]
    },
    "Mask:7": {
      "name": "Gerudo Mask",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "Mask of Truth unlocked"
      ],
      "steps": [
        "Unlock the Mask of Truth by completing and repaying the four-mask sequence.",
        "Return to the Happy Mask Shop while it is open.",
        "Choose the Gerudo Mask from the unlocked bonus masks.",
        "Keep it as your current loan or exchange it later; there is no separate sale needed to complete this entry."
      ],
      "sources": [
        "r16"
      ],
      "note": "",
      "requires": [
        "Mask:3"
      ]
    },
    "Upgrade:0": {
      "name": "Lost Woods target — seed-bag upgrade",
      "area": "Lost Woods",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Slingshot"
      ],
      "steps": [
        "From the Lost Woods entrance, turn right to the clearing with the suspended target.",
        "Climb onto the stump facing the target and aim at its center.",
        "Hit the center five times, following the target’s score feedback.",
        "Speak to the Deku Scrub who appears and accept the seed-bag upgrade."
      ],
      "sources": [
        "v90"
      ],
      "note": "Your earlier checkmark stays with this Lost Woods activity. The two venue prizes advance your capacity: the first upgrade is 40 seeds and the second is 50.",
      "requires": [
        "Slingshot"
      ]
    },
    "Upgrade:1": {
      "name": "Town gallery — seed-bag upgrade",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "Slingshot",
        "10 rupees"
      ],
      "steps": [
        "Enter Castle Town’s Shooting Gallery during daylight.",
        "Pay the fee and listen to the ten-target rules; the remake supplies 15 shots.",
        "Use the Slingshot to hit all ten targets before the round ends.",
        "Speak to the operator and accept the next seed-bag upgrade."
      ],
      "sources": [
        "c04"
      ],
      "note": "Your earlier checkmark stays with the town gallery. The capacity awarded depends on whether you already won the Lost Woods target game; complete both venues.",
      "requires": [
        "Hyrule Field access",
        "Slingshot"
      ]
    },
    "Upgrade:2": {
      "name": "Bigger Quiver — 40 arrows",
      "area": "Kakariko",
      "age": "Adult",
      "time": "Day",
      "equipment": [
        "Bow",
        "30 rupees"
      ],
      "steps": [
        "Find the Shooting Gallery that has moved to Kakariko in the adult timeline.",
        "Pay for the regular round and ready the Bow.",
        "Break all ten targets using the 15 supplied arrows; five misses still leave enough ammunition.",
        "Finish the operator’s dialogue to receive the 40-arrow quiver."
      ],
      "sources": [
        "r04"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Bow"
      ]
    },
    "Upgrade:3": {
      "name": "Biggest Quiver — 50 arrows",
      "area": "Gerudo Fortress",
      "age": "Adult",
      "time": "Day",
      "equipment": [
        "Epona",
        "Bow",
        "Gerudo Card",
        "30 rupees"
      ],
      "steps": [
        "Ride Epona to the horseback archery attendant under the red awning.",
        "Pay for a round and shoot from horseback as the course carries you past the targets.",
        "Aim for center hits and the large targets to reach the higher prize score.",
        "Finish the round and collect the Biggest Quiver from the attendant."
      ],
      "sources": [
        "c36"
      ],
      "note": "Sources disagree on archery thresholds: this remake walkthrough records 1,400, while older guides use 1,500. Use the attendant’s displayed target.",
      "requires": [
        {
          "any": [
            "Longshot",
            "Epona"
          ]
        },
        "Adult access",
        "Bow",
        "Epona",
        "Gerudo Card",
        "Heart Piece:30"
      ]
    },
    "Upgrade:4": {
      "name": "Bigger Bomb Bag — 30 bombs",
      "area": "Goron City",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bomb Bag"
      ],
      "steps": [
        "Enter Goron City as a child and find the large rolling Goron on the middle tunnel circuit.",
        "Stand near the tunnel sign and watch the direction he rolls.",
        "Place or throw a bomb so it explodes as he reaches it; stay out of the blast yourself.",
        "Speak to him once stopped and accept the 30-bomb bag."
      ],
      "sources": [
        "r04"
      ],
      "note": "This is the large child-timeline roller. The small adult-timeline Goron gives the Goron Tunic instead.",
      "requires": [
        "Hyrule Field access",
        "Event:mountain-gate",
        "Bomb Bag"
      ]
    },
    "Upgrade:5": {
      "name": "Biggest Bomb Bag — 40 bombs",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "Bombchu Bowling open",
        "Rupees"
      ],
      "steps": [
        "Enter Castle Town’s Bombchu Bowling Alley and wake the attendant.",
        "Pay for a round, then guide Bombchus into the targets at all three stages.",
        "Win the initial Bombchu prize and play the next prize round.",
        "Clear that round and accept the Biggest Bomb Bag, increasing capacity to 40."
      ],
      "sources": [
        "c15"
      ],
      "note": "The remake route uses 10 rupees per play. Check the offered prize before replaying so you do not confuse this with the later Heart Piece.",
      "requires": [
        "Hyrule Field access",
        "Equipment:7",
        "Event:dodongo"
      ]
    },
    "Upgrade:6": {
      "name": "Deku Stick capacity — 20",
      "area": "Lost Woods",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Deku Shield",
        "40 rupees"
      ],
      "steps": [
        "From the Lost Woods entrance, go left to the lone Skull Kid’s room, then left again.",
        "Drop to the clearing below the bridge overlook and approach the Business Scrub.",
        "Raise the Deku Shield to reflect its shot, then speak to it after it surrenders.",
        "Pay 40 rupees for the stick-capacity upgrade."
      ],
      "sources": [
        "v90"
      ],
      "note": "",
      "requires": [
        "Deku Shield"
      ]
    },
    "Upgrade:7": {
      "name": "Deku Stick capacity — 30",
      "area": "Lost Woods",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Skull Mask",
        "Earlier stick upgrade"
      ],
      "steps": [
        "From the Lost Woods entrance take right, left, right, left, left to the two-Scrub clearing.",
        "Find the concealed Forest Stage hole in the grass and drop inside.",
        "Stand on the stage wearing the Skull Mask and wait for the Scrubs’ response.",
        "Speak to the large Scrub when it appears and receive the next stick-capacity upgrade."
      ],
      "sources": [
        "p03"
      ],
      "note": "Keep or reborrow the Skull Mask until this is finished. With the earlier upgrade, the new capacity is 30 sticks.",
      "requires": [
        "Mask:1",
        "Upgrade:6"
      ]
    },
    "Upgrade:8": {
      "name": "Deku Nut capacity — 30",
      "area": "Lost Woods",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bomb Bag",
        "Deku Shield",
        "40 rupees"
      ],
      "steps": [
        "Reach the Lost Woods room with the cracked boulder on the route toward the Sacred Meadow.",
        "Bomb the boulder to reveal the grotto entrance and drop inside.",
        "Reflect the Business Scrub’s attack with your shield, then speak to it.",
        "Buy the 40-rupee nut-capacity upgrade; with the basic bag this raises the limit to 30."
      ],
      "sources": [
        "c18"
      ],
      "note": "",
      "requires": [
        "Deku Shield",
        "Bomb Bag"
      ]
    },
    "Upgrade:9": {
      "name": "Deku Nut capacity — 40",
      "area": "Lost Woods",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Mask of Truth",
        "Earlier nut upgrade"
      ],
      "steps": [
        "Return to the two-Scrub clearing by taking right, left, right, left, left from the woods entrance.",
        "Drop into the Forest Stage hole hidden in its grass.",
        "Stand before the Scrubs wearing the Mask of Truth and allow their reaction to finish.",
        "Speak to the large Scrub to receive the remaining nut-capacity upgrade."
      ],
      "sources": [
        "r04"
      ],
      "note": "This is the Forest Stage reward, not a purchase from the ordinary seed or potion sellers. With the first upgrade already collected, it gives a 40-nut capacity.",
      "requires": [
        "Mask:4",
        "Upgrade:8"
      ]
    },
    "Upgrade:10": {
      "name": "Adult’s Wallet — 500 rupees",
      "area": "Kakariko",
      "age": "Both",
      "time": "Any time",
      "equipment": [
        "10 Gold Skulltula tokens"
      ],
      "steps": [
        "Collect ten distinct Gold Skulltula tokens in the game.",
        "Enter the House of Skulltula in Kakariko, recognizable by its cursed family inside.",
        "Speak to the Cursed Rich Man and finish the 10-token reward conversation.",
        "Accept the Adult’s Wallet and check the new 500-rupee limit in your inventory."
      ],
      "sources": [
        "c06"
      ],
      "note": "",
      "requires": [
        "10 Gold Skulltula tokens"
      ]
    },
    "Upgrade:11": {
      "name": "Giant’s Wallet — 1,000 rupees",
      "area": "Kakariko",
      "age": "Both",
      "time": "Any time",
      "equipment": [
        "30 Gold Skulltula tokens"
      ],
      "steps": [
        "Collect 30 distinct Gold Skulltula tokens.",
        "Return to the House of Skulltula in Kakariko.",
        "Speak to the Cursed Rich Man, claiming any earlier unclaimed milestone first.",
        "Accept the Giant’s Wallet, which raises the remake’s limit to 1,000 rupees."
      ],
      "sources": [
        "c18"
      ],
      "note": "",
      "requires": [
        "30 Gold Skulltula tokens",
        "Equipment:10"
      ]
    },
    "Upgrade:12": {
      "name": "Silver Scale",
      "area": "Zora Domain",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Access to King Zora’s upper level"
      ],
      "steps": [
        "Climb through Zora Domain to the diving instructor above the main pool.",
        "Accept the diving game and watch the five glowing pickups fall into the water.",
        "Jump off the ledge, then dive and collect all five before the displayed timer expires.",
        "Return to the instructor if needed and accept the Silver Scale for deeper dives."
      ],
      "sources": [
        "g09"
      ],
      "note": "Current remake guides disagree on the timer length. Use the countdown and fee, if any, displayed by your instructor.",
      "requires": [
        "Hyrule Field access",
        "Zelda Lullaby"
      ]
    },
    "Upgrade:13": {
      "name": "Golden Scale",
      "area": "Lake Hylia",
      "age": "Adult",
      "time": "Day",
      "equipment": [
        "Normal fishing lure",
        "30 rupees"
      ],
      "steps": [
        "Enter the adult Fishing Pond hut and pay for a rod.",
        "Keep the ordinary lure equipped; the sinking lure disqualifies the reward.",
        "Land a fish over the pond owner’s stated prize threshold and show it to him at the counter.",
        "End the session and claim the Golden Scale, then use it for the laboratory diving prize."
      ],
      "sources": [
        "rk-scale"
      ],
      "note": "The remake walkthrough records a threshold over 60 cm. A larger catch on the banned lure still does not qualify.",
      "requires": [
        "Hyrule Field access",
        "Adult access"
      ]
    },
    "Upgrade:14": {
      "name": "Goron Bracelet",
      "area": "Goron City",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Ocarina",
        "Zelda Lullaby",
        "Saria Song"
      ],
      "steps": [
        "Descend to the bottom of Goron City and stand on the marked mat before Darunia’s sealed door.",
        "Play Zelda’s Lullaby to open the door.",
        "Stand near Darunia and play Saria’s Song rather than repeating the Lullaby.",
        "Finish his dance and conversation to receive the Goron Bracelet; you can now lift Bomb Flowers."
      ],
      "sources": [
        "c12"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Event:mountain-gate",
        "Ocarina",
        "Zelda Lullaby",
        "Saria Song"
      ]
    },
    "Upgrade:15": {
      "name": "Silver Gauntlets",
      "area": "Spirit Temple",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Requiem of Spirit",
        "Boomerang",
        "Bomb Bag"
      ],
      "steps": [
        "Visit the Spirit Temple as an adult to learn Requiem of Spirit, then return to the child timeline.",
        "Warp back, crawl through the child-only opening, and accept Nabooru’s request.",
        "Complete the child-side switches and silver-collectible rooms to reach the Iron Knuckle.",
        "Defeat it, go through the newly opened exit onto the Colossus exterior, and open the large chest.",
        "Collect the Silver Gauntlets; their lifting power is used when you return as an adult."
      ],
      "sources": [
        "c37"
      ],
      "note": "",
      "crossTime": true,
      "requires": [
        "Requiem of Spirit",
        "Event:time-travel",
        "Requiem of Spirit",
        "Boomerang",
        "Bomb Bag"
      ],
      "timelineStages": [
        {
          "key": "learn-warp",
          "age": "Adult",
          "title": "Learn Requiem of Spirit",
          "requires": [
            "Adult access",
            "Ocarina",
            "Gerudo Card",
            "Lens of Truth",
            "Magic",
            {
              "any": [
                "Longshot",
                "Hover Boots"
              ]
            }
          ],
          "evidence": "progress:36",
          "completeAlso": [
            "progress:36"
          ]
        },
        {
          "key": "child-task",
          "age": "Child",
          "title": "Silver Gauntlets",
          "requires": [
            "Requiem of Spirit",
            "Event:time-travel",
            "Requiem of Spirit",
            "Boomerang",
            "Bomb Bag"
          ]
        }
      ]
    },
    "Upgrade:16": {
      "name": "Golden Gauntlets",
      "area": "Ganon Castle",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Access to Ganon Castle",
        "Bow",
        "Fire Arrows",
        "Lens of Truth",
        "Longshot"
      ],
      "steps": [
        "Enter Ganon Castle after the sages create its bridge.",
        "Choose the Shadow Trial door and reveal its hidden paths with the Lens of Truth.",
        "Light the trial’s torch to create temporary platforms, then use them and the Longshot to reach its switches.",
        "Activate the floor switch that makes the large chest appear and reach that chest safely.",
        "Open it for the Golden Gauntlets before finishing the trial’s barrier."
      ],
      "sources": [
        "c40"
      ],
      "note": "These lift the enormous dark pillars; the Silver Gauntlets are not strong enough for those.",
      "requires": [
        "Adult access",
        "Event:ganon-bridge",
        "Bow",
        "Lens of Truth",
        {
          "any": [
            "Hookshot",
            "Hover Boots"
          ]
        }
      ]
    },
    "Great Fairy:0": {
      "name": "Summit Fairy — magic and Din’s Fire",
      "area": "Death Mountain Summit",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bomb Bag",
        "Zelda Lullaby",
        "25 rupees"
      ],
      "steps": [
        "Climb Death Mountain Trail from Goron City toward the summit, bombing cracked rocks that block the route.",
        "At the summit, find the fountain cave near the owl and enter its lit corridor.",
        "Stand on the royal crest before the fountain and play Zelda’s Lullaby.",
        "Pay the requested offering and finish the scene to obtain the magic meter and Din’s Fire."
      ],
      "sources": [
        "c14"
      ],
      "note": "The remake gives Din’s Fire at this summit visit. This entry is for the first magic upgrade, not the later doubled meter.",
      "requires": [
        "Hyrule Field access",
        "Event:mountain-gate",
        "Bomb Bag",
        "Zelda Lullaby"
      ]
    },
    "Great Fairy:1": {
      "name": "Castle Fairy — enhanced Spin Attack",
      "area": "Hyrule Castle",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bomb Bag",
        "Zelda Lullaby",
        "Magic",
        "50 rupees"
      ],
      "steps": [
        "Enter the Hyrule Castle grounds from Castle Town. Pass the opening gatehouse and follow the path until it bends left.",
        "At that bend, inspect the outside corner to your right for the large bombable rock. You do not need to go all the way to Talon’s moat corner for this fountain.",
        "Bomb the rock, move back from the blast, and crawl into the newly exposed passage.",
        "Follow the corridor to the fountain, stand on the royal crest, and play Zelda’s Lullaby.",
        "Pay the quoted offering and finish the fairy scene to receive the improved Spin Attack."
      ],
      "sources": [
        "nl-fairy"
      ],
      "note": "The summit fairy gives Din’s Fire; this visit gives the Spin Attack.",
      "requires": [
        "Hyrule Field access",
        "Bomb Bag",
        "Zelda Lullaby",
        "Magic"
      ]
    },
    "Great Fairy:2": {
      "name": "Fountain Fairy — Farore’s Wind",
      "area": "Zora Fountain",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bomb Bag",
        "Zelda Lullaby",
        "Magic",
        "100 rupees"
      ],
      "steps": [
        "Go behind King Zora into Zora Fountain and follow its southern edge toward the lone tree.",
        "Continue to the dark cracked rock face on the Great Fairy side of the area.",
        "Bomb the cracked section and follow the lit passage to the fountain.",
        "Play Zelda’s Lullaby on the crest, pay the quoted offering, and receive Farore’s Wind."
      ],
      "sources": [
        "g10"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Zelda Lullaby",
        "Event:king-moved",
        "Bomb Bag",
        "Zelda Lullaby",
        "Magic"
      ]
    },
    "Great Fairy:3": {
      "name": "Crater Fairy — doubled magic",
      "area": "Death Mountain Crater",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hammer",
        "Hookshot",
        "Zelda Lullaby",
        "Goron Tunic",
        "200 rupees"
      ],
      "steps": [
        "From the crater’s red warp pedestal, cross the narrow bridge and Hookshot to the chained block across the gap.",
        "Follow the tunnel toward the Great Fairy route.",
        "Smash the blocking rocks with the Hammer and continue past the enemies to the pale-blue fountain hall.",
        "Play Zelda’s Lullaby on the crest and pay the offering to double your magic meter."
      ],
      "sources": [
        "c27"
      ],
      "note": "",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Hammer",
        "Hookshot",
        "Goron Tunic",
        "Zelda Lullaby",
        "Magic"
      ]
    },
    "Great Fairy:4": {
      "name": "Colossus Fairy — Nayru’s Love",
      "area": "Desert Colossus",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Bomb Bag",
        "Zelda Lullaby",
        "Magic",
        "300 rupees"
      ],
      "steps": [
        "Warp to Desert Colossus as an adult, or enter from the wasteland after earning the Gerudo Pass.",
        "From the Spirit Temple forecourt, search the northern cliff face for the visibly cracked wall; this fountain is not inside the temple.",
        "Place a bomb against that wall and stand back. Enter the cave exposed by the explosion.",
        "Follow the passage to the fountain, play Zelda’s Lullaby on the crest, and pay the offering for Nayru’s Love."
      ],
      "sources": [
        "nl-fairy"
      ],
      "note": "The remake-specific location guide describes a bombable northern wall. This replaces the earlier instruction to use the Hammer.",
      "requires": [
        {
          "any": [
            "Requiem of Spirit",
            {
              "all": [
                "Gerudo Card",
                "Lens of Truth",
                "Magic",
                {
                  "any": [
                    "Longshot",
                    "Hover Boots"
                  ]
                }
              ]
            }
          ]
        },
        "Adult access",
        "Bomb Bag",
        "Zelda Lullaby",
        "Magic",
        {
          "wallet": 300
        }
      ]
    },
    "Great Fairy:5": {
      "name": "Castle Fairy — halved damage",
      "area": "Ganon Castle",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Golden Gauntlets",
        "Zelda Lullaby",
        "500 rupees"
      ],
      "steps": [
        "Collect the Golden Gauntlets inside Ganon Castle’s Shadow Trial, then leave the castle by its bridge.",
        "After crossing back outside, turn left and follow the path to the dead end with the enormous dark pillar.",
        "Use the Golden Gauntlets to lift and throw the pillar, revealing the fairy entrance.",
        "Enter, play Zelda’s Lullaby on the royal crest, and pay the offering to receive halved incoming damage."
      ],
      "sources": [
        "c40"
      ],
      "note": "The 500-rupee offering requires enough wallet capacity. The exact route is outside the castle, to the left after its bridge.",
      "requires": [
        "Adult access",
        "Event:ganon-bridge",
        "Golden Gauntlets",
        "Zelda Lullaby",
        "Magic",
        {
          "wallet": 500
        }
      ]
    },
    "Trade Sequence:0": {
      "name": "Pocket Egg",
      "area": "Kakariko",
      "age": "Adult",
      "time": "Day",
      "equipment": [],
      "steps": [
        "Speak to the Cucco Lady at her familiar pen in adult Kakariko.",
        "Ask about her rare pocket-cucco egg and accept the care request.",
        "Check that the Pocket Egg appears in your trade-item slot.",
        "Keep it until dawn; your next task is hatching it and finding the sleeping Talon."
      ],
      "sources": [
        "r08"
      ],
      "note": "",
      "requires": [
        "Adult access"
      ]
    },
    "Trade Sequence:1": {
      "name": "Pocket Cucco",
      "area": "Kakariko",
      "age": "Adult",
      "time": "Dawn",
      "equipment": [
        "Pocket Egg"
      ],
      "steps": [
        "Carry the Pocket Egg outdoors and let night change to morning; use Sun’s Song if you know it.",
        "Check the trade slot after dawn for the newly hatched Pocket Cucco.",
        "Find Talon sleeping in the small house in Kakariko.",
        "Use the Pocket Cucco in front of his bed to wake him, then let his conversation finish."
      ],
      "sources": [
        "r08"
      ],
      "note": "If Talon is no longer in the village house after the ranch story, check his returned location at Lon Lon Ranch. Waking him does not itself award Cojiro.",
      "requires": [
        "Adult access",
        "Trade Sequence:0"
      ]
    },
    "Trade Sequence:2": {
      "name": "Cojiro",
      "area": "Kakariko",
      "age": "Adult",
      "time": "Day",
      "equipment": [
        "Pocket Cucco after waking Talon"
      ],
      "steps": [
        "Wake Talon with the hatched Pocket Cucco.",
        "Return to the Cucco Lady beside the village pen.",
        "Show her the now-happy Pocket Cucco from your trade slot.",
        "Accept Cojiro, the blue Cucco, and listen to her hint about her brother in the Lost Woods."
      ],
      "sources": [
        "r08"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Trade Sequence:1"
      ]
    },
    "Trade Sequence:3": {
      "name": "Odd Mushroom",
      "area": "Lost Woods",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Cojiro",
        "Epona recommended"
      ],
      "steps": [
        "From Kokiri Forest, enter the Lost Woods and turn left to the lone-stump clearing.",
        "Find the slumped craftsman’s son beneath the tree, at the place used for the child Skull Kid.",
        "Show him Cojiro and accept the Odd Mushroom.",
        "Leave immediately for Granny’s Potion Shop in Kakariko; the spoilage countdown begins as soon as you accept it."
      ],
      "sources": [
        "p03"
      ],
      "note": "The remake route records a four-minute mushroom timer. Watch the countdown in your game and avoid detours or warp-song shortcuts that can spoil a timed delivery.",
      "requires": [
        "Adult access",
        "Trade Sequence:2"
      ]
    },
    "Trade Sequence:4": {
      "name": "Odd Poultice / Odd Potion",
      "area": "Kakariko",
      "age": "Adult",
      "time": "Day",
      "equipment": [
        "Odd Mushroom before timer expires"
      ],
      "steps": [
        "Ride from the Lost Woods across Hyrule Field to Kakariko before the mushroom spoils.",
        "Go to Granny’s rear Potion Shop, reached through the ordinary Potion Shop and its back-yard route.",
        "Show Granny the mushroom and agree to let her prepare the medicine.",
        "Wait for the brewing dialogue and take the Odd Poultice before returning to the woods."
      ],
      "sources": [
        "p02"
      ],
      "note": "The remake calls this medicine “Odd Poultice”; the previous tracker label “Odd Potion” refers to the same trade step.",
      "requires": [
        "Adult access",
        "Trade Sequence:3"
      ]
    },
    "Trade Sequence:5": {
      "name": "Poacher’s Saw",
      "area": "Lost Woods",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Odd Poultice"
      ],
      "steps": [
        "Return to the same Lost Woods clearing where you handed Cojiro to the craftsman’s son.",
        "Find Fado, who now stands in his place.",
        "Show Fado the medicine and finish the explanation about the missing man.",
        "Exchange the poultice for the Poacher’s Saw, then head toward the carpenter camp in Gerudo Valley."
      ],
      "sources": [
        "r14"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Trade Sequence:4"
      ]
    },
    "Trade Sequence:6": {
      "name": "Broken Goron Sword",
      "area": "Gerudo Valley",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Poacher’s Saw",
        "Longshot or Epona",
        "Hammer"
      ],
      "steps": [
        "Cross the broken main bridge in Gerudo Valley using Epona or the Longshot.",
        "Reach the carpenter camp on the far side and clear the dark breakable rocks if necessary.",
        "Speak to the Master Craftsman standing near his tent.",
        "Show him the saw and accept the Broken Goron Sword, which he directs you to Biggoron to repair."
      ],
      "sources": [
        "v-trade"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Trade Sequence:5",
        {
          "any": [
            "Longshot",
            "Epona"
          ]
        },
        "Hammer"
      ]
    },
    "Trade Sequence:7": {
      "name": "Biggoron’s Prescription",
      "area": "Death Mountain Summit",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Broken Goron Sword"
      ],
      "steps": [
        "Climb Death Mountain Trail to its summit, or warp into the crater and take the exit back toward the summit.",
        "Approach Biggoron, the enormous Goron beside the mountain wall.",
        "Show him the Broken Goron Sword and hear his complaint about his eyes.",
        "Accept his Prescription and take it to King Zora; this prescription itself is not the timed medicine."
      ],
      "sources": [
        "v-trade"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Trade Sequence:6"
      ]
    },
    "Trade Sequence:8": {
      "name": "Eyeball Frog",
      "area": "Zora Domain",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Prescription",
        "King Zora thawed",
        "Epona recommended"
      ],
      "steps": [
        "Thaw King Zora with Blue Fire if he is still trapped in red ice.",
        "Stand on his speaking platform and show him Biggoron’s Prescription.",
        "Accept the Eyeball Frog, then leave immediately for the Lakeside Laboratory.",
        "Use the river route down to Hyrule Field, call Epona, and ride to the laboratory without stopping."
      ],
      "sources": [
        "r14"
      ],
      "note": "The remake walkthrough records a 2:30 frog timer. Do not take a warp-song detour; use the on-screen countdown as the authority.",
      "requires": [
        "Adult access",
        "Trade Sequence:7",
        "Event:king-thawed"
      ]
    },
    "Trade Sequence:9": {
      "name": "Specialty Eye Drops",
      "area": "Lake Hylia",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Eyeball Frog before timer expires",
        "Epona"
      ],
      "steps": [
        "Enter the Lakeside Laboratory with the live Eyeball Frog before its timer expires.",
        "Show it to the scientist and choose the response asking him to make eye drops.",
        "Accept the Specialty Eye Drops and leave immediately; the new timer starts now.",
        "Ride across the field to Kakariko, then dash up Death Mountain Trail toward Biggoron."
      ],
      "sources": [
        "c29"
      ],
      "note": "The remake walkthrough records a 3:30 eye-drop timer. Plan the mountain ascent before starting the frog delivery.",
      "requires": [
        "Adult access",
        "Trade Sequence:8"
      ]
    },
    "Trade Sequence:10": {
      "name": "Biggoron Receipt / Claim Check",
      "area": "Death Mountain Summit",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Specialty Eye Drops before timer expires"
      ],
      "steps": [
        "Reach Biggoron on Death Mountain before the eye-drop timer expires.",
        "Use the drops from your trade slot while standing close enough to speak to him.",
        "Let him treat his eyes and agree to repair the sword.",
        "Take the receipt or claim check and keep it while the repair takes several in-game days."
      ],
      "sources": [
        "v-trade"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Trade Sequence:9"
      ]
    },
    "Trade Sequence:11": {
      "name": "Biggoron Sword",
      "area": "Death Mountain Summit",
      "age": "Adult",
      "time": "After the repair wait",
      "equipment": [
        "Biggoron Receipt",
        "Giant’s Knife",
        "Sun Song helpful"
      ],
      "steps": [
        "Buy the Giant’s Knife from Medigoron in Goron City if you have not already done so; the remake route records a 200-rupee cost.",
        "Return to Biggoron carrying the receipt and allow three in-game days to pass, using Sun’s Song outdoors to advance the cycles if desired.",
        "Speak to him after each wait until he says the repair is finished.",
        "Show the receipt and accept the Biggoron Sword; the remake scene exchanges the Giant’s Knife for the finished blade."
      ],
      "sources": [
        "c29"
      ],
      "note": "The sword needs both hands, so you cannot use a shield while it is equipped. Keep the receipt as a completed-trade keepsake.",
      "requires": [
        "Adult access",
        "Trade Sequence:10",
        "Equipment:6"
      ]
    },
    "Magic Bean:0": {
      "name": "Bean: beside the Zora River seller",
      "area": "Zora River",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Magic Bean"
      ],
      "steps": [
        "Buy a Magic Bean from the seated Bean Seller by the lower Zora River gate.",
        "Stand beside the bare soil immediately next to him.",
        "Use the bean on that patch and confirm that a small green sprout appears.",
        "Return as an adult to ride it to the raised river section; the bottled-bug token here is a separate pickup."
      ],
      "sources": [
        "c16"
      ],
      "note": "",
      "type": "Bean Planting",
      "related": [
        "Gold Skulltula:62"
      ],
      "requires": [
        "Hyrule Field access",
        "Magic Bean"
      ]
    },
    "Magic Bean:1": {
      "name": "Bean: Lost Woods bridge overlook",
      "area": "Lost Woods",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Magic Bean"
      ],
      "steps": [
        "Start at the Lost Woods entrance from Kokiri Forest.",
        "Take left, then left again to the clearing overlooking the forest bridge.",
        "Find its bare soil patch and plant one bean.",
        "Check for the sprout before leaving; using a bottled bug on the same soil does not plant the bean."
      ],
      "sources": [
        "r18"
      ],
      "note": "",
      "type": "Bean Planting",
      "related": [],
      "requires": [
        "Magic Bean"
      ]
    },
    "Magic Bean:2": {
      "name": "Bean: Lost Woods Scrub clearing",
      "area": "Lost Woods",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Magic Bean",
        "Deku Shield"
      ],
      "steps": [
        "From the woods entrance take right, left, right, left, left.",
        "Block the two Scrubs’ attacks, then find the soil at the back-right of the clearing.",
        "Plant one Magic Bean and check that its sprout appears.",
        "Return as an adult at night to use the grown plant for the high-ledge Gold Skulltula."
      ],
      "sources": [
        "r06"
      ],
      "note": "",
      "type": "Bean Planting",
      "related": [
        "Gold Skulltula:45"
      ],
      "requires": [
        "Magic Bean",
        "Deku Shield"
      ]
    },
    "Magic Bean:3": {
      "name": "Bean: behind the Kokiri Shop",
      "area": "Kokiri Forest",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Magic Bean"
      ],
      "steps": [
        "Find the Kokiri Shop and walk behind the building.",
        "Stand by the bare soil against its rear side.",
        "Use one Magic Bean and make sure a sprout appears.",
        "Leave it to grow until the adult timeline; this does not collect the separate bottled-bug token."
      ],
      "sources": [
        "v02"
      ],
      "note": "This is behind the shop, not either of the two plantable clearings inside the Lost Woods.",
      "type": "Bean Planting",
      "related": [],
      "requires": [
        "Magic Bean"
      ]
    },
    "Magic Bean:4": {
      "name": "Bean: Graveyard upper soil",
      "area": "Graveyard",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Magic Bean"
      ],
      "steps": [
        "Enter the Graveyard from Kakariko and take the left-hand incline toward the tree.",
        "Find the bare patch below the high stone ledge.",
        "Plant one bean and confirm the sprout.",
        "Return as an adult and ride the plant over the wall for the Heart Piece."
      ],
      "sources": [
        "r06"
      ],
      "note": "",
      "type": "Bean Planting",
      "related": [
        "Heart Piece:16"
      ],
      "requires": [
        "Hyrule Field access",
        "Magic Bean"
      ]
    },
    "Magic Bean:5": {
      "name": "Bean: outside Dodongo Cavern",
      "area": "Death Mountain Trail",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Magic Bean"
      ],
      "steps": [
        "Climb the mountain trail to Dodongo Cavern’s entrance.",
        "Find the soft soil outside the dungeon, close to the trail sign and cliff.",
        "Plant a bean in that patch and check for a sprout.",
        "Return as an adult to use the plant route for the mountain Heart Piece."
      ],
      "sources": [
        "c25"
      ],
      "note": "",
      "type": "Bean Planting",
      "related": [
        "Heart Piece:22"
      ],
      "requires": [
        "Hyrule Field access",
        "Event:mountain-gate",
        "Magic Bean"
      ]
    },
    "Magic Bean:6": {
      "name": "Bean: crater warp point",
      "area": "Death Mountain Crater",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Magic Bean",
        "Bolero of Fire",
        "Full health"
      ],
      "steps": [
        "Learn Bolero of Fire as an adult, then return to the past through the Temple of Time.",
        "Play the Bolero as a child to arrive at the crater warp pedestal.",
        "Quickly plant a bean in the nearby soil and confirm the sprout.",
        "Warp away before the heat timer expires; ride the grown plant as an adult for the lava-island Heart Piece."
      ],
      "sources": [
        "c27"
      ],
      "note": "",
      "type": "Bean Planting",
      "related": [
        "Heart Piece:23"
      ],
      "crossTime": true,
      "requires": [
        "Magic Bean",
        "Bolero of Fire"
      ],
      "timelineStages": [
        {
          "key": "learn-warp",
          "age": "Adult",
          "title": "Learn Bolero of Fire",
          "requires": [
            "Adult access",
            "Goron Tunic",
            "Hookshot",
            "Ocarina"
          ],
          "evidence": "progress:33",
          "completeAlso": [
            "progress:33"
          ]
        },
        {
          "key": "plant",
          "age": "Child",
          "title": "Bean: crater warp point",
          "requires": [
            "Magic Bean",
            "Bolero of Fire"
          ]
        }
      ]
    },
    "Magic Bean:7": {
      "name": "Bean: Lakeside Laboratory",
      "area": "Lake Hylia",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Magic Bean"
      ],
      "steps": [
        "Travel to the Lakeside Laboratory on Lake Hylia’s shore.",
        "Find the soft soil beside its exterior wall near the shore approach.",
        "Plant one bean and verify the sprout before leaving.",
        "Return as an adult to use the plant as an elevated route across the lake area."
      ],
      "sources": [
        "r18"
      ],
      "note": "",
      "type": "Bean Planting",
      "related": [
        "Heart Piece:20"
      ],
      "requires": [
        "Hyrule Field access",
        "Magic Bean"
      ]
    },
    "Magic Bean:8": {
      "name": "Bean: valley cow ledge",
      "area": "Gerudo Valley",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Magic Bean",
        "Cucco"
      ],
      "steps": [
        "Pick up the Cucco near Gerudo Valley’s canyon overlook.",
        "Glide down toward the grassy shelf beside the waterfall and cow.",
        "Find the bare soil on the shelf and plant one bean.",
        "Check for its sprout before leaving by the river route; do the bottled-bug token separately if needed."
      ],
      "sources": [
        "r18"
      ],
      "note": "",
      "type": "Bean Planting",
      "related": [],
      "requires": [
        "Hyrule Field access",
        "Magic Bean"
      ]
    },
    "Magic Bean:9": {
      "name": "Bean: Spirit Temple entrance",
      "area": "Desert Colossus",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Magic Bean",
        "Requiem of Spirit"
      ],
      "steps": [
        "Learn Requiem of Spirit on the adult visit to the Colossus, then return to the past.",
        "Warp back as a child and walk to the soil beside the Spirit Temple entrance.",
        "Plant one bean and confirm its sprout.",
        "Return as an adult to ride the plant for the raised-rock token and Heart Piece ledge."
      ],
      "sources": [
        "r06"
      ],
      "note": "",
      "type": "Bean Planting",
      "related": [
        "Gold Skulltula:90",
        "Heart Piece:31"
      ],
      "crossTime": true,
      "requires": [
        "Requiem of Spirit",
        "Event:time-travel",
        "Magic Bean",
        "Requiem of Spirit"
      ],
      "timelineStages": [
        {
          "key": "learn-warp",
          "age": "Adult",
          "title": "Learn Requiem of Spirit",
          "requires": [
            "Adult access",
            "Ocarina",
            "Gerudo Card",
            "Lens of Truth",
            "Magic",
            {
              "any": [
                "Longshot",
                "Hover Boots"
              ]
            }
          ],
          "evidence": "progress:36",
          "completeAlso": [
            "progress:36"
          ]
        },
        {
          "key": "plant",
          "age": "Child",
          "title": "Bean: Spirit Temple entrance",
          "requires": [
            "Requiem of Spirit",
            "Event:time-travel",
            "Magic Bean",
            "Requiem of Spirit"
          ]
        }
      ]
    },
    "Side Quest:0": {
      "name": "Return all seven Cuccos",
      "area": "Kakariko",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "Cucco"
      ],
      "steps": [
        "Start at the Cucco Lady’s pen near the village entrance and accept her request.",
        "Gather the birds by the entrance, construction, brick pile, low-house crate, and mountain-gate stairs.",
        "Carry a bird up the windmill steps and glide over the fence; find the enclosed-yard bird, then climb the ladder for the upper bird.",
        "Throw the birds back toward the village and return all seven to the pen.",
        "Speak to the Cucco Lady to complete the request and receive the bottle."
      ],
      "sources": [
        "g05"
      ],
      "note": "This is the same activity as the Cucco Lady bottle entry, not a second bottle reward.",
      "related": [
        "Bottle:1"
      ],
      "requires": [
        "Hyrule Field access"
      ]
    },
    "Side Quest:1": {
      "name": "Win Epona from Ingo",
      "area": "Lon Lon Ranch",
      "age": "Adult",
      "time": "Day",
      "equipment": [
        "Epona’s Song",
        "Rupees for riding and races"
      ],
      "steps": [
        "Learn Epona’s Song from Malon as a child, then return to the ranch as an adult during daylight.",
        "Pay Ingo to ride and play Epona’s Song inside the paddock to call Epona rather than using a rental horse.",
        "Mount her, speak to Ingo from horseback, and accept his race.",
        "Win both the first race and his rematch, keeping to the inside of the course and spacing out carrot use.",
        "After he locks the gate, build speed and ride squarely at the gate or outer fence to jump out."
      ],
      "sources": [
        "nl-epona"
      ],
      "note": "You need both wins and the escape. Just calling or mounting Epona inside the paid paddock does not complete ownership.",
      "crossTime": true,
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Epona Song"
      ],
      "timelineStages": [
        {
          "key": "learn-song",
          "age": "Child",
          "title": "Learn Epona’s Song from Malon",
          "requires": [
            "Ocarina",
            "Event:talon-awake"
          ],
          "evidence": "Epona Song",
          "completeAlso": [
            "progress:30"
          ]
        },
        {
          "key": "win-races",
          "age": "Adult",
          "title": "Win Epona from Ingo",
          "requires": [
            "Hyrule Field access",
            "Adult access",
            "Epona Song"
          ]
        }
      ]
    },
    "Side Quest:2": {
      "name": "Malon’s ranch-course cow prize",
      "area": "Lon Lon Ranch",
      "age": "Adult",
      "time": "Day",
      "equipment": [
        "Epona",
        "Ranch restored"
      ],
      "steps": [
        "Return to the ranch with Epona after Ingo’s story has been resolved and Malon offers her lap course.",
        "Speak to Malon and accept the obstacle-course challenge.",
        "Ride the marked course, approaching each fence straight-on with enough speed to jump it.",
        "Beat the displayed record, then speak to Malon to hear that the heavy prize will be delivered to your house.",
        "Return to Link’s house in Kokiri Forest to find the cow; play Epona’s Song beside it with a free bottle for milk."
      ],
      "sources": [
        "c34"
      ],
      "note": "The remake walkthrough records a 40-second lap target. Use Malon’s displayed rules if your current challenge differs.",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Epona",
        "Event:ranch-restored"
      ]
    },
    "Side Quest:3": {
      "name": "Frog choir’s two Heart Pieces",
      "area": "Zora River",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Ocarina",
        "Song of Storms",
        "Childhood songs"
      ],
      "steps": [
        "Find the musical log and five frogs on the river route, and take out your Ocarina at their stump.",
        "Play Song of Storms to claim their first Heart Piece.",
        "Play Zelda’s Lullaby, Saria’s Song, Epona’s Song, Sun’s Song, Song of Time until all five frogs grow and the ensemble game unlocks.",
        "Accept the insect-catching game and play the note for the frog beneath each insect.",
        "Finish the sequence to receive their second Heart Piece."
      ],
      "sources": [
        "r10"
      ],
      "note": "This is a quest overview. Track its two separate pickups using the Heart Piece cards linked below.",
      "related": [
        "Heart Piece:26",
        "Heart Piece:27"
      ],
      "crossTime": true,
      "requires": [
        "Hyrule Field access",
        "Heart Piece:26",
        "Heart Piece:27"
      ],
      "timelineStages": [
        {
          "key": "learn-storms",
          "age": "Adult",
          "title": "Learn Song of Storms",
          "requires": [
            "Adult access",
            "Ocarina"
          ],
          "evidence": "progress:20",
          "completeAlso": [
            "progress:20"
          ]
        },
        {
          "key": "both-frogs",
          "age": "Child",
          "title": "Collect both separate frog Heart Pieces",
          "requires": [
            "Heart Piece:26",
            "Heart Piece:27"
          ],
          "evidence": {
            "all": [
              "Heart Piece:26",
              "Heart Piece:27"
            ]
          }
        }
      ]
    },
    "Side Quest:4": {
      "name": "All Bombchu Bowling prizes",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "Bombchu Bowling open",
        "At least 30 rupees"
      ],
      "steps": [
        "Visit the alley after its Bombchu deliveries arrive and wake the attendant.",
        "Pay for a round and clear the three target stages using the supplied Bombchus.",
        "Collect the initial Bombchu prize and win another round for the Biggest Bomb Bag.",
        "Play and win the Heart Piece round as well.",
        "Confirm that you claimed both permanent prizes before completing this quest entry."
      ],
      "sources": [
        "r12"
      ],
      "note": "The bag and Heart Piece also have their own checklist entries. A single win is not the complete prize set.",
      "related": [
        "Equipment:7",
        "Upgrade:5",
        "Heart Piece:12"
      ],
      "requires": [
        "Hyrule Field access",
        "Heart Piece:12",
        "Upgrade:5"
      ]
    },
    "Side Quest:5": {
      "name": "Gerudo Training Ground — Ice Arrows",
      "area": "Gerudo Training Ground",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Gerudo Card",
        "Longshot",
        "Bow",
        "Hammer",
        "Fire Arrows",
        "Song of Time",
        "Scarecrow song",
        "Goron Tunic",
        "Zora Tunic",
        "30 rupees"
      ],
      "steps": [
        "Speak to the Gerudo attendant by the training gate and pay the entry fee.",
        "Clear the Stalfos arena for the first key, then follow the boulder and Wolfos route using the Longshot on the wall targets.",
        "Shoot the gate switches and clear the plant rooms; smash the Hammer alcove for another key.",
        "In the lava trials, use the Scarecrow and Longshot route, shoot the stone-head eye, and activate the Hammer and Fire Arrow switches.",
        "Use Song of Time for the lava stepping stones and the blocked pool; equip the Zora Tunic for its underwater key.",
        "Finish the later key rooms and fire-ring Lizalfos arena, then spend the keys along the chained-door route to the large Ice Arrow chest."
      ],
      "sources": [
        "c38"
      ],
      "note": "This is a multi-room course. Keep keys for its chained-door route and use the linked full walkthrough for individual room maps; leaving and re-entering costs another fee.",
      "requires": [
        {
          "any": [
            "Longshot",
            "Epona"
          ]
        },
        "Gerudo Card",
        "Adult access",
        "Bow",
        "Longshot",
        "Hammer",
        "Magic",
        "Zora Tunic",
        "Iron Boots",
        {
          "any": [
            "Fire Arrows",
            "Din Fire"
          ]
        }
      ]
    },
    "Side Quest:6": {
      "name": "Poe Collector — ten Big Poes",
      "area": "Hyrule Field",
      "age": "Adult",
      "time": "Dusk or night",
      "equipment": [
        "Epona",
        "Bow",
        "Empty bottle"
      ],
      "steps": [
        "Ride around Hyrule Field looking for the purple lantern or flame markers associated with Big Poes.",
        "Trigger each spawn on Epona and shoot the fleeing Poe before it disappears.",
        "Dismount and catch the spirit in an empty bottle, then bring batches to the Collector in Castle Town.",
        "Ask him for your points total and continue until it reaches 1,000.",
        "Claim the final golden reward after the tenth Big Poe sale; the extra bottle was already awarded at 500 points."
      ],
      "sources": [
        "r09"
      ],
      "note": "A bottle can hold only one spirit at a time. Regular Poe sales do not replace the Big Poe scoring requirement.",
      "related": [
        "Bottle:4"
      ],
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Epona",
        "Bow",
        "Bottle",
        "Bottle:4"
      ]
    },
    "Side Quest:7": {
      "name": "Teach the child Scarecrow song",
      "area": "Lake Hylia",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Ocarina"
      ],
      "steps": [
        "Find Bonooru, the scarecrow in the tilled field near Lake Hylia’s shore.",
        "Speak to him and take out the Ocarina in front of him.",
        "Play an easy, distinctive eight-note tune of your own, using more than one note, and let him confirm that he remembers it.",
        "Write down the tune or check its songbook record before leaving.",
        "Return as an adult to the same scarecrow and play that exact tune to activate the summon ability."
      ],
      "sources": [
        "c10"
      ],
      "note": "Teaching the tune and activating it seven years later are separate checklist steps. Use the remembered tune, not one of the standard warp songs.",
      "requires": [
        "Hyrule Field access",
        "Ocarina"
      ]
    },
    "Side Quest:8": {
      "name": "Activate the adult Scarecrow song",
      "area": "Lake Hylia",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Ocarina",
        "Child Scarecrow tune recorded"
      ],
      "steps": [
        "Return to Bonooru in the Lake Hylia field as an adult.",
        "Speak to him and take out your Ocarina.",
        "Play exactly the tune he learned from you as a child and wait for his recognition dialogue.",
        "At a dungeon’s Scarecrow point, play it again and Hookshot or Longshot to the summoned scarecrow."
      ],
      "sources": [
        "nl-scarecrow"
      ],
      "note": "If he does not recognize the tune, return to the past and teach a memorable one again before retrying as an adult.",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Side Quest:7",
        "Ocarina"
      ],
      "crossTime": true,
      "timelineStages": [
        {
          "key": "teach",
          "age": "Child",
          "title": "Teach Bonooru the custom Scarecrow tune",
          "requires": [
            "Hyrule Field access",
            "Ocarina"
          ],
          "evidence": "Side Quest:7",
          "completeAlso": [
            "Side Quest:7"
          ]
        },
        {
          "key": "activate",
          "age": "Adult",
          "title": "Play the same tune to adult Bonooru",
          "requires": [
            "Adult access",
            "Ocarina"
          ]
        }
      ]
    },
    "Side Quest:9": {
      "name": "House of Skulltula — 100-token reward",
      "area": "Kakariko",
      "age": "Both",
      "time": "Any time",
      "equipment": [
        "100 distinct Gold Skulltula tokens"
      ],
      "steps": [
        "Use your in-game map’s area token counters to check which regions still have missing tokens.",
        "Collect all 100 distinct tokens; retired duplicate tracker records do not count as extra tokens.",
        "Return to the House of Skulltula in Kakariko and speak to the Cursed Rich Man.",
        "Finish the final curse-lifting scene and accept the 200-rupee golden reward.",
        "Revisit for further money if offered; the 50-token Heart Piece is a separate earlier milestone."
      ],
      "sources": [
        "r01"
      ],
      "note": "",
      "related": [
        "Equipment:10",
        "Upgrade:10",
        "Upgrade:11",
        "Side Quest:13",
        "Heart Piece:19"
      ],
      "requires": [
        "100 Gold Skulltula tokens",
        "Heart Piece:19"
      ]
    },
    "Side Quest:10": {
      "name": "Fire Arrows at Lake Hylia",
      "area": "Lake Hylia",
      "age": "Adult",
      "time": "Dawn",
      "equipment": [
        "Bow",
        "Water Temple completed"
      ],
      "steps": [
        "Complete the Water Temple so the lake is restored.",
        "Go to the island with the inscribed stone and the large tree.",
        "Read the sunrise hint, face toward the rising sun, and wait for dawn or use Sun’s Song to reach morning.",
        "Shoot an ordinary arrow into the sun as it rises.",
        "Reach the platform where the glowing Fire Arrows appear and collect them."
      ],
      "sources": [
        "nl-arrows"
      ],
      "note": "Wait for the sunrise position described by the stone. Shooting randomly into the daytime sky will not trigger the reward.",
      "requires": [
        "Hyrule Field access",
        "Adult access",
        "Bow",
        "Event:water"
      ]
    },
    "Side Quest:11": {
      "name": "Complete the Treasure Box Shop",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Night",
      "equipment": [
        "Lens of Truth",
        "Magic",
        "10 rupees"
      ],
      "steps": [
        "Enter the nighttime Treasure Box Shop in Castle Town’s back streets.",
        "Pay the fee and activate the Lens of Truth before choosing either chest.",
        "In each room, open the key chest and use that key on the next door; repeat through all five choices.",
        "Open the final prize chest and finish the shopkeeper’s conversation."
      ],
      "sources": [
        "c33"
      ],
      "note": "This is the same run that awards the Treasure Box Shop Heart Piece. The two tracker entries describe one activity.",
      "crossTime": true,
      "requires": [
        "Hyrule Field access",
        "Heart Piece:28"
      ],
      "timelineStages": [
        {
          "key": "learn-storms",
          "age": "Adult",
          "title": "Learn Song of Storms",
          "requires": [
            "Adult access",
            "Ocarina"
          ],
          "evidence": "progress:20",
          "completeAlso": [
            "progress:20"
          ]
        },
        {
          "key": "collect",
          "age": "Child",
          "title": "Complete the Treasure Box Shop",
          "requires": [
            "Hyrule Field access",
            "Heart Piece:28"
          ]
        }
      ]
    },
    "Side Quest:12": {
      "name": "Both horseback archery prizes",
      "area": "Gerudo Fortress",
      "age": "Adult",
      "time": "Day",
      "equipment": [
        "Epona",
        "Bow",
        "Gerudo Card",
        "Rupees"
      ],
      "steps": [
        "Ride Epona to the attendant at the archery grounds under the red awning.",
        "Pay for the course and score enough for the first prize; the remake guide records 750 points for the Heart Piece.",
        "Play again and improve center hits until you reach the higher prize threshold.",
        "Claim the Biggest Quiver as well, checking the attendant’s prize dialogue.",
        "Complete this entry only once both permanent prizes have been collected."
      ],
      "sources": [
        "r12"
      ],
      "note": "The remake walkthrough records 1,400 for the quiver, rather than the old 1,500. Confirm the score target displayed in your game. Current published guides disagree on archery thresholds. The attendant’s displayed target takes priority; treat 750 / 1,400 as route-guide reports, not a guaranteed target in every version.",
      "related": [
        "Heart Piece:30",
        "Upgrade:3"
      ],
      "requires": [
        {
          "any": [
            "Longshot",
            "Epona"
          ]
        },
        "Adult access",
        "Heart Piece:30",
        "Upgrade:3"
      ]
    },
    "progress:0": {
      "name": "Kokiri Sword",
      "area": "Kokiri Forest",
      "age": "Child",
      "time": "Any time",
      "equipment": [],
      "steps": [
        "From Link’s house, follow the village path to the training clearing and speak to the swordsman if you need the movement tutorial.",
        "Look beside the training area for the stone arch and wooden sign marking the small passage.",
        "Follow that passage and crawl beneath the low stone slabs.",
        "Continue through the narrow channel, climb the rope ladder, and jump onto the upper rock ledge.",
        "Open the large chest beside the round boulder for the Kokiri Sword, then equip it in your inventory."
      ],
      "sources": [
        "c01"
      ],
      "note": "The remake route uses a crawlspace and cliff ladder. Do not rely on the old description of a rolling-boulder maze alone.",
      "requires": []
    },
    "progress:1": {
      "name": "Deku Shield",
      "area": "Kokiri Forest",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "40 rupees"
      ],
      "steps": [
        "Collect 40 rupees around Kokiri Forest by cutting grass, opening small chests, and breaking pots.",
        "Find the Kokiri Shop, the red-roofed building reached by the village’s raised path.",
        "Speak to the shopkeeper and buy the Deku Shield for 40 rupees.",
        "Open your equipment menu and equip it; owning it without equipping it may not satisfy Mido."
      ],
      "sources": [
        "c01"
      ],
      "note": "You can collect the money before leaving the forest; no adult wallet or dungeon item is required.",
      "requires": []
    },
    "progress:2": {
      "name": "Open the Great Deku Tree path",
      "area": "Kokiri Forest",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Kokiri Sword",
        "Deku Shield"
      ],
      "steps": [
        "Equip both the Kokiri Sword and Deku Shield.",
        "Follow the forest path toward the Great Deku Tree and find Mido blocking its narrow entrance.",
        "Speak to him while wearing both pieces of equipment and finish his inspection dialogue.",
        "Continue past him, defeat the Deku Babas along the path, and speak to the Great Deku Tree.",
        "Accept the request and enter the open doorway in its trunk."
      ],
      "sources": [
        "g01"
      ],
      "note": "This milestone means the path is open, not that the dungeon has been completed.",
      "requires": [
        "Kokiri Sword",
        "Deku Shield"
      ]
    },
    "progress:3": {
      "name": "Fairy Slingshot",
      "area": "Deku Tree",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Deku Shield"
      ],
      "steps": [
        "Enter the Great Deku Tree and climb the vine wall from its central chamber to the upper ledge.",
        "Pass the Dungeon Map chest and follow the second-floor route to the Deku Scrub.",
        "Reflect its nuts with your shield and speak to it to open the way onward.",
        "Cross the fallen log to the large chest on the tree stump and open it for the Slingshot.",
        "Equip it and shoot the eye above the next door to drop the exit ladder."
      ],
      "sources": [
        "c02"
      ],
      "note": "This item lets you shoot spiders off climbable vines. Clear the vines before starting a long climb.",
      "requires": [
        "Deku Tree access",
        "Deku Shield"
      ]
    },
    "progress:4": {
      "name": "Clear Great Deku Tree — Kokiri’s Emerald",
      "area": "Deku Tree",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Slingshot",
        "Deku Shield",
        "Deku Sticks"
      ],
      "steps": [
        "Climb through the upper rooms, clearing vine spiders and obtaining the Compass, then return to the central shaft.",
        "Jump from the high ledge through the large web to reach the basement pool.",
        "Carry a flame on a Deku Stick to burn the blocking webs and follow the basement route to the lower passage.",
        "Reflect the Scrubs’ shots in the order their hint gives you to open the boss approach.",
        "Enter Gohma’s chamber and look up to start the fight; stun the open red eye with the Slingshot, then attack it with the sword.",
        "Collect the boss Heart Container and enter the blue warp to finish the Deku Tree’s story scene."
      ],
      "sources": [
        "g02"
      ],
      "note": "The completion condition is defeating Gohma and taking the exit warp. Reaching the basement alone is not the clear.",
      "requires": [
        "Deku Tree access",
        "Slingshot",
        "Deku Shield",
        "Deku Sticks"
      ],
      "type": "Event"
    },
    "progress:5": {
      "name": "Leave Kokiri Forest for Hyrule Field",
      "area": "Hyrule Field",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Deku Tree cleared"
      ],
      "steps": [
        "Defeat Gohma, collect the reward, and finish the Great Deku Tree’s farewell.",
        "Return through Kokiri village toward the western exit and speak to Mido if he stops you.",
        "Follow the wooden bridge out of the forest and finish Saria’s farewell scene.",
        "Receive her Fairy Ocarina, then continue to the field and hear the owl’s introduction.",
        "The milestone is complete once you can freely travel across Hyrule Field."
      ],
      "sources": [
        "c03"
      ],
      "note": "This is the early field-access milestone. Returning to the forest later does not undo it.",
      "requires": [
        "Deku Tree cleared"
      ]
    },
    "progress:6": {
      "name": "Zelda’s Letter",
      "area": "Hyrule Castle",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "Ocarina",
        "Weird Egg hatched"
      ],
      "steps": [
        "Enter Castle Town and take the path onward to Hyrule Castle’s grounds.",
        "Speak to Malon for the Weird Egg and follow the sneaking route past the guards toward the castle moat.",
        "When the egg hatches, use the Cucco beside sleeping Talon at the moat corner to wake him; wait for him to leave.",
        "Use the cleared crate and water route to reach the low castle opening, then pass the patrolling courtyard guards without entering their sight.",
        "Speak to Princess Zelda in the final courtyard, agree to help, and accept her letter.",
        "Keep the letter for the guard at Kakariko’s Death Mountain gate; meeting Zelda and opening that gate are separate actions."
      ],
      "sources": [
        "c05"
      ],
      "note": "If the egg has not hatched, let a night-to-day cycle pass outdoors. The town drawbridge guard is not the guard who receives Zelda’s Letter.",
      "requires": [
        "Hyrule Field access",
        "Ocarina",
        "Event:talon-awake"
      ]
    },
    "progress:7": {
      "name": "Fairy Ocarina from Saria",
      "area": "Hyrule Field",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Deku Tree cleared"
      ],
      "steps": [
        "After clearing the Great Deku Tree, leave Kokiri village by its western bridge.",
        "Stop for Saria’s farewell on the bridge rather than heading straight back into the woods.",
        "Finish the conversation and receive the Fairy Ocarina.",
        "Open the item or song menu and confirm that you can take it out before traveling to song teachers."
      ],
      "sources": [
        "c03"
      ],
      "note": "This is Saria’s early Ocarina, not the Ocarina of Time that Zelda later leaves in the moat.",
      "requires": [
        "Deku Tree cleared"
      ]
    },
    "progress:8": {
      "name": "Learn Saria’s Song",
      "area": "Sacred Forest Meadow",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Ocarina"
      ],
      "steps": [
        "Open the Death Mountain route in Kakariko so the musical trail through the Lost Woods becomes relevant.",
        "Enter the Lost Woods from Kokiri Forest, following the loud music and green musical guidance through the correct tunnels.",
        "Pass the Wolfos encounter and the Scrub-lined approach into the Sacred Forest Meadow.",
        "Climb the final stairs to Saria’s quiet clearing and speak to her.",
        "Take out the Ocarina and repeat the phrases she teaches until Saria’s Song appears in your songbook."
      ],
      "sources": [
        "g06"
      ],
      "note": "For navigation, begin right then left from the forest entrance; the Goron and Zora shortcut rooms provide landmarks on the way. Follow the music when the remake’s paths bend.",
      "requires": [
        "Ocarina",
        "Zelda Letter"
      ],
      "type": "Song"
    },
    "progress:9": {
      "name": "Bomb Bag",
      "area": "Dodongo Cavern",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Goron Bracelet",
        "Slingshot",
        "Deku Shield"
      ],
      "steps": [
        "Obtain the Goron Bracelet from Darunia, then throw the Bomb Flower above Dodongo Cavern onto the entrance boulder.",
        "Inside, use Bomb Flowers on cracked walls and follow the right-hand Baby Dodongo and Lizalfos route.",
        "Light the torches to open the next door, then reach the Bomb Flower staircase and trigger its chain to lower the stairs.",
        "Climb through the upper statue and crate rooms, using the Slingshot on eye switches that extinguish blocking flames.",
        "Pass the second Lizalfos platform fight and the next eye-switch flame to the chest on the stone pad.",
        "Open that large chest to obtain the Bomb Bag and a supply of carryable bombs."
      ],
      "sources": [
        "c13"
      ],
      "note": "The dungeon entrance Bomb Flower does not give you a bag. You must reach the large item chest inside.",
      "requires": [
        "Event:mountain-gate",
        "Goron Bracelet",
        "Slingshot",
        "Deku Shield"
      ]
    },
    "progress:10": {
      "name": "Learn Zelda’s Lullaby",
      "area": "Hyrule Castle",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Ocarina",
        "Zelda meeting completed"
      ],
      "steps": [
        "Sneak through Hyrule Castle and finish Princess Zelda’s courtyard conversation.",
        "Speak to Impa after Zelda gives you her letter.",
        "Listen to Impa’s melody and repeat the phrases on the Ocarina using the staff shown on screen.",
        "Finish her lesson and confirm Zelda’s Lullaby is in the songbook.",
        "Use it while standing on royal crests at doors, waterfalls, and fairy fountains."
      ],
      "sources": [
        "g03"
      ],
      "note": "This is taught by Impa after the meeting. Replaying the song near a guard does not substitute for showing Zelda’s Letter.",
      "requires": [
        "Zelda Letter",
        "Ocarina"
      ],
      "type": "Song"
    },
    "progress:11": {
      "name": "Boomerang",
      "area": "Jabu-Jabu Belly",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Ruto’s Letter delivered",
        "Bottle",
        "Fish",
        "Slingshot"
      ],
      "steps": [
        "Show Ruto’s Letter to King Zora so he moves aside, then enter Zora Fountain behind him.",
        "Catch a fish in your free bottle and release it in front of Lord Jabu-Jabu’s mouth to enter the dungeon.",
        "Shoot the early switches, meet Ruto, and follow her down into the lower chamber.",
        "Carry her through the water-switch route and use her weight on switches that must stay pressed.",
        "Reach the upper room with the flying Stingers, defeat all of them, and open the large chest that appears.",
        "Equip the Boomerang to clear the colored tentacles and switches needed for the rest of the dungeon."
      ],
      "sources": [
        "c17"
      ],
      "note": "The reward is not in the first map chest. Follow the Ruto-carrying route until the Stinger room.",
      "requires": [
        "Event:king-moved",
        "Bottle",
        "Slingshot"
      ]
    },
    "progress:12": {
      "name": "Ocarina of Time & Song of Time",
      "area": "Hyrule Field",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "All three Spiritual Stones"
      ],
      "steps": [
        "Finish the Great Deku Tree, Dodongo Cavern, and Jabu-Jabu’s Belly and obtain their Spiritual Stones.",
        "Return toward Castle Town to trigger the scene of Zelda and Impa fleeing Ganondorf.",
        "After Ganondorf leaves, inspect the moat outside the town drawbridge.",
        "Dive down and recover the Ocarina of Time that Zelda threw into the water.",
        "Listen to Zelda’s message and learn Song of Time from the displayed melody."
      ],
      "sources": [
        "c19"
      ],
      "note": "You need the dungeon-clear story rewards, not merely the three dungeon items. Use the in-game story log if the drawbridge scene does not trigger.",
      "requires": [
        "Deku Tree cleared",
        "Event:dodongo",
        "Event:jabu"
      ],
      "type": "Song"
    },
    "progress:13": {
      "name": "Draw Master Sword — Light Medallion / Adult Link",
      "area": "Temple of Time",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Song of Time",
        "All three Spiritual Stones"
      ],
      "steps": [
        "Recover the Ocarina of Time and learn Zelda’s message at the moat.",
        "Enter Castle Town and go to the Temple of Time beyond the market streets.",
        "Stand at the altar before the sealed Door of Time and play Song of Time.",
        "Walk through the opened door to the Master Sword pedestal.",
        "Draw the sword and finish the chamber-of-sages scenes to awaken as Adult Link."
      ],
      "sources": [
        "c19"
      ],
      "note": "Later, after the story allows it, returning the sword to this pedestal takes you back to the child timeline.",
      "requires": [
        "Song of Time",
        "Deku Tree cleared",
        "Event:dodongo",
        "Event:jabu"
      ],
      "type": "Event"
    },
    "progress:14": {
      "name": "Hookshot from Dampé’s race",
      "area": "Graveyard",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Adult access"
      ],
      "steps": [
        "Enter the Graveyard as an adult. Turn left from its entrance, find the large tree, and locate Dampé’s movable headstone beside it.",
        "Pull back the movable headstone and drop into the hole.",
        "Speak to Dampé’s ghost and follow his lantern through the course, avoiding the fire he leaves behind.",
        "Keep moving through the passages until you reach the finish chamber; this first run does not require the Heart Piece time record.",
        "Open the reward chest for the Hookshot.",
        "Take the exit tunnel toward the windmill, using Song of Time on the blue block if it seals the passage."
      ],
      "sources": [
        "s-hookshot"
      ],
      "note": "A later run under one minute awards a Heart Piece. Do not restart the first run just because the minute has elapsed.",
      "requires": [
        "Adult access"
      ]
    },
    "progress:15": {
      "name": "Obtain Epona",
      "area": "Lon Lon Ranch",
      "age": "Adult",
      "time": "Day",
      "equipment": [
        "Epona’s Song",
        "Rupees"
      ],
      "steps": [
        "Learn Epona’s Song from Malon during childhood, then visit the adult ranch in daytime.",
        "Pay Ingo’s riding fee and play the song inside the paddock to call Epona.",
        "Mount her and speak to Ingo from horseback to start his race.",
        "Win the first race and the rematch where he stakes Epona.",
        "When he locks the exit, gain speed and jump the closed gate or a suitable outer fence.",
        "After escaping, test Epona’s Song in Hyrule Field to call your own horse."
      ],
      "sources": [
        "c20"
      ],
      "note": "This is the same reward as the Epona side quest. The ownership scene and escape are what make the horse available outside the ranch.",
      "requires": [
        "Adult access",
        "Epona Song"
      ],
      "crossTime": true,
      "timelineStages": [
        {
          "key": "learn-song",
          "age": "Child",
          "title": "Learn Epona’s Song from Malon",
          "requires": [
            "Ocarina",
            "Event:talon-awake"
          ],
          "evidence": "Epona Song",
          "completeAlso": [
            "progress:30"
          ]
        },
        {
          "key": "win-races",
          "age": "Adult",
          "title": "Obtain Epona",
          "requires": [
            "Adult access",
            "Epona Song"
          ]
        }
      ]
    },
    "progress:16": {
      "name": "Fairy Bow",
      "area": "Forest Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot",
        "Saria Song"
      ],
      "steps": [
        "Reach the Sacred Forest Meadow as an adult, play Saria’s Song for Mido, and cross the Moblin maze.",
        "Hookshot the branch over the Forest Temple entrance to enter.",
        "Collect the early Small Keys from the entrance courtyard and the northern Stalfos route.",
        "From the main hall, take the key-locked route through the block-pushing chambers and climb to the upper red-carpet hall.",
        "Unlock the next door, watch for Wallmaster shadows, and descend to the octagonal Stalfos arena.",
        "Defeat all Stalfos in the arena and open the large chest that appears for the Bow."
      ],
      "sources": [
        "c23"
      ],
      "note": "This is the large combat reward chest, not the Boss Key chest reached later. The linked chapter has the room-by-room key route.",
      "requires": [
        "Adult access",
        "Hookshot",
        "Saria Song"
      ]
    },
    "progress:17": {
      "name": "Megaton Hammer",
      "area": "Fire Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Goron Tunic",
        "Hookshot",
        "Bomb Bag",
        "Bow"
      ],
      "steps": [
        "Enter the Fire Temple through Death Mountain Crater with the Goron Tunic equipped.",
        "Speak to Darunia and free the early Gorons, taking the Small Key from each opened cell.",
        "Use the keys to climb through the lava rooms, boulder maze, and flame-chase section.",
        "Defeat the Flare Dancer to open the route farther up the tower.",
        "Ride the platform that rises after the Flare Dancer fight, climb the mesh wall, and clear the Bomb Flower obstacles to reach 5F. Cross the narrow stone stairway over lava to the raised item chest.",
        "Open the large item chest for the Megaton Hammer, then use it on the nearby switches and breakable blocks to continue."
      ],
      "sources": [
        "c26"
      ],
      "note": "Do not require the Hammer to enter the Fire Temple. It is obtained partway through the dungeon and then opens the remaining routes.",
      "requires": [
        "Adult access",
        "Goron Tunic",
        "Hookshot",
        "Bomb Bag"
      ]
    },
    "progress:18": {
      "name": "Iron Boots",
      "area": "Ice Cavern",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Hookshot",
        "Bottle"
      ],
      "steps": [
        "From frozen Zora Domain, go behind King Zora into Zora Fountain.",
        "Cross the ice floes to the Ice Cavern entrance in the far rock face.",
        "Defeat the early ice enemies, collect the silver pickups to open routes, and bottle Blue Fire from the blue flames.",
        "Use Blue Fire on red ice to reach the sliding-block room and finish its puzzle.",
        "Continue to the White Wolfos chamber, defeat it, and open the large chest for the Iron Boots.",
        "Finish Sheik’s song scene and bottle extra Blue Fire before leaving if King Zora is still frozen."
      ],
      "sources": [
        "nl-ice"
      ],
      "note": "Blue Fire must be carried in a bottle. Ordinary fire and Din’s Fire do not melt the red ice.",
      "requires": [
        "Adult access",
        "Bottle",
        "Event:blue-fire"
      ]
    },
    "progress:19": {
      "name": "Longshot",
      "area": "Water Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Iron Boots",
        "Hookshot",
        "Bow",
        "Zora Tunic",
        "Zelda Lullaby"
      ],
      "steps": [
        "Enter the Water Temple from the lake bottom with Iron Boots and the Zora Tunic.",
        "Follow Ruto’s route and play Zelda’s Lullaby at the marked water-control locations to open the lower and middle paths.",
        "Collect and spend Small Keys while climbing the temple’s water-level routes.",
        "Use the Hookshot and eye switches to reach the mist-filled room with the dead tree.",
        "Approach the far door and return toward the tree to trigger Dark Link; defeat the shadow, varying attacks if sword strikes are mirrored.",
        "Open the door revealed after the fight and take the Longshot from the large chest beyond it."
      ],
      "sources": [
        "c30"
      ],
      "note": "The Longshot is the dungeon item. You need only the ordinary Hookshot to begin the route; do not confuse it with the later Boss Key.",
      "requires": [
        "Adult access",
        "Iron Boots",
        "Hookshot",
        "Zora Tunic",
        "Zelda Lullaby"
      ]
    },
    "progress:20": {
      "name": "Learn Song of Storms",
      "area": "Windmill",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Ocarina"
      ],
      "steps": [
        "In adult Kakariko, climb the stairs to the windmill above the well.",
        "Go inside and speak to the musician with the rotating music box.",
        "Take out your Ocarina in front of him so he tells you about the song he remembers.",
        "Repeat his melody from the staff to learn Song of Storms.",
        "Return as a child and play it for him in the same windmill to drain the village well."
      ],
      "sources": [
        "r10"
      ],
      "note": "Learning it happens as an adult; draining the well happens later in the child timeline.",
      "requires": [
        "Adult access",
        "Ocarina"
      ],
      "type": "Song"
    },
    "progress:21": {
      "name": "Lens of Truth",
      "area": "Bottom of the Well",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Song of Storms",
        "Zelda Lullaby",
        "Deku Stick",
        "Slingshot"
      ],
      "steps": [
        "Learn Song of Storms as an adult, then put the Master Sword back in the Temple of Time to return to childhood.",
        "Go to the Kakariko windmill and play Song of Storms to the musician; leave and climb down the now-drained village well.",
        "Enter the small tunnel and explore past the false wall; do not assume every apparent wall or floor is solid.",
        "Find the royal crest at the water-control point and play Zelda’s Lullaby to drain the inner water.",
        "Follow the newly opened passage to the foggy Dead Hand room. Slash the emerging hands until the body rises, then attack it between its strikes and retreat before it counters.",
        "Take the Lens of Truth and use it to reveal the remaining hidden floors, enemies, and key chests."
      ],
      "sources": [
        "c32"
      ],
      "note": "Bring magic-refilling supplies. The well’s Small Keys are for its extra rooms and tokens; they are not a substitute for draining the inner water.",
      "requires": [
        "Event:well-drained",
        "Slingshot",
        "Deku Sticks"
      ],
      "crossTime": true,
      "timelineStages": [
        {
          "key": "learn-storms",
          "age": "Adult",
          "title": "Learn Song of Storms",
          "requires": [
            "Adult access",
            "Ocarina"
          ],
          "evidence": "progress:20",
          "completeAlso": [
            "progress:20"
          ]
        },
        {
          "key": "lens",
          "age": "Child",
          "title": "Drain the well, defeat Dead Hand and collect the Lens",
          "requires": [
            "Song of Storms",
            "Ocarina",
            "Slingshot",
            "Deku Sticks"
          ],
          "completeAlso": [
            "Event:well-drained"
          ]
        }
      ]
    },
    "progress:22": {
      "name": "Learn Sun’s Song",
      "area": "Graveyard",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Ocarina",
        "Zelda Lullaby"
      ],
      "steps": [
        "Walk through Kakariko into the Graveyard and head to the Royal Composers’ Tomb at the far end.",
        "Stand on its royal crest before the harp-shaped headstone and play Zelda’s Lullaby.",
        "Enter the opened tomb, defeat the enemies that seal its doors, and continue through the passages.",
        "Cross the green poison room on its safe stone paths rather than standing in the damaging floor.",
        "Read the stone tablet in the final chamber and repeat its music to learn Sun’s Song.",
        "Use it on the return route to freeze nearby undead and, outdoors, change the time of day."
      ],
      "sources": [
        "c07"
      ],
      "note": "This is the large composers’ tomb, not one of the small movable-headstone graves.",
      "requires": [
        "Ocarina",
        "Zelda Lullaby"
      ],
      "type": "Song"
    },
    "progress:23": {
      "name": "Collect the Silver Gauntlets",
      "area": "Spirit Temple",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Requiem of Spirit",
        "Boomerang",
        "Bomb Bag"
      ],
      "steps": [
        "Cross the desert as an adult and learn Requiem of Spirit at the Colossus.",
        "Return to the child timeline, warp back, and enter the Spirit Temple’s small child-only passage.",
        "Speak to Nabooru and agree to retrieve the treasure.",
        "Follow the child route through the switches, silver-collectible rooms, and statue chamber to the Iron Knuckle.",
        "Defeat the armored enemy, leave through the door behind it, and open the large chest on the exterior ledge.",
        "Finish the scene outside, then return as an adult to use the gauntlets’ lifting strength."
      ],
      "sources": [
        "c37"
      ],
      "note": "This is the same item as the Silver Gauntlets upgrade entry. Keeping both entries does not mean there are two pairs.",
      "requires": [
        "Requiem of Spirit",
        "Boomerang",
        "Bomb Bag",
        "Event:time-travel"
      ],
      "crossTime": true,
      "timelineStages": [
        {
          "key": "learn-warp",
          "age": "Adult",
          "title": "Learn Requiem of Spirit",
          "requires": [
            "Adult access",
            "Ocarina",
            "Gerudo Card",
            "Lens of Truth",
            "Magic",
            {
              "any": [
                "Longshot",
                "Hover Boots"
              ]
            }
          ],
          "evidence": "progress:36",
          "completeAlso": [
            "progress:36"
          ]
        },
        {
          "key": "child-task",
          "age": "Child",
          "title": "Collect the Silver Gauntlets",
          "requires": [
            "Requiem of Spirit",
            "Boomerang",
            "Bomb Bag",
            "Event:time-travel"
          ]
        }
      ]
    },
    "progress:24": {
      "name": "Gerudo Pass / Membership Card",
      "area": "Gerudo Fortress",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Longshot",
        "Bow",
        "Lens of Truth",
        "Hammer"
      ],
      "steps": [
        "Cross Gerudo Valley’s broken bridge and follow the carpenter’s request into the fortress.",
        "If caught, inspect the cell with the Lens of Truth, break the revealed spot with the Hammer, and Longshot the grate above to escape.",
        "Enter the red-tasseled cell hall and speak to Shiro; defeat the Gerudo swordswoman, take her key, and open his cell.",
        "Continue through the courtyard and rooftop route to Saburo, then climb onward to Ichiro, defeating the guard and opening each cell.",
        "Follow the remaining upper passage to Jiro and free him after the last guard fight.",
        "Finish the Gerudo captain’s conversation to receive the Pass, which allows free movement and access to the training and desert gates."
      ],
      "sources": [
        "c35"
      ],
      "note": "You need all four carpenters. Entering the fortress or winning only one guard fight does not grant the pass.",
      "requires": [
        "Adult access",
        {
          "any": [
            "Longshot",
            "Epona"
          ]
        }
      ],
      "type": "Event"
    },
    "progress:25": {
      "name": "Win the Golden Scale",
      "area": "Lake Hylia",
      "age": "Adult",
      "time": "Day",
      "equipment": [
        "30 rupees",
        "Normal fishing lure"
      ],
      "steps": [
        "Find the adult Fishing Pond hut on the lake’s far side, using the grown-bean route if the dry shoreline makes the approach awkward.",
        "Pay for the fishing rod and keep the standard lure equipped.",
        "Cast beside a large fish, attract it with small lure movements, then hook and reel it in.",
        "Show the catch to the pond owner and meet his stated prize threshold; the remake walkthrough records over 60 cm.",
        "End the session and accept the Golden Scale before attempting the laboratory’s deep-dive Heart Piece."
      ],
      "sources": [
        "rk-scale"
      ],
      "note": "The sinking lure can land a huge fish but disqualifies this prize. This is the same scale as the upgrade entry.",
      "requires": [
        "Adult access"
      ]
    },
    "progress:26": {
      "name": "Unlock the first magic meter",
      "area": "Death Mountain Summit",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Bomb Bag",
        "Zelda Lullaby",
        "25 rupees"
      ],
      "steps": [
        "After Dodongo Cavern, climb Death Mountain Trail toward the summit, bombing the cracked rocks in your way.",
        "Enter the Great Fairy cave near the summit owl.",
        "Stand on the royal crest facing the fountain and play Zelda’s Lullaby.",
        "Accept and pay the fairy’s offering, then finish her gift scene.",
        "Check for the green magic meter and Din’s Fire in your inventory before leaving."
      ],
      "sources": [
        "r05"
      ],
      "note": "This is the same first-fairy visit as the summit Great Fairy entry. You do not need an existing magic meter to unlock it.",
      "requires": [
        "Event:mountain-gate",
        "Bomb Bag",
        "Zelda Lullaby"
      ]
    },
    "progress:27": {
      "name": "Buy Magic Beans",
      "area": "Zora River",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Rupees"
      ],
      "steps": [
        "Follow lower Zora River to the seated Bean Seller beside the gate and soft soil.",
        "Speak to him and buy the first bean for 10 rupees.",
        "Buy additional beans as needed; each successive one costs ten more, up to 100 for the last.",
        "Plant them in the ten soil patches while you are a child and return as an adult for their grown routes."
      ],
      "sources": [
        "g08"
      ],
      "note": "Ten beans cost 550 rupees in total. You can buy them over several visits; you do not need all ten to start planting.",
      "requires": [
        "Hyrule Field access"
      ]
    },
    "progress:28": {
      "name": "Obtain any usable bottle",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Day",
      "equipment": [],
      "steps": [
        "Travel to Castle Town after leaving Kokiri Forest.",
        "Visit the Potion Shop and accept the shopkeeper’s escaped-bug request.",
        "Use the bottle he lends you to catch the bug, then speak to him for the Red Potion reward.",
        "Use or empty the potion when appropriate so the bottle can hold bugs, fish, or other contents.",
        "Alternatively, complete the seven-Cucco request in Kakariko or Talon’s ranch game; any obtained bottle satisfies this milestone."
      ],
      "sources": [
        "r03"
      ],
      "note": "The remake adds the Potion Shop bottle early. You no longer have to finish the seven-Cucco request before obtaining your first bottle.",
      "requires": [
        "Hyrule Field access"
      ]
    },
    "progress:29": {
      "name": "Open the Happy Mask Shop sequence",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "Zelda Letter"
      ],
      "steps": [
        "Take Zelda’s Letter to the guard at Kakariko’s Death Mountain Trail gate.",
        "Show it to open the route and finish his request about the popular mask for his child.",
        "Return to Castle Town during daylight and enter the Happy Mask Shop, identifiable by its large mask sign.",
        "Speak to the shopkeeper, listen to the loan-and-repayment rules, and borrow the Keaton Mask.",
        "Wear it back to the same mountain-gate guard to start the four-mask sales sequence."
      ],
      "sources": [
        "c04"
      ],
      "note": "This is the Death Mountain guard in Kakariko, not a guard outside Hyrule Castle.",
      "requires": [
        "Event:mountain-gate"
      ]
    },
    "Equipment:0": {
      "name": "Hylian Shield",
      "area": "Graveyard",
      "age": "Both",
      "time": "Night",
      "equipment": [
        "Sun Song"
      ],
      "steps": [
        "Enter the Graveyard behind Kakariko after dark.",
        "Inspect the movable graves near the Royal Family’s Tomb and descend into the shield-chest grave.",
        "Stun the enemy with Sun’s Song and open its chest."
      ],
      "sources": [
        "c07"
      ],
      "note": "This is a different grave from the Heart Piece chest.",
      "requires": [
        "Hyrule Field access",
        "Sun Song"
      ]
    },
    "Equipment:1": {
      "name": "Mirror Shield",
      "area": "Spirit Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Adult Spirit Temple route"
      ],
      "steps": [
        "Follow the adult temple route to the Iron Knuckle encounter.",
        "Defeat it, then take the doorway out to the Colossus balcony.",
        "Open the equipment chest outside; equip the shield for reflected-light puzzles."
      ],
      "sources": [
        "fb-gear"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Silver Gauntlets",
        "Hookshot",
        "Zelda Lullaby"
      ]
    },
    "Equipment:2": {
      "name": "Goron Tunic",
      "area": "Goron City",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Bomb Bag"
      ],
      "steps": [
        "Find the small rolling Goron in adult Goron City.",
        "Stop him with a bomb and finish his conversation about Darunia.",
        "Agree to help; accept and equip the red, heat-resistant tunic."
      ],
      "sources": [
        "c25"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Bomb Bag"
      ]
    },
    "Equipment:3": {
      "name": "Zora Tunic",
      "area": "Zora Domain",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Bottle",
        "Blue Fire"
      ],
      "steps": [
        "Bottle Blue Fire from the Ice Cavern.",
        "Return to frozen King Zora in the Domain and release it beside his red ice.",
        "Speak to the thawed king for the tunic; equip it before deep-water trips."
      ],
      "sources": [
        "c28"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Event:king-thawed"
      ]
    },
    "Equipment:4": {
      "name": "Hover Boots",
      "area": "Shadow Temple",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Shadow Temple entrance open"
      ],
      "steps": [
        "Warp to the Graveyard with Nocturne of Shadow and open the temple entrance.",
        "On the early B1 route, find and defeat Dead Hand in the misty chamber.",
        "Open the reward chest and equip the boots to cross short gaps."
      ],
      "sources": [
        "fb-gear"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Nocturne of Shadow",
        "Din Fire",
        "Lens of Truth",
        "Magic"
      ]
    },
    "Equipment:5": {
      "name": "Light Arrows",
      "area": "Temple of Time",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Five adult temples cleared"
      ],
      "steps": [
        "Finish the five adult temples and awaken their sages.",
        "Return to the Temple of Time as an adult.",
        "Complete Zelda’s story scene and receive the Light Arrows."
      ],
      "sources": [
        "nl-arrows"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Event:forest",
        "Event:fire",
        "Event:water",
        "Event:shadow",
        "Event:spirit"
      ]
    },
    "Equipment:6": {
      "name": "Giant’s Knife",
      "area": "Goron City",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "200 rupees"
      ],
      "steps": [
        "Enter adult Goron City and find Medigoron’s large forge alcove in the tunnels.",
        "Speak to Medigoron and buy the two-handed Giant’s Knife for 200 rupees.",
        "Keep this purchase separate from the repaired Biggoron Sword at the end of the trading quest."
      ],
      "sources": [
        "r14"
      ],
      "note": "",
      "requires": [
        "Adult access"
      ]
    },
    "Equipment:7": {
      "name": "First Bombchus",
      "area": "Hyrule Castle Town",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "Bombchu Bowling open",
        "Rupees"
      ],
      "steps": [
        "Enter Bombchu Bowling after its opening story requirement is met.",
        "Pay the attendant and clear all three lane targets in one game.",
        "Claim the first Bombchu bundle; later rounds have separate bag and Heart Piece prizes."
      ],
      "sources": [
        "c15"
      ],
      "note": "",
      "requires": [
        "Event:dodongo"
      ]
    },
    "Equipment:8": {
      "name": "First Deku Sticks",
      "area": "Kokiri Forest",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Sword"
      ],
      "steps": [
        "Find a Deku Baba in Kokiri Forest.",
        "Cut its upright stem.",
        "Collect the dropped stick and check your item menu."
      ],
      "sources": [
        "c01"
      ],
      "note": "",
      "requires": [
        "Kokiri Sword"
      ]
    },
    "Equipment:9": {
      "name": "First Deku Nuts",
      "area": "Deku Tree",
      "age": "Child",
      "time": "Any time",
      "equipment": [
        "Sword"
      ],
      "steps": [
        "Enter the Great Deku Tree and approach a Deku Baba.",
        "Defeat its biting head and collect the dropped nut.",
        "Check the item menu; throwing a nut briefly stuns nearby enemies."
      ],
      "sources": [
        "c02"
      ],
      "note": "",
      "requires": [
        "Deku Tree access",
        "Sword"
      ]
    },
    "Equipment:10": {
      "name": "Echo Gem: 20-token reward",
      "area": "Kakariko",
      "age": "Both",
      "time": "Any time",
      "equipment": [
        "20 Gold Skulltula tokens"
      ],
      "steps": [
        "Collect 20 distinct tokens, including the pickups left after defeating each spider.",
        "Enter the House of Skulltula in Kakariko and speak to the restored family members.",
        "Claim the Echo Gem and equip it from your inventory.",
        "Use its feedback to narrow down nearby spiders, then inspect the walls, trees and ceilings."
      ],
      "sources": [
        "click-echo"
      ],
      "note": "",
      "requires": [
        "20 Gold Skulltula tokens",
        "Upgrade:10"
      ]
    },
    "progress:30": {
      "name": "Learn Epona’s Song",
      "area": "Lon Lon Ranch",
      "age": "Child",
      "time": "Day",
      "equipment": [
        "Ocarina"
      ],
      "steps": [
        "Enter Lon Lon Ranch as a child and find Malon in the horse paddock.",
        "Speak to her, then take out your Ocarina when she invites you to play.",
        "Repeat the displayed lesson until Epona’s Song is saved in your songbook."
      ],
      "sources": [
        "c08"
      ],
      "note": "",
      "requires": [
        "Ocarina",
        "Event:talon-awake"
      ],
      "type": "Song"
    },
    "progress:31": {
      "name": "Learn Minuet of Forest",
      "area": "Sacred Forest Meadow",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Ocarina",
        "Hookshot"
      ],
      "steps": [
        "Return through the Lost Woods as an adult to the Sacred Forest Meadow.",
        "Pass the Moblin maze and the large final guard.",
        "Meet Sheik near the Forest Temple approach and complete the displayed Ocarina lesson."
      ],
      "sources": [
        "c22"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Hookshot",
        "Saria Song",
        "Ocarina"
      ],
      "type": "Song"
    },
    "progress:32": {
      "name": "Learn Prelude of Light",
      "area": "Temple of Time",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Ocarina",
        "Forest Temple cleared"
      ],
      "steps": [
        "Return to the Temple of Time after clearing the Forest Temple.",
        "Approach Sheik on the raised platform near the sword chamber.",
        "Repeat both lesson phrases until Prelude of Light appears in the songbook."
      ],
      "sources": [
        "c24"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Event:forest",
        "Ocarina"
      ],
      "type": "Song"
    },
    "progress:33": {
      "name": "Learn Bolero of Fire",
      "area": "Death Mountain Crater",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Ocarina",
        "Goron Tunic",
        "Hookshot"
      ],
      "steps": [
        "Enter the crater as an adult with heat protection.",
        "Follow the lower route toward the Fire Temple approach and meet Sheik.",
        "Repeat the displayed Ocarina lesson to learn Bolero of Fire.",
        "Its warp returns you to the crater pedestal; plant the nearby bean when visiting as a child."
      ],
      "sources": [
        "s4-songs"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Goron Tunic",
        "Hookshot",
        "Ocarina"
      ],
      "type": "Song"
    },
    "progress:34": {
      "name": "Learn Serenade of Water",
      "area": "Ice Cavern",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Ocarina",
        "Bottle",
        "Blue Fire"
      ],
      "steps": [
        "Follow the Ice Cavern’s Blue Fire route to the White Wolfos chamber.",
        "Defeat it and collect the Iron Boots chest.",
        "Stay for Sheik’s lesson and repeat the Ocarina melody to learn Serenade of Water."
      ],
      "sources": [
        "c28"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Iron Boots",
        "Ocarina"
      ],
      "type": "Song"
    },
    "progress:35": {
      "name": "Learn Nocturne of Shadow",
      "area": "Kakariko",
      "age": "Adult",
      "time": "Night / story event",
      "equipment": [
        "Ocarina",
        "Forest, Fire and Water temples cleared"
      ],
      "steps": [
        "Return to adult Kakariko after completing the Forest, Fire and Water temples.",
        "Enter the village and finish its story event.",
        "Meet Sheik and repeat the Ocarina lesson.",
        "Use the learned warp to reach the ledge above the Graveyard and approach the Shadow Temple."
      ],
      "sources": [
        "c31"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Event:forest",
        "Event:fire",
        "Event:water",
        "Ocarina"
      ],
      "type": "Song"
    },
    "progress:36": {
      "name": "Learn Requiem of Spirit",
      "area": "Desert Colossus",
      "age": "Adult",
      "time": "Any time",
      "equipment": [
        "Ocarina",
        "Gerudo Card",
        "Desert crossing equipment"
      ],
      "steps": [
        "Cross the Haunted Wasteland from the fortress to Desert Colossus as an adult.",
        "Visit the Spirit Temple entrance, then return outside to trigger Sheik’s encounter.",
        "Repeat the displayed Ocarina lesson to learn Requiem of Spirit.",
        "The song lets you return here as a child for Nabooru’s route."
      ],
      "sources": [
        "s4-songs"
      ],
      "note": "",
      "requires": [
        "Adult access",
        "Ocarina",
        "Gerudo Card",
        "Lens of Truth",
        "Magic",
        {
          "any": [
            "Longshot",
            "Hover Boots"
          ]
        }
      ],
      "type": "Song"
    },
    "Side Quest:13": {
      "name": "House of Skulltula: 40-token Bombchus",
      "area": "Kakariko",
      "age": "Both",
      "time": "Any time",
      "equipment": [
        "40 Gold Skulltula tokens"
      ],
      "steps": [
        "Collect 40 distinct Skulltula tokens.",
        "Return to the House of Skulltula in Kakariko.",
        "Speak to the restored family and claim the 20-Bombchu reward."
      ],
      "sources": [
        "n01"
      ],
      "note": "",
      "requires": [
        "40 Gold Skulltula tokens",
        "Upgrade:11"
      ]
    },
    "Event:dodongo": {
      "name": "Clear Dodongo Cavern — Goron’s Ruby",
      "area": "Dodongo Cavern",
      "age": "Child",
      "type": "Event",
      "time": "Story event",
      "equipment": [],
      "requires": [
        "Goron Bracelet",
        "Bomb Bag",
        "Deku Shield"
      ],
      "steps": [
        "Defeat King Dodongo in this dungeon.",
        "Enter the blue exit warp after the fight.",
        "Finish the scene and receive the Goron’s Ruby."
      ],
      "sources": [
        "v6-medallions"
      ],
      "note": ""
    },
    "Event:jabu": {
      "name": "Clear Jabu-Jabu — Zora’s Sapphire",
      "area": "Jabu-Jabu Belly",
      "age": "Child",
      "type": "Event",
      "time": "Story event",
      "equipment": [],
      "requires": [
        "Event:king-moved",
        "Boomerang",
        "Slingshot"
      ],
      "steps": [
        "Defeat Barinade in this dungeon.",
        "Enter the blue exit warp after the fight.",
        "Finish the scene and receive the Zora’s Sapphire."
      ],
      "sources": [
        "v6-medallions"
      ],
      "note": ""
    },
    "Event:forest": {
      "name": "Clear Forest Temple — Forest Medallion",
      "area": "Forest Temple",
      "age": "Adult",
      "type": "Event",
      "time": "Story event",
      "equipment": [],
      "requires": [
        "Adult access",
        "Hookshot",
        "Bow",
        "Saria Song"
      ],
      "steps": [
        "Defeat Phantom Ganon in this dungeon.",
        "Enter the blue exit warp after the fight.",
        "Finish the scene and receive the Forest Medallion."
      ],
      "sources": [
        "v6-medallions"
      ],
      "note": ""
    },
    "Event:fire": {
      "name": "Clear Fire Temple — Fire Medallion",
      "area": "Fire Temple",
      "age": "Adult",
      "type": "Event",
      "time": "Story event",
      "equipment": [],
      "requires": [
        "Adult access",
        "Goron Tunic",
        "Hookshot",
        "Hammer"
      ],
      "steps": [
        "Defeat Volvagia in this dungeon.",
        "Enter the blue exit warp after the fight.",
        "Finish the scene and receive the Fire Medallion."
      ],
      "sources": [
        "v6-medallions"
      ],
      "note": ""
    },
    "Event:water": {
      "name": "Clear Water Temple — Water Medallion",
      "area": "Water Temple",
      "age": "Adult",
      "type": "Event",
      "time": "Story event",
      "equipment": [],
      "requires": [
        "Adult access",
        "Iron Boots",
        "Zora Tunic",
        "Longshot",
        "Zelda Lullaby"
      ],
      "steps": [
        "Defeat Morpha in this dungeon.",
        "Enter the blue exit warp after the fight.",
        "Finish the scene and receive the Water Medallion."
      ],
      "sources": [
        "v6-medallions"
      ],
      "note": ""
    },
    "Event:shadow": {
      "name": "Clear Shadow Temple — Shadow Medallion",
      "area": "Shadow Temple",
      "age": "Adult",
      "type": "Event",
      "time": "Story event",
      "equipment": [],
      "requires": [
        "Adult access",
        "Nocturne of Shadow",
        "Din Fire",
        "Lens of Truth",
        "Magic",
        "Hover Boots",
        "Bow",
        "Hookshot"
      ],
      "steps": [
        "Defeat Bongo Bongo in this dungeon.",
        "Enter the blue exit warp after the fight.",
        "Finish the scene and receive the Shadow Medallion."
      ],
      "sources": [
        "v6-medallions"
      ],
      "note": ""
    },
    "Event:spirit": {
      "name": "Clear Spirit Temple — Spirit Medallion",
      "area": "Spirit Temple",
      "age": "Adult",
      "type": "Event",
      "time": "Story event",
      "equipment": [],
      "requires": [
        "Adult access",
        "Silver Gauntlets",
        "Mirror Shield",
        "Longshot",
        "Zelda Lullaby"
      ],
      "steps": [
        "Defeat Twinrova in this dungeon.",
        "Enter the blue exit warp after the fight.",
        "Finish the scene and receive the Spirit Medallion."
      ],
      "sources": [
        "v6-medallions"
      ],
      "note": ""
    },
    "Event:talon-awake": {
      "name": "Wake Talon at the castle moat",
      "area": "Hyrule Castle",
      "age": "Child",
      "type": "Event",
      "time": "Story event",
      "equipment": [],
      "requires": [
        "Hyrule Field access"
      ],
      "steps": [
        "Get Malon’s egg and let it hatch.",
        "Use the Cucco beside sleeping Talon at the castle moat.",
        "Finish his conversation so he returns to the ranch."
      ],
      "sources": [
        "c05"
      ],
      "note": "Check after receiving the stated reward or completing this event."
    },
    "Event:mountain-gate": {
      "name": "Show Zelda’s Letter — open mountain gate",
      "area": "Kakariko",
      "age": "Child",
      "type": "Event",
      "time": "Story event",
      "equipment": [],
      "requires": [
        "Zelda Letter"
      ],
      "steps": [
        "Approach the guard above Kakariko.",
        "Show him Zelda’s Letter and finish the conversation.",
        "Confirm the gate toward Death Mountain is open."
      ],
      "sources": [
        "g03"
      ],
      "note": "Check after receiving the stated reward or completing this event."
    },
    "Event:king-moved": {
      "name": "Deliver Ruto’s Letter — King Zora moves",
      "area": "Zora Domain",
      "age": "Child",
      "type": "Event",
      "time": "Story event",
      "equipment": [],
      "requires": [
        "Bottle:3",
        "Zelda Lullaby"
      ],
      "steps": [
        "Find King Zora on the upper throne platform.",
        "Show Ruto’s Letter from its bottle.",
        "Wait for him to move and open the fountain route."
      ],
      "sources": [
        "g09"
      ],
      "note": "Check after receiving the stated reward or completing this event."
    },
    "Event:blue-fire": {
      "name": "Reach Blue Fire in the Ice Cavern",
      "area": "Ice Cavern",
      "age": "Adult",
      "type": "Event",
      "time": "Story event",
      "equipment": [],
      "requires": [
        "Adult access",
        "Bottle",
        "Zelda Lullaby"
      ],
      "steps": [
        "Cross the frozen fountain to the Ice Cavern.",
        "Reach its first Blue Fire source with a bottle.",
        "Bottle the flame; this records access to refills, not current stock."
      ],
      "sources": [
        "nl-ice"
      ],
      "note": "Check after receiving the stated reward or completing this event."
    },
    "Event:king-thawed": {
      "name": "Thaw King Zora with Blue Fire",
      "area": "Zora Domain",
      "age": "Adult",
      "type": "Event",
      "time": "Story event",
      "equipment": [],
      "requires": [
        "Adult access",
        "Event:blue-fire",
        "Bottle"
      ],
      "steps": [
        "Return to the frozen king with bottled Blue Fire.",
        "Release it beside his red ice.",
        "Wait until the ice melts and speak to him."
      ],
      "sources": [
        "v6-story"
      ],
      "note": "Check after receiving the stated reward or completing this event."
    },
    "Event:time-travel": {
      "name": "Unlock return to Young Link",
      "area": "Temple of Time",
      "age": "Adult",
      "type": "Event",
      "time": "Story event",
      "equipment": [],
      "requires": [
        "Adult access",
        "Event:forest",
        "Prelude of Light"
      ],
      "steps": [
        "Return to the sword pedestal after the Forest Temple.",
        "Finish Sheik’s explanation of returning to childhood.",
        "Place the Master Sword in its pedestal to become Young Link."
      ],
      "sources": [
        "v6-story"
      ],
      "note": "Check after receiving the stated reward or completing this event."
    },
    "Event:well-drained": {
      "name": "Drain Kakariko’s well",
      "area": "Windmill",
      "age": "Child",
      "type": "Event",
      "time": "Story event",
      "equipment": [],
      "requires": [
        "Song of Storms",
        "Ocarina"
      ],
      "steps": [
        "Enter the windmill as Young Link.",
        "Play Song of Storms to the musician.",
        "Finish the scene and confirm the village well has drained."
      ],
      "sources": [
        "c32"
      ],
      "note": "Check after receiving the stated reward or completing this event.",
      "timelineStages": [
        {
          "key": "learn-storms",
          "age": "Adult",
          "title": "Learn Song of Storms",
          "requires": [
            "Adult access",
            "Ocarina"
          ],
          "evidence": "progress:20",
          "completeAlso": [
            "progress:20"
          ]
        },
        {
          "key": "drain",
          "age": "Child",
          "title": "Drain Kakariko’s well",
          "requires": [
            "Song of Storms",
            "Ocarina"
          ]
        }
      ],
      "crossTime": true
    },
    "Event:ranch-restored": {
      "name": "Return to Malon after winning Epona",
      "area": "Lon Lon Ranch",
      "age": "Adult",
      "type": "Event",
      "time": "Story event",
      "equipment": [],
      "requires": [
        "Adult access",
        "Epona"
      ],
      "steps": [
        "Leave the ranch after winning Epona.",
        "Return during daylight after the ranch scene has settled.",
        "Speak to Malon to open her riding-course challenge."
      ],
      "sources": [
        "nl-epona"
      ],
      "note": "Check after receiving the stated reward or completing this event."
    },
    "Event:ganon-bridge": {
      "name": "Open the sages’ bridge to Ganon Castle",
      "area": "Ganon Castle",
      "age": "Adult",
      "type": "Event",
      "time": "Story event",
      "equipment": [],
      "requires": [
        "Adult access",
        "Equipment:5",
        "Event:forest",
        "Event:fire",
        "Event:water",
        "Event:shadow",
        "Event:spirit"
      ],
      "steps": [
        "Receive Zelda’s Light Arrows at the Temple of Time.",
        "Return to the ruined castle grounds.",
        "Watch the sages create the bridge and cross it."
      ],
      "sources": [
        "v6-story"
      ],
      "note": "Check after receiving the stated reward or completing this event."
    }
  }
};
