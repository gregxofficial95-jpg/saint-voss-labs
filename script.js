/* ========================================
   SAINT VÖSS LABS
   MAIN EXPERIENCE
======================================== */
let selectedProject = "";
let currentQuestion = 0;
let userAnswers = [];
const WEB3FORMS_KEY = "d434d16c-3256-449f-bebb-20d2c697ff5a";


const systemNumber =
    document.getElementById("system-number");

/* ========================================
   GET OUR SCREENS
======================================== */

const brandScreen = document.getElementById("brand-screen");
const questionScreen = document.getElementById("question-screen");
const loadingScreen = document.getElementById("loading-screen");
const labScreen = document.getElementById("lab-screen");
const questionnaireScreen =
    document.getElementById("questionnaire-screen");


const menuButton = document.querySelector(".menu-button");

const menuOverlay = document.getElementById("menu-overlay");

const closeMenu = document.getElementById("close-menu");

const menuItems = document.querySelectorAll(".menu-item");

const aboutScreen = document.getElementById("about-screen");

const contactScreen = document.getElementById("contact-screen");

const closeContact = document.getElementById("close-contact");

const startProject = document.getElementById("start-project");


// =========================
// MAIN MENU
// =========================

menuButton.addEventListener("click", () => {
    menuOverlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
});

document.querySelector(".close-info").addEventListener("click", () => {
    aboutScreen.classList.remove("active");
});

closeContact.addEventListener("click", () => {
    contactScreen.classList.remove("active");
});

startProject.addEventListener("click", () => {
    contactScreen.classList.remove("active");
    showScreen(questionScreen);
});

menuItems.forEach((item) => {

    item.addEventListener("click", () => {

        const destination = item.dataset.menu;

        if (destination === "lab") {
            menuOverlay.classList.remove("active");
        }

        if (destination === "experiments") {
            window.location.href = "./archive.html?view=archive";
        }

        if (destination === "about") {
    menuOverlay.classList.remove("active");
    aboutScreen.classList.add("active");
        }

        if (destination === "contact") {
            menuOverlay.classList.remove("active");
            contactScreen.classList.add("active");
        }
    });

});

const exitQuestionnaire =
    document.getElementById("exit-questionnaire");

const beginExperiment =
    document.getElementById("begin-experiment");

const questionNumber =
    document.getElementById("question-number");

const questionCategory =
    document.getElementById("question-category");

const questionTitle =
    document.getElementById("question-title");

const questionDescription =
    document.getElementById("question-description");

const answerOptions =
    document.getElementById("answer-options");

const progressBar =
    document.getElementById("progress-bar");

const questionnaireExperiment =
    document.getElementById("questionnaire-experiment");

const experimentScreen =
    document.getElementById("experiment-screen");

const backToLab =
    document.getElementById("back-to-lab");

const textAnswer =
    document.getElementById("text-answer");

const projectNotes =
    document.getElementById("project-notes");

const continueText =
    document.getElementById("continue-text");

const budgetAnswer =
    document.getElementById("budget-answer");

const budgetSlider =
    document.getElementById("budget-slider");

const budgetValue =
    document.getElementById("budget-value");

const continueBudget =
    document.getElementById("continue-budget");

const profileScreen =
    document.getElementById("profile-screen");

const profileExperiment =
    document.getElementById("profile-experiment");

const transmitProject =
    document.getElementById("transmit-project");

const transmissionScreen =
    document.getElementById("transmission-screen");

const transmissionStatus =
    document.getElementById("transmission-status");

const transmissionProgress =
    document.getElementById("transmission-progress");

const transmissionDetail =
    document.getElementById("transmission-detail");

const clientScreen =
    document.getElementById("client-screen");

const clientName =
    document.getElementById("client-name");

const clientEmail =
    document.getElementById("client-email");

const clientPhone =
    document.getElementById("client-phone");

const continueClient =
    document.getElementById("continue-client");

function showScreen(screenToShow) {

const screens = [
    brandScreen,
    questionScreen,
    loadingScreen,
    labScreen,
    experimentScreen,
    questionnaireScreen,
    profileScreen,
    transmissionScreen,
    clientScreen
];

    screens.forEach((screen) => {

        screen.classList.remove("active");

    });

    screenToShow.classList.add("active");

}


