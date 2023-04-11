//iterates over folder and pushes file path to an array in a tuple with its kick-snare-hat keyword
const fs = require('fs');
const path = require('path');

function folderToArray(folderPathIn) {
    const filesWithKeywords = [];
    const folderPath = folderPathIn

    const allFilesInFolder = fs.readdirSync(folderPath);
    const allFilePaths = [];
    for (let i = 0; i < allFilesInFolder.length; i++) {
        if (allFilesInFolder[i].toLowerCase().includes('kick')) {
            allFilePaths.push([`${folderPath}\\${allFilesInFolder[i]}`, 'Kick']);
        } else if (allFilesInFolder[i].toLowerCase().includes('snare')) {
            allFilePaths.push([`${folderPath}\\${allFilesInFolder[i]}`, 'Snare']);
        } else if (allFilesInFolder[i].toLowerCase().includes('hat')) {
            allFilePaths.push([`${folderPath}\\${allFilesInFolder[i]}`, 'Hat']);
        }    
    }
    return  allFilePaths;
}


module.exports = folderToArray;
