$(document).ready(function(){
$("#currentDay").html(moment().format("dddd, MMMM Do"));
});

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(text, time);
    })
    
}
