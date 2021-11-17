"use strict";

//inspiration for this solution:
//demo by: Adam Guttentag @guttentag at CodePen
// https://codepen.io/guttentag/pen/XxRQPz

var cardIds = ['aros','clocktower','streetfood'];
// an array of onClick event handlers to be assigned to a card
// when it is moved to a new position
var clickHandlers = ['rotate.zoom(this)','rotate.right()','rotate.left()'];
var sizes = [
  { w: 780, h: 420 },
  { w: 602, h: 324 },
  { w: 602, h: 324 }
];
var opacities = [1,0.3,0.3];
var cards = [];
var offsets = ['0px','50px','-50px'];
var indexes = ['2','1','1'];


// a library of functions for manipulating the carousel
var rotate = {
  // when the UI calls for rotating left
  left : function () {
    // pop the last item out of the array and put it at the front
    cards.unshift(cards.pop());
    // rotate the carousel
    translateX();
  },
  // when the UI calls for rotating right
  right : function () {
    // shift the first item out of the array and put it at the end
    cards.push(cards.shift());
    // rotate the carousel
    translateX();
  },

 
  // when the user clicks a carousel indicator circle
  indicatorClick : function (el) {
    // fill of the clicked indicator (el) to white
    rotate.indicatorReset(el);
    // find the current location of the corresponding card
    var location = cards.map(card => card.id).indexOf(el.dataset.card);
    // if desired card's index in the cards array is 2
    if (location == 2) {
      // cycle left through the deck
      rotate.left();
    } else if (location == 1) {
      // cycle right through the deck
      rotate.right();
    }

  },

}

// rotate the carousel based on the updated cards array
function translateX() {
  // loop through the cards, changing their settings based on their new positions
  for (var card in cards) {
    // set the z-index of the card according to its new position
    cards[card].style.zIndex = `${indexes[card]}`;
    // set the onClick attribute of the card (to zoom, rotate left or rotate right)
    cards[card].setAttribute('onClick',clickHandlers[card]);
    // reposition the card horizontally
    cards[card].style.transform = `translateX(${offsets[card]})`;
    // set the height of the card according to its reposition
    cards[card].style.height = `${sizes[card].h}px`;
    // make the back cards partially transparent, per comp
    cards[card].style.opacity = `${opacities[card]}`;
    // if front card, add frontCard class to element, else remove frontCard class
      // this determines what cursor is shown when the user hovers over a card
      // if a card's index in the cards array is 0, it is the
      // front card and had the frontCard class added to it.
      // Else, the frontCard class is removed from the element's
    (card == 0) ? cards[card].classList.add('frontCard') : cards[card].classList.remove('frontCard');
  }

}

// an array of the image URLs
  // modify this code to URLs provided via JSON - data from visitDenmark
var images = [
  '../img/aros.jpg',
  '../img/clocktower.jpg',
  '../img/streetfood.jpg'
];

// loop through the array of image URLs to create the cards



images.forEach((image, index) => {
  // initialize tempEl to hold the element until it is appended
  const tempEl = document.createElement('div');
  // set class to card
  tempEl.setAttribute('class','card');
  // give the card a unique ID
  tempEl.setAttribute('id',cardIds[index]);
  // set an onClick attribute based on the card's position
  tempEl.setAttribute('onClick',clickHandlers[index]);
  // set the background image of the card
  tempEl.setAttribute('style',`background-image: url(${image});`);
  // push a reference to the card into the cards array
  cards.push(tempEl);
  // append the element to its parent
  carousel.appendChild(tempEl);
});


// initialize the positioning/sizing by cycling the carousel one card
translateX();