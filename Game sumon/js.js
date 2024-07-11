var AllClours = ["red", "blue", "green", "yellow"];

var gamepattern = [];

var userclicked = [];

var started = false;

var level = 0;
function nextsequence() {
    userclicked=[];

    level++;

    $("#level-title").text("level " + level);


    var randomno = Math.round((Math.random() * 3));

    let nextColor = AllClours[randomno];
    console.log(nextColor)

    gamepattern.push(nextColor);

    $("#" + nextColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playsound(nextColor);
    animation(nextColor)
};
$(".btn").click(function () {
    let clickcolor = $(this).attr("id");
    userclicked.push(clickcolor);
    
    
    playsound(clickcolor)
    animation(clickcolor)
    cheakans(userclicked.length-1)
});
function animation(name) {
    $("#" + name).addClass("pressed")
    setTimeout(function () {
        $("#" + name).removeClass("pressed")

    }, 100)
}
function playsound(name) {
    let auid = new Audio("sounds/" + name + ".mp3");
    auid.play();
};
$(document).keypress(function () {
    if (!started)
        $("#level-title").text(" level " +  level);

    nextsequence();
    started = true;

});
function cheakans(chassAim){
    if (gamepattern[chassAim]===userclicked[chassAim]){
        console.log("correct")
        if(gamepattern.length===userclicked.length){
            setTimeout(function () {
                nextsequence();
                
            },1000)
        }
    }
    else {
        let auid = new Audio("sounds/wrong.mp3");
        auid.play();
        $("#level-title").text("Game Over. Press any key to reset");


        $("body").addClass("game-over");


        setTimeout(function (){
            $("body").removeClass("game-over")
            
        }, 2000)
        reset()
    }
};
function reset(){
    started = false ;
    level = 0 ;
    gamepattern= [];
}
