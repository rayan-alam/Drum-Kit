// For Detecting Button press

var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrums; i++){
   // addEventListener is used when we need an activity to happen when an event on screen takes place
   // addEventListener("1st parameter",2nd parameter);
   // 1st parameter - is usually the event that will occur
   // 2nd parameter - is usually the function that will be called on the event

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        }
    );
}

// Detecting Keyboard Press

document.addEventListener("keypress", function(event) {
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key){

    switch (key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        default: console.log(buttonInnerHTML);

    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}