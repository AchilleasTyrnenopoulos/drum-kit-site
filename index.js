//number of drum buttons
var numberOfBtns = document.querySelectorAll(".drum").length;

//add event listener to drums buttons
for (var i=0; i<numberOfBtns; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function ()
    {
        //check which btn/img was clicked
        var btnInnerHtml = this.innerHTML;
        
        switch (btnInnerHtml)
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


        // //what to do when clicked
        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
    });
}


