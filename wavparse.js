
const fs = require('fs');
const WavDecoder = require('wav-decoder');
const FFT = require('fft.js');
const { OutgoingMessage } = require('http');

// Read the WAV file into a buffer
const buf = fs.readFileSync('C:\\Users\\NiceGuyMicky\\Desktop\\jaswavexperiment\\kick.wav');

// Parse the WAV file
const wav = WavDecoder.decode.sync(buf);

// Convert the WAV file to mono
const numChannels = wav.numberOfChannels;
const samplesPerChannel = wav.channelData[0].length;
const monoSamples = new Float32Array(samplesPerChannel);

for (let i = 0; i < samplesPerChannel; i++) {
  let sum = 0;
  for (let j = 0; j < numChannels; j++) {
    sum += wav.channelData[j][i];
  }
  monoSamples[i] = sum / numChannels;
}

// Get the sample data as an array
const samples = Array.from(monoSamples);

// FFT and filtering

// find nearest power of 2 of float 32 array and padding with 0's
function nextPow2(x) {
    let y = 1;
    while (y < x) {
      y *= 2;
    }
    return y;
  }

const nearestSamplesLength = nextPow2(samples.length);
const diff = nearestSamplesLength - samples.length;
const padded = samples.concat(Array(diff).fill(0));

//FFT

const fft = new FFT(padded.length);
const input = new Array(padded.length);
input.fill(0);

const out = fft.createComplexArray();
const realInput = new Array(fft.size);

const data = fft.toComplexArray(padded);
//ft.transform(out, data);
fft.realTransform(out, data);



const real = out;


const realNotImaginary = [];
for (let i = 0; i < real.length; i += 2) {
    realNotImaginary.push(real[i]);
}

// divide by largest value in array(abs)
const dataMax = Math.max(Math.abs(Math.max(...realNotImaginary)), Math.abs(Math.min(...realNotImaginary)));
const realAbs = [];
for (let a = 0; a < realNotImaginary.length; a++) {
  realAbs.push(realNotImaginary[a] / dataMax);
}

//get chunk size
const numChunks = 10;
const chunkSize = realAbs.length / numChunks;
// absolute mean function for chunk
function absMean(arr)  {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += Math.abs(arr[i]);

  }
  total /= arr.length;
  return total;
}

// band quantization


const quantizedBands = [];




for (let b = 0; b < numChunks; b++) {
  quantizedBands.push(absMean(realAbs.slice(b*chunkSize, (b+1) * chunkSize)));
}







console.log(quantizedBands)





