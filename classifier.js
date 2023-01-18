//featurizedArrayGenerator(folderPath, bands) returns array of thruples containing filepath, class (Kick/Snare/Hat) and frequency data array 
featurizedArrayGenerator = require('./featurizedArrayGenerator');
//vectorAverage(featurizedArray) pass output of featurizedArrayGenerator - returns class vector average
vectorAverage = require('./vectorAverage');
//linear model class. this.m = class vector, this.c = class bias, 
//this.dotProduct(x, shouldNormalize) =>([uncategorized vector], true/false ) returns dot product
linearModel = require('./linearmodel');

//training sets
const trainingSetKick = "C:\\Users\\NiceGuyMicky\\GIT REPOS\\wav-featurizer\\jaswavexperiment\\Kicks"
const trainingSetSnare = "C:\\Users\\NiceGuyMicky\\GIT REPOS\\wav-featurizer\\jaswavexperiment\\Snares"
const trainingSetHat = "C:\\Users\\NiceGuyMicky\\GIT REPOS\\wav-featurizer\\jaswavexperiment\\Hats"

//test set
const testSet = "C:\\Users\\NiceGuyMicky\\GIT REPOS\\wav-featurizer\\jaswavexperiment\\Test set"

const trainingArray = featurizedArrayGenerator(testSet)

//setting band number for fft
const bands = 10;

//linear models for each class(Kick/Snare/Hat)
modelKick = new linearModel();
modelSnare = new linearModel();
modelHat = new linearModel();

//setting class vectors
modelKick.m = vectorAverage(featurizedArrayGenerator(trainingSetKick, bands))
modelSnare.m = vectorAverage(featurizedArrayGenerator(trainingSetSnare, bands))
modelHat.m = vectorAverage(featurizedArrayGenerator(trainingSetHat, bands))

dotKick = modelKick.dotProduct()



