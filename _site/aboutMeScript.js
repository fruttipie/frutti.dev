// About Me changable text:
const DARK_TEXT_COLOR = "#211f23";
const LIGHT_TEXT_COLOR = "#fafafa";

const aboutMeMessage1 = [
    "confused",
    "a game designer",
    "a digital artist",
    "a rogue-like fanatic",
    "a cat lover",
    "a murloc enthusiast",
    "a full-time student",
    "a Overwatch 2 intern",
    "a Diablo IV intern",
    "a Blizzard intern",
    "a VGDC design officer",
    "a inagural SPARX intern",
    "a minecraft enjoyer",
    "an alien",
    "a tainted lost player",
    "a self-financed student",
    "a hearthstone battlegrounds fiend",
    "a class designer",
    "a hero designer",
    "a core gameplay designer",
    "a content designer",
    "a systems designer",
    "a combat designer",
    "a mediocre Poker player",
    "a Fixer? or maybe a Healer?",
    "an older sister",
    "a vinyl collector",
    "フランチェスカ",
    "留学生",
    "the VGDC mascot creator",
    "つくば大の学生",
    "a TFT fiend",
    "the team lead of drivetalk"
];

const aboutMeMessage2 = [
    "loves pad thai",
    "loves The Binding of Isaac", 
    "loves Peter the Anteater",
    "really appreciates you stopping by",
    "dyes her hair a ton of colors",
    "currently has pink hair",
    "loves fun facts",
    "uses Twitter a lot",
    "has 4 cats",
    "loves learning",
    "graduates in 2025",
    "loves to sleep in",
    "makes games",
    "is a big Hatsune Miku fan",
    "loves honeydew melon candy",
    "is from outer space",
    "loves parmesan cheese",
    "has had 10 different jobs",
    "loves playing Captain Hoggar",
    "used to be a C++ tutor",
    "has beaten Diablo 1",
    "is a digital artist of 13+ years",
    "loves in-n-out burger",
    "recommends 1000xResist",
    "snaps turn 1 in Marvel Snap",
    "is in Diablo IV's credits",
    "is studying abroad in Japan",
    "is smart, talented, and humble",
    "is studying Japanese",
    "has attended 6 different colleges",
    "loves autobattlers",
    "少し日本語が出来ます",
    "loves to drive and talk",
    "created the VGDC mascots",
    "日本語を勉強中",
    "loves butter chicken"
];