/* ========================================
   GET OUR BUTTONS
======================================== */

const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");


/* ========================================
   LOADING ELEMENTS
======================================== */

const progressText = document.getElementById("progress");
const loadingStatus = document.getElementById("loading-status");


/* ========================================
   STEP 1
   SHOW QUESTION AFTER LOGO
======================================== */

setTimeout(() => {

    brandScreen.style.display = "none";

    questionScreen.classList.add("active");

}, 4500);


/* ========================================
   STEP 2
   USER CLICKS YES
======================================== */

yesButton.addEventListener("click", () => {

    /* Hide the question */

    questionScreen.classList.remove("active");


    /* Show loading screen */

    loadingScreen.classList.add("active");


    /* Start the loading sequence */

    startLabInitialization();

});


/* ========================================
   STEP 3
   INITIALIZE THE LAB
======================================== */

function startLabInitialization() {

    let progress = 0;


    const loadingMessages = [
        "PREPARING YOUR EXPERIENCE",
        "CALIBRATING INTERFACE",
        "LOADING PROJECT SYSTEM",
        "CONNECTING TO LAB",
        "SYSTEM READY"
    ];


    const interval = setInterval(() => {

        /* Increase progress */

        progress++;


        /* Update percentage */

        progressText.textContent = `${progress}%`;


        /* Change loading message */

        if (progress < 20) {

            loadingStatus.textContent =
                loadingMessages[0];

        } else if (progress < 40) {

            loadingStatus.textContent =
                loadingMessages[1];

        } else if (progress < 65) {

            loadingStatus.textContent =
                loadingMessages[2];

        } else if (progress < 90) {

            loadingStatus.textContent =
                loadingMessages[3];

        } else {

            loadingStatus.textContent =
                loadingMessages[4];

        }


        /* Loading finished */

        if (progress >= 100) {

            clearInterval(interval);

            setTimeout(() => {

                loadingScreen.classList.remove("active");

                labScreen.classList.add("active");

            }, 700);

        }

    }, 30);

}


/* ========================================
   USER CLICKS NO
======================================== */

noButton.addEventListener("click", () => {

    questionScreen.innerHTML = `

        <p class="eyebrow">
            SAINT VÖSS LABS
        </p>

        <h2>
            MAYBE NEXT TIME.
        </h2>

        <p style="
            margin-top: 2rem;
            color: rgba(242, 240, 235, 0.4);
            font-size: 0.7rem;
            letter-spacing: 0.2em;
        ">
            EXPERIENCE TERMINATED
        </p>

    `;

});

/* ========================================
   PROJECT CARDS
======================================== */

const projectCards =
    document.querySelectorAll(".project-card");


const experimentData = {

    "E-COMMERCE": {
        number: "EXPERIMENT_001",

        title: "LET'S BUILD<br>SOMETHING<br>PEOPLE WANT.",

        description:
            "A digital storefront designed to turn visitors into customers."
    },

    "BUSINESS": {
        number: "EXPERIMENT_002",

        title: "TURN YOUR<br>BUSINESS INTO AN<br>EXPERIENCE.",

        description:
            "A powerful digital presence designed to make your business impossible to ignore."
    },

    "CUSTOM WEB": {
        number: "EXPERIMENT_003",

        title: "BUILD<br>EXACTLY WHAT YOU<br>ENVISION.",

        description:
            "No templates. No limitations. Just a digital experience built around your idea."
    },

    "BRAND": {
        number: "EXPERIMENT_004",

        title: "MAKE YOUR<br>BRAND<br>IMPOSSIBLE TO IGNORE.",

        description:
            "A digital identity designed to communicate your brand with clarity and personality."
    },

    "LANDING PAGES": {
        number: "EXPERIMENT_005",

        title: "ONE PAGE.<br>ONE PURPOSE.<br>MAX IMPACT.",

        description:
            "Focused digital experiences designed to turn attention into action."
    },

    "WEB APPS": {
        number: "EXPERIMENT_006",

        title: "TURN YOUR<br>IDEA INTO A<br>WORKING SYSTEM.",

        description:
            "Interactive browser-based applications built around how people actually use them."
    },

    "UI / UX": {
        number: "EXPERIMENT_007",

        title: "DESIGN THE<br>WAY PEOPLE<br>EXPERIENCE IT.",

        description:
            "Interfaces and user experiences designed to feel intuitive, purposeful and memorable."
    },

    "DIGITAL EXPERIENCES": {
        number: "EXPERIMENT_008",

        title: "BREAK THE<br>EXPECTED.",

        description:
            "Experimental digital experiences built to make the web feel different."
    }

};

