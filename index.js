'use strict';

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


const FILE_SIZE_OFFSET = 2;
const WIDTH_OFFSET = 18;
const HEIGHT_OFFSET = 22;
const BYTES_PER_PIXEL_OFFSET = 28;
const COLOR_TABLE_OFFSET = 54;
const PIXCEL_ARRAY_OFFSET = 1078;
/**
 * Bitmap -- receives a file name, used in the transformer to note the new buffer
 * @param filePath
 * @constructor
 */
function Bitmap(filePath) {
  this.file = filePath;
  this.parse = {};
  this.transform = {};
}

/**
 * Parser -- accepts a buffer and will parse through it, according to the specification, creating object properties for each segment of the file
 * @param buffer
 */
Bitmap.prototype.parse = function(buffer) {
  this.buffer = buffer;
  this.type = buffer.toString('utf-8', 0, 2);
  this.fileSize = buffer.readInt32LE(FILE_SIZE_OFFSET);
  this.bytesPerPixel = buffer.readInt16LE(BYTES_PER_PIXEL_OFFSET);
  this.height = buffer.readInt32LE(HEIGHT_OFFSET);
  this.width = buffer.readInt32LE(WIDTH_OFFSET);
  this.clolorTable = buffer.readInt32LE(COLOR_TABLE_OFFSET);
  this.pixelArray = buffer.readInt32LE(PIXCEL_ARRAY_OFFSET);

};

/**
 * Transform a bitmap using some set of rules. The operation points to some function, which will operate on a bitmap instance
 * @param operation
 */
Bitmap.prototype.transform = function(operation) {
  // This is really assumptive and unsafe
  transforms[operation](this);
  this.newFile = this.file.replace(/\.bmp/, `.${operation}.bmp`);
};

/**
 * Sample Transformer (greyscale)
 * Would be called by Bitmap.transform('greyscale')
 * Pro Tip: Use "pass by reference" to alter the bitmap's buffer in place so you don't have to pass it around ...
 * @param bmp
 */
// const transformGreyscale = (bmp) => {

//   console.log('Transforming bitmap into greyscale', bmp);

//   //TODO: Figure out a way to validate that the bmp instance is actually valid before trying to transform it

//   //TODO: alter bmp to make the image greyscale ...

// };

// const doTheInversion = (bmp) => {
//   bmp = {};
// }

const addHeadband = (bmp) => {
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
  alert('John, put on your headband!');
}

const injail =(bmp) => {
  for (let i = 50; i < Bitmap.parse().width*32; i++) {
    if (i % 4 === 0 ){
        buffer.writeInt32LE(143, PIXCEL_ARRAY_OFFSET + i*4);
    }    
  }
  alert('John, You\'re in jail!');
}

const whiteBrow =(bmp) => {
  for (let i = 37; i < 38; i++) {
    // let colorx = buffer.readInt32LE(COLOR_TABLE_OFFSET + i*4);
    buffer.writeInt32LE(0xffffff, COLOR_TABLE_OFFSET + i*4);
    // console.log(colorx.toString(16));
  }
  alert('John with white brow!');
}

/**
 * A dictionary of transformations
 * Each property represents a transformation that someone could enter on the command line and then a function that would be called on the bitmap to do this job
 */
const transforms = {
  
  headband : addHeadband,
  injail: injail,
  whitebrow: whiteBrow
};

// ------------------ GET TO WORK ------------------- //

// Function of promises to read, a file, pass through the constructor, and write a new file
function transform() {
  let filePath;
  readFile(file) 
    .then(buffer => {

      let bitmap = new Bitmap(buffer, file);
      bitmap.parse();
      bitmap.transform(operation);
      filePath = bitmap.newFilePath;

      return writeFile(bitmap.newFilePath, bitmap.buffer);
    })
      .then(() => console.log(`Created transformed bitmap at ${filePath}`))

      .catch(err => console.log(err));
}

// TODO: Explain how this works (in your README)
const [file, operation] = process.argv.slice(2);

let bitmap = new Bitmap(file);

transform();