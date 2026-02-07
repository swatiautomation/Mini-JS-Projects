const recipeContainer = document.querySelector('.recipe-container');
const inputBox = document.querySelector('#inputBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeDetailsContent = document.querySelector('.recipe-details-content');
const recipeCloseBtn = document.querySelector('.recipeCloseBtn');

const baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const fetchRecipes = async (searchTerm) => {
  recipeContainer.innerHTML = '<h2>Featching recipes...</h2>';
  try {
    const url = `${baseUrl}${searchTerm}`;
    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);
    recipeContainer.innerHTML = '';

    data.meals.forEach((meal) => {
      const mealDiv = document.createElement('div');
      mealDiv.classList.add('meal');
      mealDiv.innerHTML = `<img src="${meal.strMealThumb}"/>
    <h3>${meal.strMeal}</h3>
    <p><strong>${meal.strArea}</strong> Dish</p>
    <p>Belongs to <strong>${meal.strCategory}</strong> Category</p>
    <p> ${meal.strTags ? meal.strTags : 'No tags available'}</p>`;

      const button1 = document.createElement('button');
      button1.textContent = 'Watch Video';
      button1.classList.add('videoBtn');
      mealDiv.appendChild(button1);

      button1.addEventListener('click', () => {
        window.open(meal.strYoutube, '_blank');
      });

      const button = document.createElement('button');
      button.textContent = 'View Recipe';
      button.classList.add('recipeBtn');
      mealDiv.appendChild(button);

      button.addEventListener('click', () => {
        openRecipePopup(meal);
      });

      recipeContainer.appendChild(mealDiv);
    });
  } catch (error) {
    console.error(error.message);
    recipeContainer.innerHTML = `<img src="./image/no-image.png" style="font-size: 20px;height: 400px;width: 400px" />`;
  }
};

const openRecipePopup = (meal) => {
  recipeDetailsContent.innerHTML = `<h2 class="recipe-title">${
    meal.strMeal
  }</h2>
  <h3>Ingredients:</h3>
  <ul class="ingredients-list">${fetchIngredients(meal)}</ul>
  <div class="instructions">
  <h3>Instructions:</h3>
  <p > ${meal.strInstructions}</p>
  </div>`;

  recipeDetailsContent.parentElement.style.display = 'block';
};

const fetchIngredients = (meal) => {
  let ingredientList = '';

  for (let i = 1; i <= 20; i++) {
    const Ingredient = meal[`strIngredient${i}`];
    if (Ingredient) {
      const measure = meal[`strMeasure${i}`];
      ingredientList += `<li>${Ingredient} - ${measure}</li>`;
    } else {
      break;
    }
  }
  return ingredientList;
};

recipeCloseBtn.addEventListener('click', () => {
  recipeDetailsContent.parentElement.style.display = 'none';
});

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const searchTerm = inputBox.value.trim();
  if (!searchTerm) return;
  fetchRecipes(searchTerm);
});