projectCards.forEach((card) => {

    card.addEventListener("click", () => {

        const category =
            card.querySelector("h3").textContent.trim();

            selectedProject = category;

        const data =
            experimentData[category];


        if (!data) {
            return;
        }


        document.getElementById("experiment-number")
            .textContent = data.number;

            systemNumber.textContent =
    `SYSTEM / ${data.number.replace("EXPERIMENT_", "")}`;

        document.getElementById("experiment-category")
            .textContent = category;


        document.getElementById("experiment-title")
            .innerHTML = data.title;


        document.getElementById("experiment-description")
            .textContent = data.description;


     showScreen(experimentScreen);
    });

});

/* ========================================
   BACK TO LAB
======================================== */

backToLab.addEventListener("click", (event) => {

    event.preventDefault();

    showScreen(labScreen);

});

/* ========================================
   QUESTIONNAIRE DATA
======================================== */

/* ========================================
   QUESTIONNAIRE DATA
======================================== */

const questionnaireData = {

    "E-COMMERCE": [

        {
            title: "WHAT ARE YOU BUILDING?",
            description:
                "Tell us what we're creating together.",
            answers: [
                "A NEW ONLINE STORE",
                "AN EXISTING STORE",
                "A PRODUCT CATALOG",
                "SOMETHING ELSE"
            ]
        },

        {
            title: "WHAT DO YOU WANT TO SELL?",
            description:
                "Physical products, digital products, or something else?",
            answers: [
                "PHYSICAL PRODUCTS",
                "DIGITAL PRODUCTS",
                "SERVICES",
                "A MIX OF PRODUCTS & SERVICES"
            ]
        },

        {
            title: "WHAT SHOULD YOUR STORE DO?",
            description:
                "Choose the features your customers will need.",
            answers: [
                "PRODUCT CATALOG",
                "ONLINE PAYMENTS",
                "SHOPPING CART",
                "ORDER VIA WHATSAPP"
            ]
        },

        {
            title: "WHO ARE YOU SELLING TO?",
            description:
                "Tell us who we're designing the experience for.",
            answers: [
                "STUDENTS",
                "EVERYDAY CUSTOMERS",
                "BUSINESSES",
                "A SPECIFIC NICHE"
            ]
        },

        {
            title: "HOW SHOULD IT FEEL?",
            description:
                "Choose the visual direction you have in mind.",
            answers: [
                "PREMIUM",
                "MODERN",
                "BOLD",
                "SIMPLE & CLEAN"
            ]
        },

        {
            title: "TELL US MORE.",
            description:
                "Have a specific idea, feature, or requirement?",
            answers: [
                "I HAVE MORE TO SAY",
                "NOTHING ELSE FOR NOW"
            ]
        },

        {
            title: "WHAT'S YOUR BUDGET?",
            description:
                "Give us a range so we can understand the project scope.",
            answers: [
                "₦50K — ₦100K",
                "₦100K — ₦250K",
                "₦250K — ₦500K",
                "₦500K+"
            ]
        }

    ],


    "BUSINESS": [

        {
            title: "WHAT DOES YOUR BUSINESS DO?",
            description:
                "Give us a quick idea of what your business is about.",
            answers: [
                "PRODUCTS",
                "SERVICES",
                "BOTH",
                "SOMETHING ELSE"
            ]
        },

        {
            title: "WHAT SHOULD YOUR WEBSITE ACHIEVE?",
            description:
                "What's the main result you want from your website?",
            answers: [
                "GET MORE CUSTOMERS",
                "SHOWCASE MY BUSINESS",
                "BUILD CREDIBILITY",
                "ALL OF THE ABOVE"
            ]
        },

        {
            title: "WHAT SHOULD THE WEBSITE INCLUDE?",
            description:
                "Choose the features that matter most to your business.",
            answers: [
                "SERVICES / PRODUCTS",
                "CONTACT & INQUIRIES",
                "BOOKING SYSTEM",
                "CUSTOM FEATURES"
            ]
        },

        {
            title: "WHO ARE YOUR CUSTOMERS?",
            description:
                "Who are we building this website to attract?",
            answers: [
                "EVERYDAY CUSTOMERS",
                "BUSINESSES",
                "PROFESSIONALS",
                "A SPECIFIC AUDIENCE"
            ]
        },

        {
            title: "WHAT SHOULD YOUR BRAND FEEL LIKE?",
            description:
                "Choose the personality you want your website to communicate.",
            answers: [
                "PREMIUM",
                "MODERN",
                "BOLD",
                "SIMPLE & CLEAN"
            ]
        },

        {
            title: "TELL US MORE.",
            description:
                "Anything specific you'd like us to know?",
            answers: [
                "I HAVE MORE TO SAY",
                "NOTHING ELSE FOR NOW"
            ]
        },

        {
            title: "WHAT'S YOUR BUDGET?",
            description:
                "Give us a range so we can understand the project scope.",
            answers: [
                "₦50K — ₦100K",
                "₦100K — ₦250K",
                "₦250K — ₦500K",
                "₦500K+"
            ]
        }

    ],


    "CUSTOM WEB": [

        {
            title: "WHAT ARE YOU IMAGINING?",
            description:
                "Give us the big picture. What should we build?",
            answers: [
                "A WEB APP",
                "AN INTERACTIVE EXPERIENCE",
                "A SPECIALIZED PLATFORM",
                "SOMETHING COMPLETELY NEW"
            ]
        },

        {
            title: "WHO IS IT FOR?",
            description:
                "Who will actually use this experience?",
            answers: [
                "CUSTOMERS",
                "A BUSINESS",
                "A COMMUNITY",
                "MYSELF"
            ]
        },

        {
            title: "WHAT SHOULD IT DO?",
            description:
                "Tell us what you want people to be able to do.",
            answers: [
                "INTERACT WITH CONTENT",
                "CREATE / MANAGE ACCOUNTS",
                "BUY OR BOOK SOMETHING",
                "SOMETHING COMPLETELY CUSTOM"
            ]
        },

        {
            title: "WHAT MATTERS MOST?",
            description:
                "What should the experience prioritize?",
            answers: [
                "SPEED",
                "DESIGN",
                "FUNCTIONALITY",
                "ALL OF THE ABOVE"
            ]
        },

        {
            title: "WHAT SHOULD IT FEEL LIKE?",
            description:
                "Choose the visual direction you're imagining.",
            answers: [
                "FUTURISTIC",
                "PREMIUM",
                "MINIMAL",
                "EXPERIMENTAL"
            ]
        },

        {
            title: "TELL US MORE.",
            description:
                "Describe anything else you're imagining.",
            answers: [
                "I HAVE MORE TO SAY",
                "NOTHING ELSE FOR NOW"
            ]
        },

        {
            title: "WHAT'S YOUR BUDGET?",
            description:
                "Give us a range so we can understand the project scope.",
            answers: [
                "₦50K — ₦100K",
                "₦100K — ₦250K",
                "₦250K — ₦500K",
                "₦500K+"
            ]
        }

    ],


    "BRAND": [

        {
            title: "WHAT ARE WE BUILDING?",
            description:
                "Tell us what kind of digital presence your brand needs.",
            answers: [
                "A BRAND WEBSITE",
                "A PORTFOLIO",
                "A LANDING PAGE",
                "SOMETHING ELSE"
            ]
        },

        {
            title: "WHAT SHOULD PEOPLE FEEL?",
            description:
                "What's the personality you're trying to communicate?",
            answers: [
                "PREMIUM",
                "MODERN",
                "BOLD",
                "SIMPLE & CLEAN"
            ]
        },

        {
            title: "WHAT SHOULD THE WEBSITE DO?",
            description:
                "Choose what the website needs to accomplish.",
            answers: [
                "SHOWCASE THE BRAND",
                "GENERATE INQUIRIES",
                "SELL PRODUCTS / SERVICES",
                "ALL OF THE ABOVE"
            ]
        },

        {
            title: "WHO ARE WE SPEAKING TO?",
            description:
                "Who should connect with this brand?",
            answers: [
                "CUSTOMERS",
                "CLIENTS",
                "BUSINESSES",
                "A SPECIFIC AUDIENCE"
            ]
        },

        {
            title: "WHAT'S THE VISUAL DIRECTION?",
            description:
                "Choose the aesthetic that feels closest to your vision.",
            answers: [
                "LUXURY",
                "MODERN",
                "BOLD",
                "MINIMAL"
            ]
        },

        {
            title: "TELL US MORE.",
            description:
                "Anything else about the brand or website?",
            answers: [
                "I HAVE MORE TO SAY",
                "NOTHING ELSE FOR NOW"
            ]
        },

        {
            title: "WHAT'S YOUR BUDGET?",
            description:
                "Give us a range so we can understand the project scope.",
            answers: [
                "₦50K — ₦100K",
                "₦100K — ₦250K",
                "₦250K — ₦500K",
                "₦500K+"
            ]
        }

    ],


    "LANDING PAGES": [

        {
            title: "WHAT ARE WE PROMOTING?",
            description:
                "What is this landing page designed to introduce?",
            answers: [
                "A PRODUCT",
                "A SERVICE",
                "AN EVENT",
                "A CAMPAIGN"
            ]
        },

        {
            title: "WHAT'S THE MAIN GOAL?",
            description:
                "What should visitors do after seeing the page?",
            answers: [
                "MAKE A PURCHASE",
                "SIGN UP",
                "SEND AN INQUIRY",
                "LEARN MORE"
            ]
        },

        {
            title: "WHO ARE WE TARGETING?",
            description:
                "Tell us who the landing page needs to speak to.",
            answers: [
                "EVERYDAY CUSTOMERS",
                "BUSINESSES",
                "A NICHE AUDIENCE",
                "A NEW AUDIENCE"
            ]
        },

        {
            title: "WHAT SHOULD THE PAGE INCLUDE?",
            description:
                "Choose the elements that matter most.",
            answers: [
                "PRODUCT / SERVICE DETAILS",
                "CALL TO ACTION",
                "TESTIMONIALS",
                "LEAD FORM"
            ]
        },

        {
            title: "HOW SHOULD IT FEEL?",
            description:
                "Choose the visual direction.",
            answers: [
                "BOLD",
                "PREMIUM",
                "MINIMAL",
                "HIGH-ENERGY"
            ]
        },

        {
            title: "TELL US MORE.",
            description:
                "Anything specific about the campaign or page?",
            answers: [
                "I HAVE MORE TO SAY",
                "NOTHING ELSE FOR NOW"
            ]
        },

        {
            title: "WHAT'S YOUR BUDGET?",
            description:
                "Give us a range so we can understand the project scope.",
            answers: [
                "₦50K — ₦100K",
                "₦100K — ₦250K",
                "₦250K — ₦500K",
                "₦500K+"
            ]
        }

    ],


    "WEB APPS": [

        {
            title: "WHAT ARE WE BUILDING?",
            description:
                "Give us the big picture of the application.",
            answers: [
                "A CUSTOMER APP",
                "A BUSINESS TOOL",
                "A COMMUNITY PLATFORM",
                "SOMETHING NEW"
            ]
        },

        {
            title: "WHO WILL USE IT?",
            description:
                "Tell us who the application is being built for.",
            answers: [
                "CUSTOMERS",
                "BUSINESSES",
                "A COMMUNITY",
                "MY TEAM"
            ]
        },

        {
            title: "WHAT SHOULD USERS DO?",
            description:
                "Choose the main actions users should be able to perform.",
            answers: [
                "CREATE ACCOUNTS",
                "MANAGE INFORMATION",
                "BUY / BOOK SOMETHING",
                "INTERACT WITH OTHERS"
            ]
        },

        {
            title: "WHAT DOES THE SYSTEM NEED?",
            description:
                "Choose an important part of the experience.",
            answers: [
                "USER DASHBOARD",
                "DATABASE / DATA",
                "ADMIN FEATURES",
                "CUSTOM WORKFLOW"
            ]
        },

        {
            title: "WHAT MATTERS MOST?",
            description:
                "Choose the priority for the application.",
            answers: [
                "FUNCTIONALITY",
                "SPEED",
                "DESIGN",
                "ALL OF THE ABOVE"
            ]
        },

        {
            title: "TELL US MORE.",
            description:
                "Describe anything else the application should do.",
            answers: [
                "I HAVE MORE TO SAY",
                "NOTHING ELSE FOR NOW"
            ]
        },

        {
            title: "WHAT'S YOUR BUDGET?",
            description:
                "Give us a range so we can understand the project scope.",
            answers: [
                "₦50K — ₦100K",
                "₦100K — ₦250K",
                "₦250K — ₦500K",
                "₦500K+"
            ]
        }

    ],


    "UI / UX": [

        {
            title: "WHAT ARE WE DESIGNING?",
            description:
                "Tell us what interface we're working on.",
            answers: [
                "A WEBSITE",
                "A WEB APP",
                "A MOBILE APP",
                "SOMETHING ELSE"
            ]
        },

        {
            title: "WHO WILL USE IT?",
            description:
                "Understanding the user comes first.",
            answers: [
                "CUSTOMERS",
                "BUSINESSES",
                "A COMMUNITY",
                "A SPECIFIC AUDIENCE"
            ]
        },

        {
            title: "WHAT SHOULD USERS DO?",
            description:
                "What's the most important action in the experience?",
            answers: [
                "EXPLORE",
                "BUY",
                "SIGN UP",
                "COMPLETE A TASK"
            ]
        },

        {
            title: "WHAT NEEDS IMPROVEMENT?",
            description:
                "Tell us where the current experience falls short.",
            answers: [
                "NAVIGATION",
                "VISUAL DESIGN",
                "USER FLOW",
                "THE WHOLE EXPERIENCE"
            ]
        },

        {
            title: "WHAT'S THE VISUAL DIRECTION?",
            description:
                "Choose the design language you're imagining.",
            answers: [
                "MINIMAL",
                "MODERN",
                "PREMIUM",
                "EXPERIMENTAL"
            ]
        },

        {
            title: "TELL US MORE.",
            description:
                "Anything else about the interface or user experience?",
            answers: [
                "I HAVE MORE TO SAY",
                "NOTHING ELSE FOR NOW"
            ]
        },

        {
            title: "WHAT'S YOUR BUDGET?",
            description:
                "Give us a range so we can understand the project scope.",
            answers: [
                "₦50K — ₦100K",
                "₦100K — ₦250K",
                "₦250K — ₦500K",
                "₦500K+"
            ]
        }

    ],


    "DIGITAL EXPERIENCES": [

        {
            title: "WHAT ARE YOU IMAGINING?",
            description:
                "Forget the usual website. What should we create?",
            answers: [
                "AN INTERACTIVE WEBSITE",
                "A STORY-DRIVEN EXPERIENCE",
                "AN EXPERIMENTAL PROJECT",
                "I'M NOT SURE YET"
            ]
        },

        {
            title: "WHAT'S THE EXPERIENCE ABOUT?",
            description:
                "Give us the idea behind the experience.",
            answers: [
                "A BRAND",
                "A PRODUCT",
                "AN EVENT",
                "AN IDEA"
            ]
        },

        {
            title: "HOW SHOULD PEOPLE INTERACT?",
            description:
                "Choose how visitors should experience it.",
            answers: [
                "SCROLL & EXPLORE",
                "CLICK & DISCOVER",
                "ANIMATION & MOTION",
                "SOMETHING COMPLETELY CUSTOM"
            ]
        },

        {
            title: "WHAT SHOULD PEOPLE REMEMBER?",
            description:
                "What should the experience leave them with?",
            answers: [
                "THE BRAND",
                "THE STORY",
                "THE VISUALS",
                "THE ENTIRE EXPERIENCE"
            ]
        },

        {
            title: "HOW FAR SHOULD WE PUSH IT?",
            description:
                "Choose the level of experimentation.",
            answers: [
                "SUBTLE",
                "BOLD",
                "FUTURISTIC",
                "NO LIMITS"
            ]
        },

        {
            title: "TELL US MORE.",
            description:
                "This is where you can explain the idea in your own words.",
            answers: [
                "I HAVE MORE TO SAY",
                "NOTHING ELSE FOR NOW"
            ]
        },

        {
            title: "WHAT'S YOUR BUDGET?",
            description:
                "Give us a range so we can understand the project scope.",
            answers: [
                "₦50K — ₦100K",
                "₦100K — ₦250K",
                "₦250K — ₦500K",
                "₦500K+"
            ]
        }

    ]

};

