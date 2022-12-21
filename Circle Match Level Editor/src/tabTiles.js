import at from "./aliasTiles";

const tabTiles = {
    circles: {
        name: "Circles & Tiles",
        tiles: {
            name: "Tiles",
            tiles: ["--","-O","*S"]
        },
        circles: {
            name: "Regular Circles",
            tiles: ["**","*0","*1","*2","*3","*4","*5"]
        },
        specials: {
            name: "Special Circles",
            tiles: ["*-","*|","*O","*/","*+"]
        }

    },
    blockers: {
        name: "Blockers",
        metalBalls: {
            name: "Metal Balls",
            tiles: ["M1", "M2", "M3", "M4", "M5", "M6"]
        },
        drains: {
            name: "Drains",
            tiles: ["D1", "D2"]
        },
        bubbles: {
            name: "Bubbles",
            tiles: ["b1", "b2", "b3"]
        },
        watermelons: {
            name: "Watermelons",
            tiles: ["W1", "W2", "W3"]
        }
    },
    misc: {
        name: "Miscellanous",
        globes: {
            name: "Globes & their Exit",
            "tiles": ["G1", "G2", "G-"]
        },
        buttons: {
            name: "Buttons",
            tiles: ["B1", "B2", "B3"]
        }
    },
    all: {
        name: "All Tiles",
        tiles: {
            name: "",
            tiles: at.flat()
        }
    },
    cannons: {
        name: "Cannons",
        layered: {
            name: "Layered Cannons",
            tiles: ["CW"]
        }
    }
}

export default tabTiles;