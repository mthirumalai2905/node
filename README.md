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
encodeURI
encodeURIComponent
escape
eval
events
fetch
fs
global
globalThis
http
http2
https
inspector
isFinite
isNaN
module
net
os
parseFloat
parseInt
path
perf_hooks
performance
process
punycode
querystring
queueMicrotask
readline
repl
require
setImmediate
setInterval
setTimeout
stream
string_decoder
structuredClone
sys
timers
tls
trace_events
tty
undefined
unescape
url
util
v8
vm
wasi
worker_threads
zlib

__proto__
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toString
valueOf

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
{
  appendFile: [Function: appendFile],
  appendFileSync: [Function: appendFileSync],
  access: [Function: access],
  accessSync: [Function: accessSync],
  chown: [Function: chown],
  chownSync: [Function: chownSync],
  chmod: [Function: chmod],
  chmodSync: [Function: chmodSync],
  close: [Function: close],
  closeSync: [Function: closeSync],
  copyFile: [Function: copyFile],
  copyFileSync: [Function: copyFileSync],
  cp: [Function: cp],
  cpSync: [Function: cpSync],
  createReadStream: [Function: createReadStream],
  createWriteStream: [Function: createWriteStream],
  exists: [Function: exists],
  existsSync: [Function: existsSync],
  fchown: [Function: fchown],
  fchownSync: [Function: fchownSync],
  fchmod: [Function: fchmod],
  fchmodSync: [Function: fchmodSync],
  fdatasync: [Function: fdatasync],
  fdatasyncSync: [Function: fdatasyncSync],
  fstat: [Function: fstat],
  fstatSync: [Function: fstatSync],
  fsync: [Function: fsync],
  fsyncSync: [Function: fsyncSync],
  ftruncate: [Function: ftruncate],
  ftruncateSync: [Function: ftruncateSync],
  futimes: [Function: futimes],
  futimesSync: [Function: futimesSync],
  lchown: [Function: lchown],
  lchownSync: [Function: lchownSync],
  lchmod: undefined,
  lchmodSync: undefined,
  link: [Function: link],
  linkSync: [Function: linkSync],
  lstat: [Function: lstat],
  lstatSync: [Function: lstatSync],
  lutimes: [Function: lutimes],
  lutimesSync: [Function: lutimesSync],
  mkdir: [Function: mkdir],
  mkdirSync: [Function: mkdirSync],
  mkdtemp: [Function: mkdtemp],
  mkdtempSync: [Function: mkdtempSync],
  open: [Function: open],
  openSync: [Function: openSync],
  openAsBlob: [Function: openAsBlob],
  readdir: [Function: readdir],
  readdirSync: [Function: readdirSync],
  read: [Function: read],
  readSync: [Function: readSync],
  readv: [Function: readv],
  readvSync: [Function: readvSync],
  readFile: [Function: readFile],
  readFileSync: [Function: readFileSync],
  readlink: [Function: readlink],
  readlinkSync: [Function: readlinkSync],
  realpath: [Function: realpath] { native: [Function (anonymous)] },
  realpathSync: [Function: realpathSync] { native: [Function (anonymous)] },
  rename: [Function: rename],
  renameSync: [Function: renameSync],
  rm: [Function: rm],
  rmSync: [Function: rmSync],
  rmdir: [Function: rmdir],
  rmdirSync: [Function: rmdirSync],
  stat: [Function: stat],
  statfs: [Function: statfs],
  statSync: [Function: statSync],
  statfsSync: [Function: statfsSync],
  symlink: [Function: symlink],
  symlinkSync: [Function: symlinkSync],
  truncate: [Function: truncate],
  truncateSync: [Function: truncateSync],
  unwatchFile: [Function: unwatchFile],
  unlink: [Function: unlink],
  unlinkSync: [Function: unlinkSync],
  utimes: [Function: utimes],
  utimesSync: [Function: utimesSync],
  watch: [Function: watch],
  watchFile: [Function: watchFile],
  writeFile: [Function: writeFile],
  writeFileSync: [Function: writeFileSync],
  write: [Function: write],
  writeSync: [Function: writeSync],
  writev: [Function: writev],
  writevSync: [Function: writevSync],
  Dirent: [class Dirent],
  Stats: [Function: Stats],
  ReadStream: [Getter/Setter],
  WriteStream: [Getter/Setter],
  FileReadStream: [Getter/Setter],
  FileWriteStream: [Getter/Setter],
  _toUnixTimestamp: [Function: toUnixTimestamp],
  Dir: [class Dir],
  opendir: [Function: opendir],
  opendirSync: [Function: opendirSync],
  F_OK: 0,
  R_OK: 4,
  W_OK: 2,
  X_OK: 1,
  constants: [Object: null prototype] {
    UV_FS_SYMLINK_DIR: 1,
    UV_FS_SYMLINK_JUNCTION: 2,
    O_RDONLY: 0,
    O_WRONLY: 1,
    O_RDWR: 2,
    UV_DIRENT_UNKNOWN: 0,
    UV_DIRENT_FILE: 1,
    UV_DIRENT_DIR: 2,
    UV_DIRENT_LINK: 3,
    UV_DIRENT_FIFO: 4,
    UV_DIRENT_SOCKET: 5,
    UV_DIRENT_CHAR: 6,
    UV_DIRENT_BLOCK: 7,
    EXTENSIONLESS_FORMAT_JAVASCRIPT: 0,
    EXTENSIONLESS_FORMAT_WASM: 1,
    S_IFMT: 61440,
    S_IFREG: 32768,
    S_IFDIR: 16384,
    S_IFCHR: 8192,
    S_IFIFO: 4096,
    S_IFLNK: 40960,
    O_CREAT: 256,
    O_EXCL: 1024,
    UV_FS_O_FILEMAP: 536870912,
    O_TRUNC: 512,
    O_APPEND: 8,
    S_IRUSR: 256,
    S_IWUSR: 128,
    F_OK: 0,
    R_OK: 4,
    W_OK: 2,
    X_OK: 1,
    UV_FS_COPYFILE_EXCL: 1,
    COPYFILE_EXCL: 1,
    UV_FS_COPYFILE_FICLONE: 2,
    COPYFILE_FICLONE: 2,
    UV_FS_COPYFILE_FICLONE_FORCE: 4,
    COPYFILE_FICLONE_FORCE: 4
  },
  promises: [Getter]
}
>
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

//Buffer - is an additional data type available in node to store binary datas
```