/* ========================================
   BEGIN EXPERIMENT
======================================== */

beginExperiment.addEventListener("click", () => {

    currentQuestion = 0;

    userAnswers = [];

    questionnaireExperiment.textContent =
    experimentData[selectedProject].number;

    showQuestion();

    showScreen(questionnaireScreen);

});

/* ========================================
   SHOW QUESTION
======================================== */

function showQuestion() {

    const questions =
        questionnaireData[selectedProject];

    const question =
        questions[currentQuestion];


    if (!question) {
        return;
    }


    /* Question number */

    const displayNumber =
        String(currentQuestion + 1).padStart(2, "0");


    questionNumber.textContent =
        `${displayNumber} / 07`;


    /* Category */

    questionCategory.textContent =
        selectedProject;


    /* Question */

    questionTitle.textContent =
        question.title;


    /* Description */

    questionDescription.textContent =
        question.description;


    /* Progress */

    const progress =
        ((currentQuestion + 1) / 7) * 100;

    progressBar.style.width =
        `${progress}%`;


    /* Clear previous answers */

   answerOptions.innerHTML = "";

textAnswer.classList.remove("active");
budgetAnswer.classList.remove("active");

projectNotes.value = "";

/* ========================================
   BUDGET QUESTION
======================================== */

if (currentQuestion === 6) {

    answerOptions.style.display = "none";

    budgetAnswer.classList.add("active");

    return;

}

answerOptions.style.display = "";

    /* Create answer buttons */

    question.answers.forEach((answer) => {

    const button =
        document.createElement("button");

    button.type = "button";

    button.classList.add("answer-button");

    button.textContent = answer;


    button.addEventListener("click", () => {

        /* ================================
           SPECIAL TEXT INPUT
        ================================= */

        if (answer === "I HAVE MORE TO SAY") {

            userAnswers[currentQuestion] =
                "I HAVE MORE TO SAY";

            answerOptions.style.display = "none";

            textAnswer.classList.add("active");

            projectNotes.focus();

            return;
        }


        /* ================================
           NORMAL ANSWER
        ================================= */

        selectAnswer(answer);

    });


    answerOptions.appendChild(button);

});

}

