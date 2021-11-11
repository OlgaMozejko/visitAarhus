// const _categoriesUrl = "/data/categories.json";
// let _categories = [];
// let _attractions = [];
// let _food = [];
// let _activities = [];

// // DISPLAYING ATTRACTIONS
// async function loadAttractions() {
//   const url = _categoriesUrl;
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
//   _attractions = data[0].Children;
//   appendAttractions(_attractions);
// }
// loadAttractions();

// function appendAttractions(categories) {
//   const container = document.querySelector(".attractions-container");
//   let html = "";
//   for (const category of categories) {
//     html += `
//         <img src='${category.ImageUrl}'>
//         <h2>${category.Name}</h2>
//       `;
//   }
//   container.innerHTML = html;
// }

// // DISPLAYING FOOD
// async function loadFood() {
//   const url = _categoriesUrl;
//   const response = await fetch(url);
//   const data = await response.json();
//   _food = data[3].Children;
//   appendFood(_food);
// }
// loadFood();

// function appendFood(categories) {
//   const container = document.querySelector(".food-container");
//   let html = "";
//   for (const category of categories) {
//     html += `
//         <img src='${category.ImageUrl}'>
//         <h2>${category.Name}</h2>
//       `;
//   }
//   container.innerHTML = html;
// }

// // DISPLAYING ACTIVITIES
// async function loadActivities() {
//   const url = _categoriesUrl;
//   const response = await fetch(url);
//   const data = await response.json();
//   _activities = data[1].Children;
//   appendActivities(_activities);
// }
// loadActivities();

// function appendActivities(categories) {
//   const container = document.querySelector(".activities-container");
//   let html = "";
//   for (const category of categories) {
//     html += `
//         <img src='${category.ImageUrl}'>
//         <h2>${category.Name}</h2>
//       `;
//   }
//   container.innerHTML = html;
// }

// DATA MANIPULATION

// let _all = [];
// let _attractions = [];
// let _restaurants = [];

// async function fetchRestaurants() {
//   const response = await fetch("data/data.json");
//   const data = await response.json();
//   _all = data;
//   console.log(_all);
//   filterRestaurants();
// }
// fetchRestaurants();

// function filterRestaurants() {
//   const results = _all.filter(
//     (place) => place.MainCategory.Name === "Places to eat"
//   );
//   appendRestaurants(results);
// }

// async function fetchAttractions() {
//   const response = await fetch("data/data.json");
//   const data = await response.json();
//   _all = data;
//   console.log(_all);
//   filterAttractions();
// }
// fetchAttractions();

// function filterAttractions() {
//   const results = _all.filter(
//     (place) => place.MainCategory.Name === "Attractions"
//   );
//   appendAttractions(results);
// }

// function appendRestaurants(placesToEat) {
//   let html = "";
//   for (let placeToEat of placesToEat) {
//     for (let i in placeToEat.Files) {
//       let place = placeToEat.Files[0]["Uri"];
//       html += `
//         <img src='${place}'/>
//         <h2>${place.Name}</h2>
//       `;
//     }
//   }
//   document.querySelector(".food-container").innerHTML = html;
// }

// function appendAttractions(attractionPlaces) {
//   let html = "";
//   for (let attractionPlace of attractionPlaces) {
//     for (let i in attractionPlace.Files) {
//       let attraction = attractionPlace.Files[0]["Uri"];
//       html += `
//         <img src='${attraction}'/>
//         <h2>${attraction.Name}</h2>
//       `;
//     }
//   }
//   document.querySelector(".attractions-container").innerHTML = html;
// }

let _allCategories = [];
let _attractions = [];
let _restaurants = [];
let _activities = [];
let _all = [];

// ============= FETCH AND DISPLAY ATTRACTIONS ===================
async function fetchAttractions() {
  const response = await fetch("data/data.json");
  const data = await response.json();
  _allCategories = data;
  // console.log(_allCategories);
  let newArray = _allCategories.filter((category) => {
    return category.MainCategory.Name === "Attractions";
  });
  _attractions = newArray;
  console.log(_attractions);
  appendAttractions(_attractions);
}
fetchAttractions();

function appendAttractions(attractions) {
  let html = "";
  for (const attraction of attractions) {
    for (let images in attraction.Files) {
      let img = attraction.Files[images]["Uri"];
      html += `
      <img src='${img}'/>
      <h2>${attraction.Name}</h2>
    `;
    }
  }
  document.querySelector(".attractions-container").innerHTML = html;
}

// ============= FETCH AND DISPLAY RESTAURANTS ===================
async function fetchRestaurants() {
  const response = await fetch("data/data.json");
  const data = await response.json();
  _allCategories = data;
  console.log(_allCategories);
  let newArray = _allCategories.filter((category) => {
    return category.MainCategory.Name === "Places to eat";
  });
  _restaurants = newArray;
  console.log(_restaurants);
  appendRestaurants(_restaurants);
}
fetchRestaurants();

function appendRestaurants(restaurants) {
  let html = "";
  for (const restaurant of restaurants) {
    for (let images in restaurant.Files) {
      let img = restaurant.Files[images]["Uri"];
      html += `
      <img src='${img}'/>
      <h2>${restaurant.Name}</h2>
    `;
    }
  }
  document.querySelector(".food-container").innerHTML = html;
}

// ============= FETCH AND DISPLAY ACTIVITIES ===================
async function fetchActivities() {
  const response = await fetch("data/data.json");
  const data = await response.json();
  _allCategories = data;
  console.log(_allCategories);
  let newArray = _allCategories.filter((category) => {
    return category.MainCategory.Name === "Events";
  });
  _activities = newArray;
  console.log(_activities);
  appendActivities(_activities);
}
fetchActivities();

function appendActivities(events) {
  let html = "";
  for (const event of events) {
    for (let images in event.Files) {
      let img = event.Files[images]["Uri"];
      html += `
      <img src='${img}'/>
      <h2>${event.Name}</h2>
    `;
    }
  }
  document.querySelector(".activities-container").innerHTML = html;
}
