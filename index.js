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
    "Super secret page: <a href='supersecretpage/index.html'>link</a>",
    "<button onclick=\"newSplash()\">Reroll</button>",
    "Hi",
    "Assume ideal gas",
    "Non-volatile!",
    "Consists of 100% CuSO₄",
    "Join my discord server i post things there sometimes",
    "i use arch btw",
    "i wonder if we hypothetically make an LED the size of the sun and power it would it output more light than the sun",
    "<audio id=\"pibbleshop\" src=\"pibbleshop shopmania bulgaria.mp3\"></audio><button onclick=\"document.getElementById('pibbleshop').play()\">Announcement</button>"
]
splashes[0] = "There are <label style='color: 'rgb(85,255,255)'>"+splashes.length+" total splash messages that can appear here"
console.log("thorium")
var splash = document.getElementById("splash")
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function newSplash() {
    if (randInt(0, 1000) == 0)
        splash.innerHTML = "this splash is very rare"
    else
        splash.innerHTML = splashes[randInt(0, splashes.length)]
}
newSplash()