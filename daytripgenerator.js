let destinationChoices = ['Heavenly Mountain', 'NorthStar Resort', 'Squaw Valley'];


RandomNumberGenerator();
function RandomNumberGenerator(){
let randomNumber;
randomNumber = Math.floor((Math.random() * 3));
numberOutput = randomNumber;
return numberOutput;
}


console.log(destinationChoices[numberOutput]);