$("#submit-name").click(function(){
    $("#greeting").empty();
    $("#greeting").append("Hi, ");
    $("#greeting").append($("#name").val());

});
function getRandomColor() {
    return "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
}

$('#change-color').click(function() {
    $('body').css('background', getRandomColor());
});

