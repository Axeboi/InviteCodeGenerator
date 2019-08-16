const Hashids = require('hashids');
const binarySearch = require('array-binarysearch');
var hashids = new Hashids("this is salt", 8, "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");

// Initialize numbers array
const numbers = [];
for(let i = 0; i < 1000000; i++) {
  numbers.push(i);
}

const encoded = [];
numbers.forEach( function (num) {
  const x = hashids.encode(num);
  encoded.push(x);
})

const decoded = []
encoded.forEach( (code) => {
  const decodeValue = hashids.decode(code);
  decoded.push(decodeValue[0]);
})

// Check for duplicates. Have to be none.
encoded.sort()
const res = binarySearch(encoded, (a,b) => {
  if (a === b) {
    console.log('Found duplicate: ', a);
  }
});

if (res < 0) {
  console.log(`No duplicates found in ${encoded.length} codes`)
}

 
console.log(numbers[0])
console.log(numbers[500000])
console.log(numbers[999999])

console.log(encoded[0])
console.log(encoded[500000])
console.log(encoded[999999])

console.log(decoded[0])
console.log(decoded[500000])
console.log(decoded[999999])