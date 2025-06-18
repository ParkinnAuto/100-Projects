const searchBox = document.getElementById("searchBox");
const searchButton = document.getElementById("searchButton");
const searchResult = document.getElementById("searchResult");
const searchMoreButton = document.getElementById("searchMoreButton");

const accessKey = "f2TAOrmP2wZSEQgDRW-FKdLI9Z3qQ8qZbSvpWuPIGqI";
let keywords = "";
let page = 1;

async function searchImage() {
    keywords = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keywords}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    // Clear previous results
    if (page === 1) {
        searchResult.innerHTML = '';
    }

    results.forEach(result => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });

    if (results.length > 0) {
        searchMoreButton.style.display = "block";
    } else {
        searchMoreButton.style.display = "none";
    }
}

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});

searchMoreButton.addEventListener("click", () => {
    page++;
    searchImage();
});