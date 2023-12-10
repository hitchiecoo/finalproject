// state const elements 
const body = document.querySelector('body'); // targeting background of webpage
const submitBtn = document.querySelector('#submit-btn'); // enter button
const catTypeText = document.querySelector('#activity-type'); // input value

// set up event listeners for - button 
submitBtn.addEventListener('click', function(event) {
    event.preventDefault ();
    console.log ('test enter button');

// enter user's input 

console.log(catTypeText.value);

// return text box value to blank
catTypeText.innerHTML = ''
  
//change background image after user input:

  if (catTypeText.value === 'sleep') {
    document.body.className = 'sleep'
  } else if (catTypeText.value === 'eat') {
    document.body.className = 'eat'
  } else if (catTypeText.value === 'lounge around') {
    document.body.className = 'lounge' 
  } else if (catTypeText.value === 'look cute') {
    document.body.className = 'cute' 
  } else if (catTypeText.value = 'dress up') {
    document.body.className = 'dressup'
    }

})