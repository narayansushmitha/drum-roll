var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var audio = new Audio(makeSound(this.innerHTML));
    audio.play();
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  var audio = new Audio(makeSound(event.key.toLowerCase()));
  audio.play();
  buttonAnimation(event.key.toLowerCase());
});


function makeSound(key) {
  switch (key) {
    case "w":
      return 'sounds/tom-1.mp3';

    case "a":
      return 'sounds/tom-2.mp3';

    case "s":
      return 'sounds/tom-3.mp3';

    case "d":
      return 'sounds/tom-4.mp3';

    case "j":
      return 'sounds/snare.mp3';

    case "k":
      return 'sounds/crash.mp3';

    case "l":
      return 'sounds/kick-bass.mp3';

    default:
      return key;
  }
}


function buttonAnimation(currentKey){
var button = document.querySelector("."+currentKey);
button.classList.add("pressed");
setTimeout(function(){
  button.classList.remove("pressed");
},100);
}
