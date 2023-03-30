var noOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var button = this.innerHTML;
        makeSound(button);
        buttonAnimation(button);
    });
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    var sound;
    switch (key) {
        case "w":
            sound = "sounds/crash.mp3";
            break;
        case "a":
            sound = "sounds/kick-bass.mp3";
            break;
        case "s":
            sound = "sounds/snare.mp3";
            break;
        case "d":
            sound = "sounds/tom-1.mp3";
            break;
        case "j":
            sound = "sounds/tom-2.mp3";
            break;
        case "k":
            sound = "sounds/tom-3.mp3";
            break;
        case "l":
            sound = "sounds/tom-4.mp3";
            break;
        default:
            sound="sounds/crash.mp3";

    }
    var audio = new Audio(sound);
    audio.play();
}

function buttonAnimation(key){
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },700);

}