$(document).ready(function(){
$("#currentDay").html(moment().format("dddd, MMMM Do"));
});

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(text,time);
    })

function timeTrack(){
    var currentTime = moment().hour();
    console.log(currentTime)
    
    $(".time-block").each(function(){
        var timeLog = parseInt($(this).attr("id").split("hour")[1]);
        console.log("timeLog check" + timeLog);

        if(timeLog < now){
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if(timeLog === now){
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present"); 
        }
        else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
       
    })
}
$("#hour-7 .description").val(localStorage.getItem("hour-7"));