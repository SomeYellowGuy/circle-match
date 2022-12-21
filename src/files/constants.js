// Constants

/** The width of the canvas. */
const WIDTH = 1280;

/** The height of the canvas. */
const HEIGHT = 720;

/** The minimum distance of a swipe to count it. */
const SWIPE_THRESHOLD = 40;

/** The maximum number of loops used in trying to generating a tile that doesn't conflict. */
const MAX_CIRCLE_LOOPS = 15;

/** The maximum number of loops used in trying to make a board with no matches. */
const MAX_BOARD_LOOPS = 600000;

/** The list of colours. */
const colourList = "blue.green.orange.purple.red.yellow".split(".")

/** Play test levels, or play the standard levels. */
const TEST_MODE = false;

/** The number of levels. */
const LEVELS_COUNT = 150;

/** The initial list of goals. */
const INITIAL_GOALS = {
    red_circle: 0,
    blue_circle: 0,
    yellow_circle: 0,
    green_circle: 0,
    orange_circle: 0,
    purple_circle: 0,
    rainbow_circle: 0,
    striped_circle: 0,
    radial_circle: 0,
    metal_ball: 0,
    watermelon: 0,
    globe: 0
}

const CANNOT_FALL = [
    "metalBall1",
    "metalBall2",
    "metalBall3",
    "metalBall4",
    "metalBall5",
    "metalBall6",
    "globeHolder",
    null,
    undefined,
    void 0
]

const CANNOT_MATCH = [
    "metalBall1",
    "metalBall2",
    "metalBall3",
    "metalBall4",
    "metalBall5",
    "metalBall6",
    "none",
    null,
    undefined,
    void 0
]

const INITIAL_SAVE = {
    scores: [],
    reachedLevel: 1
}

/** The colours to use for the level select. */
const LS_COLOURS = {
    none: "#666666",
    moves: "#ff5555",
    button: "#66aaff",
    order: "#ff44ee",
    time: "#9900ff",
    timemove: "#cc11ff",
    globe: "#00ffbb"
}

const RGBHSV = {
    RGBtoHSV: function(color) {
        let r,g,b,h,s,v;
        r = color[0];
        g = color[1];
        b = color[2];
        let min = Math.min( r, g, b );
        let max = Math.max( r, g, b );


        v = max;
        let delta = max - min;
        if( max != 0 )
            s = delta / max;        // s
        else {
            // r = g = b = 0        // s = 0, v is undefined
            s = 0;
            h = -1;
            return [h, s, undefined];
        }
        if( r === max )
            h = ( g - b ) / delta;      // between yellow & magenta
        else if( g === max )
            h = 2 + ( b - r ) / delta;  // between cyan & yellow
        else
            h = 4 + ( r - g ) / delta;  // between magenta & cyan
        h *= 60;                // degrees
        if( h < 0 )
            h += 360;
        if ( isNaN(h) )
            h = 0;
        return [h,s,v];
    },
    HSVtoRGB: function(color) {
        let i;
        let h,s,v,r,g,b;
        h= color[0];
        s= color[1];
        v= color[2];
        if(s === 0 ) {
            // achromatic (grey)
            r = g = b = v;
            return [r,g,b];
        }
        h /= 60;            // sector 0 to 5
        i = Math.floor( h );
        let f = h - i;          // factorial part of h
        let p = v * ( 1 - s );
        let q = v * ( 1 - s * f );
        let t = v * ( 1 - s * ( 1 - f ) );
        switch( i ) {
            case 0:
                r = v;
                g = t;
                b = p;
                break;
            case 1:
                r = q;
                g = v;
                b = p;
                break;
            case 2:
                r = p;
                g = v;
                b = t;
                break;
            case 3:
                r = p;
                g = q;
                b = v;
                break;
            case 4:
                r = t;
                g = p;
                b = v;
                break;
            default:        // case 5:
                r = v;
                g = p;
                b = q;
                break;
        }
        return [r,g,b];
    },
    HEXtoRGB: function(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16)
        ];
      }
};

// The list of goals, that can't be animated to collect.
const NOT_COLLECTED = []

// The list of ENGLISH messages.
const MESSAGES = {
    fail_moves: "You didn't satisfy all goals\n and ran out of moves!",
    fail_time: "You didn't satisfy all goals\n and ran out of time!"
}

export {
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
}