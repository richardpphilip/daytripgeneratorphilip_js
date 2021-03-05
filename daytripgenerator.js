let destinationChoices = ['Heavenly Mountain', 'NorthStar Resort', 'Squaw Valley'];

let restuarantChoices= ['Mcdonalds', 'Burger King', 'Wendys'];

let entertainmentChoices = ['skiing', 'snowboarding', 'bloodsport'];

let travelChoices = ['walking', 'driving', 'biking'];


let randomNumber;

function RandomNumberGenerator(){
randomNumber = Math.floor((Math.random() * 3));
return randomNumber;
}

RandomNumberGenerator();



console.log("You will be going to" + " " + destinationChoices[randomNumber]);
let continueDestinationLoop = true;
let doYouLikeThisChoiceDestination = prompt("Do you Like this choice and want to keep it?");
let goodDestination;
while (continueDestinationLoop === true)
{
    if ( doYouLikeThisChoiceDestination === "yes"){
        continueDestinationLoop = false;
        goodDestination = destinationChoices[randomNumber];
    }
    else {
        RandomNumberGenerator();
        console.log("how about " + destinationChoices[randomNumber]);
        continueDestinationLoop = true;
        doYouLikeThisChoiceDestination = prompt("Do you Like this choice and want to keep it?");
    }
    
}



console.log("You will be eating at" + " " + restuarantChoices[randomNumber]);
let continueRestaurantLoop = true;
let doYouLikeThisChoiceRestaurant = prompt("Do you Like this choice and want to keep it?");
let goodRestaurant;
while (continueRestaurantLoop === true)
{
    if (doYouLikeThisChoiceRestaurant === "yes"){
       continueRestaurantLoop = false;
        goodRestaurant = restuarantChoices[randomNumber];
    }
    else {
        RandomNumberGenerator();
        console.log("how about " + restuarantChoices[randomNumber]);
        continueRestaurantLoop = true;
        doYouLikeThisChoiceRestaurant = prompt("Do you Like this choice and want to keep it?");
    }
    
}


console.log("You will be traveling by" + " " + travelChoices[randomNumber]);
let continueTravelLoop = true;
let doYouLikeThisChoiceTravel = prompt("Do you Like this choice and want to keep it?");
let goodTranspo;
while (continueTravelLoop === true)
{
    if (doYouLikeThisChoiceTravel === "yes"){
       continueTravelLoop = false;
        goodTranspo = travelChoices[randomNumber];
    }
    else {
        RandomNumberGenerator();
        console.log("how about " + restuarantChoices[randomNumber]);
        continueTravelLoop = true;
        doYouLikeThisChoiceTravel = prompt("Do you Like this choice and want to keep it?");
    }
    
}



console.log("You will be enjoying" + " " + entertainmentChoices[randomNumber]);
let continueEntertainmentLoop = true;
let doYouLikeThisChoiceEntertainment = prompt("Do you Like this choice and want to keep it?");
let goodEntertainment;
while (continueEntertainmentLoop === true)
{

    if (doYouLikeThisChoiceEntertainment === "yes"){
       continueEntertainmentLoop = false;
        goodEntertainment = entertainmentChoices[randomNumber];
    }
    else {
        RandomNumberGenerator();
        console.log("how about " + entertainmentChoices[randomNumber]);
        continueEntertainmentLoop = true;
        doYouLikeThisChoiceEntertainment = prompt("Do you Like this choice and want to keep it?");
    }
    
}

console.log("you selected going to " + goodDestination + " eating at " + goodRestaurant +  " traveling by " + goodTranspo +  " and enjoying " + goodEntertainment);


let continueFullLoop = true;
let doYouLikeAllOfTheChoices = prompt('Do you like all of these choices and accept?');

while (continueFullLoop === true){

    if (doYouLikeAllOfTheChoices === 'yes'){
        continueFullLoop = false;
        console.log("Amazing! Have a Great Trip");
    }
    else{
        RandomNumberGenerator();
        console.log("how about going to  " + destinationChoices[randomNumber] + " eating at " + restuarantChoices[randomNumber] + " traveling by " + travelChoices[randomNumber] + " and enjoying " + entertainmentChoices[randomNumber]);
        continueFullLoop = true;
        doYouLikeAllOfTheChoices = prompt('Do you like all of these choices and accept?');
        
    }
}