/* ========================================
   SELECT ANSWER
======================================== */

function selectAnswer(answer) {

    userAnswers[currentQuestion] = answer;


    currentQuestion++;


    const questions =
        questionnaireData[selectedProject];


    if (currentQuestion >= questions.length) {

        console.log("Questionnaire section complete!");

        return;

    }


    showQuestion();

}

      /* ========================================
   BUDGET SLIDER
======================================== */

budgetSlider.addEventListener("input", () => {

    const value =
        Number(budgetSlider.value);

    if (value >= 1000000) {

        budgetValue.textContent =
            "₦1,000,000+";

        return;

    }

    budgetValue.textContent =
        `₦${value.toLocaleString()}`;

});

/* ========================================
   CONTINUE FROM BUDGET
======================================== */

continueBudget.addEventListener("click", () => {

    userAnswers[currentQuestion] =
        budgetValue.textContent;

    budgetAnswer.classList.remove("active");

    currentQuestion++;

    buildProjectProfile();

    showScreen(profileScreen);

});

/* ========================================
   BUILD PROJECT PROFILE
======================================== */

function buildProjectProfile() {

    const experiment =
        experimentData[selectedProject];

    profileExperiment.textContent =
        experiment.number;


    userAnswers.forEach((answer, index) => {

        const answerElement =
            document.getElementById(
                `profile-answer-${index + 1}`
            );


        if (answerElement) {

            answerElement.textContent =
                answer || "—";

        }

    });

}


