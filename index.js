//number of drum buttons
var numberOfBtns = document.querySelectorAll(".drum").length;

//add event listener to drums buttons
for (var i=0; i<numberOfBtns; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function ()
    {
        alert("got clicked");
    });
}


