// display current date in header
$("#currentDay").text(moment().format('dddd, MMMM Do'));


$("#save-content-1").click(storeData);
$("#save-content-2").click(storeData);
$("#save-content-3").click(storeData);
$("#save-content-4").click(storeData);
$("#save-content-5").click(storeData);
$("#save-content-6").click(storeData);
$("#save-content-7").click(storeData);
$("#save-content-8").click(storeData);
$("#save-content-9").click(storeData);



function storeData() {
    var hour1Content = $("#hour-1-text").val()
    var hour2Content = $("#hour-2-text").val()
    var hour3Content = $("#hour-3-text").val()
    var hour4Content = $("#hour-4-text").val()
    var hour5Content = $("#hour-5-text").val()
    var hour6Content = $("#hour-6-text").val()
    var hour7Content = $("#hour-7-text").val()
    var hour8Content = $("#hour-8-text").val()
    var hour9Content = $("#hour-9-text").val()

    localStorage.setItem("task1", JSON.stringify(hour1Content))
    localStorage.setItem("task2", JSON.stringify(hour2Content))
    localStorage.setItem("task3", JSON.stringify(hour3Content))
    localStorage.setItem("task4", JSON.stringify(hour4Content))
    localStorage.setItem("task5", JSON.stringify(hour5Content))
    localStorage.setItem("task6", JSON.stringify(hour6Content))
    localStorage.setItem("task7", JSON.stringify(hour7Content))
    localStorage.setItem("task8", JSON.stringify(hour8Content))
    localStorage.setItem("task9", JSON.stringify(hour9Content))
    
}

function retrieveData(){
    var task1 = JSON.parse(localStorage.getItem("task1"))
    var task2 = JSON.parse(localStorage.getItem("task2"))
    var task3 = JSON.parse(localStorage.getItem("task3"))
    var task4 = JSON.parse(localStorage.getItem("task4"))
    var task5 = JSON.parse(localStorage.getItem("task5"))
    var task6 = JSON.parse(localStorage.getItem("task6"))
    var task7 = JSON.parse(localStorage.getItem("task7"))
    var task8 = JSON.parse(localStorage.getItem("task8"))
    var task9 = JSON.parse(localStorage.getItem("task9"))

    console.log(task1)
    $("#hour-1-text").val(task1)
    $("#hour-2-text").val(task2)
    $("#hour-3-text").val(task3)
    $("#hour-4-text").val(task4)
    $("#hour-5-text").val(task5)
    $("#hour-6-text").val(task6)
    $("#hour-7-text").val(task7)
    $("#hour-8-text").val(task8)
    $("#hour-9-text").val(task9)
}


function checkTime () {
    // remove any background classes before checking time
    $("#hour-1-text").removeClass("bg-success bg-secondary bg-warning")
    $("#hour-2-text").removeClass("bg-success bg-secondary bg-warning")
    $("#hour-3-text").removeClass("bg-success bg-secondary bg-warning")
    $("#hour-4-text").removeClass("bg-success bg-secondary bg-warning")
    $("#hour-5-text").removeClass("bg-success bg-secondary bg-warning")
    $("#hour-6-text").removeClass("bg-success bg-secondary bg-warning")
    $("#hour-7-text").removeClass("bg-success bg-secondary bg-warning")
    $("#hour-8-text").removeClass("bg-success bg-secondary bg-warning")

     // check time of first timeblock and change background accordingly
    if(moment().isBetween(moment("09:00", "HH:mm"), moment("09:59", "HH:mm"))){
        $("#hour-1-text").addClass("bg-warning");
    }else if(moment().isAfter(moment("09:59", "HH:mm"))){
        $("#hour-1-text").addClass("bg-secondary")
    }else if(moment().isBefore(moment("09:00", "HH:mm"))){
        $("#hour-1-text").addClass("bg-success")
    }
    // check time of second timeblock and change background accordingly
    if(moment().isBetween(moment("10:00", "HH:mm"), moment("10:59", "HH:mm"))){
        $("#hour-2-text").addClass("bg-warning");
    }else if(moment().isAfter(moment("10:59", "HH:mm"))){
        $("#hour-2-text").addClass("bg-secondary")
    }else if(moment().isBefore(moment("10:00", "HH:mm"))){
        $("#hour-2-text").addClass("bg-success")
    }
    // check time of third timeblock and change bg accordingly
    if(moment().isBetween(moment("11:00", "HH:mm"), moment("11:59", "HH:mm"))){
        $("#hour-3-text").addClass("bg-warning");
    }else if(moment().isAfter(moment("11:59", "HH:mm"))){
        $("#hour-3-text").addClass("bg-secondary")
    }else if(moment().isBefore(moment("11:00", "HH:mm"))){
        $("#hour-3-text").addClass("bg-success")
    }
    // 4th
    if(moment().isBetween(moment("12:00", "HH:mm"), moment("12:59", "HH:mm"))){
        $("#hour-4-text").addClass("bg-warning");
    }else if(moment().isAfter(moment("12:59", "HH:mm"))){
        $("#hour-4-text").addClass("bg-secondary")
    }else if(moment().isBefore(moment("12:00", "HH:mm"))){
        $("#hour-4-text").addClass("bg-success")
    }
    // 5th
    if(moment().isBetween(moment("13:00", "HH:mm"), moment("13:59", "HH:mm"))){
        $("#hour-5-text").addClass("bg-warning");
    }else if(moment().isAfter(moment("13:59", "HH:mm"))){
        $("#hour-5-text").addClass("bg-secondary")
    }else if(moment().isBefore(moment("13:00", "HH:mm"))){
        $("#hour-5-text").addClass("bg-success")
    }
    // 6th
    if(moment().isBetween(moment("14:00", "HH:mm"), moment("14:59", "HH:mm"))){
        $("#hour-6-text").addClass("bg-warning");
    }else if(moment().isAfter(moment("14:59", "HH:mm"))){
        $("#hour-6-text").addClass("bg-secondary")
    }else if(moment().isBefore(moment("14:00", "HH:mm"))){
        $("#hour-6-text").addClass("bg-success")
    }
    //7th
    if(moment().isBetween(moment("15:00", "HH:mm"), moment("15:59", "HH:mm"))){
        $("#hour-7-text").addClass("bg-warning");
    }else if(moment().isAfter(moment("15:59", "HH:mm"))){
        $("#hour-7-text").addClass("bg-secondary")
    }else if(moment().isBefore(moment("15:00", "HH:mm"))){
        $("#hour-7-text").addClass("bg-success")
    }
    //8th
    if(moment().isBetween(moment("16:00", "HH:mm"), moment("16:59", "HH:mm"))){
        $("#hour-8-text").addClass("bg-warning");
    }else if(moment().isAfter(moment("16:59", "HH:mm"))){
        $("#hour-8-text").addClass("bg-secondary")
    }else if(moment().isBefore(moment("16:00", "HH:mm"))){
        $("#hour-8-text").addClass("bg-success")
    }
    // 9th
    if(moment().isBetween(moment("17:00", "HH:mm"), moment("17:59", "HH:mm"))){
        $("#hour-9-text").addClass("bg-warning");
    }else if(moment().isAfter(moment("17:59", "HH:mm"))){
        $("#hour-9-text").addClass("bg-secondary")
    }else if(moment().isBefore(moment("17:00", "HH:mm"))){
        $("#hour-9-text").addClass("bg-success")
    }
    

}


checkTime();
retrieveData();

