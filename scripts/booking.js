/********* create variables here *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?


let numberOfDays = 0;
let dailyRate = 0;

// days
let monday = document.getElementById('monday');
let tuesday = document.getElementById('tuesday');
let wednesday = document.getElementById('wednesday');
let thursday = document.getElementById('thursday');
let friday = document.getElementById('friday');

let allDays = document.querySelectorAll(".day-selector");
// How many days
let fullDayButton = document.getElementById('full');
let halfDayButton = document.getElementById('half');
let clearButton = document.getElementById('clear-button');



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function buttonCounter() {
    allDays.forEach(function(day) {
        if (!day.classList.contains("clicked"))
            numberOfDays++;
    });
    console.log(numberOfDays);
}

monday.addEventListener("click", function() {
    monday.classList.add("clicked");
    buttonCounter();
    calculate();
});
tuesday.addEventListener("click", function() {
    tuesday.classList.add("clicked");
    buttonCounter();
    calculate();
});
wednesday.addEventListener("click", function() {
    wednesday.classList.add("clicked");
    buttonCounter();
    calculate();
});
thursday.addEventListener("click", function() {
    thursday.classList.add("clicked");
    buttonCounter();
    calculate();
});
friday.addEventListener("click", function() {
    friday.classList.add("clicked");
    buttonCounter();
    calculate();
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clear(){

    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    document.getElementById("calculated-cost").innerHTML = 0;
    numberOfDays = 0;
}

clearButton.addEventListener("click", clear);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $25, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfRate(){
    dailyRate = 25;
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    calculate();
}

halfDayButton.addEventListener("click", halfRate);


// when the full-day button is clicked, the daily rate is set back to $40, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullRate(){
    dailyRate = 40;
    halfDayButton.classList.remove("clicked");
    fullDayButton.classList.add("clicked");
    calculate();
}

fullDayButton.addEventListener("click", fullRate);




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value



function calculate() {
    const halfRate = 25;
    const fullRate = 40;
    let cost = 0;

    if (halfDayButton.classList.contains("clicked")) {
        cost = numberOfDays * halfRate;
    }
    else {
        cost = numberOfDays * fullRate;
    }
    document.getElementById("calculated-cost").innerHTML = cost;

}