/* include zquery */

const state = {};
const dom = {};
const conf = {};

const raf = window.requestAnimationFrame 
         || window.mozRequestAnimationFrame 
         || window.webkitRequestAnimationFrame 
         || window.msRequestAnimationFrame;

zz.domReady(()=>{

    initDOM();
    initConf();
    initState();

    raf(run);
});


function run() {
    // get current time
    let now = new Date();
    // get digit parts
    let digs = [
        ...getDigits(now.getHours()),
        ...getDigits(now.getMinutes()),
        ...getDigits(now.getSeconds())
    ];

    // update digs that have changed
    for(const [i, val] of digs.entries()) {
        if(state.val[i] !== val) {
            state.val[i] = val;
            dom.digits[i].className = (state.dir[i]?'':'b') + `d${val}`;
            // alternate transform direction for all digits except seconds
            if (i < 4) {
                state.dir[i] = !state.dir[i];
            }
        }
    }

    raf(run);
}

function getDigits(i) {
    let left = Math.floor(i/10);
    let right = i%10;
    return [left, right];
}

function initDOM() {
    // reference to digit containers
    dom.digits = z(".clock .digit div");
}
function initState() {
    // keep track of transition direction for each digit
    // forwards or backwards
    state.dir = [true, false, true, false, true, true];
    // keep track of last known values
    // only update when there is something to change
    state.val = [-1, -1, -1, -1, -1, -1];
}
function initConf() {}
