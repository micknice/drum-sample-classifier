const featurizedArrayGenerator = require('./featurizedArrayGenerator');

// function takes featurized array and returns vector average 
function vectorAverage(featurizedArray) {
    const freqData = 2;
    let vectorSum  = featurizedArray[0][freqData];
      
    for (let i = 1; i < featurizedArray.length; i++) {
        for (let j = 0; j < vectorSum.length; j++) {
            vectorSum[j] += featurizedArray[i][freqData][j];
        }   
    }
    const vectorAve = [];
    for (let k = 0; k < vectorSum.length; k++) {
        vectorAve.push(vectorSum[k] / featurizedArray.length);
    }   
    return vectorAve;
}


module.exports = vectorAverage;






