let personen;
let nameP;
let nameLastP;
let adresP;
let phoneP;
let cellP;
let stateP;
const info = document.getElementById("Namen");
let overigDiv;
const genereerKnop = document.getElementById('GenereerKnop');
let verwijderknop;
let resultatenTeller;
let invoerLetter = "A";
let letterVeld = document.getElementById('letterVeld');
let letters = /^[A-Za-z]+$/;


createNode = element => document.createElement(element);

append = (parent, el) => parent.appendChild(el);

letterVeld.addEventListener('keyup', function () {
    invoerLetter = letterVeld.value;
    invoerLetter = invoerLetter.charAt(0).toUpperCase() + invoerLetter.substr(1);
});

const logNaam = personen => {
    // maak elementen
    nameP = document.createElement("button");
    nameLastP = document.createElement("p");
    adresP = document.createElement("p");
    cellP = document.createElement("p");
    overigDiv = document.createElement("div");

    // geef elementen attributen / inhoud
    nameP.innerText = personen.name.first;
    nameLastP.innerText = personen.name.last;
    adresP.innerText = personen.location.city;
    cellP.innerText = personen.cell;
    overigDiv.setAttribute("id", personen.login.uuid);

    // koppel attributen
    info.appendChild(nameP);
    info.appendChild(nameLastP);
    info.appendChild(adresP);
    info.appendChild(cellP);
    info.appendChild(overigDiv);

    // doe dingen met elementen
    nameP.addEventListener("click", () => {
        logOverig(personen);
    });
};

const logOverig = personen => {

    // maak elementen
    stateP = document.createElement("p");
    phoneP = document.createElement("p");
    verwijderknop = document.createElement("button");


    // geef elementen inhoud / attributen
    stateP.innerText = personen.location.state;
    phoneP.innerText = personen.phone;

    overigDiv = document.getElementById(personen.login.uuid);
    overigDiv.appendChild(stateP);
    overigDiv.appendChild(phoneP);
    overigDiv.appendChild(verwijderknop);
    // doe dingen met elementen

    verwijderknop.addEventListener("click", () => {
        overigDiv.removeElement(stateP);
        overigDiv.removeElement(phoneP);
        overigDiv.removeElement(verwijderknop);
    });

};

const ophalen = () => {
    // in dit geval fetch ik 1 user
    fetch("https://randomuser.me/api/?results=20")
        .then(response => {
            // defineer de Namen als JSON.
            return response.json();
        })
        .then(Namen => {
            personen = Namen.results;
            //check of er een contact is dat begint met een M
            personen = personen.filter(personen => personen.name.first[0] === invoerLetter);
            // log de Namen als er 1 of meer contacten zijn die beginnen met een M
            if (personen.length > 0) {

                (console.log(personen));

                for (resultatenTeller = 0; resultatenTeller < Namen.results.length; resultatenTeller++) {

                    personen = Namen.results[resultatenTeller];

                    if (personen.name.first[0] === invoerLetter) {
                        logNaam(personen);
                    }
                }
            } else {
                console.log("Er zijn geen contacten gevonden die beginnen met de aangegeven letter")
            }
        });
};

const letterCheck = () => {
    if (!invoerLetter.match(letters)) {
        console.log("Het ingevoerde charakter is geen letter.");
    } else {
        ophalen();
    }
};

genereerKnop.addEventListener('click', () => {
    letterCheck();
});