const exampleButtonColor = [
    ["red", "rgb(206, 47, 78)", LIGHT_TEXT_COLOR],
    ["orange", "rgb(255, 165, 0)", LIGHT_TEXT_COLOR],
    ["yellow", "rgb(255, 236, 66)", DARK_TEXT_COLOR],
    ["lime green", "rgb(174, 255, 99)", DARK_TEXT_COLOR],
    ["honeydew melon green", "rgb(210, 255, 166)", DARK_TEXT_COLOR],
    ["green", "rgb(55, 222, 88)", DARK_TEXT_COLOR],
    ["indigo", "rgb(91, 77, 214)", LIGHT_TEXT_COLOR],
    ["purple", "rgb(150, 73, 222)", LIGHT_TEXT_COLOR],
    ["navy", "rgb(32, 57, 138)", LIGHT_TEXT_COLOR],
    ["magenta", "rgb(253, 61, 179)", DARK_TEXT_COLOR],
    ["grey", "rgb(89, 87, 92)", LIGHT_TEXT_COLOR],
    ["pink", "rgb(255, 163, 205)", DARK_TEXT_COLOR],
    ["brown", "rgb(140, 91, 63)", LIGHT_TEXT_COLOR],
    ["acid green", "rgb(195, 212, 11)", DARK_TEXT_COLOR],
    ["blood red", "rgb(117, 15, 19)", LIGHT_TEXT_COLOR],
    ["saffron colored", "rgb(241, 195, 56)", DARK_TEXT_COLOR],
    ["red purple", "rgb(228, 0, 122)", LIGHT_TEXT_COLOR],
    ["strawberry colored", "rgb(237, 62, 62)", LIGHT_TEXT_COLOR],
    ["olive green", "rgb(91, 102, 34)", LIGHT_TEXT_COLOR],
    ["hot magenta", "rgb(235, 14, 187)", LIGHT_TEXT_COLOR],
    ["periwinkle", "rgb(164, 158, 255)", LIGHT_TEXT_COLOR],
    ["ecru", "rgb(224, 205, 149)", DARK_TEXT_COLOR],
    ["lavender", "rgb(190, 158, 255)", DARK_TEXT_COLOR],
    ["miku colored", "rgb(0, 221, 192)", DARK_TEXT_COLOR],
    ["burgundy", "rgb(107, 7, 57)", LIGHT_TEXT_COLOR],
    ["cyan", "rgb(12, 199, 183)", DARK_TEXT_COLOR],
    ["cobalt", "rgb(14, 82, 176)", LIGHT_TEXT_COLOR],
    ["sky blue", "rgb(130, 199, 229)", DARK_TEXT_COLOR],
    ["cornflower blue", "rgb(84, 143, 232)", DARK_TEXT_COLOR],
    ["powder blue", "rgb(184, 227, 233)", DARK_TEXT_COLOR],
    ["jade green", "rgb(7, 173, 98)", LIGHT_TEXT_COLOR],
    ["sand colored", "rgb(203, 189, 147)", DARK_TEXT_COLOR],
    ["pistachio colored", "rgb(132, 176, 103)", LIGHT_TEXT_COLOR],
    ["wisteria purple", "rgb(201, 160, 220)", DARK_TEXT_COLOR],
    ["mahogany", "rgb(189, 73, 15)", LIGHT_TEXT_COLOR],
    ["egirl pink", "rgb(255, 141, 162)", DARK_TEXT_COLOR],
    ["anton pink", "rgb(237, 139, 247)", DARK_TEXT_COLOR],
    ["mauve", "rgb(224, 176, 255)", DARK_TEXT_COLOR],
    ["violet", "rgb(138, 44, 232)", LIGHT_TEXT_COLOR],
    ["emerald green", "rgb(80, 200, 120)", LIGHT_TEXT_COLOR],
    ["pewter", "rgb(96, 98, 99)", LIGHT_TEXT_COLOR],
    ["salmon", "rgb(255, 140, 105)", DARK_TEXT_COLOR],
    ["pastel blue", "rgb(167, 199, 231)", DARK_TEXT_COLOR],
    ["baby pink", "rgb(255, 217, 230)", DARK_TEXT_COLOR],
    ["neon lime", "rgb(201, 237, 19)", DARK_TEXT_COLOR],
    ["crimson red", "rgb(178, 34, 34)", LIGHT_TEXT_COLOR]
];

const ABOUT_ME_1_ELEMENT_ID = "aboutMe1";
const aboutMe1El = document.getElementById(ABOUT_ME_1_ELEMENT_ID);

const ABOUT_ME_2_ELEMENT_ID = "aboutMe2";
const aboutMe2El = document.getElementById(ABOUT_ME_2_ELEMENT_ID);

// this is for the example button at the bottom of the page!!
const EXAMPLE_BUTTON_ELEMENT_ID = "exampleCustomizable";
const exampleButtonEl = document.getElementById(EXAMPLE_BUTTON_ELEMENT_ID);

const WELCOME_ELEMENT_ID = "welcome";
const welcomeEl = document.getElementById(WELCOME_ELEMENT_ID);

const updateInnerText1 = () => {
    let aboutMe1Index = Math.floor(Math.random() * aboutMeMessage1.length);
    let currentInnerText = aboutMe1El.innerText;
    let newInnerText = aboutMeMessage1[aboutMe1Index];
    console.info("current = " + currentInnerText + " new = " + newInnerText);

     while (currentInnerText == newInnerText) {
        // reroll!
        console.info("Rerolling!");
        aboutMe1Index = Math.floor(Math.random() * aboutMeMessage1.length);
        newInnerText = aboutMeMessage1[aboutMe1Index];
        console.info("current = " + currentInnerText + " new = " + newInnerText);
    }
    aboutMe1El.innerText = aboutMeMessage1[aboutMe1Index];

};

