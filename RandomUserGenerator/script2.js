console.log("Begin Test.");

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=1';
fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let authors = data.results;
        return authors.map(function (author) {
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = author.picture.medium;

            let VNaam = span.innerHTML = `${author.name.first}`;
            let ANaam = span.innerHTML = `${author.name.last}`;
            let EMail = span.innerHTML = `${author.email}`;
            let VTel = span.innerHTML = `${author.phone}`;
            let MTel = span.innerHTML = `${author.cell}`;

            span.innerHTML = `<br/>${author.name.first} ${author.name.last}<br/>${author.email}<br/>${author.phone}<br/>${author.cell}`;
            append(li, img);
            append(li, span);
            append(ul, li);


            let jan = {
                voorNaam: "Jan",
                achterNaam: "de Toren",
                email: "jan.detoren@example.com",
                telNum: "111-111-111"
            };

            let klaas = {
                voorNaam: "Klaas",
                achterNaam: "de Koning",
                email: "klaas.dekoning@example.com",
                telNum: "222-222-222"
            };

            let contacten = [jan, klaas];

            printPersoon = (persoon) => {
                console.log(persoon.voorNaam + " " + persoon.achterNaam);
            }

            lijst = () => {
                let aantalContacten = contacten.length;
                for (let i = 0; i < aantalContacten; i++) {
                    printPersoon(contacten[i]);
                }
            }

            let zoek = (achterNaam) => {
                let aantalContacten = contacten.length;
                for (let i = 0; i < aantalContacten; i++) {
                    if (achterNaam == contacten[i].achterNaam) {
                        printPersoon(contacten[i]);
                    }
                }
            }

            let toevoegen = (voorNaam, achterNaam, email, telNum, mobNum) => {
                const nieuwContact = {
                    voorNaam: VNaam,
                    achterNaam: ANaam,
                    email: EMail,
                    telNum: VTel,
                    mobNum: MTel
                }
                contacten[contacten.length] = nieuwContact;
            }

            toevoegen()
            toevoegen()
            lijst();


            zoek("de Koning");


        })
    })
    .catch(function (error) {
        console.log(error);
    });

console.log("Beindig Test.");