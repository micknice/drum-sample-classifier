# wav-featurizer - bad name it does more now.

# folderToArraySync.js
defines function: folderToArray(folderPath)
Iterates over (folderPath) of .wav files, checks file name for kick/hat/snare (case insensitive) and pushes a tuple containing file path and kick/hat/snare tag.

# featurizer.js
defines function: featurize(filePath, bands)
Reads .wav (filePath) into buffer, converts to mono, performs FFT and returns freqData as an array of power values between 0 and 1 across the specified number of (bands).

# featurizedArrayGenerator.js
defines function: pathsTagsAndFeatures(folderPath, bands). 
consolidates the two above functions and returns a (featurizedArray) array of thruples containing [[filePath][tag][freqData]]

# vectorAverage.js
defines function: vectorAverage(featurizedArray). 
Takes a (featurizedArray) as an argument and returns the vector average (vectorAve) of all the [freqData] in the array.

# linearModel.js
defines class: linearModel{}
