let destinationChoices = ['Heavenly Mountain', 'NorthStar Resort', 'Squaw Valley'];

let restuarantChoices= ['Mcdonalds', 'Burger King', 'Wendys'];

let entertainmentChoices = ['skiing', 'snowboarding', 'bloodsport'];


let randomNumber;

function RandomNumberGenerator(){
randomNumber = Math.floor((Math.random() * 3));
return randomNumber;
}

RandomNumberGenerator();


console.log("You will be going to" + " " + destinationChoices[randomNumber]);
let ContinueDestinationLoop = true;
let doYouLikeThisChoiceDestination = prompt("Do you Like this choice and want to keep it?");
let goodDestination;
while (ContinueDestinationLoop === true)
{
    if ( doYouLikeThisChoiceDestination === "yes"){
        ContinueDestinationLoop = false;
        goodDestination = destinationChoices[randomNumber];
    }
    else {
        RandomNumberGenerator();
        console.log("how about " + destinationChoices[randomNumber]);
        ContinueDestinationLoop = true;
        doYouLikeThisChoiceDestination = prompt("Do you Like this choice and want to keep it?");
    }
    
}
console.log("You will be eating at" + " " + restuarantChoices[randomNumber]);
let ContinueRestaurantLoop = true;
let doYouLikeThisChoiceRestaurant = prompt("Do you Like this choice and want to keep it?");
let goodRestaurant;
while (ContinueRestaurantLoop === true)
{
    if (doYouLikeThisChoiceRestaurant === "yes"){
       ContinueRestaurantLoop = false;
        goodRestaurant = restuarantChoices[randomNumber];
    }
    else {
        RandomNumberGenerator();
        console.log("how about " + restuarantChoices[randomNumber]);
        ContinueRestaurantLoop = true;
        doYouLikeThisChoiceRestaurant = prompt("Do you Like this choice and want to keep it?");
    }
    
}
console.log("You will be enjoying" + " " + entertainmentChoices[randomNumber]);
let ContinueEntertainmentLoop = true;
let doYouLikeThisChoiceEntertainment = prompt("Do you Like this choice and want to keep it?");
let goodEntertainment;
while (ContinueEntertainmentLoop === true)
{
let doYouLikeThisChoiceEntertainment = prompt("Do you Like this choice and want to keep it?");
    if (doYouLikeThisChoiceEntertainment === "yes"){
       ContinueEntertainmentLoop = false;
        goodEntertainment = entertainmentChoices[randomNumber];
    }
    else {
        RandomNumberGenerator();
        console.log("how about " + entertainmentChoices[randomNumber]);
        ContinueEntertainmentLoop = true;
        doYouLikeThisChoiceEntertainment = prompt("Do you Like this choice and want to keep it?");
    }
    
}

console.log("you selected going to " + goodDestination + " eating at " + goodRestaurant + " and enjoying " + goodEntertainment);


let continueFullLoop = true;
let doYouLikeAllOfTheChoices = prompt('Do you like all of these choices and accept?');

while (continueFullLoop === true){

    if (doYouLikeAllOfTheChoices === 'yes'){
        continueFullLoop = false;
        console.log("Amazing! Have a Great Trip");
    }
    else{
        RandomNumberGenerator();
        console.log("how about going to  " + destinationChoices[randomNumber] + " eating at " + restuarantChoices[randomNumber] + " and enjoying " + entertainmentChoices[randomNumber]);
        continueFullLoop = true;
        doYouLikeAllOfTheChoices = prompt('Do you like all of these choices and accept?');
        
    }
}