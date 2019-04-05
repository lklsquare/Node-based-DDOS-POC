// client-side js
// run by the browser each time your view template is loaded


// our default array of dreams
const dreams = [
  
];

// define variables that reference elements on our page
const dreamsList = document.getElementById('website');
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements['website'];
console.log('here');
// a helper function that creates a list item for a given dream
const appendNewDream = function(dream) {
  const newListItem = document.createElement('li');
  newListItem.innerHTML = "attacking "+ dream;
  dreamsList.appendChild(newListItem);
}

// iterate through every dream and add it to our page
dreams.forEach( function(dream) {
  appendNewDream(dream);
});

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = function(event) {
  // stop our form submission from refreshing the page
  event.preventDefault();

  // get dream value and add it to the list
  dreams.push(dreamInput.value);
  appendNewDream(dreamInput.value);

  // reset form 
  dreamInput.value = '';
  dreamInput.focus();
};