const question = document.getElementById("question");
const nextbt = document.getElementById("nextbt");
const startbt = document.getElementById("startbt");
const backbt = document.getElementById("backbt");
const menu = document.getElementById("menu");
const game = document.getElementById("game");
const odp1 = document.getElementById("odp1");
const odp2 = document.getElementById("odp2");
const odp3 = document.getElementById("odp3");
const odp4 = document.getElementById("odp4");
const levelbt = document.getElementById("showingLevel");

let countQ = 0;
let score;
let lvl;
let countLevel = 2;
let howManyQ = 5;

functionLevel = () => {
    switch (countLevel) {
        case 1:
            levelbt.innerHTML = "Starożytny Egipt";
            countLevel++;
            break;
        case 2:
            levelbt.innerHTML = "Starożytny Rzym";
            countLevel++;
            break;
        case 3:
            levelbt.innerHTML = "Wojny Amerykańskie";
            countLevel = 1;
            break;
    }
}


start = () => {
    lvl = levelbt.innerHTML;

    score = 0;

    startbt.style.display = "none";
    backbt.style.display = "none";
    menu.style.display = "none";
    game.style.display = "block";

    next();
}

next = () => {
    nextbt.style.display ="none";
    if (countQ == howManyQ) end();
    else {

        switch (lvl) {
            case "Starożytny Egipt":
                EgiyptF();
                break;
            case "Starożytny Rzym":
                RomeF();
                break;
            case "Wojny Amerykańskie":
                UsaF();
                break;
        }

        removeStyle();
        countQ++;
    }
}

end = () => {
    game.style.display = "none";
    console.log(score);
    question.innerHTML = "Temat: " + lvl + "<br><br>Wynik: " + score+" na "+howManyQ;

    backbt.style.display = "block";
    nextbt.style.display = "none";
    backbt.style.width = "310px";
    backbt.innerHTML = "Zagraj ponownie";
}
reload = () => {
    location.reload(true);
}


EgiyptF = () => {
    question.innerHTML = questionsAcientEgypt[countQ].question;
    odp1.innerHTML = questionsAcientEgypt[countQ].answer1;
    odp2.innerHTML = questionsAcientEgypt[countQ].answer2;
    odp3.innerHTML = questionsAcientEgypt[countQ].answer3;
    odp4.innerHTML = questionsAcientEgypt[countQ].answer4;
}
RomeF = () => {
    question.innerHTML = questionsAcientRome[countQ].question;
    odp1.innerHTML = questionsAcientRome[countQ].answer1;
    odp2.innerHTML = questionsAcientRome[countQ].answer2;
    odp3.innerHTML = questionsAcientRome[countQ].answer3;
    odp4.innerHTML = questionsAcientRome[countQ].answer4;
}
UsaF = () => {
    question.innerHTML = questionsUsa[countQ].question;
    odp1.innerHTML = questionsUsa[countQ].answer1;
    odp2.innerHTML = questionsUsa[countQ].answer2;
    odp3.innerHTML = questionsUsa[countQ].answer3;
    odp4.innerHTML = questionsUsa[countQ].answer4;
}

function odp1f() {

    switch (lvl) {
        case "Starożytny Egipt":
            if (odp1.innerHTML == questionsAcientEgypt[countQ - 1].correct) {
                greenButtonF(odp1);
            } else redButtonF(odp1);
            break;

        case "Starożytny Rzym":
            if (odp1.innerHTML == questionsAcientRome[countQ - 1].correct) {
                greenButtonF(odp1);
            } else redButtonF(odp1);
            break;
        case "Wojny Amerykańskie":
            if (odp1.innerHTML == questionsUsa[countQ - 1].correct) {
                greenButtonF(odp1);
            } else redButtonF(odp1);
            break;
    }

    dissabledF();
}
function odp2f() {

    switch (lvl) {
        case "Starożytny Egipt":
            if (odp2.innerHTML == questionsAcientEgypt[countQ - 1].correct) {
                greenButtonF(odp2);
            } else redButtonF(odp2);
            break;

        case "Starożytny Rzym":
            if (odp2.innerHTML == questionsAcientRome[countQ - 1].correct) {
                greenButtonF(odp2);
            } else redButtonF(odp2);
            break;
        case "Wojny Amerykańskie":
            if (odp2.innerHTML == questionsUsa[countQ - 1].correct) {
                greenButtonF(odp2);
            } else redButtonF(odp2);
            break;
    }

    dissabledF();
}
function odp3f() {

    switch (lvl) {
        case "Starożytny Egipt":
            if (odp3.innerHTML == questionsAcientEgypt[countQ - 1].correct) {
                greenButtonF(odp3);
            } else redButtonF(odp3);
            break;

        case "Starożytny Rzym":
            if (odp3.innerHTML == questionsAcientRome[countQ - 1].correct) {
                greenButtonF(odp3);
            } else redButtonF(odp3);
            break;
        case "Wojny Amerykańskie":
            if (odp3.innerHTML == questionsUsa[countQ - 1].correct) {
                greenButtonF(odp3);
            } else redButtonF(odp3);
            break;
    }

    dissabledF();
}
function odp4f() {

    switch (lvl) {
        case "Starożytny Egipt":
            if (odp4.innerHTML == questionsAcientEgypt[countQ - 1].correct) {
                greenButtonF(odp4);
            } else redButtonF(odp4);
            break;

        case "Starożytny Rzym":
            if (odp4.innerHTML == questionsAcientRome[countQ - 1].correct) {
                greenButtonF(odp4);
            } else redButtonF(odp4);
            break;
        case "Wojny Amerykańskie":
            if (odp4.innerHTML == questionsUsa[countQ - 1].correct) {
                greenButtonF(odp4);
            } else redButtonF(odp4);
            break;
    }

    dissabledF();
}

