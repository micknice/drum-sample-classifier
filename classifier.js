//featurizedArrayGenerator(folderPath, bands) returns array of subarrays, each subarray containing filepath, class (Kick/Snare/Hat) and frequency data array 
featurizedArrayGenerator = require('./featurizedArrayGenerator');

//vectorAverage(featurizedArray) pass output of featurizedArrayGenerator - returns class vector average
vectorAverage = require('./vectorAverage');
//linear model class. this.m = class vector, this.c = class bias, 
//this.dotProduct(x, shouldNormalize) =>([uncategorized vector], true/false ) returns dot product
linearModel = require('./linearmodel');

//index for freq data
const freqData = 2;
//setting band number for fft
const bands = 48;

//training sets
const trainingSetKick = ".\\data\\Kicks";
const trainingSetSnare = ".\\data\\Snares";
const trainingSetHat = ".\\data\\Hats";

//test set
const testSet = ".\\data\\TestSet";

const testArray = featurizedArrayGenerator(testSet, bands);
// console.log(testArray)
console.log(testArray[0][0])


//linear models for each class(Kick/Snare/Hat)
const modelKick = new linearModel();
const modelSnare = new linearModel();
const modelHat = new linearModel();

//setting class vectors
modelKick.m = vectorAverage(featurizedArrayGenerator(trainingSetKick, bands));
modelSnare.m = vectorAverage(featurizedArrayGenerator(trainingSetSnare, bands));
modelHat.m = vectorAverage(featurizedArrayGenerator(trainingSetHat, bands));

// classify by linear model
let correctlyClassified = 0;
const incorrectlyClassified = [];
for (testSample in testArray) {   
    let dotKick = modelKick.dotProduct(testArray[testSample][freqData], true);
    let dotSnare = modelSnare.dotProduct(testArray[testSample][freqData], true);
    let dotHat = modelHat.dotProduct(testArray[testSample][freqData], true);
    if (dotKick > dotSnare && dotKick > dotHat) {
        if (testArray[testSample][1] === 'Kick') {            
            correctlyClassified += 1;
        } else if (testArray[testSample][1] !== 'Kick') { 
            incorrectlyClassified.push(testArray[testSample][0]);                      
        }
    } else if (dotSnare > dotKick && dotSnare > dotHat) {
        if (testArray[testSample][1] === 'Snare') {            
            correctlyClassified += 1;
        } else if (testArray[testSample][1] !== 'Snare') { 
            incorrectlyClassified.push(testArray[testSample][0]);                      
        }          
    } else if (dotHat > dotKick && dotHat > dotSnare) {
        if (testArray[testSample][1] === 'Hat') {           
            correctlyClassified += 1;
        } else if (testArray[testSample][1] !== 'Hat') { 
            incorrectlyClassified.push(testArray[testSample][0]);                      
        }   
    } 
}
console.log(correctlyClassified)
console.log(testArray.length)
console.log(incorrectlyClassified)



