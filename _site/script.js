const themeToggle = document.getElementById("theme-toggle");
const prefersDarkQuery = window.matchMedia("(prefers-color-scheme: dark)") //media query
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const itchio = document.getElementById("itchio");

/*
// For setting the theme to match the user's computer's theme.
window.addEventListener("load", () => {
    if (prefersDarkQuery.matches){
        toggleMode();
    } else {
        setIcon("sun");
    }
});

function setIcon(icon) { // for example: setIcon("moon") will set the icon TO the moon
    if (icon === "moon"){
        moon.classList.remove("hidden");
        sun.classList.add("hidden");
    } else {
        moon.classList.add("hidden");
        sun.classList.remove("hidden");
    }
}

// function that changes the body from light to dark and visa versa:
function toggleMode() {
    document.body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode")){
        setIcon("moon");
    } else {
        setIcon("sun");
    }
}

// When the button is pressed, call the toggleMode function.
themeToggle.addEventListener("click", toggleMode);
*/

// //if the user CHANGES their theme from dark mode into another mode (light), do this:
// prefersDarkQuery.addEventListener("change", toggle);

// Welcome/Title text messages:

const welcomeMessages = [
    "hello there!!",
    "welcome!!",
    "*:･ﾟ✧*:･ﾟ✧",
    "yaaaaay!",
    "stay awhile and listen!",
    "how's it hanging?",
    "Isaac, we love you",
    "land lubber ♡",
    //"what the fart?",
    "✧polychrome✧",
    "I've got a few tricks!",
    "hatsune miku ♡",
    "miku miku oo ee uu",
    "AA EE OO",
    "Jerma985 here",
    "hmmmmmm",
    "...",
    "hi!!!!",
    "hey there!!",
    "new wave of the future",
    "!!!",
    "!?",
    "gamer moment",
    "Play Insaniquarium!!",
    "space cadet pinball",
    "monday left me broken",
    //"what's ur mother's maiden name?",
    //"what's these homies dissin my girl?",
    "full of Red 40",
    "i love mulch!",
    "WARNING!!!",
    "zot zot!!",
    "hire me please!",
    //"ooh you wanna hire me so bad",
    "game designer",
    "rogue-like fanatic",
    "#b5ffcb",
    "hello, world!",
    "// fix this later",
    "ouuughhhh",
    //"why do they call it the restroom?",
    "strange and weird",
    "made with Jekyll & Sass",
    "pad thai consumer",
    "made with ♡",
    "welcome to my sick site",
    "<!-- What -->",
    "fish can roll",
    "Isaac and his Mother",
    "+4 Mult",
    "+2",
    "im a creep, im a weirdo",
    "quilboars!!!",
    "so cool!!!!",
    "a million murklies a day",
    "♫ murlocs ♫",
    "YEAHHHH!!!!",
    "AAAAAAHHHH!!!",
    "wizard frog",
    "$accentColor2"
];
const CUSTOM_GREETING_ELEMENT_ID = "welcome";
const customGreetingEl = document.getElementById(CUSTOM_GREETING_ELEMENT_ID);


const updateInnerText = () => {
    const randomGreetingIndex = Math.floor(Math.random() * welcomeMessages.length);
    customGreetingEl.innerText = welcomeMessages[randomGreetingIndex];
};

// addEventListener("load", updateInnerText); // this is for making the welcome text random on load

customGreetingEl.addEventListener("click", (e) => {
    e.preventDefault();
    console.info("Reloading");
    updateInnerText();
});

// Toggle between showing and hiding the navigation menu links
// when the user clicks on the hamburger menu / bar icon
function toggleHamburgerMenu() {
    document.getElementById("navLinkList").classList.toggle("flex");
    document.getElementById("hamburgerIcon").classList.toggle("fa-bars");
    document.getElementById("hamburgerIcon").classList.toggle("fa-xmark");
}

addEventListener("resize", (e) => {
    if (document.getElementById("hamburgerIcon").classList.contains("fa-xmark")) {
        toggleHamburgerMenu();
    }
});