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
    for (let i = 0; i < aantalContacten; i++) {gi
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

let toevoegen = (voorNaam, achterNaam, email, telNum) => {
    const nieuwContact = {
        voorNaam: voorNaam,
        achterNaam: achterNaam,
        email: email,
        telNum: telNum
    }
    contacten[contacten.length] = nieuwContact;
}

toevoegen("Eva", "de Rond", "eva.derond@example.com", "333-333-333")
toevoegen("Hans", "de Hond", "hans.dehond@example.com", "444-444-444")
lijst();


zoek("de Koning");