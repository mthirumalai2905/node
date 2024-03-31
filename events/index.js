const EventEmitter = require("events");

const event = new EventEmitter();

// event.on("sayMyName", () => {
//     console.log("Your name is thiru");
// })
// event.on("sayMyName", () => {
//     console.log("Your name is malai");
// })
// event.on("sayMyName", () => {
//     console.log("Your name is nambi");
// })

event.on('checkPage', (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
})

event.emit('checkPage', 200, 'ok');