// Display today's day and date
let currentDayEl = moment().format('dddd, MMM Do YYYY');
$("#currentDay").text("Today is "+currentDayEl);

// This is how we will get the id's from each timeblock
let currentHour = moment().format('HH');

let taskEl = $(".task");


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

// Set the save button to put input to local storage
$(".saveBtn").on("click", function () {
// get the input of id of sibling with the task class
    var taskInput = $(this).siblings(".task").val();
    var hourEl = $(this).siblings(".task").attr("id");
// puts the input into local storage with a key identical to the id
    localStorage.setItem(hourEl, taskInput);
})

// Gets items from local storage and populates the time block
taskEl.each( function displayTask(){
    let hourKey = $(this).attr('id');
    $(this).val(localStorage.getItem(hourKey))

}
)