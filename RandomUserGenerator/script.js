
console.log("Begin Test.");
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let authors = data.results;
        return authors.map(function(author) {
            let li = createNode('li'),
                img = createNode('img'),
                span = createNode('span');
            img.src = author.picture.medium;
            span.innerHTML = `<br/>${author.name.first} ${author.name.last}<br/>${author.email}<br/>${author.phone}<br/>${author.cell}`;
            append(li, img);
            append(li, span);
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });

console.log("Beindig Test");
