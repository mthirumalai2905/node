const fs = require('fs');

const pirates = {
    name: "luffy",
    right: "zoro",
    left: "sanji"
}

//objects to JSON
const jsonData = JSON.stringify(pirates);
console.log(jsonData);

//JSON to objects
const objData = JSON.parse(jsonData);
console.log(objData.name);

//difference between JSON and objects
// you cant access property via jsons u have to convert it into objects

fs.writeFileSync('datas.txt', jsonData);

const data = fs.readFileSync('datas.txt', 'utf-8');
console.log(data);