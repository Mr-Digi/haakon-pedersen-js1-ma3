//Question 2
const apiUrl = 'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=d0ae32ba9f5349e6bd43638db9e1b6db';

// create a loading indicator
const loadingIndicator = document.createElement('div');
loadingIndicator.textContent = 'Loading...';
document.body.appendChild(loadingIndicator);

fetch(apiUrl)
    .then(response => response.json()) //Convert the response to Json
    .then(data => {
        for (let i = 0; i < 8; i++) {
            const ul = document.createElement('ul');
            //console.log(data.results[i].name)
            //console.log(data.results[i].rating)
            //console.log(data.results[i].tags.length)
            const liName = document.createElement('li');
            const liRating = document.createElement('li');
            const liTags = document.createElement('li');
            liName.textContent = "Name: " + data.results[i].name;
            liRating.textContent = "Rating: " + data.results[i].rating;
            liTags.textContent = "Tags: " + data.results[i].tags.length;
            ul.appendChild(liName);
            ul.appendChild(liRating);
            ul.appendChild(liTags);
            document.body.appendChild(ul);
        }
        document.body.removeChild(loadingIndicator);
    })
    .catch(error => {
        console.error(error);
        document.body.removeChild(loadingIndicator);
    })