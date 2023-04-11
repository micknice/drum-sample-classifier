//folderToArray(folderpath) => returns array containing tuples of filepath/keyword pairs.
//featurizer(filePath, bandCount) performs FFT and returns frequency data across teh specified no. of bands.

const folderToArray = require('./folderToArraySync');
const featurize = require('./featurizer');

function pathsTagsAndFeatures(folderPath, bands) {
    const inputArray = folderToArray(folderPath);
    const filesWithFeatures = inputArray;

    for (let i = 0; i < filesWithFeatures.length; i++) {
        filesWithFeatures[i].push(featurize(inputArray[i][0], bands))
    }
    return filesWithFeatures;
}


module.exports = pathsTagsAndFeatures;



