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

// About Me changable text:
// NOTE: This is super bad coding. I would love some help with it!
const aboutMeMessage1 = [
    "game designer",
    "digital artist",
    "rogue-like fanatic",
    "game design student with a cs minor",
    "cat lover",
    "murloc enthusiast",
    "full-time student",
    "Overwatch 2 intern",
    "Diablo IV intern",
    "Blizzard intern",
    "VGDC design officer",
    "inagural SPARX intern",
    "minecraft enjoyer"
];

const aboutMeMessage2 = [
    "loves pad thai",
    "has 550+ hours in The Binding of Isaac",
    "loves Peter the Ant Eater",
    "really appreciates you for stopping by",
    "dyes her hair a ton of colors",
    "currently has blue hair",
    "loves fun facts",
    "uses Twitter a lot",
    "owns 4 cats",
    "learned a lot",
    "graduates in 2025",
    // "only plays survival mode" it would be cool if this only showed up when "minecraft enjoyer" was on the other one
    "loves to sleep in",
    "makes games"
];

const ABOUT_ME_1_ELEMENT_ID = "aboutMe1";
const aboutMe1El = document.getElementById(ABOUT_ME_1_ELEMENT_ID);

const ABOUT_ME_2_ELEMENT_ID = "aboutMe2";
const aboutMe2El = document.getElementById(ABOUT_ME_2_ELEMENT_ID);

const updateInnerText1 = () => {
    const aboutMe1Index = Math.floor(Math.random() * aboutMeMessage1.length);
    aboutMe1El.innerText = aboutMeMessage1[aboutMe1Index];
};

aboutMe1El.addEventListener("click", (e) => {
    e.preventDefault();
    console.info("Reloading");
    updateInnerText1();
});

const updateInnerText2 = () => {
    const aboutMe2Index = Math.floor(Math.random() * aboutMeMessage2.length);
    aboutMe2El.innerText = aboutMeMessage2[aboutMe2Index];
};

aboutMe2El.addEventListener("click", (e) => {
    e.preventDefault();
    console.info("Reloading");
    updateInnerText2();
});

/* 
// I want to make it so that it cycles through the same ones over and over rather than being random.
// dunno what im missing here...
const ABOUT_ME_1_ELEMENT_ID = "aboutMe1";
const aboutMe1El = document.getElementById(ABOUT_ME_1_ELEMENT_ID);
const aboutMe1Index = 0;

const updateInnerText = () => {
    aboutMe1El.innerText = aboutMeMessage1[aboutMe1Index];
    if (aboutMe1Index >= aboutMeMessage1.length) {
        aboutMe1Index = 0;
    } else {
        aboutMe1Index++;
    }
};
*/

// Welcome/Title text messages:
 
const welcomeMessages = [
    "hello there!!",
    "welcome!!",
    "*:･ﾟ✧*:･ﾟ✧",
    "yaaaaay!",
    "stay a while and listen!",
    "how's it hanging?",
    "Isaac, we love you",
    "land lubber ♡",
    "what the fart?",
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