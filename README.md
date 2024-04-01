## Node.js

``Node.js is a javascript runtime Environment Built upon Chrome's V8 Engine``

## History of Nodejs
```txt
 In 2009 an idea came in the mind of Ryan Dahl(Google Engineer)
that why not run javascript
outside browser, so he took v8 engine and embedded in a c++ program
and called it Node.exe later then came to be known as Node.js
```
```txt
In 1995 Netscape written a program called Netscape Enterprise server
for a runtime javascript but it didnt work
```

## When to Use Nodejs
1) I/O Bound
2) Data Streaming Applications
3) Real time chat Applications

## Node JS REPL

The `REPL` feature of Node is very useful in experimenting with Node.js codes and to debug javascript codes.

**R** - `Read` user's input parses the input into Javascript data-structure,and stores in memory

**E** - `Eval` Takes and evaluates the data structure

**P** - `Print` Prints the result

**L** - `Loops` the above command until the user presses ctrl-c twice

```bash
node
Welcome to Node.js v20.10.0.
Type ".help" for more information.
> 5 + 3
8
> _ + 2
10
>
```

```bash
// Create files thorugh terminal
type > index.js

//Read the inside file
type index.js
```
**In REPL press Tab twice**
```bash
AbortController
AbortSignal
AggregateError
Array
ArrayBuffer
Atomics
BigInt
BigInt64Array
BigUint64Array
Blob
Boolean
BroadcastChannel
Buffer
ByteLengthQueuingStrategy
CompressionStream
CountQueuingStrategy
Crypto
CryptoKey
CustomEvent
DOMException
DataView
Date
DecompressionStream
Error
EvalError
Event
EventTarget
File
FinalizationRegistry
Float32Array
Float64Array
FormData
Function
Headers
Infinity
Int16Array
Int32Array
Int8Array
Intl
JSON
Map
Math
MessageChannel
MessageEvent
MessagePort
NaN
Number
Object
Performance
PerformanceEntry
PerformanceMark
PerformanceMeasure
PerformanceObserver
PerformanceObserverEntryList
PerformanceResourceTiming
Promise
Proxy
RangeError
ReadableByteStreamController
ReadableStream
ReadableStreamBYOBReader
ReadableStreamBYOBRequest
ReadableStreamDefaultController
ReadableStreamDefaultReader
ReferenceError
Reflect
RegExp
Request
Response
Set
SharedArrayBuffer
String
SubtleCrypto
Symbol
SyntaxError
TextDecoder
TextDecoderStream
TextEncoder
TextEncoderStream
TransformStream
TransformStreamDefaultController
TypeError
URIError
URL
URLSearchParams
Uint16Array
Uint32Array
Uint8Array
Uint8ClampedArray
WeakMap
WeakRef
WeakSet
WebAssembly
WritableStream
WritableStreamDefaultController
WritableStreamDefaultWriter
_
_error
assert
async_hooks
atob
btoa
buffer
child_process
clearImmediate
clearInterval
clearTimeout
cluster
console
constants
crypto
decodeURI
decodeURIComponent
dgram
diagnostics_channel
dns
domain
....



constructor

> setTimeout
[Function: setTimeout] {
  [Symbol(nodejs.util.promisify.custom)]: [Getter]
}
> clearTimeout
[Function: clearTimeout]
> clearTimeout()
undefined
> fs
......
```
## Modules in Node JS
**File System**
```javascript
const fs = require('fs');

//creating a new file
fs.writeFileSync("read.txt", "Bench Press 100 kilos withing 3 months")

//It overides the previous data present in the file
fs.writeFileSync("read.txt", "Bench Press 100 kilos withing 3 months will this overide the previous data")

//Add datas to the existing file
fs.appendFileSync("read.txt", " \nLol am already benching 100 wbu ?")

//Reading the existing data
const buf_data = fs.readFileSync("read.txt", "utf-8");//Takes 2 arguments file name and encoding-type
console.log(buf_data)

//Rename File
fs.renameSync("read.txt", "readandwrite.txt");

//Buffer - is an additional data type available in node to store binary datas
```

## CRUD OPERATIONS USING FS MODULES
```javascript
const fs = require('fs');

try {
  // Create the folder
  try {
    fs.mkdirSync('folder');
    console.log("Folder created successfully");
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.log("Folder already exists");
    } else {
      throw err; // Throw error if it's not 'EEXIST'
    }
  }

  // Create a new file
  fs.writeFileSync('folder/new.txt', 'Node creating file within the folder');
  console.log("File created successfully");

  // Append data to the file
  fs.appendFileSync('folder/new.txt', '\nappending some data');
  console.log("Data appended to the file successfully");

  // Read data from file
  const data = fs.readFileSync('folder/new.txt', 'utf8');
  console.log("Data read from file:", data);

  // Copy data from one file to another
  const sourceData = fs.readFileSync('folder/new.txt', 'utf8');
  fs.writeFileSync('folder/blah.txt', sourceData);
  console.log("Data copied to another file successfully.");

  // Rename the file
  fs.renameSync('folder/new.txt', 'folder/renamed.txt');
  console.log("File renamed successfully.");

  // Delete the file
  fs.unlinkSync('folder/blah.txt');
  console.log("File deleted successfully.");

  // Delete the folder
  fs.rmdirSync('folder');
  console.log("Folder deleted successfully.");

} catch (err) {
  console.error("Error occurred:", err);
}

```
## Importing and Exporting module

```javascript
// The file which will be exported

const add(a,b){
return a + b
}

const sub(a,b){
return a - b
}

module.exports = {add, sub}
```

```javascript
// The file which will be importing that module
const {add,sub} = require('./file_name');

console.log(add(5,5));
console.log(sub(10,5));
```
<br>

```javascript

//console.log(__dirname);: This will print out the absolute path of the directory where the //current JavaScript file resides.

//console.log(__filename);: This will print out the absolute path of the current JavaScript //file itself.
console.log(__filename);
console.log(__dirname);
```

## Customizing the views directory for template engines(hbs,ejs,pug)

```javascript
const templatePath = path.join(__dirname, "../templates");

app.set("views", templatePath);
```
