const _categoriesUrl = "/data/categories.json";
let _categories = [];
let _attractions = [];
let _food = [];
let _activities = [];

// DISPLAYING ATTRACTIONS
async function loadAttractions() {
  const url = _categoriesUrl;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  _attractions = data[0].Children;
  appendAttractions(_attractions);
}
loadAttractions();

function appendAttractions(categories) {
  const container = document.querySelector(".attractions-container");
  let html = "";
  for (const category of categories) {
    html += `
        <img src='${category.ImageUrl}'>
        <h2>${category.Name}</h2>
      `;
  }
  container.innerHTML = html;
}

// DISPLAYING FOOD
async function loadFood() {
  const url = _categoriesUrl;
  const response = await fetch(url);
  const data = await response.json();
  _food = data[3].Children;
  appendFood(_food);
}
loadFood();

function appendFood(categories) {
  const container = document.querySelector(".food-container");
  let html = "";
  for (const category of categories) {
    html += `
        <img src='${category.ImageUrl}'>
        <h2>${category.Name}</h2>
      `;
  }
  container.innerHTML = html;
}

// DISPLAYING ACTIVITIES
async function loadActivities() {
  const url = _categoriesUrl;
  const response = await fetch(url);
  const data = await response.json();
  _activities = data[1].Children;
  appendActivities(_activities);
}
loadActivities();

function appendActivities(categories) {
  const container = document.querySelector(".activities-container");
  let html = "";
  for (const category of categories) {
    html += `
        <img src='${category.ImageUrl}'>
        <h2>${category.Name}</h2>
      `;
  }
  container.innerHTML = html;
}
