'use strict';

let defaultJSON;

// This function starts up Eliza
function startUp(){
    let tempDef = fs.readFileSync('default.json');
    defaultJSON = JSON.parse(tempDef);

    console.log("Hello my name is Eliza!");
    obtainName();
}

// Obtain the User Name
function obtainName(){
    rl.question('What is your name? ', (user) => {

        console.log(`Hello  ${user}`)
        rl.close();

    });

    startQuestion();
}


// This function returns a random Int to use when selecting a random element of an array
function randomInt(max){

    var ran = Math.floor(Math.random() * (max));

    return ran;
}


var fs = require('fs');
const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


startUp();








function startQuestion() {

    console.log(defaultJSON.entries[5].question[randomInt(defaultJSON.entries[5].question.length)]);

}
