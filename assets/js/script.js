// display current date in header
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// var currentTime = moment();

// var formEl = document.querySelector("#first-hour");
// var time = moment(formEl, "L").set("hour", 9);
// console.log(time);

$("#save-content").click(storeData);

var tasks = [
    {
        id: 1,
        content: $("#hour-1-text").val()
    },
    {
        id: 2
    }
];

    

function storeData() {
    var textContent = $("#hour-1-text").val();
    localStorage.setItem("task", JSON.stringify(textContent))
}


// function checkTime () {
//     var content = $("#first-hour-text").text();
//     var time = moment(content, "L")
//     console.log(time);

// }

// checkTime();