let author;
let nameP;
let nameLastP;
const divje = document.getElementById("data");
const button = document.getElementById('knopje');
//const Mbutton = document.getElementById('Mknopje');
let countAuthor;
let letterM;
let arrayM =[];
let toevoegenM;

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}


toevoegenM= () => {
    const newContact = {

    };
    arrayM[arrayM.length] = newContact;
    console.log(arrayM[arrayM.length]);
};


const logName = author => {
    console.log(author);
    // maak elementen
    nameP = document.createElement("p");
    nameLastP = document.createElement("button");
    ageP = document.createElement("button");
    loginKnop = document.createElement("button");
    loginDiv = document.createElement("div");

    // geef elementen attributen / inhoud
    nameP.innerText = author.name.first;
    nameLastP.innerText = author.name.last;
    loginDiv.id = author.login.uuid;

    // koppel attributen
    divje.appendChild(nameP);
    divje.appendChild(nameLastP);

    // doe dingen met elementen
    loginKnop.addEventListener("click", () => {
        logMailNum(author);
    });

}

const getUser = () => {
    fetch("https://randomuser.me/api/?results=20")
        .then(response => {
            // defineer de data als JSON.
            return response.json();
        })
        .then(data => {
            // log de data
            console.log(data);
            // in dit geval fetch ik 1 user
            for (countAuthor = 0; countAuthor < data.results.length; countAuthor++) {
                author = data.results[countAuthor];

                logName(author);

                letterM = nameP.innerText.charAt(0);
                if (letterM === "M") {
                toevoegenM();
                }
            }
        });
};

const logMailNum = author => {
    // maak elementen
    emailP = document.createElement("p");
    phoneP = document.createElement("button");

    // geef elementen inhoud / attributen
    emailP.innerText = user.email;
    phoneP.innerText = user.phone;
    loginDiv.id(emailP);
    loginDiv.id(phoneP);

    // doe dingen met elementen
    button.addEventListener("click", () => {
        removeKnop = document.createElement
    });
}


console.log(button);
button.addEventListener('click', () => {
    getUser();
});

