let author;
let nameP;
let nameLastP;
let divje = document.getElementById("data");

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

// stap 3 staat in de html

/******************************************************************************************************************************/
// stap 1 maak hier een functie die de inkomende parameter logd (logName)
const logName = author => {
    console.log(author);
    nameP = document.createElement("p");
    nameLastP = document.createElement("button");
// stap 7 (in de stap 1 functie) maak er nog een button bij. deze hoeft geen data als text verzin wat leuks.
    ageP = document.createElement("button");
    loginKnop = document.createElement("button");
    loginDiv = document.createElement("div");
// stap 4 (in de stap 1 functie) maak een p voor: voornaam achternaam en de phone data en koppel dit aan elkaar (innerText).
    nameP.innerText = author.name.first;
    nameLastP.innerText = author.name.last;
// stap 5 (in de stap 1 functie) verbind dit met het element die je in de html hebt gemaakt (dmv getelementbyid)
    divje.appendChild(nameP);
    divje.appendChild(nameLastP);
// stap 6 (in de stap 1 functie) Kijk naar wat je hebt. Bedenk je wat school je hierover heeft geleerd. En geef jezelf ff een schouderklopje :P
// stap 8 voeg een div toe met een id. De waarde van dit id zou ik login.uuid doen ;)
    loginDiv.id = author.login.uuid;
// stap 9 (in de stap 1 functie) Koppel een event listener click aan de button en laat hem de functie van stap 10 invullen

    loginKnop.addEventListener("click", () => {
        logMailNum();
    });

}
/******************************************************************************************************************************/

/******************************************************************************************************************************/
// stap 9 maak hier een functie die de author binnenkrijgt
const getUser = () => {
    fetch("https://randomuser.me/api/")
        .then(response => {
            // defineer de data als JSON.
            return response.json();
        })
        .then(data => {
            console.log(data);
            // in dit geval fetch ik 1 user
            user = data.results[0];
            author = data.results[0];
            logName(author);
            // kijk structuur user
            makeHtml(user);
        });
};
// stap 10 plaats hier andere data naar keuze op zelfde wijze als stap 4,5,6
logMailNum = author => {
    emailP = document.createElement("p");
    phoneP = document.createElement("button");
    emailP.innerText = user.email;
    phoneP.innerText = user.phone;
    loginDiv.id(emailP);
    loginDiv.id(phoneP);
    button.addEventListener("click", () => {
        removeKnop = document.createElement
    });
}
// stap 11 maak een knop zoals stap 9 (zonder id) die een functie uitvoert. Geef deze functie de login.uuid mee. (functie uit stap 12)
/******************************************************************************************************************************/

/******************************************************************************************************************************/
// stap 12 maak een functie die het element met de id login.uuid heeft verwijderd
/******************************************************************************************************************************/
let removeKnop = () => {
    let aantalContacten = contacten.length;
    for (let i = 0; i < aantalContacten; i++) {
        if (login.uuid == contacten[i].login.uuid) {
            array.splice(i, 1);
        }
    }
};
let button = document.getElementById('knopje');

console.log(button);
button.addEventListener('click', () => {
    getUser();
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