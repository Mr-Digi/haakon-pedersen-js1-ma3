const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1
let cat = {complain:complain()}

function complain() {
    console.log("Meow!");
}

//Question 2
let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.className += "subheading";

//Question 5
paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

//Question 6
resultsContainer  = document.querySelector("div.results");
resultsContainer.innerHTML += "<p>New Paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7
function catList(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

catList(cats);

//Question 8
const createCats = (cats) => {
    let html = '';

    for (const cat of cats) {
        html += `<div>
        <h5>${cat.name}</h5>
        <p>${cat.age ? cat.age : 'Age unknown'}</p>
        </div>`;
    }

    return html;
};
const catContainer = document.querySelector('.cat-container');
catContainer.innerHTML = createCats(cats);