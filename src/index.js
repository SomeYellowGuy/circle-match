import bg from "./files/bg.png";
import infoIngame from "./files/infoIngame.png";
import tileMaps from "./tiles.js";
import tilesImg from "./files/tiles.png";
import UI from "./files/ui.png"
import {
    WIDTH, HEIGHT, TEST_MODE, LEVELS_COUNT,
    SWIPE_THRESHOLD,
    MAX_BOARD_LOOPS, MAX_CIRCLE_LOOPS,
    colourList,
    INITIAL_GOALS, CANNOT_FALL, CANNOT_MATCH,
    NOT_COLLECTED,
    RGBHSV,
    INITIAL_SAVE,
    LS_COLOURS,
    MESSAGES
} from "./files/constants.js"
import "./styles.css";

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d')

let GRID_WIDTH = 9;
let GRID_HEIGHT = 9;
let X_OFFSET = 450 + 32;
let Y_OFFSET = 10 + 32;

let ti = 0;
let specialsToMake = [];
let goalAnim = [];
let showGoalAnim = [];
const sCircles = [
    "blueCircle",
    "greenCircle",
    "orangeCircle",
    "purpleCircle",
    "redCircle",
    "yellowCircle"
]

let mouse = {
    down: null,
    justDown: false,
    up: null,
    move: [0, 0],
    held: false,
    m: [1, 1],
    swipeStatus: 0,
    swipeFrom: [0, 0],
    swipeTo: [0, 0]
}

let loadingDone = false;
let immediateShowdown = true;
let targets = [10000, 20000, 30000];
let goalsDone = false;
let tileImages = [];
let matchCheck = null;
let isRCMatch = false;
let specialComboType = null;
let lastActualMatch = 0;
let endMoves = null;
let timeMode = false;
let time = 100;
let maxTime = 100;
let cannonData = [];

const clickCanvas = function (event) {
    // up
    const m = getMousePos(canvas, event);
    mouse.up = [m.x * WIDTH / mouse.m[0], m.y * HEIGHT / mouse.m[1]]
    mouse.held = false;
}

const clickCanvasDown = function (event) {
    // down
    const m = getMousePos(canvas, event);
    mouse.justDown = true;
    mouse.down = [m.x * WIDTH / mouse.m[0], m.y * HEIGHT / mouse.m[1]]
    mouse.held = true;
}

const clickCanvasMove = function (event) {
    // moving
    const m = getMousePos(canvas, event);
    mouse.move = [m.x * WIDTH / mouse.m[0], m.y * HEIGHT / mouse.m[1]]
}

// From user1693593
// (https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas)
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

let lastFrameDate = new Date();
let slide = false;
let matchedTiles = [];
let canMakeMatch = true;
let goingToMatch = [];
let moves = 3;
let goalsCollected = INITIAL_GOALS;
let goalsAnimCollected = { ...INITIAL_GOALS, ...{ button: 0 } };
let score = 0;
let cascades = 0;
let said = 1;
let levelSelect = false;
let messageAnim = null;
let hasMadeMatch = false;
let timeUpdate = new Date();

let spawningTiles = [];
let buttonTiles = [];
let encasingBlockerTiles = [];
let teleporters = [];
let globeExitTiles = [];
let cannonTiles = [];

let numberOfColours = 6;
let prevTiles = null;
let lastMatch = new Date();
let fromTile = [0, 0]; let toTile = [0, 0];

let tileImage = new Image()
tileImage.src = tilesImg;

let tileImagePosChanges = [

];

let level = 1;
let resetStreak = 0;
let levelEnd = false;

let prevChanges;
let matchHappening = false;
let showdownStarted = false;

let tiles;
let initialButtons = 0;
let levelColours = Array(...Array(LEVELS_COUNT)).map(() => LS_COLOURS.none);
let levelStars = Array(...Array(LEVELS_COUNT)).map(() => [1, 2, 3]);
let save;

try {
    if (window.localStorage) {
        // Supports!
        if (!localStorage.getItem("circle.match.save")) {
            // Make the save file!
            console.log("Generating save!")
            localStorage.setItem("circle.match.save", JSON.stringify(INITIAL_SAVE))
        }
    }
} catch (e) {
    console.warn("Your user settings don't allow local storage to be used! The game will break! Allow cookies for this game to have a NON-BROKEN experience!")
}

function load() {
    for (let i = 0; i < LEVELS_COUNT; i++) {
        getLevelC(i + 1)
            .then((r) => {
                levelColours[i] = r;
            })
        getLevelTargets(i + 1)
            .then((r) => {
                levelStars[i] = r;
            })
    }
    init();
}

let ticks = 0;
let goals = [];
let OBJ_SIZE = 50;
let targetAnim = [null, null, null];
let stripedAnim = [];
let playingLevel = false;
let canPlay = false;
let iColours = false;

let lsLastScrollY = 0;
let lsScrollY = 0;
let levelHover = [...Array(LEVELS_COUNT)].map((_, i) => 0);
let levelHard = 0;

let bgImage = new Image()
bgImage.src = bg;
let iiImage = new Image()
iiImage.src = infoIngame;
// Show menu
let UIImage = new Image();
UIImage.src = UI;

