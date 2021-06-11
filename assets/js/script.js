// Display today's day and date
let currentDayEl = moment().format('dddd, MMM Do YYYY');
$("#currentDay").text("Today is "+currentDayEl);


let currentHour = moment().format('HH');

let scheduleHour = $(".task").attr('id');

let taskEl = $(".task");


// console.log(scheduleHour);


// I want this function to take each element with the 'task' class, find its id, compare this id to the current hour and add a class accordingly
taskEl.each( function background() {
    let hourEl = parseInt($(this).attr('id'));
    console.log(hourEl);
    console.log(currentHour);

    if (currentHour==hourEl) {
        $(this).addClass('present')
    } else if (currentHour>hourEl){
        $(this).addClass('past')
    } else {
        $(this).addClass('future')
    }
})

// I want this function to take the input from the textarea and put it into local storage when the save button is pressed

