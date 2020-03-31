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
});
