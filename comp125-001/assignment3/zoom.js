/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: zoom.js
 */

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";
var favCounterTotal = window.opener.favCounter;
var favGallery = window.opener.document.getElementById("favouritesGallery")
var favCounterAdd = 0;

document.getElementById("addFav").addEventListener("click", addToFavourites);

/* populate img element and create event listener */
function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
   createEventListener();
}

/* close window */
function closeWin() {
   window.close();
}

/* create event listener for close button */
function createEventListener() {
   var closeWindowDiv = document.getElementsByTagName("p")[0];
   if (closeWindowDiv.addEventListener) {
     closeWindowDiv.addEventListener("click", closeWin, false); 
   } else if (closeWindowDiv.attachEvent)  {
     closeWindowDiv.attachEvent("onclick", closeWin);
   }
}

/* add displayed photo to favourites*/
function addToFavourites() {

   // check if photo already exists in the favourites gallery
   if (favCounterTotal === 5) {
      alert("Error: Max number of photos reached. Please remove a photo from your favourites and try again.");
   } else {
      favCounterAdd++;

      // create div container
      var favContainer = document.createElement("div");
      favContainer.setAttribute("class", "favContainer");

      // create img
      var favImg = document.createElement("img");
      favImg.src = figFilename;

      // create remove btn
      var removeBtn = document.createElement("button")
      removeBtn.setAttribute("class", "removeBtn");
      var removeFavText = document.createTextNode("x");
      removeBtn.appendChild(removeFavText);

      // append the stuff
      favGallery.appendChild(favContainer);
      favContainer.appendChild(favImg);
      favContainer.appendChild(removeBtn);
      
      // update number of favourited imgs
      window.opener.favCounter += favCounterAdd;

      // add an event listener to the removeBtn
      removeBtn.addEventListener("click", window.opener.removeFav);
   }
   closeWin();
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup();