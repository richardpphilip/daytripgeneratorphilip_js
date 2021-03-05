let destinationChoices = ['Heavenly Mountain', 'NorthStar Resort', 'Squaw Valley'];

let restuarantChoices= ['Mcdonalds', 'Burger King', 'Wendys'];


let randomNumber;

function RandomNumberGenerator(){
randomNumber = Math.floor((Math.random() * 3));
return randomNumber;
}

RandomNumberGenerator();


console.log("You will be going to" + " " + destinationChoices[randomNumber]);
let ContinueDestinationLoop = true
let DoYouLikeThisChoice = prompt("Do you Like this choice and want to keep it?");

while (ContinueDestinationLoop === true)
{
    if (DoYouLikeThisChoice === "yes"){
        ContinueDestinationLoop = false;
    }
    else {
        RandomNumberGenerator();
        console.log("how about " + destinationChoices[randomNumber]);
        ContinueDestinationLoop = true;
        DoYouLikeThisChoice = prompt("Do you Like this choice and want to keep it?");
    }
}