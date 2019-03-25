'use strict';

const fs = require('fs');

// NO, you may not read synchronosly ... this is only for expedience in the demo
const buffer = fs.readFileSync(`${__dirname}/assets/baldy.bmp`);

// Create a naked object to model the bitmap properties
const parsedBitmap = {};

// Identify the offsets by reading the bitmap docs
const FILE_SIZE_OFFSET = 2;
const WIDTH_OFFSET = 18;
const HEIGHT_OFFSET = 22;
const BYTES_PER_PIXEL_OFFSET = 28;
const COLOR_TABLE_OFFSET = 54;
const PIXCEL_ARRAY_OFFSET = 1078;

//------------------------------------------------------
// READING INFORMATION FROM THE BITMAP FILE
//------------------------------------------------------
parsedBitmap.type = buffer.toString('utf-8', 0, 2);
parsedBitmap.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
parsedBitmap.bytesPerPixel = buffer.readInt16LE(BYTES_PER_PIXEL_OFFSET);
parsedBitmap.height = buffer.readInt32LE(HEIGHT_OFFSET);
parsedBitmap.width = buffer.readInt32LE(WIDTH_OFFSET);
parsedBitmap.clolorTable = buffer.readInt32LE(COLOR_TABLE_OFFSET);
parsedBitmap.pixelArray = buffer.readInt32LE(PIXCEL_ARRAY_OFFSET);

let sliceBuffer = buffer.slice(COLOR_TABLE_OFFSET);
// console.log(sliceBuffer);

// console.log(buffer.slice(PIXCEL_ARRAY_OFFSET));

// console.log(parsedBitmap);
// console.log(parsedBitmap.clolorTable);
// console.log(parsedBitmap.pixelArray);

let tableOfColors = buffer.slice(COLOR_TABLE_OFFSET, PIXCEL_ARRAY_OFFSET);
console.log(tableOfColors);


for (let i = COLOR_TABLE_OFFSET; i < PIXCEL_ARRAY_OFFSET; i++) {
    let colorx = buffer.readInt32LE(COLOR_TABLE_OFFSET + i*4);
    console.log(i.toString(16) + ':' + colorx.toString(16));
}

// console.log('parsedBitmap.width‘);
console.log(parsedBitmap.width);


// for (let i = 37; i < 38; i++) {
//     // let colorx = buffer.readInt32LE(COLOR_TABLE_OFFSET + i*4);
//     buffer.writeInt32LE(0xffffff, COLOR_TABLE_OFFSET + i*4);
//     // console.log(colorx.toString(16));
// }


// for (let i = 50; i < parsedBitmap.width*32; i++) {
//     if (i % 4 === 0 ){
//         buffer.writeInt32LE(143, PIXCEL_ARRAY_OFFSET + i*4);
//     }    
//  }

let other = '73';
  for (let i = 12252; i < 12327; i++) {
    buffer[i]=other;   
    } 
  for (let i = 12364; i < 12439; i++) {
    buffer[i]=other;   
    } 
  for (let i = 12476; i < 12551; i++) {
    buffer[i]=other;   
    }
  for (let i = 12588; i < 12662; i++) {
    buffer[i]=other;   
    }  
        


console.log('buffer[2000]:', buffer[2000]);
console.log('buffer[1146]:', buffer[1146]);
console.log('buffer.length:', buffer.length);
fs.writeFile('./test.bmp', buffer, err => {
  if (err) throw err;
});

fs.writeFile('./test.txt', buffer,'hex', err => {
    if (err) throw err;
  });

fs.writeFile('./test.txt', buffer.toString('hex'), err => {
    if (err) throw err;
  });

//   tableOfColors.toString('hex')