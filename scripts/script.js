var hits = 0; // Initializes a variable called "hits" with a value of 0
var hitElement = document.querySelector('.hits'); // Selects the element with class 'hits' and stores it in the hitElement variable

document.body.onkeyup = function(e) { // Attaches an event listener to the body element for the 'keyup' event
    if (e.keyCode == 32) { // Checks if the pressed key's code is 32 (corresponds to the spacebar)
        addHit(); // Calls the addHit() function when the spacebar is pressed
    }
}

var addHit = function() { // Defines a function called addHit
    hits++; // Increments the value of the hits variable by 1
    renderHits(); // Calls the renderHits() function
} 

var renderHits = function() { // Defines a function called renderHits
    hitElement.innerHTML = hits; // Updates the content inside the element with class 'hits' to display the current value of hits
}

var resetHits = function() { // Defines a function called resetHits
    hits = 0; // Resets the value of the hits variable to 0
    renderHits(); // Calls the renderHits() function to update the displayed value to 0
}