/* ========================================
   CONTINUE FROM TEXT ANSWER
======================================== */

continueText.addEventListener("click", () => {

    const notes =
        projectNotes.value.trim();


    if (notes === "") {

        projectNotes.focus();

        return;

    }


    userAnswers[currentQuestion] = notes;


    currentQuestion++;


    answerOptions.style.display = "";


    textAnswer.classList.remove("active");


    showQuestion();

});

/* ========================================
   EXIT QUESTIONNAIRE
======================================== */

exitQuestionnaire.addEventListener("click", () => {

    showScreen(experimentScreen);

});

/* ========================================
   TRANSMIT PROJECT
======================================== */

transmitProject.addEventListener("click", () => {
    showScreen(clientScreen);

    clientName.focus();
});

continueClient.addEventListener("click", async () => {

    const name = clientName.value.trim();
    const email = clientEmail.value.trim();
    const phone = clientPhone.value.trim();

    /* ========================================
       VALIDATE CLIENT DETAILS
    ======================================== */

    if (name === "") {
        clientName.focus();
        return;
    }

    if (email === "") {
        clientEmail.focus();
        return;
    }


    /* ========================================
       BUILD PROJECT BRIEF
    ======================================== */

    const projectBrief = `
SAINT VÖSS LABS — NEW PROJECT

CLIENT
Name: ${name}
Email: ${email}
Phone / WhatsApp: ${phone || "Not provided"}

PROJECT
Type: ${selectedProject}
Experiment: ${experimentData[selectedProject].number}

PROJECT ANSWERS
1. ${userAnswers[0] || "—"}
2. ${userAnswers[1] || "—"}
3. ${userAnswers[2] || "—"}
4. ${userAnswers[3] || "—"}
5. ${userAnswers[4] || "—"}
6. ${userAnswers[5] || "—"}
7. ${userAnswers[6] || "—"}
`;


    /* ========================================
       SHOW TRANSMISSION SCREEN
    ======================================== */

    showScreen(transmissionScreen);

    transmissionStatus.textContent =
        "PREPARING BRIEF...";

    transmissionDetail.textContent =
        "PACKAGING PROJECT DATA";

    transmissionProgress.style.width =
        "20%";


    /* ========================================
       SEND TO WEB3FORMS
    ======================================== */

    try {

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },

                body: JSON.stringify({

                    access_key: WEB3FORMS_KEY,

                    subject:
                        `NEW SAINT VÖSS PROJECT — ${selectedProject}`,

                    from_name:
                        "SAINT VÖSS LABS",

                    email:
                        email,

                    message:
                        projectBrief

                })
            }
        );


        const result = await response.json();


        /* ========================================
           SUCCESS
        ======================================== */

        if (result.success) {

            setTimeout(() => {

                transmissionStatus.textContent =
                    "TRANSMITTING...";

                transmissionDetail.textContent =
                    "ESTABLISHING SECURE CHANNEL";

                transmissionProgress.style.width =
                    "55%";

            }, 700);


            setTimeout(() => {

                transmissionStatus.textContent =
                    "BRIEF RECEIVED";

                transmissionDetail.textContent =
                    "PROJECT DATA SUCCESSFULLY TRANSMITTED";

                transmissionProgress.style.width =
                    "100%";

            }, 2200);


        } else {

            throw new Error(
                "Submission failed"
            );

        }

    } catch (error) {

        console.error(
            "Web3Forms error:",
            error
        );

        transmissionStatus.textContent =
            "TRANSMISSION FAILED";

        transmissionDetail.textContent =
            "PLEASE TRY AGAIN";

        transmissionProgress.style.width =
            "0%";

    }

});
