# Building Levels

***LOL, just use my editor made specifically for this! :D***
## JSON component
The JSON component should/can have these properties:

`moves`/`time`: *REQUIRED* The maximum *number of moves* **/** *amount of time* the player can use to beat the level.

`colours`: *REQUIRED* The amount of colours that can spawn in the level.

`width`: *OPTIONAL* If specified, tells the width of the level. Defaults to 9.

`height`: *OPTIONAL* If specified, tells the height of the level. Defaults to 9.

`increaseColours`: *OPTIONAL* If specified and is `true`, it increases the number of colours by 1, every 10 seconds, when the level is completed. Defaults to `false`.

`immediateShowdown`: *OPTIONAL* If specified and is `true`, starts the Circle Showdown after reaching all goals of the level. Defaults to `true`.

`tilemap`: *REQUIRED* The tilemap. It is typed like this:
```json
"tilemap": [
    "1,2,3,4,5,6,7,8,9" // First row
    "1,2,3,4,5,6,7,8,9" // Second row
    // .
    // .
    // .
    "1,2,3,4,5,6,7,8,9" // Eighth row
    "1,2,3,4,5,6,7,8,9" // Ninth row
]
```

### Template (remove the comments)
```json
{
    "moves": 21, // Moves
    "targets": [50000, 80000, 120000], // Score targets
    "colours": 4, // Number of colours
    "tilemap": [ // Tilemap
        "***S,***S,***S,***S,***S,***S,***S,***S,***S",
        "**,**,**,**,**,**,**,**,**",
        "**,**,**,**,**,**,**,**,**",
        "**T001,M3T003,**T005,M3T007,**T009,M3T011,**T013,M3T015,**T017",
        "--,--,--,--,--,--,--,--,--",
        "**T002,**T004,**T006,**T008,**T010,**T012,**T014,**T016,**T018",
        "**,**,**,**,**,**,**,**,**",
        "**,**,**,**,**,**,**,**,**",
        "**,**,**,**,**,**,**,**,**"
    ],
    "goals": [ // Goals
        {
            "type": "radial_circle",
            "amount": 5
        },
        {
            "type": "striped_circle",
            "amount": 5
        }
    ]
}
```

## Goals for level building:

Goals are objectives of the player to finish the level.
The `goals` array contains a list of goal objects.
The `type` string of each one determines its type. Use them given below.
For example, here is a red circle goal, where you need 200 of them:
```json
    "goals": [
    // .
    // .
       {
        "type": "red_circle",
        "amount: 200
       },
    // .
    // . 
    ]
```

Here is the list of them, fully programmed:
- `button`: Clear buttons!
    - `amount`: *OPTIONAL* ***LAYERED*** If specified, the number of buttons to clear to finish this goal. Otherwise, the player has to collect all of them.
- `score`: Reach the first score target (red star)!
- `metal_ball`: Collect metal balls!
    - `amount`: *REQUIRED* ***LAYERED*** The number of metal balls to collect to finish this goal.
- `(blue/green/orange/purple/red/yellow)_circle`: Collect metal balls!
    - `amount`: *REQUIRED* The number of circles of a specific colour to collect to finish this goal.
- `striped_circle`: Collect striped circles!
    - `amount`: *REQUIRED* The number of striped circles to collect to finish this goal.
- `radial_circle`: Collect radial circles!
    - `amount`: *REQUIRED* The number of radial circles to collect to finish this goal.
- `rainbow_circle`: Collect rainbow circles!
    - `amount`: *REQUIRED* The number of rainbow circles to collect to finish this goal.


## Keys for level building:
Each tile occupies two (or four) characters.
A tile looke like this:
```js
.
.
[...,"*5*O*S",...],
.
.
```
Here, this tile would create a yellow radially striped circle, with a spawn point.

### Tiles
`--` - No tile present

`-O` - Tile with nothing in it

`T`*`#`* - Marks a teleporter
#### Rules for teleporters
- The number **NEEDS** to be 3 characters long.
- An even number indicates a teleporter entrance, and an odd number indicates a teleporter exit.
- Examples:
    - `T001`: The teleporter entrance of the first teleporter pair. (Circles move to T002.)
    - `T052`: The teleporter exit of the 26th teleporter pair. (Circles enter from T051)
*Anything else - Filled tile with something in it*

### CIRCLES
`**` - Random circle

`*S` - Spawn point (it spawns random circles)

`*+` - Extra time circles (+5) (Should be used in time levels only.)
#### FIXED CIRCLES
`*0` - Fixed blue circle

`*1` - Fixed green circle

`*2` - Fixed orange circle

`*3` - Fixed purple circle

`*4` - Fixed red circle

`*5` - Fixed yellow circle
#### SPECIAL CIRCLES
`*-` - Horizontal striped circle

`*|` - Vertical striped circle

`*O` - Radially striped circle

`*/` - Rainbow circle
### Buttons
`B1` - Single-layered button

`B2` - Double-layered button (sewd once)

`B3` - Tripled-layered button (sewd twice)
### Metal Balls
`M1` - 1-layered metal ball

`M2` - 2-layered metal ball

.

.

.

`M6` - 6-layered metal ball
### Watermelons
`M1` - 1-layered watermelon

`M2` - 2-layered watermelon

`M3` - 3-layered watermelon
## Blockers
`D1` - Single layered drain

`D2` - Double layered drain

`b1` - Single layered bubble

`b2` - Double layered bubble

`b3` - Triple layered bubble
## Globes
`G1` - Globe (not held)

`G2` - Globe (held)

`G-` - Globe exit
## Cannons
`CW` - Watermelon cannon