redButtonF = odp => odp.style.backgroundColor = "#f44336";

greenButtonF = odp => {
    odp.style.backgroundColor = "#4CAF50";
    score++;
}

dissabledF = () => {
    odp1.disabled = true;
    odp2.disabled = true;
    odp3.disabled = true;
    odp4.disabled = true;
    nextbt.style.display = "block";
}
removeStyle = () => {
    odp1.disabled = false;
    odp2.disabled = false;
    odp3.disabled = false;
    odp4.disabled = false;
    odp1.style.backgroundColor = "#6D696A";
    odp2.style.backgroundColor = "#6D696A";
    odp3.style.backgroundColor = "#6D696A";
    odp4.style.backgroundColor = "#6D696A";
}


const questionsAcientEgypt = [
    {
        question: 'Kto wybudował pierwszą piramide',
        answer1: 'Dżoser',
        answer2: 'Snofru',
        answer3: 'Cheops',
        answer4: 'Menkaure',
        correct: 'Dżoser'
    },
    {
        question: 'Założyciel Górnego i Dolnego Egiptu',
        answer1: 'Snofru',
        answer2: 'Narmer',
        answer3: 'Cheops',
        answer4: 'Userkaf',
        correct: 'Narmer'
    },
    {
        question: 'Kim był wezyr',
        answer1: 'Urzędnikiem',
        answer2: 'Faraonem',
        answer3: 'Kapłanem',
        answer4: 'Niewolnikiem',
        correct: 'Urzędnikiem'
    },
    {
        question: 'Bóg stwórca ludzi',
        answer1: 'Re',
        answer2: 'Chnum',
        answer3: 'Ptah',
        answer4: 'Atum',
        correct: 'Chnum'
    },
    {
        question: 'Wezyr faraona Dżosera',
        answer1: 'Abydos',
        answer2: 'Ba-neb-dżeda',
        answer3: 'Imhotep',
        answer4: 'Merenptah',
        correct: 'Imhotep'
    }
];


const questionsAcientRome = [
    {
        question: 'Liczba legendarnych królów',
        answer1: '4',
        answer2: '7',
        answer3: '5',
        answer4: '10',
        correct: '7'
    },
    {
        question: 'Cesarz z dynastii Antoninów',
        answer1: 'Tyberiusz',
        answer2: 'Wespazjan',
        answer3: 'Hadrian',
        answer4: 'Oktawian August',
        correct: 'Hadrian'
    },
    {
        question: 'Kto wygrał III Wojne Sammicką',
        answer1: 'Sammici',
        answer2: 'Rzym',
        answer3: 'Kartagina',
        answer4: 'Etruskowie',
        correct: 'Rzym'
    },
    {
        question: 'Najstarsza droga rzymska',
        answer1: 'Via Cassia',
        answer2: 'Via Flaminia',
        answer3: 'Via Appia',
        answer4: 'Via Aurelia',
        correct: 'Via Appia'
    },
    {
        question: 'Bogini świata roślinnego i zwierzęcego',
        answer1: 'Ceres',
        answer2: 'Westa',
        answer3: 'Diana',
        answer4: 'Fortuna',
        correct: 'Diana'
    }
];

const questionsUsa = [
    {
        question: 'Wybuch wojny secesyjnej',
        answer1: '1854',
        answer2: '1876',
        answer3: '1861',
        answer4: '1865',
        correct: '1861'
    },
    {
        question: 'Pierwszy prezydent konfederacji',
        answer1: 'George McClellan',
        answer2: 'Robert Lee',
        answer3: 'Ulysses S. Grant',
        answer4: 'Jefferson Davis',
        correct: 'Jefferson Davis'
    },
    {
        question: 'Koniec rewolucji amerykańskiej',
        answer1: '1775',
        answer2: '1765',
        answer3: '1783',
        answer4: '1789',
        correct: '1783'
    },
    {
        question: 'Drugi Prezydent USA',
        answer1: 'John Adams Jr.',
        answer2: 'George Washington',
        answer3: 'Thomas Jefferson',
        answer4: 'James Madison',
        correct: 'John Adams Jr.'
    },
    {
        question: 'Data bitwy pod Gettysburgiem',
        answer1: '1868',
        answer2: '1869',
        answer3: '1861',
        answer4: '1863',
        correct: '1863'
    }
];