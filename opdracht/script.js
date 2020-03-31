let author;
let nameP;
let nameLastP;
const divje = document.getElementById("data");
const button = document.getElementById('knopje');

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

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
    fetch("https://randomuser.me/api/")
        .then(response => {
            // defineer de data als JSON.
            return response.json();
        })
        .then(data => {
            // log de data
            console.log(data);
            // in dit geval fetch ik 1 user
            author = data.results[0];
            logName(author);
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
<<<<<<< HEAD
})


// const ul = document.getElementById("authors");
// const url = "https://randomuser.me/api/?results=1";
// fetch(url)
//     .then(resp => resp.json())
//     .then(function (data) {
//         authors = data.results;
//         authors
//             .map(function (author) {
// stap 2 roep hier die functie aan en geef author mee
// logName(author);
// commented code hieronder ff lekker negeren :yum:
// function ophalen() {
// let li = createNode('li'),
//     img = createNode('img'),
//     span = createNode('span');
// img.src = author.picture.medium;
// let VNaam = span.innerHTML = `${author.name.first}`;
// let ANaam = span.innerHTML = `${author.name.last}`;
// let EMail = span.innerHTML = `${author.email}`;
// let VTel = span.innerHTML = `${author.phone}`;
// let MTel = span.innerHTML = `${author.cell}`;
// span.innerHTML = `<br/>${author.name.first} ${author.name.last}<br/>${author.email}<br/>${author.phone}<br/>${author.cell}`;
// append(li, img);
// append(li, span);
// append(ul, li);
// }
// })
// .catch(function (error) {
//     console.log(error);
// });

// console.log("Beindig Test.");

// let jan = {
//     voorNaam: "Jan",
//     achterNaam: "de Toren",
//     email: "jan.detoren@example.com",
//     telNum: "111-111-111"
// };

// let klaas = {
//     voorNaam: "Klaas",
//     achterNaam: "de Koning",
//     email: "klaas.dekoning@example.com",
//     telNum: "222-222-222"
// };

// let contacten = [jan, klaas];

// printPersoon = persoon => {
//     console.log(persoon.voorNaam + " " + persoon.achterNaam);
// };

// lijst = () => {
//     let aantalContacten = contacten.length;
//     for (let i = 0; i < aantalContacten; i++) {
//         printPersoon(contacten[i]);
//     }
// };

// let zoek = achterNaam => {
//     let aantalContacten = contacten.length;
//     for (let i = 0; i < aantalContacten; i++) {
//         if (achterNaam == contacten[i].achterNaam) {
//             printPersoon(contacten[i]);
//         }
//     }
// };

// let toevoegen = (voorNaam, achterNaam, email, telNum, mobNum) => {
//     const nieuwContact = {
//         voorNaam: VNaam,
//         achterNaam: ANaam,
//         email: EMail,
//         telNum: VTel,
//         mobNum: MTel
//     };
//     contacten[contacten.length] = nieuwContact;
// };

// toevoegen();
// lijst();

// zoek("de Koning");
// });
/*
document.getElementById("myBtn").addEventListener("click", function () {
    document.getElementById("demo").innerHTML = "Hello World";
});*/
=======
});
>>>>>>> c1995f338c63bc36a6c55005e7da2591ed1c455d
