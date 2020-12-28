// Detect button press
//number of drum buttons
var numberOfBtns = document.querySelectorAll(".drum").length;

//add event listener to drums buttons
for (var i=0; i<numberOfBtns; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function ()
    {
        //check which btn/img was clicked
        var btnInnerHtml = this.innerHTML;
        
        makeSound(btnInnerHtml);
        btnAnimation(btnInnerHtml);
    });
}

//detecting keyboard press
document.addEventListener("keypress", function (event){
    makeSound(event.key);
    btnAnimation(event.key);
});

function makeSound (key) {
    switch (key)
        {
            case "k":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            
            case "s":
                var snr = new Audio("sounds/snare.mp3");
                snr.play();
                break;

            case "j":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;      
                
            case "a":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            
            case "w":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            
            case "d":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            
            default:
                console.log(btnInnerHtml);
                break;          
        }

}

function btnAnimation (currentKey) {
    var activeBtn = document.querySelector("." + currentKey);

}