function tick() {
    try {
        save = JSON.parse(localStorage.getItem("circle.match.save"));
    } catch (e) {
        save = INITIAL_SAVE;
    }
    sizeCanvas();
    if (playingLevel) {
        ctx.drawImage(bgImage, 0, 0, WIDTH, HEIGHT)
        ctx.drawImage(iiImage, levelHard * 200, 0, 200, 576, /**/ 0, 0, 240, HEIGHT)
        // Moves
        let careful = 0;
        if (moves <= 5) {
            careful = Math.sin(new Date() / 190) * 12;
        }
        ctx.font = "bold " + ((1 - Math.min(1, (new Date() - lastActualMatch) / 200) ** 1.02) * 100 + 100 + careful) + "px Segoe UI";
        ctx.textAlign = "center";
        let c = levelHard > 1 ? 255 : 0;
        ctx.fillStyle = "rgba(" + c + "," + c + "," + c + ",0.9)";
        if (timeMode) {
            ctx.beginPath();
            let cx = 115;
            let cy = 130;
            ctx.fillStyle = "rgba(" + c + "," + c + "," + c + ",0.4)";
            ctx.arc(cx, cy, 70, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = "rgba(" + c + "," + c + "," + c + ",0.5)";
            ctx.moveTo(cx, cy);
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(Math.PI * 3 / 2);
            ctx.arc(0, 0, 70, -time / maxTime * Math.PI * 2, 0);
            ctx.translate(-cx, -cy);
            ctx.restore();
            ctx.lineTo(cx, cy);
            ctx.fill();
            c = 255 - c;
            ctx.fillStyle = "rgba(" + c + "," + c + "," + c + ",0.9)";
            const min = Math.floor((time + 1) / 60);
            const sec = Math.ceil(time % 60) % 60;
            ctx.font = "50px Segoe UI Semibold";
            ctx.fillText((min >= 10 ? "" : "0" + min) + ":" + (sec >= 10 ? "" : "0") + sec, cx, cy + 15);
        } else {
            ctx.fillText(moves, 110, 180)
            c = 255 - c;
        }
        c = 255 - c;
        // Level
        ctx.fillStyle = "rgba(" + c + "," + c + "," + c + ",0.9)";
        ctx.font = "40px Segoe UI Semibold";
        ctx.textAlign = "left"
        ctx.fillText("◍ " + level, 30, 50)

        // Goals
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        let roundRectPath = new Path2D();
        roundRectPath.roundRect(15, 210, 200, 310, 12);
        ctx.fill(roundRectPath);
        if (goals.length <= 3) {
            OBJ_SIZE = 80;
        } else {
            OBJ_SIZE = 50;
        }
        if (ticks % 3 === 0) {
            for (let goalType in { ...INITIAL_GOALS, ...{ button: 0 } }) {
                let goalC = goalAnim.filter(o => o.type === goalType);
                if (goalC.length > 0) {
                    showGoalAnim.push(goalC[0])
                    goalAnim = goalAnim.filter(o => o.id !== goalC[0].id);
                    setTimeout(() => { goalsAnimCollected[goalType]++; }, 800)
                }
            }
        }
        drawGoals();
        // Score bar: fill
        ctx.fillStyle = "rgba(0,0,0,0.3)";
        roundRectPath = new Path2D();
        roundRectPath.roundRect(15, 530, 200, 30, 12);
        ctx.fill(roundRectPath);
        // Score bar: actual score
        roundRectPath = new Path2D();
        const scoreMetre = Math.min(score / targets[2] * 200, 200);
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        roundRectPath.roundRect(15, 530, Math.max(scoreMetre, 30), 30, 12);
        ctx.fill(roundRectPath);
        ctx.fillStyle = "black";
        ctx.font = "32px Segoe UI Semibold";
        ctx.textAlign = "center";
        ctx.strokeStyle = "#222";
        for (let t = 0; t < 3; t++) {
            let target = targets[t];
            let meter = Math.min(target / targets[2] * 200, 200)
            ctx.lineWidth = targetAnim[t] ? 4 : 2
            ctx.beginPath();
            ctx.moveTo(15 + Math.max(meter, 30), 530);
            ctx.lineTo(15 + Math.max(meter, 30), 560);
            ctx.stroke();
            const tilemap = tileMaps["star" + (4 - (t + 1))];
            let s = 35;
            let a = 0;
            const exp = 1.8;
            if (score >= targets[t] && !targetAnim[t]) {
                collectGoal("score", 15 + Math.max(meter, 30) - s / 2, 565, "star3")
                targetAnim[t] = new Date();
            }
            if (targetAnim[t]) {
                a = Math.min(((new Date() - targetAnim[t]) / 300) ** exp, 1);
                s = s * (2.01 - a)

                ctx.save();
                let tx = 15 + Math.max(meter, 30);
                let ty = 565 + s / 2;
                ctx.translate(tx, ty);
                ctx.rotate((2 - a - 1) * 2)
                ctx.translate(-tx, -ty);
            }
            ctx.drawImage(tileImage, tilemap.x, tilemap.y, tilemap.s, tilemap.s,
                15 + Math.max(meter, 30) - s / 2, 565, s, s);
            if (targetAnim[t]) {
                ctx.restore()
            }
        }
        ctx.fillText(score, 15 + 100, 558 - 2)
        // draw tiles
        if (canPlay) {
            drawTiles(64);
            if (moves > 0 || (timeMode && time > 0)) checkForSwipe();
            prevChanges = tileImagePosChanges;
            executeMatches();
            // Count down time.
            if (timeMode && canMakeMatch && hasMadeMatch && time > 0) {
                let ms = new Date - lastFrameDate;
                time -= ms / 1000;
                if (time < 0) time = 0;
            }
            if (messageAnim) {
                if (endMoves || endMoves === 0) {
                    // Passed!
                    let dif = new Date() - messageAnim;
                    const width = 900;
                    const height = 600;
                    const x = (WIDTH - width) / 2;
                    const y = -(Math.max(0, 1000 - dif) ** 1.3) + (HEIGHT - height) / 2;
                    ctx.beginPath();
                    ctx.roundRect(x, y, width, height, 30);
                    //
                    ctx.fillStyle = "rgba(255,255,255,0.6)";
                    ctx.fill();
                    ctx.font = "bold 50px Segoe UI Semibold";
                    ctx.fillStyle = "black"
                    ctx.textAlign = "center";
                    ctx.fillText("Level " + level + " Complete!", WIDTH / 2, y + 70)
                    ctx.font = "bold 80px Segoe UI Semibold";
                    ctx.fillText("Score:", WIDTH / 2, y + 190)
                    ctx.fillText(score, WIDTH / 2, y + 280);
                    ctx.font = "bold 70px Segoe UI Semibold";
                    const continueButtonWidth = 400;
                    const cby = 150;
                    const cx = WIDTH / 2 - continueButtonWidth / 2 + 25;
                    const cy = y + height - cby + 20;
                    ctx.drawImage(UIImage, 128, 0, 256, 64, cx, cy, continueButtonWidth, continueButtonWidth / 4);
                    ctx.fillText("Continue", WIDTH / 2, y + height - 100 + 50);
                    for (let i = 0; i < 3; i++) {
                        const star = tileMaps["star" + (score >= targets[i] ? (3 - i) : "Disabled")];
                        ctx.drawImage(tileImage, star.x, star.y, star.s, star.s, WIDTH / 2 + (1 - i) * -90 - 30, y + height - 250, 85, 85);
                    }

                    if (new Date() - messageAnim > 500 && mouse.held &&
                        mouse.down[0] > cx && mouse.down[1] > cy &&
                        mouse.down[0] < cx + continueButtonWidth && mouse.down[1] < cy + continueButtonWidth / 4
                    ) {
                        // Click.
                        levelSelect = true;
                        canPlay = false;
                        playingLevel = false;
                        let newSave = save;
                        if (level == save.reachedLevel) newSave.reachedLevel++;
                        if (newSave.scores.length < level) {
                            newSave.scores.push(score);
                        } else if (newSave.scores[level - 1] <= score) {
                            newSave.scores[level - 1] = score;
                        }
                        try {
                            localStorage.setItem("circle.match.save", JSON.stringify(newSave));
                        } catch (e) {
                            console.error("This game doesn't work properly without cookies.")
                        }
                    }
                } else {
                    // Fail lol
                    let dif = new Date() - messageAnim;
                    const width = 900;
                    const height = 600;
                    const x = (WIDTH - width) / 2;
                    const y = -(Math.max(0, 1000 - dif) ** 1.3) + (HEIGHT - height) / 2;
                    ctx.beginPath();
                    ctx.roundRect(x, y, width, height, 30);
                    //
                    ctx.fillStyle = "rgba(255,220,220,0.6)";
                    ctx.fill();
                    ctx.font = "bold 50px Segoe UI Semibold";
                    ctx.fillStyle = "black"
                    ctx.textAlign = "center";
                    ctx.fillText("Level " + level + " Failed!", WIDTH / 2, y + 70);
                    const mes = (timeMode ? MESSAGES.fail_time : MESSAGES.fail_moves).split("\n");
                    for (let i = 0; i < mes.length; i++) ctx.fillText(mes[i], WIDTH / 2, y + 190 + 60 * i)
                    ctx.font = "bold 40px Segoe UI Semibold";
                    ctx.font = "bold 70px Segoe UI Semibold";
                    const continueButtonWidth = 400;
                    const cby = 150;
                    const cx = WIDTH / 2 - continueButtonWidth / 2 + 25;
                    const cy = y + height - cby + 20;
                    ctx.drawImage(UIImage, 128, 0, 256, 64, cx, cy, continueButtonWidth, continueButtonWidth / 4);
                    ctx.fillText("End Game", WIDTH / 2, y + height - 100 + 50);
                    if (new Date() - messageAnim > 500 && mouse.held &&
                        mouse.down[0] > cx && mouse.down[1] > cy &&
                        mouse.down[0] < cx + continueButtonWidth && mouse.down[1] < cy + continueButtonWidth / 4
                    ) {
                        // Click.
                        levelSelect = true;
                        canPlay = false;
                        playingLevel = false;
                    }
                }
            }
        }
    } else if (!levelSelect) {
        ctx.fillStyle = "#88ccff"
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        ctx.drawImage(UIImage, 0, 0, 128, 64, 500, 500 - 200, 300, 150)
        ctx.drawImage(UIImage, 128, 0, 224, 64, 500 - 110, 500, 525, 150)
        ctx.fillStyle = "rgba(0,0,0,0.9)";
        ctx.textAlign = "center";
        ctx.font = "170px Segoe UI Semibold";
        if (mouse.justDown && mouse.down &&
            mouse.down[0] > 500 && mouse.down[0] < 500 + 300 &&
            mouse.down[1] > 500 - 200 && mouse.down[1] < 500 + 150 - 200) {
            if (mouse.held) {
                playingLevel = true;
                loadLevel(save.reachedLevel)
                    .then((r) => {
                        tiles = r;
                        canPlay = true;
                        executeMatches();
                    });
            } else {
                ctx.globalAlpha = 0.9;
            }
        }
        if (mouse.down &&
            mouse.down[0] > 500 - 110 && mouse.down[0] < 500 - 110 + 525 &&
            mouse.down[1] > 500 && mouse.down[1] < 500 + 150) {
            if (mouse.held) {
                levelSelect = true;
                lsScrollY = -(Math.floor((save.reachedLevel - 1) / 5) * 1.5 * 140) + 700;
                ticks = 0;
            } else {
                ctx.globalAlpha = 0.9;
            }
        }
        ctx.font = "80px Segoe UI Semibold";
        ctx.drawImage(UIImage, 0, 64, 1024, 128, 50, 50, 1200, 150);
        ctx.globalAlpha = 1;
        ctx.fillText("Play", 500 + 150, 500 + 100 - 200)
        ctx.globalAlpha = 1;
        ctx.fillText("Level Select", 500 + 150, 500 + 100)
    } else {
        ctx.fillStyle = "#88ccff";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        ctx.font = "80px Segoe UI Semibold";
        ctx.textAlign = "center"
        const lsCover = 100;
        const levelScrollMax = -10;
        // Let's make the actual levels!
        if (mouse.move && mouse.move[1] > lsCover && mouse.move[1] < HEIGHT - 100 && mouse.held) lsScrollY -= (mouse.move[1] - lsLastScrollY) * 1.25;
        if (mouse.move && mouse.move[1] > lsCover && mouse.move[1] < HEIGHT - 100) lsLastScrollY = mouse.move[1];
        if (!mouse.held && lsScrollY > levelScrollMax) lsScrollY += (levelScrollMax - lsLastScrollY) * 0.1
        const maxS = Math.ceil(LEVELS_COUNT / 5) * -210 - 20;
        if (!mouse.held && lsScrollY < maxS) lsScrollY += (maxS - lsScrollY) * 0.1
        for (let l = 0; l < LEVELS_COUNT; l++) {
            const levelLength = 140;
            let innerLevel = levelColours[l];
            if (!innerLevel || innerLevel === "#666666") innerLevel = ["#666666"]
            let outerLevel = innerLevel.map(o => {
                let n = RGBHSV.HEXtoRGB(o);
                n[0] = n[0] / 2;
                n[1] = n[1] / 2;
                n[2] = n[2] / 2;
                return n;
            });
            outerLevel = "rgb(" + outerLevel.join(",") + ",1)";
            const lm = 4.5;

            const x = ((l % 5) * 1.5 + 0.5) * levelLength + 77;
            const y = HEIGHT / 2 - 150 + Math.floor(l / 5) * 1.5 * levelLength + lsScrollY;
            if (Math.abs(y) > 1000) continue;
            ctx.save();
            ctx.translate(x + levelLength / 2, y + levelLength / 2);
            if (mouse.move[0] > x && mouse.move[0] < x + levelLength &&
                mouse.move[1] > y && mouse.move[1] < y + levelLength &&
                levelHover[l] >= 0) {
                levelHover[l] += (1 - levelHover[l]) * 0.2
                if (mouse.justDown && mouse.up && mouse.move[1] > lsCover && mouse.move[1] < HEIGHT - 100 &&
                    mouse.held && ticks > 20 && save.reachedLevel > l
                    && levelColours[l][0] !== LS_COLOURS.none) {
                    // Play level!
                    playingLevel = true;
                    loadLevel(l + 1)
                        .then((r) => {
                            tiles = r;
                            canPlay = true;
                            executeMatches();
                        });
                }
            } else {
                levelHover[l] -= levelHover[l] * 0.2;
            }
            const rotate = levelStars[l][1] === 0
            ctx.scale(1 + levelHover[l] * 0.25, 1 + levelHover[l] * 0.25);
            if (rotate) ctx.rotate(Math.PI / 2);
            ctx.translate(-x - levelLength / 2, -y - levelLength / 2);
            const radius = levelLength / 1.75;
            for (let g = 0; g < innerLevel.length; g++) {
                let start = g / innerLevel.length;
                let end = start + 1 / innerLevel.length;
                ctx.beginPath();
                ctx.moveTo(x + radius * 7 / 8, y + radius * 7 / 8)
                ctx.fillStyle = innerLevel[g];
                ctx.arc(x + radius * 7 / 8, y + radius * 7 / 8, radius, start * (Math.PI * 2), end * (Math.PI * 2));
                ctx.lineTo(x + radius * 7 / 8, y + radius * 7 / 8);
                ctx.fill();
                ctx.strokeStyle = "rgba(0,0,0,0.4)"
                ctx.beginPath();
                const h = 5;
                ctx.arc(x + radius * 7 / 8, y + radius * 7 / 8, radius - h, start * (Math.PI * 2), end * (Math.PI * 2));
                ctx.stroke();
            }
            if (rotate) {
                ctx.translate(x + levelLength / 2, y + levelLength / 2);
                ctx.rotate(Math.PI / -2);
                ctx.translate(-x - levelLength / 2, -y - levelLength / 2);
            }
            ctx.fillStyle = outerLevel;
            ctx.font = "114px Noto Sans";
            ctx.fillStyle = "rgba(0,0,0,0.8)"
            if (l + 1 > save.reachedLevel) {
                ctx.drawImage(UIImage, 1024 + (levelStars[l][1] > 1 ? 128 : 0), 64, 128, 128, x + 10, y + 10, 120, 120)
                ctx.fillStyle = "rgba(0,0,0,0.4)";
                ctx.arc(x + radius * 7 / 8, y + radius * 7 / 8, radius - 5, 0, Math.PI * 2);
                ctx.fill();
            } else {
                if (levelStars[l][1] > 1) ctx.fillStyle = "rgba(255,255,255,0.85)";
                ctx.fillText(String(l + 1), x + levelLength / 2, y + levelLength * 3 / 4 + 5);
            }
            ctx.translate(x + levelLength / 2, y + levelLength / 2);
            ctx.rotate(Math.PI * 0.1)
            ctx.translate(-x - levelLength / 2, -y - levelLength / 2);
            if (l + 1 <= save.reachedLevel) {
                // Star 1
                const score = save.scores[l] || 0;
                const t = (levelStars[l] || [[Infinity, Infinity, Infinity]])[0];
                let ti = tileMaps["star" + (score >= t[0] ? "3" : "Disabled")];
                ctx.drawImage(tileImage, ti.x, ti.y, ti.s, ti.s, x + 20, y + levelLength - 24, 64, 64);
                ctx.translate(x + levelLength / 2, y + levelLength / 2);
                ctx.rotate(Math.PI * -0.2)
                ctx.translate(-x - levelLength / 2, -y - levelLength / 2);
                // Star 3
                ti = tileMaps["star" + (score >= t[2] ? "1" : "Disabled")]
                ctx.drawImage(tileImage, ti.x, ti.y, ti.s, ti.s, x + 56, y + levelLength - 24, 64, 64);
                ctx.translate(x + levelLength / 2, y + levelLength / 2);
                ctx.rotate(Math.PI * 0.1)
                ctx.translate(-x - levelLength / 2, -y - levelLength / 2);
                // Star 2
                ti = tileMaps["star" + (score >= t[1] ? "2" : "Disabled")]
                ctx.drawImage(tileImage, ti.x, ti.y, ti.s, ti.s, x + 38, y + levelLength - 24, 64, 64);
                ctx.fillStyle = "rgba(0,0,0,0.6)";
                ctx.textAlign = "center";
                ctx.font = "30px Segoe UI"
                ctx.fillText(score || "", x + levelLength / 2, y + levelLength + 30);
            }
            ctx.restore();
            ctx.lineWidth = 10;
            ctx.fillStyle = "#c0f3ff";
            ctx.strokeStyle = "#0082ab";
            ctx.fillRect(-100, HEIGHT - lsCover, WIDTH + 200, lsCover + 100)
            ctx.strokeRect(-100, HEIGHT - lsCover, WIDTH + 200, lsCover + 100)
            ctx.fillStyle = "rgba(0,0,0,0.8)";
            ctx.fillStyle = "#c0f3ff";
            ctx.strokeStyle = "#0082ab";
            ctx.fillRect(-100, -100, WIDTH + 200, 100 + lsCover)
            ctx.strokeRect(-100, -100, WIDTH + 200, 100 + lsCover)
            ctx.fillStyle = "rgb(0,0,0,0.8)";
            ctx.fillText("Level Select", WIDTH / 2, 90);
            ctx.drawImage(UIImage, 0, 0, 128, 64, 20, HEIGHT - 85, 150, 75);
            ctx.fillStyle = "rgb(0,0,0,0.65)";
            ctx.font = "30p"
            ctx.fillText("◀", 85, HEIGHT - 20);
            if (mouse.down &&
                mouse.down[0] > 20 && mouse.down[0] < 20 + 150 &&
                mouse.down[1] > HEIGHT - 85 && mouse.down[1] < HEIGHT - 85 + 75) {
                if (mouse.held) {
                    levelSelect = false;
                } else {
                    ctx.globalAlpha = 0.9;
                }
            }
        }
    }
    ticks++;
    mouse.justDown = false;
    lastFrameDate = new Date();
    requestAnimationFrame(tick);
}

function executeMatches() {
    let tilesToNullify = [];
    goingToMatch = [];
    let isCascade = false;
    for (let y = 0; y < GRID_HEIGHT; y++) {
        for (let x = 0; x < GRID_WIDTH; x++) {
            let colour = getColour(tiles[y]?.[x])
            if (!colour) continue;
            if (colour === "none") colour = null;

            if (x > 1) {
                if (tiles[y][x - 1] && tiles[y][x - 2])
                    if (getColour(tiles[y][x - 1]) === colour && getColour(tiles[y][x - 2]) === colour) {
                        tilesToNullify.push([y, x, true], [y, x - 1, true], [y, x - 2, true]);
                        isCascade = true;
                        goingToMatch.push([y, x, false, colour], [y, x - 1, false, colour], [y, x - 2, false, colour]);
                    }
            }
            if (y > 1) {
                if (tiles[y - 1][x] && tiles[y - 2][x])
                    if (getColour(tiles[y - 1][x]) === colour && getColour(tiles[y - 2][x]) === colour) {
                        tilesToNullify.push([y, x, true], [y - 1, x, true], [y - 2, x, true]);
                        isCascade = true;
                        goingToMatch.push([y, x, true, colour], [y - 1, x, true, colour], [y - 2, x, true, colour]);
                    }

            }
        }
    }
    let alreadyMatched = [];
    const isMatched = (x, y) => goingToMatch.some(o => o[0] === y && o[1] == x);
    const getC = (x, y) => goingToMatch.filter(o => o[0] === y && o[1] == x)[0]?.[3];
    const getIsVertical = (x, y) => goingToMatch.filter(o => o[0] === y && o[1] === x && o[2]).length > 0;
    const getIsHorizontal = (x, y) => goingToMatch.filter(o => o[0] === y && o[1] === x && !o[2]).length > 0;
    for (let y = 0; y < GRID_HEIGHT; y++) {
        for (let x = 0; x < GRID_WIDTH; x++) {
            if (isMatched(x, y) && !alreadyMatched.some(c => c[1] === x && c[0] === y)) {
                // X
                let tx = x + 1;
                const c = getC(x, y)
                let row = 1;
                let potentialMatch = [];
                let totalPM = [];
                while (getC(tx, y) === c && isMatched(tx, y)) {
                    potentialMatch.push([y, tx++])
                    row++;
                }
                alreadyMatched = alreadyMatched.concat(potentialMatch);
                totalPM = potentialMatch;
                // Y
                let ty = y + 1;
                let column = 1;
                potentialMatch = [];
                while (getC(x, ty) === c && isMatched(x, ty)) {
                    potentialMatch.push([ty++, x])
                    column++;
                }
                alreadyMatched = alreadyMatched.concat(potentialMatch);
                totalPM = totalPM.concat(potentialMatch);
                if (row >= 5) {
                    // Rainbow circle!!
                    specialsToMake.push({
                        x: x + 2,
                        y: y,
                        type: "rainbowCircle"
                    })
                } else if (column >= 5) {
                    specialsToMake.push({
                        x: x,
                        y: y + 2,
                        type: "rainbowCircle"
                    })
                } else {
                    let radial = null;
                    for (let i = 0; i < totalPM.length; i++) {
                        let m = totalPM[i];
                        if (getIsVertical(m[1], m[0]) && getIsHorizontal(m[1], m[0])) {
                            radial = [m[0], m[1]];
                            break;
                        }
                    }
                    if (radial) {
                        specialsToMake.push({
                            x: radial[1],
                            y: radial[0],
                            type: c + "RSCircle"
                        })
                        tilesToNullify = tilesToNullify.filter(o => (o[1] !== radial[1] || o[0] !== radial[0]));
                    } else if (row === 4) {
                        // Vertical striped!
                        // Find which x to place the special in.
                        const xToPlaceStriped = (toTile[0] <= x + 3 && toTile[0] >= x) ? toTile[0] : (Math.random() > 0.5 ? x + 1 : x + 2);
                        specialsToMake.push({
                            x: xToPlaceStriped,
                            y: y,
                            type: c + "VSCircle"
                        });

                        tilesToNullify = tilesToNullify.filter(o => (o[1] !== xToPlaceStriped || o[0] !== y));
                    } else if (column === 4) {
                        // Horizontal striped!
                        // Find which y to place the special in.
                        const yToPlaceStriped = (toTile[1] <= y + 3 && toTile[1] >= y) ? toTile[1] : (Math.random() * 2 > 1 ? y + 1 : y + 2);
                        specialsToMake.push({
                            x: x,
                            y: yToPlaceStriped,
                            type: c + "HSCircle"
                        })

                        tilesToNullify = tilesToNullify.filter(o => (o[1] !== x || o[0] !== yToPlaceStriped));
                    }
                }
            }
        }
    }

    if (lastMatch && new Date() - lastMatch > 200) {
        // Regenerate circles.
        let n = regenerateCircles();
    }
    //
    matchedTiles = tilesToNullify;
    if (lastMatch && new Date() - lastMatch > 500) {
        // Activate rainbow circles
        if (isRCMatch) {
            isRCMatch = false;
            let RCLoc = tiles[fromTile[1]][fromTile[0]] === "rainbowCircle" ? fromTile : toTile
            let OtherLoc = tiles[fromTile[1]][fromTile[0]] !== "rainbowCircle" ? fromTile : toTile
            tiles[RCLoc[1]][RCLoc[0]] = null;
            if (tiles[OtherLoc[1]][OtherLoc[0]]) {
                let colour; let activations; let tilesToActivate;
                if (buttonTiles[RCLoc[1]][RCLoc[0]] > 0) removeButtonLayer(RCLoc[0], RCLoc[1]);
                if (buttonTiles[OtherLoc[1]][OtherLoc[0]] > 0) removeButtonLayer(OtherLoc[0], OtherLoc[1]);
                collectGoal("rainbow_circle", RCLoc[0], RCLoc[1], "rainbowCircle");
                addScore(5000, RCLoc[0], RCLoc[1], "rainbowCircle")
                switch (tiles[OtherLoc[1]][OtherLoc[0]].slice(-8)) {
                    case "owCircle":
                        if (tiles[OtherLoc[1]][OtherLoc[0]] !== "yellowCircle") {
                            // Rainbow circle! Remove the entire board!
                            for (let ty = 0; ty < tiles.length; ty++) {
                                for (let tx = 0; tx < tiles[0].length; tx++) {
                                    tilesToNullify.push([ty, tx])
                                }
                            }
                            nullify(tilesToNullify);
                            tilesToNullify = [];
                            break;
                        }
                    case "HSCircle":
                    case "VSCircle":
                        if (tiles[OtherLoc[1]][OtherLoc[0]] !== "yellowCircle") {
                            collectGoal("striped_circle", OtherLoc[0], OtherLoc[1], tiles[OtherLoc[1]][OtherLoc[0]])
                            colour = getColour(tiles[OtherLoc[1]][OtherLoc[0]]);
                            // Striped! 
                            tilesToActivate = [];
                            activations = 0;
                            tiles[OtherLoc[1]][OtherLoc[0]] = null;
                            for (let y = 0; y < tiles.length; y++) {
                                for (let x = 0; x < tiles[0].length; x++) {
                                    if (colour === getColour(tiles[y][x])) {
                                        if (tiles[y][x].endsWith("ExtraTimeCircle") && !(timeMode && time <= 0)) {
                                            time = Math.min(maxTime, time + 5);
                                        }
                                        tiles[y][x] = colour + "A" + (Math.random() > 0.5 ? "H" : "V") + "SCircle";
                                        activations++;
                                        let o = setInterval(() => {
                                            for (let y = 0; y < tiles.length; y++) {
                                                for (let x = 0; x < tiles[0].length; x++) {
                                                    if ((tiles[y][x] == colour + "AVSCircle" ||
                                                        tiles[y][x] == colour + "AHSCircle") && !tilesToNullify.some(o => o[0] === y && o[1] === x)) {
                                                        tilesToNullify.push([y, x]);
                                                        nullify(tilesToNullify);
                                                        tilesToNullify = [];
                                                        regenerateCircles();
                                                        return;
                                                    }
                                                }
                                            }
                                            clearInterval(o)
                                        }, activations * 750 + 500)
                                    }
                                }
                            }
                            break;
                        }
                    case "RSCircle":
                        if (tiles[OtherLoc[1]][OtherLoc[0]] !== "yellowCircle") {
                            collectGoal("radial_circle", OtherLoc[0], OtherLoc[1], tiles[OtherLoc[1]][OtherLoc[0]])
                            colour = getColour(tiles[OtherLoc[1]][OtherLoc[0]]);
                            // Radial?
                            tilesToActivate = [];
                            activations = 0;
                            tiles[OtherLoc[1]][OtherLoc[0]] = null;
                            for (let y = 0; y < tiles.length; y++) {
                                for (let x = 0; x < tiles[0].length; x++) {
                                    if (colour === getColour(tiles[y][x])) {
                                        tiles[y][x] = colour + "ARSCircle";
                                        if (tiles[y][x].endsWith("ExtraTimeCircle")) {
                                            time = Math.min(maxTime, time + 5);
                                        }
                                        activations++;
                                        setInterval(() => {
                                            for (let y = 0; y < tiles.length; y++) {
                                                for (let x = 0; x < tiles[0].length; x++) {
                                                    if ((tiles[y][x] == colour + "ARSCircle") && !tilesToNullify.some(o => o[0] === y && o[1] === x)) {
                                                        tilesToNullify.push([y, x]);
                                                        nullify(tilesToNullify);
                                                        tilesToNullify = [];
                                                        induceFalling();
                                                        regenerateCircles();
                                                        return;
                                                    }
                                                }
                                            }
                                            regenerateCircles();
                                        }, activations * 750 + 500)
                                    }
                                }
                            }
                        }
                    default:
                        let targetColour = getColour(tiles[OtherLoc[1]][OtherLoc[0]]);
                        if (targetColour != "none") {
                            for (let y = 0; y < tiles.length; y++) {
                                for (let x = 0; x < tiles[0].length; x++) {
                                    if (getColour(tiles[y][x]) == targetColour) {
                                        // Remove tile.
                                        tilesToNullify.push([y, x, true]);
                                    }
                                }
                            }
                            nullify(tilesToNullify);
                            tilesToNullify = [];
                        }
                }
            }

        }
        if (specialComboType) {
            let fromT = tiles[fromTile[1]][fromTile[0]];
            let toT = tiles[toTile[1]][toTile[0]]
            tiles[fromTile[1]][fromTile[0]] = null;
            tiles[toTile[1]][toTile[0]] = null;
            let fromColour = getColour(fromT);
            let toColour = getColour(toT)
            collectGoal(fromColour + "_circle", fromTile[0], fromTile[1], fromT)
            collectGoal(toColour + "_circle", toTile[0], toTile[1], toT)
            switch (specialComboType) {
                case "SS":
                    // 1000 + 1000 + 500 (BONUS)
                    addScore(2500, (fromTile[0] + toTile[0]) / 2, (fromTile[1] + toTile[1]) / 2, toT)
                    // Striped + Striped.
                    // Make two blasts.
                    // Horizontal blast
                    for (let x = 0; x < tiles[0].length; x++) {
                        tilesToNullify.push([toTile[1], x]);
                    }
                    stripedAnim.push({
                        x: toTile[0],
                        y: toTile[1],
                        isVertical: false,
                        isRadial: false,
                        id: said++,
                        type: fromT
                    })
                    // Vertical blast
                    for (let y = 0; y < tiles[0].length; y++) {
                        tilesToNullify.push([y, toTile[0]]);
                    }
                    stripedAnim.push({
                        x: toTile[0],
                        y: toTile[1],
                        isVertical: true,
                        isRadial: false,
                        id: said++,
                        type: toT
                    })
                    collectGoal("striped_circle", fromTile[0], fromTile[1], toT);
                    collectGoal("striped_circle", toTile[0], toTile[1], fromT);
                    break;
                case "SR":
                    // 1000 + 2000 + 500 (BONUS)
                    addScore(3500, (fromTile[0] + toTile[0]) / 2, (fromTile[1] + toTile[1]) / 2, toT)
                    // Striped + Radial.
                    // Make six blasts.
                    // Horizontal blasts
                    for (let y = toTile[1] - 1; y < toTile[1] + 2; y++) {
                        if (y < 0 || y > tiles.length - 1) continue;
                        for (let x = 0; x < tiles[0].length; x++) {
                            tilesToNullify.push([y, x]);
                        }
                        stripedAnim.push({
                            x: toTile[0],
                            y: y,
                            isVertical: false,
                            isRadial: false,
                            id: said++,
                            type: fromT
                        })
                    }
                    // Vertical blast
                    for (let x = toTile[0] - 1; x < toTile[0] + 2; x++) {
                        if (x < 0 || x > tiles[0].length - 1) continue;
                        for (let y = 0; y < tiles.length; y++) {
                            tilesToNullify.push([y, x]);
                        }
                        stripedAnim.push({
                            x: x,
                            y: toTile[1],
                            isVertical: true,
                            isRadial: false,
                            id: said++,
                            type: toT
                        })
                    }
                    if (fromT.slice(-8) === "RSCircle") {
                        collectGoal("striped_circle", fromTile[0], fromTile[1], toT);
                        collectGoal("radial_circle", toTile[0], toTile[1], fromT);
                    } else {
                        collectGoal("radial_circle", fromTile[0], fromTile[1], toT);
                        collectGoal("striped_circle", toTile[0], toTile[1], fromT);
                    }
                    break;
                case "RR":
                    // 2000 + 2000 + 500 (BONUS)
                    addScore(4500, (fromTile[0] + toTile[0]) / 2, (fromTile[1] + toTile[1]) / 2, toT)
                    // Radial + Radial.
                    // Make a 5 * 5 blast
                    // Horizontal blasts
                    for (let y = toTile[1] - 2; y < toTile[1] + 3; y++) {
                        if (y < 0 || y > tiles.length - 1) continue;
                        for (let x = toTile[0] - 2; x < toTile[0] + 3; x++) {
                            if (tiles[y][x] && !(x === toTile[0] && y === toTile[1])) {
                                tilesToNullify.push([y, x])
                            }
                        }
                    }
                    stripedAnim.push({
                        x: toTile[0],
                        y: toTile[1],
                        isVertical: false,
                        isRadial: true,
                        isBig: true,
                        id: said++,
                        type: fromT
                    })
                    collectGoal("radial_circle", fromTile[0], fromTile[1], fromT);
                    collectGoal("radial_circle", toTile[0], toTile[1], toT);

            }
            nullify(tilesToNullify);
            tilesToNullify = [];
            specialComboType = null;
        }
        matchHappening = false;
        setInterval(() => { if (!isMatch(tiles) && !matchHappening && (((moves > 0 || (timeMode && time > 0)) && !immediateShowdown) || !goalsDone)) canMakeMatch = true }, 100);
        nullify(tilesToNullify);
        tilesToNullify = [];
        let c = regenerateCircles();
        if (c) induceFalling();
    }
    if (lastMatch && new Date() - lastMatch > 700) {
        tileImages = reloadTileImages();
        // Falling circles.
        if (goalsDone && (immediateShowdown || (!timeMode && moves < 1))) canMakeMatch = false;
        induceFalling();
        if (!hasValidMove(tiles)) {
            console.log("SHUFFLE!")
            setTimeout(() => {
                // TODO
            }, 500)
        }
    }
    if (matchCheck && (new Date() - matchCheck) > 300 || (timeMode && new Date() - timeUpdate > 1000)) {
        tileImages = reloadTileImages();
        timeUpdate = new Date();
        let changed = regenerateCircles();
        if (!changed && spawningTiles.length !== 0) {
            matchCheck = null;

            if (loadingDone && (goalsDone && (immediateShowdown || ((!timeMode && moves < 1) || (timeMode && moves < 1))))
                ||
                (!goalsDone && goals.some(o => o.type === "score") &&
                    (!timeMode && moves < 1))) {
                canMakeMatch = false;
                if (!endMoves && endMoves !== 0) {
                    if (!(goals.some(o => o.type === "score") && ((!timeMode && moves < 1) || (timeMode && moves < 1)) && !goalsDone)) endMoves = timeMode ? time : moves;
                    setTimeout(() => {
                        // Begin da Circle Showdown!
                        // Showdown start
                        startShowdown(tilesToNullify);
                        // Showdown end
                        tilesToNullify = [];
                    }, 1000);
                }
            } else if (!levelEnd && ((!timeMode && moves < 1) || (timeMode && time <= 0)) && !goalsDone && (!goals.some(o => o.type === "score") || timeMode) && !canMakeMatch) {
                setTimeout(() => {
                    // Fail :(
                    failLevel();
                }, 1000);
            }
        }
        cascades = 0;
    }
}

let pass = 0;

function addScore(s, x, y) {
    score += s;
}

function startShowdown(ttn) {
    showdownStarted = true;
    if (timeMode) for (let y = 0; y < tiles.length; y++) {
        for (let x = 0; x < tiles[0].length; x++) {
            if (tiles[y]?.[x] && tiles[y]?.[x].endsWith("ExtraTimeCircle")) tiles[y][x] = getColour(tiles[y]?.[x]) + "RSCircle"
        }
    }
    for (let i = 0; i < (timeMode ? Math.ceil(endMoves / 5) : endMoves); i++) {
        setTimeout(() => {
            if (timeMode) {
                const dec = time > 5 ? 5 : time;
                time -= dec;
            } else {
                moves--;
            }
            // Make a random circle on the board special
            let x = null;
            let y = null;
            let loops = 0;
            while ((!x || (getColour(tiles[y][x]) === "none" ||
                "HSCircle.VSCircle.RSCircle".split(".").includes(tiles[y][x].slice(-8)))) && loops < 1000) {
                y = Math.floor(Math.random() * tiles.length);
                x = Math.floor(Math.random() * tiles[0].length)
                loops++
            }
            let spec = false;
            if (loops < 1000) {
                const m = "R.H.V".split(".")[Math.floor(Math.random() * 3)]
                tiles[y][x] = getColour(tiles[y][x]) + m + "SCircle";
                spec = true;
            }
            score += 3000;
        }, 200 * (i + 1))
    }
    setTimeout(() => {
        time = 0;
        let check = true;
        let ic = setInterval(() => {
            if (iColours && numberOfColours < 6) numberOfColours++;
            else clearInterval(this);
        }, 10000)
        let activatingC = setInterval(() => {
            if (cascades < 2 || matchedTiles.length > 0) {
                ttn = ttn.concat(matchedTiles);
                check = false;
                // Activate the special circles.
                let a = 0;
                xy: for (let y = 0; y < tiles.length; y++) {
                    for (let x = 0; x < tiles[0].length; x++) {
                        if (tiles[y]?.[x] === "rainbowCircle" ||
                            (getColour(tiles[y][x]) !== "none" &&
                                "HSCircle.VSCircle.RSCircle".split(".").includes(tiles[y][x].slice(-8)))) {
                            ttn.push([y, x]);
                            a++;
                            if (a > 1) break xy;
                        }
                    }
                }
                if (!isMatch(tiles) && a === 0 && !messageAnim) {
                    pass++;
                } else {
                    matchCheck = new Date();
                    if (isMatch(tiles) && new Date() - lastMatch > 2000) {
                        lastMatch = new Date();
                    }
                    nullify(ttn);
                    ttn = [];
                    pass = 0;
                }
                if (pass > 21) {
                    if (goalsDone) passLevel();
                    else failLevel();
                    clearInterval(activatingC)
                    clearInterval(ic)
                }
                nullify(ttn);
                ttn = [];
            }
        }, 300)
    }, (timeMode ? Math.ceil(endMoves / 5) : endMoves) * 200 + 400)
}

function passLevel() {
    levelEnd = true;
    messageAnim = new Date();
    if (!goals.some(o => o.type === "score") && score < targets[0]) score = targets[0]
}

function failLevel() {
    endMoves = null;
    levelEnd = true;
    messageAnim = new Date();
}

function nullify(ttn) {
    if (ttn.length > 0) {
        cascades++
        score += 60 * cascades;
    }
    let loops = 0;
    while (ttn.length > 0 && loops < 1000) {
        loops++;
        for (let y = 0; y < tiles.length; y++) {
            for (let x = 0; x < tiles[0].length; x++) {
                let n = ttn.filter(o => o && o[0] === y && o[1] === x);
                if (n.length > 0) {
                    let tile = n[0];
                    // Special candy effects?
                    let tx = n[0][1];
                    let ty = n[0][0];
                    let fromRainbowCircle = !!n[0][2];
                    if (!tiles[ty]?.[tx] && buttonTiles[ty][tx] > 0) removeButtonLayer(tx, ty)
                    let alreadyD = false;
                    // Create special circles
                    tileImages = reloadTileImages();
                    let c = regenerateCircles();
                    if (c) {
                        induceFalling(true);
                        induceFalling();
                    }
                    let st = tiles[ty][tx]
                    if (!encasingBlockerTiles[ty]?.[tx] && tiles[ty] && tiles[ty][tx] && tiles[ty][tx] !== "yellowCircle") switch (tiles[ty][tx].slice(-8)) {
                        case "owCircle":
                            // Funny, but rainbow circle.
                            let targetColour = colourList[Math.floor(Math.random() * numberOfColours)];
                            for (let y = 0; y < tiles.length; y++) {
                                for (let x = 0; x < tiles[0].length; x++) {
                                    if (getColour(tiles[y][x]) == targetColour) {
                                        // Remove tile.
                                        ttn.push([y, x, true]);
                                    }
                                }
                            }
                            break;
                        case "HSCircle":
                            // Horizontal striped
                            // Clear all horizontal spaces.
                            for (let x = 0; x < tiles[0].length; x++) {
                                ttn.push([ty, x])
                            }
                            stripedAnim.push({
                                x: tx,
                                y: ty,
                                isVertical: false,
                                isRadial: false,
                                id: said++,
                                type: st
                            })
                            break;
                        case "VSCircle":
                            // Vertical striped
                            // Clear all vertical spaces.
                            for (let y = 0; y < tiles.length; y++) {
                                ttn.push([y, tx])
                            }
                            stripedAnim.push({
                                x: tx,
                                y: ty,
                                isVertical: true,
                                isRadial: false,
                                id: said++,
                                type: st
                            })
                            break;
                        case "RSCircle":
                            let damage = damaged(tiles[ty]?.[tx], tx, ty, encasingBlockerTiles[ty][tx]);
                            tiles[ty][tx] = damage;
                            alreadyD = true;
                            if (buttonTiles[ty][tx] > 0) removeButtonLayer(tx, ty);
                            let isARS = (tiy, tix) => tiles[tiy] && tiles[tiy]?.[tix] && tiles[tiy]?.[tix].slice(-9) === "ARSCircle";
                            // Radially striped
                            if (tiles[ty - 1] && tiles[ty - 1][tx - 1]) ttn.push([ty - 1, tx - 1, true]);
                            if (tiles[ty - 1] && tiles[ty - 1][tx]) ttn.push([ty - 1, tx, true]);
                            if (tiles[ty - 1] && tiles[ty - 1][tx + 1]) ttn.push([ty - 1, tx + 1, true]);
                            if (tiles[ty][tx - 1]) ttn.push([ty, tx - 1, true]);
                            if (tiles[ty][tx + 1]) ttn.push([ty, tx + 1, true]);
                            if (tiles[ty + 1] && tiles[ty + 1][tx - 1]) ttn.push([ty + 1, tx - 1, true]);
                            if (tiles[ty + 1] && tiles[ty + 1][tx]) ttn.push([ty + 1, tx, true]);
                            if (tiles[ty + 1] && tiles[ty + 1][tx + 1]) ttn.push([ty + 1, tx + 1, true]);
                            stripedAnim.push({
                                x: tx,
                                y: ty,
                                isVertical: false,
                                isRadial: true,
                                id: said++,
                                type: st
                            })
                            break;
                    }
                    if (tiles[ty] && tiles[ty][tx] !== "none") {
                        let damage;
                        damage = damaged(tiles[ty][tx], tx, ty, encasingBlockerTiles[ty][tx], true, fromRainbowCircle);
                        if (!alreadyD) tiles[ty][tx] = damage;
                        if ((!damage || !tiles[ty][tx]) && buttonTiles[ty][tx] > 0) removeButtonLayer(tx, ty)
                    }
                    ttn = ttn.filter(o => o[0] !== ty || o[1] !== tx);
                    tileImages = tileImages.filter(o => o.tileX !== tile[1] || o.tileY !== tile[0]);
                }
            }
        }
    }
    makeSpecials();
    regenerateCircles();
    induceFalling();
}

function removeButtonLayer(x, y) {
    buttonTiles[y][x]--;
    addScore(1000, (fromTile[0] + toTile[0]) / 2, (fromTile[1] + toTile[1]) / 2, "bubble" + (buttonTiles[y][x] + 1))
    collectGoal("button", x, y, "button" + (buttonTiles[y][x] + 1))
}

function makeSpecials() {
    let doneSpecials = [];
    for (let i = 0; i < specialsToMake.length; i++) {
        let s = specialsToMake[i];
        if (doneSpecials.some(o => o.x === s.x && o.y === s.y && o.type === s.type)) continue;
        tiles[s.y][s.x] = s.type;
        if (["HSCircle", "VSCircle"].includes(s.type.slice(-8))) {
            collectGoal(getColour(s.type) + "_circle", s.x, s.y, getColour(s.type) + "Circle")
        }
        doneSpecials.push(s);
    }
    specialsToMake = [];
}

function reloadTileImages() {
    let t = [];
    for (let y = 0; y < tiles.length; y++) for (let x = 0; x < tiles[0].length; x++) {
        let pixel = gridToPixel(x, y, X_OFFSET, Y_OFFSET, 72);
        t.push({
            type: tiles[y][x],
            x: pixel[0] - 32,
            y: pixel[1] - 32,
            tileX: x,
            tileY: y,
            id: ti++
        });
    }
    return t;
}

function regenerateCircles() {
    let changed = false;
    for (let y = GRID_HEIGHT - 1; y >= 0; y--) {
        for (let x = 0; x < GRID_WIDTH; x++) {
            if (tiles[y][x]) continue;
            if (teleporters[y][x][1]) {
                // Get the circle from the entrance.
                let et = null;
                for (let tx = 0; tx < teleporters[0].length; tx++) {
                    for (let ty = 0; ty < teleporters.length; ty++) {
                        if (teleporters[ty]?.[tx]?.[0] === teleporters[y][x][1]) {
                            et = [tx, ty]
                        }
                    }
                }
                if (et && canFall(tiles[et[1]][et[0]], et[0], et[1])) {
                    // Teleporting!
                    tiles[y][x] = tiles[et[1]][et[0]]
                    tiles[et[1]][et[0]] = null;
                    induceFalling();
                }
            } else {
                let s = false;
                if (!spawningTiles.some(o => o[0] === x && o[1] === y)) {
                    s = true;
                }
                if (cannonTiles[y][x].length > 0) {
                    for (let type of cannonTiles[y][x]) {
                        let layered = "watermelon".split(".").includes(type);
                        let amount = 0;
                        if (layered) {
                            for (let i = 0; i < 10; i++) {
                                let a = tiles.flat().filter(o => o === type + String(i)).length;
                                amount += a;
                            }
                        } else amount = tiles.flat().filter(o => o === type).length;
                        let data = cannonData.filter(o => o.type === type)[0];
                        if (data) {
                            // Max?
                            if (data.max) {
                                console.log(amount);
                                if (amount < data.max) {
                                    // Spawn!
                                    const l = {
                                        watermelon: "watermelon" + (data.layer || 1)
                                    }
                                    tiles[y][x] = l[type];
                                    console.log(l[type]);
                                    s = true;
                                    changed = true;
                                }
                            }
                        }
                    }
                }
                if (!s) { tiles[y][x] = sCircles[Math.floor(Math.random() * numberOfColours)];
                changed = true; }
            }
        }
    }
    if (changed) {
        induceFalling();
        regenerateCircles();
    }
    return changed;
}

function induceFalling(s) {
    s = false;
    tileImagePosChanges = [];
    let changed = false;
    slide = false;
    for (let z = 0; z < 2; z++) {
        for (let y = tiles.length - 1; y >= 0; y--) {
            for (let x = 0; x < tiles[0].length; x++) {
                if (!tiles[y][x] || tiles[y][x] === "none") continue;
                let newY = y;
                let newX = x;
                let tileType = tiles[newY][newX];
                if (canFall(tileType, newX, newY)) while (newY < tiles.length - 1 && !tiles[newY + 1][newX] && tiles[newY + 1][newX] !== "none") {
                    changed = true;
                    newY++;
                }
                let t = tiles[y][x];
                tiles[y][x] = null;
                tiles[newY][newX] = t;
                let timage = tileImages.filter(o => o.tileX === x && o.tileY === y)[0];
                const fpt = 1;
            }
            for (let x = 0; x < tiles[0].length; x++) {
                if (!tiles[y][x] || tiles[y][x] === "none") continue;
                let newY = y;
                let newX = x;
                let tileType = tiles[newY][newX];
                // Check for sliding.
                // Left side
                /*
                    []  []
                    ^ () < EMPTY
                */
                // Right side
                /*
                    []  [] <
                      () < EMPTY
                */
                if (slide && !s && canFall(tileType, newX, newY) && !tiles[newY + 1]?.[newX - 1]) while (newX > 0 && (!tiles[newY + 1] || tiles[newY + 1][newX]) &&
                    tiles[newY + 1] && !tiles[newY + 1]?.[newX - 1]) {
                    newX--;
                    newY++;
                    changed = true;
                    while (newY < tiles.length - 1 && !tiles[newY + 1][newX] && tiles[newY + 1][newX] !== "none") {
                        newY++;
                    }
                }
                if (slide && !s && canFall(tileType, newX, newY) && !tiles[newY + 1]?.[newX + 1]) while ((newX < tiles[0].length - 1) && (!tiles[newY + 1] || tiles[newY + 1][newX]) &&
                    tiles[newY + 1] && !tiles[newY + 1]?.[newX + 1]) {
                    newX++;
                    newY++;
                    changed = true;
                    while (newY < tiles.length - 1 && !tiles[newY + 1][newX] && tiles[newY + 1][newX] !== "none") {
                        newY++;
                    }
                }
                let t = tiles[y][x];
                tiles[y][x] = null;
                tiles[newY][newX] = t;
                if (t === "globe" && !encasingBlockerTiles[y][x] && globeExitTiles.some(o => o[0] === newX && o[1] === newY)) {
                    // Collect the globe.
                    collectGoal("globe", newX, newY, "globe");
                    addScore(10000, newX, newY, "globe");
                    tiles[newY][newX] = null;
                }
            }
        }
        slide = true;
    }
    if (isMatch(tiles)) {
        changed = true;
        lastMatch = new Date();
    }
    if (changed) {
        lastMatch = new Date();
    } else {
        lastMatch = null;
        matchCheck = new Date();
    }
}

function isMatch(t) {
    let im = false;
    for (let my = 0; my < t.length; my++) {
        h: for (let mx = 0; mx < t[0].length; mx++) {
            if (getColour(t[my][mx]) === "none") continue h;
            let checkValid = checkForMatch(mx, my, t[my][mx], t);
            if (mx < 0 || my < 0 || mx >= t[0].length || my >= t.length) checkValid = false;
            if (checkValid) im = true;
        }
    }
    for (let mx = 0; mx < t[0].length; mx++) {
        j: for (let my = 0; my < t.length; my++) {
            if (getColour(t[my][mx]) === "none") continue j;
            let checkValid = checkForMatch(mx, my, t[my][mx], t);
            if (mx < 0 || my < 0 || mx >= t[0].length || my >= t.length) checkValid = false;
            if (checkValid) im = true;
        }
    }
    return im;
}


function checkForSwipe() {
    /// No swipe yet
    if (mouse.swipeStatus == 0) {
        if (mouse.held) {
            mouse.swipeFrom = mouse.down;
            mouse.swipeStatus++
        }
    } else if (mouse.swipeStatus == 1) {
        // Holding right now
        if (!mouse.held) {
            mouse.swipeTo = mouse.up;
            mouse.swipeStatus++
        }
    } else if (mouse.swipeStatus == 2 && canMakeMatch) {
        mouse.swipeStatus = 0;
        let swipeX = mouse.swipeTo[0] - mouse.swipeFrom[0];
        let swipeY = mouse.swipeTo[1] - mouse.swipeFrom[1];
        // Check if there's enough swipe.
        if (Math.abs(swipeX) ** 2 + Math.abs(swipeY) ** 2 < SWIPE_THRESHOLD ** 2) {
            mouse.swipeStatus = 0;
            return;
        }
        prevTiles = tiles;
        if (Math.abs(swipeX) > Math.abs(swipeY)) {
            // Horizontal
            if (swipeX >= 0) {
                // Right
                swipe(1, 0)
            } else {
                // Left
                swipe(-1, 0)
            }
        } else {
            // Vertical
            if (swipeY >= 0) {
                // Down
                swipe(0, 1)
            } else {
                // Up
                swipe(0, -1)
            }
        }
        mouse.swipeFrom = [0, 0];
        mouse.swipeTo = [0, 0];
    }

}

function swipe(x, y) {
    prevTiles = tiles;
    fromTile = pixelToGrid(mouse.down[0], mouse.down[1], X_OFFSET, Y_OFFSET, 72);
    let test = gridToPixel(fromTile[0], fromTile[1], X_OFFSET, Y_OFFSET, 72);

    toTile = [fromTile[0] + x, fromTile[1] + y]
    if (fromTile && fromTile[0] >= 0 && fromTile[1] >= 0 && fromTile[0] < GRID_WIDTH && fromTile[1] < GRID_HEIGHT) {
        if (toTile && toTile[0] >= 0 && toTile[1] >= 0 && toTile[0] < GRID_WIDTH && toTile[1] < GRID_HEIGHT) {
            // Try the swipe.
            let therTiles = tiles;
            let temp = therTiles[fromTile[1]][fromTile[0]];
            therTiles[fromTile[1]][fromTile[0]] = therTiles[toTile[1]][toTile[0]];
            therTiles[toTile[1]][toTile[0]] = temp;
            let valid = false;
            // Check for matches.
            for (let my = 0; my < therTiles.length; my++) {
                for (let mx = 0; mx < therTiles[0].length; mx++) {
                    let checkValid = checkForMatch(mx, my, therTiles[my][mx], therTiles);
                    if (checkValid) valid = true;
                }
            }
            let from = therTiles[fromTile[1]][fromTile[0]];
            let to = therTiles[toTile[1]][toTile[0]];
            if (from === "rainbowCircle" && (getColour(to) !== "none" || to === "rainbowCircle")) {
                isRCMatch = true;
                valid = true;
            } else if (to === "rainbowCircle" && (getColour(from) !== "none" || from === "rainbowCircle")) {
                isRCMatch = true;
                valid = true;
            } else isRCMatch = false;
            let spec = from?.slice(-8)
            let tspec = to?.slice(-8)
            if (spec === "VSCircle" || spec === "HSCircle") {
                if (tspec === "RSCircle") specialComboType = "SR"
                else if (tspec === "VSCircle" || tspec === "HSCircle") specialComboType = "SS"
                else specialComboType = null;
            } else if (spec === "RSCircle") {
                if (tspec === "RSCircle") specialComboType = "RR"
                else if (tspec === "VSCircle" || tspec === "HSCircle") specialComboType = "SR"
                else specialComboType = null;
            }
            if (specialComboType) valid = true;
            if (CANNOT_MATCH.includes(therTiles[fromTile[1]][fromTile[0]]) || CANNOT_MATCH.includes(therTiles[toTile[1]][toTile[0]])) valid = false;
            if (encasingBlockerTiles[fromTile[1]][fromTile[0]] || encasingBlockerTiles[toTile[1]][toTile[0]]) valid = false;
            if (valid) {
                hasMadeMatch = true;
                canMakeMatch = false;
                lastMatch = new Date();
                matchHappening = true;
                moves--;
                lastActualMatch = new Date();
            } else {
                tiles[toTile[1]][toTile[0]] = tiles[fromTile[1]][fromTile[0]];
                tiles[fromTile[1]][fromTile[0]] = temp;
            }
        }
    }
}

let loops;

function makeTiles(w, h, c) {
    tileImages = [];
    let t;
    loops = 0;
    while ((loops === 0 || !hasValidMove(t)) && loops <= MAX_BOARD_LOOPS) {
        t = [];
        for (let y = 0; y < h; y++) {
            let h = [];
            for (let k = 0; k < w; k++) h.push(null);
            t.push(h);
            for (let x = 0; x < w; x++) {
                let tile = sCircles[Math.floor(Math.random() * c)];
                t[y][x] = tile;
                let c_loops = 0;
                while (checkForMatch(x, y, tile, t) && c_loops <= MAX_CIRCLE_LOOPS) {
                    c_loops++
                    tile = sCircles[Math.floor(Math.random() * c)];
                    if (t[y] && t[y][x]) t[y][x] = tile;
                }
            }
        }
        loops++;
    }
    return t;
}

function checkForMatch(x, y, c, tiles) {
    let colour = getColour(c)
    if (colour === "none") return false;
    if (x > 1) {
        if (tiles[y] && tiles[y][x - 1] && tiles[y][x - 2] && getColour(tiles[y][x - 1]) === colour && getColour(tiles[y][x - 2]) === colour) {
            return true;
        }
    }
    if (y > 1) {
        if (tiles[y - 1] && tiles[y - 1][x] && tiles[y - 2][x] && getColour(tiles[y - 1][x]) === colour && getColour(tiles[y - 2][x]) === colour) {
            return true;
        }
    }
    return false;
}

let tilesF;

function hasValidMove(tiles) {
    tilesF = [...tiles];
    let valid = false;
    // Horizontal Swipes?
    // Vertical Swipes?
    const swipeChecks = [(c) => {
        for (let y = 0; y < tilesF.length; y++) {
            for (let x = 0; x < tilesF[0].length - 1; x++) {
                let first = tilesF[y][x];
                let sec = tilesF[y][x + 1];
                tilesF[y][x] = sec;
                tilesF[y][x + 1] = first;
                for (let my = 0; my < tilesF.length; my++) {
                    for (let mx = 0; mx < tilesF[0].length; mx++) {
                        if (checkForMatch(mx, my, tilesF[my][mx], tilesF)) {
                            tilesF[y][x] = first;
                            tilesF[y][x + 1] = sec;
                            c();
                        }
                    }
                }
            }
        }
    },
    (c) => {
        for (let y = 0; y < tilesF.length - 1; y++) {
            for (let x = 0; x < tilesF[0].length; x++) {
                let first = tilesF[y][x];
                let sec = tilesF[y + 1][x];
                tilesF[y][x] = sec;
                tilesF[y + 1][x] = first;
                for (let my = 0; my < tilesF.length; my++) {
                    for (let mx; mx < tilesF[0].length; mx++) {
                        tilesF[y][x] = first;
                        tilesF[y + 1][x] = sec;
                        if (checkForMatch(mx, my, tilesF[my][mx], tilesF)) c();
                    }
                }
            }
        }
    }]
    if (Math.random > 0.5) swipeChecks.reverse();
    swipeChecks[0](() => { valid = true });
    swipeChecks[1](() => { valid = true });
    return valid;
}

async function getLevelTargets(l) {
    try {
        let levelData = await import(`./${TEST_MODE ? "test_levels" : "levels"}/${l}.json`);
        return [levelData.targets, levelData ? levelData.hard || 0 : 0];
    } catch (e) {
        return [[Infinity, Infinity, Infinity], levelData ? levelData.hard || 0 : 0]
    }
}

async function getLevelC(l) {
    try {
        let levelData = await import(`./${TEST_MODE ? "test_levels" : "levels"}/${l}.json`);

        // Get the colour.
        const gl = levelData.goals
        const hard = levelData.hard || 0
        if (hard > 0) {
            if (hard === 1) return ["#ff8f2e", "#ff7700", "#bb5500"]
            if (hard === 2) return ["#ff2222", "#ab0e0e", "#730000"]
            if (hard === 3) return ["#333333", "#222222", "#111111"]
        }
        let gameTypes = [];

        if (levelData.time && !levelData.moves) {
            gameTypes.push(gl.some(o => o.type === "score") ? LS_COLOURS.timemove : LS_COLOURS.time)
        }

        for (let g = 0; g < gl.length; g++) {
            const goal = gl[g];
            if (goal.type === "score") gameTypes.push("moves");
            else if (goal.type === "button") gameTypes.push("button");
            else if (goal.type === "globe") gameTypes.push("globe");
            else gameTypes.push("order");

            switch (gameTypes[gameTypes.length - 1]) {
                case "moves": if (!levelData.time) gameTypes[gameTypes.length - 1] = LS_COLOURS.moves; break;
                case "button": gameTypes[gameTypes.length - 1] = LS_COLOURS.button; break;
                case "order": gameTypes[gameTypes.length - 1] = LS_COLOURS.order; break;
                case "globe": gameTypes[gameTypes.length - 1] = LS_COLOURS.globe; break;
            }
        }

        // Filter.
        gameTypes = gameTypes.filter((item,
            index) => gameTypes.indexOf(item) === index && item !== "moves");
        return gameTypes;
    } catch (e) {
        return [LS_COLOURS.none]
    }

}

function drawTiles(tileA) {
    for (let h = 0; h < GRID_HEIGHT; h++) {
        for (let w = 0; w < GRID_WIDTH; w++) {
            let pixel = gridToPixel(w, h, X_OFFSET, Y_OFFSET, 72);
            if (tiles[h][w] !== "none") ctx.drawImage(tileImage, 0, 256, 78, 78, pixel[0] - 72 + 32 - 8, pixel[1] - 72 + 32 - 8, 78, 78);
            if (spawningTiles.some(o => o[0] === w && o[1] === h)) ctx.drawImage(tileImage, 146, 256, 76, 76, pixel[0] - 72 + 32 - 8, pixel[1] - 72 + 32 - 8, 76, 76);
            if (buttonTiles[h][w] > 0) {
                ctx.drawImage(tileImage, buttonTiles[h][w] * 66 - 66, 334, 64, 64, pixel[0] - 72 + 32 - 2, pixel[1] - 72 + 32 - 2, 68, 68);
            }

            const teleporter = teleporters[h][w]
            if (teleporter[0]) {
                // Entry teleporter
                const tilemap = tileMaps.telEnterIndicator;
                ctx.drawImage(tileImage, tilemap.x, tilemap.y, tilemap.s, tilemap.s, pixel[0] - 72 + 32 - 8, pixel[1] - 72 + 32 - 8, 76, 76);
            }
            if (teleporter[1]) {
                // Exit teleporter
                const tilemap = tileMaps.telExitIndicator;
                ctx.drawImage(tileImage, tilemap.x, tilemap.y, tilemap.s, tilemap.s, pixel[0] - 72 + 32 - 8, pixel[1] - 72 + 32 - 8, 76, 76);
            }
            if (cannonTiles?.[h]?.[w].length > 0) {
                const tilemap = tileMaps.cannonBody;
                ctx.drawImage(tileImage, tilemap.x, tilemap.y, 64, 64, pixel[0] - 72 + 32 - 8, pixel[1] - 72 + 32 - 8 - 36, 76, 76);
                let spacing = 40 / cannonTiles?.[h]?.[w].length
                let i = 1;
                for (let type of cannonTiles?.[h]?.[w]) {
                    const tilemap = tileMaps[type + "Order"];
                    ctx.drawImage(tileImage, tilemap.x, tilemap.y, tilemap.s, tilemap.s, pixel[0] - 72 + 32 - 8 + i * spacing - (cannonTiles?.[h]?.[w].length < 2 ? 14 : 3), pixel[1] - 72 + 32 - 8 - 24, 26, 26);
                    i++;
                }
            }
            if (globeExitTiles.some(o => o[0] === w && o[1] === h)) ctx.drawImage(tileImage, 187, 464, 64, 64, pixel[0] - 72 + 32 - 8, pixel[1] - 72 + 32 - 8, 76, 76);
        }
    }
    for (let h = 0; h < GRID_HEIGHT; h++) {
        for (let w = 0; w < GRID_WIDTH; w++) {
            const m = 500;
            let ex = isRCMatch ? 3 : 1.7;
            let c = isRCMatch ? 1 : 0;
            let pixel = gridToPixel(w, h, X_OFFSET, Y_OFFSET, 72);
            if (new Date() - lastMatch < m && matchHappening) {
                let timeAfter = 1 - (Math.min(m, new Date() - lastActualMatch) / m);
                let difference = [toTile[0] - fromTile[0], toTile[1] - fromTile[1]];
                let ta = ((timeAfter + c) / (isRCMatch ? 2 : 1))
                if (w === fromTile[0] && h === fromTile[1])
                    pixel = gridToPixel(w + difference[0] * ta ** ex, h + difference[1] * ta ** ex, X_OFFSET, Y_OFFSET, 72);
                if (w === toTile[0] && h === toTile[1])
                    pixel = gridToPixel(w - difference[0] * ta ** ex, h - difference[1] * ta ** ex, X_OFFSET, Y_OFFSET, 72);
            }
            if (!tiles[h][w] || tiles[h][w] === "none") continue;
            let tileMap;
            if (tiles[h][w].slice(-15) === "ExtraTimeCircle") {
                tileMap = tileMaps[tiles[h][w].slice(0, -15) + "Circle"];
            } else {
                tileMap = tileMaps[tiles[h][w]];
            }
            if (!tileMap) continue;
            let size = (tileMap ? tileMap.s : null) || tileA;
            if (matchedTiles.some(o => o[0] === h && o[1] === w) || goingToMatch.filter(o => o[0] === h && o[1] === w).length >= 1) {
                ctx.globalAlpha = 0.8;
            }
            let trax = 0; let tray = 0;
            let si = 0;
            if (tiles[h][w] === "rainbowCircle") {
                ctx.save();
                trax = pixel[0] - 8; tray = pixel[1] - 8;
                ctx.translate(trax, tray);
                if (!encasingBlockerTiles[h][w]) ctx.rotate(Math.sin(new Date().getTime() / 500) / 4 + Math.PI * 1 / 4);
                else ctx.rotate(Math.PI / 4)
                ctx.translate(-trax, -tray);
            }
            if (tiles[h][w].startsWith("watermelon") && tiles[h][w] !== "watermelon3") {
                ctx.save();
                trax = pixel[0] - 8; tray = pixel[1] - 8;
                ctx.translate(trax, tray);
                if (!encasingBlockerTiles[h][w]) ctx.rotate(Math.sin(new Date().getTime() / 1000) / 2);
                ctx.translate(-trax, -tray);
            }

            if (tiles[h][w].startsWith("metalBall")) si = 6;
            if (tiles[h][w].startsWith("watermelon")) si = 4;
            if (tiles[h][w] === "globeHolder") {
                si = 15;
            }
            ctx.drawImage(tileImage, tileMap.x, tileMap.y, size, size, pixel[0] - 72 + 32 + 4 - si / 2, pixel[1] - 72 + 32 + 4 - si / 2, 56 + si, 56 + si);
            if (tiles[h][w] !== "watermelon3" && (tiles[h][w] === "rainbowCircle" || tiles[h][w] === "globeHolder" || tiles[h][w].startsWith("watermelon"))) {
                ctx.restore();
            }
            if (tiles[h][w].slice(-15) === "ExtraTimeCircle") {
                // Add a +5 label.
                ctx.font = "20px Segoe UI Semibold";
                const textx = pixel[0] - 72 + 32 + 4 - si / 2 + 40;
                const texty = pixel[1] - 72 + 32 + 4 - si / 2 + 20;
                ctx.fillStyle = "rgba(255,255,255,0.55)";
                ctx.strokeStyle = "rgba(255,255,255,0.8)";
                ctx.fillText("+5", textx, texty);
                ctx.strokeText("+5", textx, texty)
            }
            ctx.globalAlpha = 1;
        }
    }
    for (let h = 0; h < GRID_HEIGHT; h++) {
        for (let w = 0; w < GRID_WIDTH; w++) {
            let pixel = gridToPixel(w, h, X_OFFSET, Y_OFFSET, 72);
            if (encasingBlockerTiles[h] && encasingBlockerTiles[h][w]) {
                const tilemap = tileMaps[encasingBlockerTiles[h][w]];
                ctx.drawImage(tileImage, tilemap.x, tilemap.y, tilemap.s, tilemap.s, pixel[0] - 72 + 32 - 2, pixel[1] - 72 + 32 - 2, 68, 68);
            }
        }
    }
    for (let i = 0; i < stripedAnim.length; i++) {
        let anim = stripedAnim[i];
        let pixel = gridToPixel(anim.x, anim.y, X_OFFSET, Y_OFFSET, 72);
        if (!anim.startDate) {
            anim.startDate = new Date();
        }
        pixel[0] -= 32 + 8; pixel[1] -= 32 + 8;
        let colours = [255, 255, 255]
        switch (getColour(anim.type)) {
            case "red": colours = [255, 0, 0]; break;
            case "blue": colours = [0, 140, 255]; break;
            case "yellow": colours = [255, 255, 40]; break;
            case "green": colours = [0, 180, 0]; break;
            case "orange": colours = [255, 130, 0]; break;
            case "purple": colours = [200, 0, 255]; break;
        }
        ctx.fillStyle = "rgba(" + colours.join(",") + "," + (Math.max(0, 1 - (new Date() - anim.startDate) / 800) / 2) + ")";
        const defLength = 72 * (anim.isVertical ? GRID_HEIGHT : GRID_WIDTH);
        const subLength = Math.min(((new Date() - anim.startDate) / 800) ** 1.3 * 1000, defLength);
        if (anim.isVertical) {
            // Vertical striped
            ctx.fillRect(pixel[0], Y_OFFSET + subLength / 2, 72, defLength - subLength)
        } else {
            if (anim.isRadial) {
                // Radial striped
                const radius = Math.max(0, 120 - (subLength / 5) + (anim.isBig ? 72 : 0));
                ctx.beginPath();
                ctx.arc(pixel[0] + 32, pixel[1] + 32, radius, 0, 2 * Math.PI)
                ctx.fill();
            } else {
                // Horizontal striped
                ctx.fillRect(X_OFFSET + subLength / 2, pixel[1], defLength - subLength, 72)
            }
        }
        if (new Date() - anim.startDate > 600) stripedAnim = stripedAnim.filter(o => o.id !== anim.id)
    }
}

function pixelToGrid(x, y, xO, yO, s) {
    return [Math.round((x - xO - 32) / s), Math.round((y - yO - 32) / s)]
}

function getColour(t) {
    if (!t) return "none";
    return colourList.filter(o => t.toLowerCase().includes(o))[0] || "none"
}

function gridToPixel(x, y, xO, yO, s) {
    return [xO + x * s + 32, yO + y * s + 32]
}

function damaged(t, x, y, e, c, rainbow) {
    if (!t) return null;
    // Return the damaged tile.
    let r;
    if (!e) {
        switch (t) {
            case "none": r = "none"; break;
            case "metalBall1": r = null; break;
            case "metalBall2": r = "metalBall1"; break;
            case "metalBall3": r = "metalBall2"; break;
            case "metalBall4": r = "metalBall3"; break;
            case "metalBall5": r = "metalBall4"; break;
            case "metalBall6": r = "metalBall5"; break;
            case "watermelon1": r = null; break;
            case "watermelon2": r = "watermelon1"; break;
            case "watermelon3": r = "watermelon2"; break;
            case "globe":
                r = t; break;
            case "globeHolder": r = "globe"; break;
            default: r = null; break;
        }
        if (t && t.startsWith("metalBall")) {
            addScore(40, x, y, t)
            collectGoal("metal_ball", x, y, t)
        }
        if (t && t.startsWith("watermelon")) {
            addScore(30, x, y, t)
            collectGoal("watermelon", x, y, t)
        }
        if (getColour(t) !== "none") {
            collectGoal(getColour(t) + "_circle", x, y, getColour(t) + "Circle")
            if (t.endsWith("HSCircle") || t.endsWith("VSCircle")) {
                addScore(1000, x, y, t)
                collectGoal("striped_circle", x, y, t)
            }
            if (t.endsWith("RSCircle")) {
                addScore(2000, x, y, t)
                collectGoal("radial_circle", x, y, t)
            }
            if (t.endsWith("ExtraTimeCircle") && !showdownStarted) {
                addScore(1000, x, y, t)
                // Increase time.
                time = Math.min(maxTime, time + 5)
            }
        } else {
            if (t === "rainbowCircle") {
                addScore(5000, x, y, t)
                collectGoal("rainbow_circle", x, y, t)
            }
        }
        if (getColour(t) !== "none") {
            // Check for orders?
            // Check for nearby metal balls.
            if (rainbow) {
                if (tiles[y + 1]?.[x] && !encasingBlockerTiles[y + 1][x] && tiles[y + 1][x].startsWith("metalBall")) tiles[y + 1][x] = damaged(tiles[y + 1][x], x, y + 1)
                if (tiles[y - 1]?.[x] && !encasingBlockerTiles[y - 1][x] && tiles[y - 1][x].startsWith("metalBall")) tiles[y - 1][x] = damaged(tiles[y - 1][x], x, y - 1)
                if (tiles[y] && !encasingBlockerTiles[y][x + 1] && tiles[y][x + 1]?.startsWith("metalBall")) tiles[y][x + 1] = damaged(tiles[y][x + 1], x + 1, y)
                if (tiles[y] && !encasingBlockerTiles[y][x - 1] && tiles[y][x - 1]?.startsWith("metalBall")) tiles[y][x - 1] = damaged(tiles[y][x - 1], x - 1, y)
                if (tiles[y + 1]?.[x] && !encasingBlockerTiles[y + 1][x] && tiles[y + 1][x].startsWith("watermelon")) tiles[y + 1][x] = damaged(tiles[y + 1][x], x, y + 1)
                if (tiles[y - 1]?.[x] && !encasingBlockerTiles[y - 1][x] && tiles[y - 1][x].startsWith("watermelon")) tiles[y - 1][x] = damaged(tiles[y - 1][x], x, y - 1)
                if (tiles[y] && !encasingBlockerTiles[y][x + 1] && tiles[y][x + 1]?.startsWith("watermelon")) tiles[y][x + 1] = damaged(tiles[y][x + 1], x + 1, y)
                if (tiles[y] && !encasingBlockerTiles[y][x - 1] && tiles[y][x - 1]?.startsWith("watermelon")) tiles[y][x - 1] = damaged(tiles[y][x - 1], x - 1, y)
            }
            // Check for bubbled tiles!
            if (tiles[y + 1]?.[x] && encasingBlockerTiles[y + 1][x]?.startsWith("bubble")) tiles[y + 1][x] = damaged(tiles[y + 1][x], x, y + 1, encasingBlockerTiles[y + 1][x])
            if (tiles[y - 1]?.[x] && encasingBlockerTiles[y - 1][x]?.startsWith("bubble")) tiles[y - 1][x] = damaged(tiles[y - 1][x], x, y - 1, encasingBlockerTiles[y - 1][x])
            if (tiles[y] && tiles[y][x + 1] && encasingBlockerTiles[y][x + 1]?.startsWith("bubble")) tiles[y][x + 1] = damaged(tiles[y][x + 1], x + 1, y, encasingBlockerTiles[y][x + 1])
            if (tiles[y] && tiles[y][x - 1] && encasingBlockerTiles[y][x - 1]?.startsWith("bubble")) tiles[y][x - 1] = damaged(tiles[y][x - 1], x - 1, y, encasingBlockerTiles[y][x - 1])
        }
    } else {
        r = t;
        let newE = null;
        switch (e) {
            case "drain2": newE = "drain1"; break;
            case "bubble2": newE = "bubble1"; break;
            case "bubble3": newE = "bubble2"; break;
        }
        if (!goalsDone && (!timeMode && moves < 1) && showdownStarted) newE = e;
        encasingBlockerTiles[y][x] = newE;
    }
    return r;
}

function collectGoal(g, x, y, t, a) {
    if (a) {
        if (g !== "button") goalsCollected[g] += a;
    } else {
        if (g !== "button") goalsCollected[g]++;
    }
    let targetGoal = goals.filter(o => o.type === g)[0];
    if (!targetGoal) return;
    const collected = g === "button" ? buttonTiles.flat().reduce((a, b) => a + b, 0) : goalsCollected[g];
    if (NOT_COLLECTED.includes(g)) return;
    let isComplete = g === "button" ? (collected > initialButtons) : (collected > targetGoal.amount);
    if (g === "score") isComplete = targetAnim[0]
    if (!isComplete) goalAnim.push({
        x: x - 1,
        y: y,
        type: g,
        wasTile: t,
        id: said++
    })
}

function sizeCanvas() {
    const A_R = WIDTH / HEIGHT; // aspect ratio
    let h, w, x, y;
    let iH = window.innerHeight, iW = window.innerWidth
    if (iH * A_R < iW) {
        h = iH;
        w = iH * A_R
    } else {
        w = iW;
        h = iW / A_R
    }
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    mouse.m[0] = w;
    mouse.m[1] = h;
    // CENTER
    x = (iW - w) / 2;
    y = (iH - h) / 2;
    canvas.style.left = x + "px";
    canvas.style.top = y + "px";
}

async function loadLevel(l) {
    goalsDone = false;
    score = 0;
    targets = [Infinity, Infinity, Infinity];
    loadingDone = false;
    showdownStarted = false;
    for (let goal in goalsCollected) {
        goalsCollected[goal] = 0;
        goalsAnimCollected[goal] = 0;
    }
    goalsAnimCollected.button = 0;
    slide = false;
    let finalTiles = [];
    messageAnim = null;
    endMoves = null;
    levelEnd = false;
    let levelData = await import(`./${TEST_MODE ? "test_levels" : "levels"}/${l}.json`);
    if (!levelData) throw Error(`Level ${l} doesn't exist!`)
    /** The grid width. */
    GRID_WIDTH = levelData.width || 9;

    /** The grid height. */
    GRID_HEIGHT = levelData.height || 9;

    /** The X board offset. */
    X_OFFSET = 450 + 32 + 72 * ((9 - GRID_WIDTH) / 2);

    /** The Y board offset. */
    Y_OFFSET = 10 + 32 + 16 + 72 * ((9 - GRID_HEIGHT) / 2);

    immediateShowdown = levelData.immediateShowdown ?? true;

    levelHard = levelData.hard || 0
    let lo = 0;
    hasMadeMatch = false;
    while ((lo === 0 || isMatch(finalTiles)) && lo < 1000) {
        buttonTiles = [];
        encasingBlockerTiles = [];
        teleporters = [];
        for (let i = 0; i < GRID_HEIGHT; i++) {
            let t = [];
            let v = [];
            let w = [];
            for (let j = 0; j < GRID_WIDTH; j++) {
                t.push([null, null]);
                v.push(null);
                w.push(0);
            }
            encasingBlockerTiles.push(v);
            buttonTiles.push(w);
            teleporters.push(t);
        }
        level = l;
        targetAnim = [null, null, null]
        // Load the level.
        spawningTiles = [];
        globeExitTiles = [];
        if (!levelData.colours) throw Error("A colours property wasn't specified in the level JSON.")
        numberOfColours = levelData.colours;
        iColours = !!levelData.increaseColours;
        goals = levelData.goals;
        targets = levelData.targets
        console.log(GRID_WIDTH, GRID_HEIGHT)
        for (let i = 0; i < goals.length; i++) goals[i].completion = null;
        finalTiles = makeTiles(GRID_WIDTH + 2, GRID_HEIGHT, levelData.colours);
        finalTiles = finalTiles.map(o => o.slice(0, -2))
        console.log(GRID_WIDTH, GRID_HEIGHT, finalTiles)
        buttonTiles = []; encasingBlockerTiles = []; cannonTiles = [];
        cannonData = levelData.cannons || [];
        for (let i = 0; i < GRID_HEIGHT; i++) {
            let t = [];
            for (let j = 0; j < GRID_WIDTH; j++) {
                t.push(0)
            }
            buttonTiles.push(t)
            t = [];
            for (let j = 0; j < GRID_WIDTH; j++) {
                t.push(null)
            }
            encasingBlockerTiles.push(t)
            t = [];
            for (let j = 0; j < GRID_WIDTH; j++) {
                t.push([])
            }
            cannonTiles.push(t)
        }
        // Load some crap.
        if (!levelData.moves && !levelData.time) throw Error("A moves or time property wasn't specified in the level JSON.")
        timeMode = !!levelData.time;
        if (timeMode) {
            time = levelData.time;
            maxTime = levelData.time;
            moves = 0;
        }
        if (!levelData.tilemap) throw Error("A tilemap property wasn't specified in the level JSON.")
        moves = levelData.moves;
        if (levelData.tilemap.length !== GRID_HEIGHT) throw Error("The tilemap must have " + GRID_HEIGHT + " vertical tiles per column.")
        for (let y = 0; y < GRID_HEIGHT; y++) {
            let xTiles = levelData.tilemap[y].split(",");
            if (xTiles.length !== GRID_WIDTH) throw Error("The tilemap must have " + GRID_WIDTH + " horizontal tiles per row.");
            for (let x = 0; x < xTiles.length; x++) {
                let tileStuff = xTiles[x];
                let t = tileStuff.match(/.{1,2}/g);
                let colourFlag = null;
                let specialFlag = null;
                for (let i = 0; i < t.length; i++) {
                    let tile = t[i]
                    if (tile[0] === "T") {
                        i++;
                        tile += t[i];
                    }
                    switch (tile) {
                        // Tiles
                        case "--": finalTiles[y][x] = "none"; break;
                        case "-O": finalTiles[y][x] = null; break;
                        // circles
                        case "*S": spawningTiles.push([x, y]); break;
                        // Fixed circles
                        case "*0": colourFlag = "blue"; break;
                        case "*1": colourFlag = "green"; break;
                        case "*2": colourFlag = "orange"; break;
                        case "*3": colourFlag = "purple"; break;
                        case "*4": colourFlag = "red"; break;
                        case "*5": colourFlag = "yellow"; break;
                        // Special c
                        case "*|": specialFlag = "VS"; break;
                        case "*-": specialFlag = "HS"; break;
                        case "*O": specialFlag = "RS"; break;
                        case "*/": finalTiles[y][x] = "rainbowCircle"; break;
                        case "*+": specialFlag = "ExtraTime"; break;
                        // Buttons
                        case "B1":
                            buttonTiles[y][x] = 1;
                            break;
                        case "B2":
                            buttonTiles[y][x] = 2;
                            break;
                        case "B3":
                            buttonTiles[y][x] = 3;
                            break;
                        // Blockers
                        case "D1": encasingBlockerTiles[y][x] = "drain1"; break;
                        case "D2": encasingBlockerTiles[y][x] = "drain2"; break;
                        case "b1": encasingBlockerTiles[y][x] = "bubble1"; break;
                        case "b2": encasingBlockerTiles[y][x] = "bubble2"; break;
                        case "b3": encasingBlockerTiles[y][x] = "bubble3"; break;
                        // Globes
                        case "G1": finalTiles[y][x] = "globe"; break;
                        case "G2": finalTiles[y][x] = "globeHolder"; break;
                        case "G-": globeExitTiles.push([x, y]); break;
                        // Metal balls
                        case "M1": finalTiles[y][x] = "metalBall1"; break;
                        case "M2": finalTiles[y][x] = "metalBall2"; break;
                        case "M3": finalTiles[y][x] = "metalBall3"; break;
                        case "M4": finalTiles[y][x] = "metalBall4"; break;
                        case "M5": finalTiles[y][x] = "metalBall5"; break;
                        case "M6": finalTiles[y][x] = "metalBall6"; break;
                        // Watermelons
                        case "W1": finalTiles[y][x] = "watermelon1"; break;
                        case "W2": finalTiles[y][x] = "watermelon2"; break;
                        case "W3": finalTiles[y][x] = "watermelon3"; break;
                        // Cannons
                        case "CW": cannonTiles[y][x].push("watermelon"); break;
                        // FOR random circles: Don't do anything.
                        default:
                            if (tile[0] === "T") {
                                // Teleporter!
                                const number = Number(tile.slice(1))
                                if (number % 2 === 1) {
                                    // It is a start teleporter.
                                    teleporters[y][x][0] = (number + 1) / 2
                                } else {
                                    // It is an end teleporter.
                                    teleporters[y][x][1] = number / 2
                                }
                            }
                            break;
                    }
                }
                if (colourFlag && !specialFlag) finalTiles[y][x] = colourFlag + "Circle";
                if (!colourFlag && specialFlag) {
                    let prevColour = finalTiles[y][x].slice(0, -6);
                    finalTiles[y][x] = prevColour + specialFlag + "Circle"
                }
                if (colourFlag && specialFlag) finalTiles[y][x] = colourFlag + specialFlag + "Circle";
            }
        }
        initialButtons = buttonTiles.flat().reduce((a, b) => a + b, 0);
        lo++;
    }
    slide = true;
    loadingDone = true;
    return finalTiles;
}

function drawGoals() {
    goalsDone = true;
    let goalPos = [];
    for (let i = 0; i < goals.length; i++) {
        let goal = goals[i]
        let SIZE_DOWN = 0;
        let t = tileMaps[goal.type + "Order"]
        let sD = 0;
        if (goal.lastCollected) {
            const ct = goal.type === "score" ? 900 : 300;
            const exp = goal.type === "score" ? 1.3 : 2.2;
            sD += Math.max(8 * (1 - ((new Date() - goal.lastCollected) / ct) ** exp), 0);
        }
        ctx.drawImage(tileImage, t.x, t.y, t.s, t.s, 22 - sD / 2, 222 + i * OBJ_SIZE - sD / 2, 40 * OBJ_SIZE / 50 + sD, 40 * OBJ_SIZE / 50 + sD);
        goalPos.push({
            type: goal.type,
            x: 22,
            y: 222 + i * OBJ_SIZE,
            size: 40 * OBJ_SIZE / 50
        })
        let number = 0;
        let internalNumber = 0;
        switch (goal.type) {
            case "button":
                const cButtonAmount = goalsAnimCollected.button || 0;
                // Specific amount of buttons
                if (goal.amount && goal.amount !== 0) {
                    ctx.fillStyle = "white";
                    number = Math.max(0, goal.amount - cButtonAmount);
                    internalNumber = goal.amount - (initialButtons - buttonTiles.flat().reduce((a, b) => a + b, 0));
                    break;
                }
                // All buttons
                number = initialButtons - cButtonAmount;
                internalNumber = buttonTiles.flat().reduce((a, b) => a + b, 0)
                ctx.fillStyle = "#ccdae8";
                break;
            case "score":
                ctx.fillStyle = "#ffdddd";
                number = targets[0] - score;
                internalNumber = targets[0] - score;
                break;
            default: {
                ctx.fillStyle = "white";
                number = Math.max(0, goal.amount - goalsAnimCollected[goal.type]);
                internalNumber = Math.max(0, goal.amount - goalsCollected[goal.type]);
            }
        }
        if (number >= 1000 && goals.length <= 3) SIZE_DOWN = 20;

        ctx.font = (36 * OBJ_SIZE / 50 - SIZE_DOWN) + "px Segoe UI Semibold"
        if (internalNumber > 0 || !loadingDone) goalsDone = false;
        if (number > 0) {
            if (number >= 1000000) number = Math.floor(number / 1000000 * 100) / 100 + "M"
            else if (number >= 100000) number = Math.floor(number / 1000 * 10) / 10 + "K"
            ctx.fillText(number, 70 + (OBJ_SIZE - 50) / 1.7, 255 + i * OBJ_SIZE + (OBJ_SIZE - 50) / 1.7);
        } else {
            if (!goal.completion) goal.completion = new Date();
            const size = (1 - Math.min(1, (new Date() - goal.completion) / 250)) ** 2 * OBJ_SIZE + 40;
            const defaultSize = 40;
            let sizeDif = size - defaultSize;
            ctx.drawImage(tileImage, 254, 344, 56, 56, 70 - sizeDif / 2 + (OBJ_SIZE - 50) / 1.7, 221 + i * OBJ_SIZE - sizeDif / 2 + (OBJ_SIZE - 50) / 1.7, size, size);
        }
    }
    // Draw animated goal collections.

    for (let i = 0; i < showGoalAnim.length; i++) {
        let anim = showGoalAnim[i]
        if (!anim.startDate) anim.startDate = new Date();
        let startingPos;
        if (anim.type !== "score") {
            startingPos = gridToPixel(anim.x, anim.y, X_OFFSET, Y_OFFSET, 64);
            startingPos[0] += 32; startingPos[0] += 32;
        } else startingPos = [goalAnim.x / 2, goalAnim.y / 2]
        const orderObjPos = goalPos.filter(p => p.type === anim.type)[0];
        let orderPos = [orderObjPos.x, orderObjPos.y];
        if (goals.length < 4) {
            orderPos[0] += 8;
            orderPos[1] += 6;
        }
        const exp = 1.7;
        let o = (1 - Math.min((new Date() - anim.startDate) / (anim.type === "score" ? 1250 : 750), 1)) ** exp;
        let c = "boardTile";
        switch (anim.type) {
            default: c = anim.wasTile;
        }
        const tilemap = tileMaps[c];
        const os = goals.length > 3 ? orderObjPos.size : 50;
        ctx.drawImage(tileImage, tilemap.x, tilemap.y, tilemap.s || 64, tilemap.s || 64,
            o * startingPos[0] + (1 - o) * orderPos[0], o * startingPos[1] + (1 - o) * orderPos[1], os, os);
        if (new Date() - anim.startDate > 800) {
            showGoalAnim = showGoalAnim.filter(o => o.id !== anim.id);
            for (let j = 0; j < goals.length; j++) {
                if (goals[j].type === anim.type) goals[j].lastCollected = new Date();
            }
        }

    }
}


function canFall(t, x, y) {
    if (encasingBlockerTiles[y][x]) return false;
    return !CANNOT_FALL.includes(t)
}

function init() {
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.id = "gameCanvas";
    canvas.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "hidden";
    document.body.style.backgroundColor = "#222222";

    canvas.style.position = "absolute";
    document.body.appendChild(canvas);

    canvas.addEventListener("mouseup", clickCanvas);
    canvas.addEventListener("mousedown", clickCanvasDown);
    canvas.addEventListener("mousemove", clickCanvasMove);

    canvas.addEventListener("pointerup", clickCanvas);
    canvas.addEventListener("pointerdown", clickCanvasDown);
    canvas.addEventListener("pointermove", clickCanvasMove);
    canvas.addEventListener("wheel", event => {
        const delta = Math.sign(event.deltaY);
        lsScrollY -= delta * 60
    });

    requestAnimationFrame(tick); // Call game!
}

load();