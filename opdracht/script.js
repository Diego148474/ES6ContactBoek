let authors;
let nameP;
let nameLastP;
const divje = document.getElementById("data");
const button = document.getElementById('knopje');
//const Mbutton = document.getElementById('Mknopje');
let countAuthor;

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const logName = authors => {

    // maak elementen
    nameP = document.createElement("p");
    nameLastP = document.createElement("button");
    loginKnop = document.createElement("button");
    loginDiv = document.createElement("div");

    // geef elementen attributen / inhoud
    nameP.innerText = authors.name.first;
    nameLastP.innerText = authors.name.last;
    loginDiv.id = authors.login.uuid;

    // koppel attributen
    divje.appendChild(nameP);
    divje.appendChild(nameLastP);

    // doe dingen met elementen
    loginKnop.addEventListener("click", () => {
        logMailNum(authors);
    });

}

const getUser = () => {
    // in dit geval fetch ik 1 user
    fetch("https://randomuser.me/api/?results=20")
        .then(response => {
            // defineer de data als JSON.
            return response.json();
        })
        .then(data => {
            authors = data.results;
            //check of er een contact is dat begint met een M
            authors = authors.filter(authors => authors.name.first[0] === "M");
            // log de data als er 1 of meer contacten zijn die beginnen met een M
            if (authors.length > 0) {

                (console.log(authors));

                for (countAuthor = 0; countAuthor < data.results.length; countAuthor++) {

                    authors = data.results[countAuthor];

                    if (authors.name.first[0] === "M") {
                        logName(authors);
                    }

                }

            } else {
                console.log("Er zijn geen contacten gevonden die beginnen met M")
            }

        });
};

const logMailNum = authors => {
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

