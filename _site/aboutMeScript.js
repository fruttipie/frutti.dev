// About Me changable text:
// NOTE: This is super bad coding. I would love some help with it!
const aboutMeMessage1 = [
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
    "a Fixer",
    "an older sister",
    "a vinyl collector",
    "フランチェスカ",
    "留学生",
    "the VGDC mascot creator"
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
    "will be studying abroad in Japan",
    "is smart, talented, and humble",
    "is studying Japanese",
    "has attended 6 different colleges",
    "loves autobattlers",
    "少し日本語が出来ます",
    "loves to drive and talk",
    "created the VGDC mascots"
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