aboutMe1El.addEventListener("click", (e) => {
    e.preventDefault();
    console.info("Reloading");
    updateInnerText1();
});

const updateInnerText2 = () => {
    let aboutMe2Index = Math.floor(Math.random() * aboutMeMessage2.length);
    let currentInnerText = aboutMe2El.innerText;
    let newInnerText = aboutMeMessage2[aboutMe2Index];
    console.info("current = " + currentInnerText + " new = " + newInnerText);

     while (currentInnerText == newInnerText) {
        // reroll!
        console.info("Rerolling!");
        aboutMe2Index = Math.floor(Math.random() * aboutMeMessage2.length);
        newInnerText = aboutMeMessage2[aboutMe2Index];
        console.info("current = " + currentInnerText + " new = " + newInnerText);
    }

    // super secret! hehe
    if ((aboutMe1El.innerText == "confused") && (aboutMe2El.innerText != "are you?")) {
        // eventually let's do the thing where we make a reroll function for each button and then a general reroll function and then
        // we can reroll "confused" whenever you're pressing on "are you?" so that both change together :)
        aboutMe2El.innerText = "are you?";
    } else {
        aboutMe2El.innerText = aboutMeMessage2[aboutMe2Index];
    }
};

aboutMe2El.addEventListener("click", (e) => {
    e.preventDefault();
    console.info("Reloading");
    updateInnerText2();
});

const makeExampleButtonRandomColor = () => {
    let exampleButtonIndex = Math.floor(Math.random() * exampleButtonColor.length);
    let currentBackgroundColor = exampleButtonEl.style.backgroundColor;
    let newBackgroundColor = exampleButtonColor[exampleButtonIndex][1];
    console.info("current = " + currentBackgroundColor + " new = " + newBackgroundColor);

    // make sure you change to a color that isn't the same as the old one!
    // man... i could totally make a function that takes in the arguments of the current, new, and function to reroll... too lazy... sorry...
    while (currentBackgroundColor == newBackgroundColor) {
        // reroll!
        console.info("Rerolling!");
        exampleButtonIndex = Math.floor(Math.random() * exampleButtonColor.length);
        newBackgroundColor = exampleButtonColor[exampleButtonIndex][1];
        console.info("current = " + currentBackgroundColor + " new = " + newBackgroundColor);
    }

    exampleButtonEl.innerText = exampleButtonColor[exampleButtonIndex][0];
    exampleButtonEl.style.backgroundColor = newBackgroundColor;
    aboutMe1El.style.backgroundColor = newBackgroundColor;
    aboutMe2El.style.backgroundColor = newBackgroundColor;
    welcomeEl.style.backgroundColor = newBackgroundColor;

    // check if you need to change text color for lighter background colors
    // true = light text & false = dark text
    if (exampleButtonEl.style.color != exampleButtonColor[exampleButtonIndex][2]) {
        if (exampleButtonColor[exampleButtonIndex][2] == LIGHT_TEXT_COLOR) {
            exampleButtonEl.style.color = LIGHT_TEXT_COLOR;
            aboutMe1El.style.color = LIGHT_TEXT_COLOR;
            aboutMe2El.style.color = LIGHT_TEXT_COLOR;
            welcomeEl.style.color = LIGHT_TEXT_COLOR;
        } else {
            exampleButtonEl.style.color = DARK_TEXT_COLOR;
            aboutMe1El.style.color = DARK_TEXT_COLOR;
            aboutMe2El.style.color = DARK_TEXT_COLOR;
            welcomeEl.style.color = DARK_TEXT_COLOR;
        }
    }
};

exampleButtonEl.addEventListener("click", (e) => {
    e.preventDefault();
    console.info("Reloading");
    makeExampleButtonRandomColor();
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