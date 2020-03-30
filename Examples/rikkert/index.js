/******** define things ********/

let buttons = document.querySelectorAll("button");
let divje = document.getElementsByClassName("data")[0];
let user;
let authors;

/******** listen to things ********/

// voor elke knop een even listener toevoegen
buttons.forEach(button => {
  button.addEventListener("click", () => {
    getUser();
    // kijk of de (vorige) user bestaat
    if (typeof user === "object") {
      console.log(user);
    }
  });
});

/******** do things ********/
// omdat ik hier 1 var het gebruik ik geen () maar kan ik de var daar plaatsen
const makeHtml = user => {
  // console.log(user);
  //   console.log(divje);
  // maak element
  let nameP = document.createElement("p");
  let nameLastP = document.createElement("button");
  // geef element text
  nameP.innerText = user.name.first;
  nameLastP.innerText = user.name.last;
  // zet element in data div
  divje.appendChild(nameP);
  divje.appendChild(nameLastP);
};



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
      // kijk structuur user
      makeHtml(user);
    });
};
logName = (authors) =>{
  console.log(authors);
}
logName(authors);


/*
logName = (naam) =>{
  console.log(naam);
}

logName("YEEEET")

*/