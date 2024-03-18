const accessKey = 'WwL0Jlu9HOnz0zEMdxuN7NOO1DqoNb-ZJui1ltR1yZM';
const baseUrl = 'https://api.unsplash.com';
let page = 1;
let query = '';

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const imageGrid = document.getElementById('imageGrid');
const showMoreButton = document.getElementById('showMoreButton');

searchButton.addEventListener('click', () => {
    query = searchInput.value.trim();
    page = 1;
    fetchImages();
});

showMoreButton.addEventListener('click', () => {
    page++;
    fetchImages();
});

function fetchImages() {
    const url = `${baseUrl}/search/photos/?client_id=${accessKey}&query=${query}&page=${page}&per_page=10`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (page === 1) {
                imageGrid.innerHTML = '';
            }
            data.results.forEach(result => {
                const img = document.createElement('img');
                img.src = result.urls.regular;
                img.alt = result.alt_description;
                imageGrid.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
}
