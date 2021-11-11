// It is only template now. I tried merging other's branches to make favorites page work but it didn't really work and was too chaotic for me to make any sense out of it


let _favPlaces = [];

/* ---------- place Fav Functionality ---------- */

/**
 * Appending fav places to the DOM by looping through _favPlaces
 */
 function appendFavPlaces() {
    let html = "";
    for (const place of _favPlaces) {
      console.log(place);
      html += /*html*/`
        <article>
          
          <img src="${place.ImageUrl}">
          <h2>${place.Name}</h2>
          <p>${place.category}</p>
          <p>${place.Address}</p>
          ${generateFavPlaceButton(place.id)}
        </article>
      `;
    }
    // if no Places display a default text
    if (_favPlaces.length === 0) {
      html = "<p>Nothing added yet to favorites</p>"
    }
    document.querySelector("#fav-place-container").innerHTML = html;
  }
  
  /**
   * Generating the fav button
   */
  function generateFavPlaceButton(placeId) {
    let btnTemplate = `
      <button onclick="addToFavourites('${placeId}')">Add to favourites</button>`;
    if (isFavPlace(placeId)) {
      btnTemplate = `
        <button onclick="removeFromFavourites('${placeId}')" class="rm">Remove from favourites</button>`;
    }
    return btnTemplate;
  }
  
  /**
   * Adding place to favorites by given placeId
   */
  function addToFavourites(placeId) {
    let favPlace = _Places.find(place => place.id === placeId);
    _favPlaces.push(favPlace);
    appendPlaces(_Places); // update the DOM to display the right button
    appendFavPlaces(); // update the DOM to display the right items from the _favPlaces list
  }
  
  /**
   * Removing place from favorites by given placeId
   */
  function removeFromFavourites(placeId) {
    _favPlaces = _favPlaces.filter(place => place.id !== placeId);
    appendPlaces(_Places); // update the DOM to display the right button
    appendFavPlaces(); // update the DOM to display the right items from the _favPlaces list
  }
  
  /**
   * Checking if place already is added to _favPlaces
   */
  function isFavPlace(placeId) {
    return _favPlaces.find(place => place.id === placeId); // checking if _favPlaces has the place with matching id or not
  }