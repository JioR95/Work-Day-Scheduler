$(document).ready(function(){
$("#currentDay").html(moment().format("dddd, MMMM Do"));
});

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(text, time);
    })

function timeTrack() {
    var currentTime = moment().hour();
    console.log(currentTime)
    
    $(".time-block").each(function() {
        var timeLog = parseInt($(this).attr("id").split("hour")[1]);
        console.log("timeLog check" + timeLog);

        if()



    }
}

}
