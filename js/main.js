const _categoriesUrl = "/data/categories.json";
let _categories = [];
let _attractions = [];
let _food = [];
let _activities = [];

const _dataUrl = "/data/data.json";
let _detailedViewData = [];

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

// DISPLAYING DETAILED VIEW PAGE CONTENT

async function loadDetailedPageData() {
  const url = _dataUrl;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  _detailedViewData = data;
  appendDetailedViewData(_detailedViewData)
}
loadDetailedPageData();
/* Appending doesn't work
 function appendDetailedViewData(datas) {
  const container = document.querySelector(".detailed-img-container");
  let html = "";
  for (const data of datas) {
    html +=`
        <img src='${data.Uri}'>
        <h1>${data.Name}</h1>
    `;
  }
  container.innerHTML = html;
} */

function showDetailedPage(Id) {
    const dataToShow = _detailedViewData.find(data => data.Id === Id);
    navigateTo("detailedView");
    document.querySelector("detailed-img-container").innerHTML = /*html*/`
    <article>
    <img src='${dataToShow.Uri}'>
    <h1>${dataToShow.Name}</h1>
    </article>
    `;
}
