//iterates over folder and pushes file path to an array in a tuple with its kick-snare-hat keyword

function folderToArray(folderPathIn) {
    const fs = require('fs');
    const path = require('path');
    return new Promise((resolve, reject) => {
        const filesWithKeywords = [];
        const folderPath = folderPathIn//.replace(/\\/g, "\\\\")
        
    
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                console.error('Folder read error:', err);
                return;
            }
    
            files.forEach(file => {
                const filePath = path.join(folderPath, file);
                if (filePath.toLowerCase().includes('kick')) {
                    filesWithKeywords.push([filePath, 'Kick']);
                } else if (filePath.toLowerCase().includes('snare')) {
                    filesWithKeywords.push([filePath, 'Snare']);
                } else if (filePath.toLowerCase().includes('hat')) {
                    filesWithKeywords.push([filePath, 'Hat']);
                }
            });
        });
        resolve(filesWithKeywords);
        
    });

    
    //console.log(filesWithKeywords)
    return filesWithKeywords;
    
}





module.exports = folderToArray;