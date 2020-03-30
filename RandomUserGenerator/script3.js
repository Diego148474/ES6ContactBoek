console.log("Begin Test.");

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
// stap 3 staat in de html

/******************************************************************************************************************************/
// stap 1 maak hier een functie die de inkomende parameter logd (logName)

// stap 4 (in de stap 1 functie) maak een p voor: voornaam achternaam en de phone data en koppel dit aan elkaar (innerText).

// stap 7 (in de stap 1 functie) maak er nog een button bij. deze hoeft geen data als text verzin wat leuks.

// stap 8 voeg een div toe met een id. De waarde van dit id zou ik login.uuid doen ;)

// stap 9 (in de stap 1 functie) Koppel een event listener click aan de button en laat hem de functie van stap 10 invullen

// stap 5 (in de stap 1 functie) verbind dit met het element die je in de html hebt gemaakt (dmv getelementbyid)

// stap 6 (in de stap 1 functie) Kijk naar wat je hebt. Bedenk je wat school je hierover heeft geleerd. En geef jezelf ff een schouderklopje :P
/******************************************************************************************************************************/

/******************************************************************************************************************************/
// stap 9 maak hier een functie die de author binnenkrijgt

// stap 10 plaats hier andere data naar keuze op zelfde wijze als stap 4,5,6

// stap 11 maak een knop zoals stap 9 (zonder id) die een functie uitvoert. Geef deze functie de login.uuid mee. (functie uit stap 12)
/******************************************************************************************************************************/

/******************************************************************************************************************************/
// stap 12 maak een functie die het element met de id login.uuid heeft verwijderd
/******************************************************************************************************************************/

const ul = document.getElementById("authors");
const url = "https://randomuser.me/api/?results=1";
fetch(url)
  .then(resp => resp.json())
  .then(function(data) {
    let authors = data.results;
    authors
      .map(function(author) {
        // stap 2 roep hier die functie aan en geef author mee
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
      })
      .catch(function(error) {
        console.log(error);
      });

    console.log("Beindig Test.");

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

    printPersoon = persoon => {
      console.log(persoon.voorNaam + " " + persoon.achterNaam);
    };

    lijst = () => {
      let aantalContacten = contacten.length;
      for (let i = 0; i < aantalContacten; i++) {
        printPersoon(contacten[i]);
      }
    };

    let zoek = achterNaam => {
      let aantalContacten = contacten.length;
      for (let i = 0; i < aantalContacten; i++) {
        if (achterNaam == contacten[i].achterNaam) {
          printPersoon(contacten[i]);
        }
      }
    };

    let toevoegen = (voorNaam, achterNaam, email, telNum, mobNum) => {
      const nieuwContact = {
        voorNaam: VNaam,
        achterNaam: ANaam,
        email: EMail,
        telNum: VTel,
        mobNum: MTel
      };
      contacten[contacten.length] = nieuwContact;
    };

    toevoegen();
    lijst();

    zoek("de Koning");
  });
/*
document.getElementById("myBtn").addEventListener("click", function () {
    document.getElementById("demo").innerHTML = "Hello World";
});*/
