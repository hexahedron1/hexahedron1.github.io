const splashes = [
    "If you see this message something went wrong",
    "Have you done your duolingo lesson?",
    "0 lines of AI-written code!",
    "Made by a single person!",
    "CSS is kinda fun actually",
    "undefined",
    "splashes[randInt(0, splashes.length)]",
    "Curiosity test: <button onclick=\"alert('You passed the curiosity test')\">Click Here</button>",
    "FREEMOVIESONLINE.COM PLAN FOR $0.99 A MONTH! <a href='https://en.wikipedia.org/wiki/Scam'>SUBSCRIBE</a>",
    "<a href='supersecretpage/index.html'>Mysterious link</a>",
    "<button onclick=\"document.getElementById('splash').innerHTML = newSplash()\">Reroll</button>",
    "Hi",
    "Assume ideal gas",
    "Non-volatile!",
    "Consists of 100% CuSO₄",
    "Join <a href=\"https://discord.gg/vGyZmXGnea\">my discord server</a> i post things there sometimes",
    "i use arch btw",
    "<audio id=\"pibbleshop\" src=\"pibbleshop shopmania bulgaria.mp3\"></audio><button onclick=\"document.getElementById('pibbleshop').play()\">Announcement</button>",
    "647e Disengaged from workforce",
    "Now with images!",
    "j1407b is not a planet",
    "who the hell is a block_618 anyway",
    "sudo pacman -Sybau",
    "shoutout to the train wheels",
    "build a donkey!",
    "who are you",
    "idk",
    "i'm running out of splash ideas",
    "i have oil",
    "REPOST THIS MESSAGE IF YOU HATE RIVER OPTIC CABLE",
    "it is so sad he died of sigma",
    "red spy in base",
    "R U R' U' R' F R2 U' R' U' R U R' F'",
    "едрени пени",
    "man i'm so hungry i could eat a",
    "half life 3",
    "cube?????is this ag eometry dash reference>>>>>???????",
    "GEOGRAPHY SMASH IS BETTER!!!!!!!! <i>ONE MORBILLION EXPLOSIONS</i>",
    "Кабардино-Балкария is my refridgerator",
    "mi ne laboras, mi dormas",
    "mi manĝis 3 kilogramojn da pura uranio",
    "ĉi tiu splaŝo estas intence skribita en alia lingvo por konfuzi homojn",
    "mi manĝas insektojn"
]
splashes[0] = "There are <label style='color: 'rgb(85,255,255)'>"+(splashes.length+1)+" total splash messages that can appear here"
console.log("thorium")
var splash = document.getElementById("splash")
var splink = document.getElementById("secrepagelink")
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function newSplash() {
    if (randInt(0, 1000) == 0)
        return "this splash is very rare"
    else
        return splashes[randInt(0, splashes.length)]
}
if (splash != null) {
    splash.innerHTML = newSplash()
}
if (splink != null && localStorage.getItem("secret-page-unlocked") == "true") {
    splink.hidden = false
}