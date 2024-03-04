const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const resultsContainer = document.getElementById('results-container');

searchButton.addEventListener('click', searchRecipes);

function searchRecipes() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&apiKey=9d9a3e481c40456bb99e3596b756e2e8&number=10`)
            .then(response => response.json())
            .then(data => displayResults(data.results))
            .catch(error => console.error('Error fetching recipes:', error));
    } else {
        alert('Please enter a search term');
    }
}

function displayResults(recipes) {
    resultsContainer.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        const title = recipe.title;
        const imageUrl = recipe.image;
        const servings = recipe.servings;
        const readyInMinutes = recipe.readyInMinutes;

        recipeCard.innerHTML = `
            <img src="${imageUrl}" alt="Recipe Image" class="recipe-image">
            <p class="recipe-title">${title}</p>
            <p class="recipe-details">Servings: ${servings} | Ready in: ${readyInMinutes} minutes</p>
        `;

        resultsContainer.appendChild(recipeCard);
    });
}
