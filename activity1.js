'use strict';

let defaultJSON;
var userName;

// This function starts up Eliza and calls the obtain name function
function startUp(){
    let tempDef = fs.readFileSync('default.json');
    defaultJSON = JSON.parse(tempDef);

    console.log("Hello my name is Eliza!");
    obtainName();
}

// Obtain the User Name and call the first question function
function obtainName(){
    rl.question('What is your name? ', (user) => {

        userName = user;
        console.log(`Hello  ${user}`);
        rl.pause();
        startQuestion();


    });


}

// This function is used to ask the user a beginning question from a set
function startQuestion() {

    rl.resume();
    //console.log(defaultJSON.entries[5].question[randomInt(defaultJSON.entries[5].question.length)]);
    rl.question(defaultJSON.entries[5].question[randomInt(defaultJSON.entries[5].question.length)], (answer) => {



        console.log(`First Question Response  ${answer}`);
        rl.pause();
        if(answer != 'quit')

            recurringQuestion();
        else
            quit();

    });


}

// This function checks the file directory for additional JSON files to load
function addtlJson(){
    //TODO: Implement code to check file directory for additional JSON files to load
}

//This function ask the user recurring questions and calls itself back
function recurringQuestion(){
    rl.resume();

    let catNum = randomInt(defaultJSON.entries.length);

    rl.question(defaultJSON.entries[catNum].question[randomInt(defaultJSON.entries[catNum].question.length)], (answer) => {



        //console.log(`Hello  ${answer}`);
        rl.pause();
        if(answer != 'quit')
            recurringQuestion();
        else
            quit();

    });
}

//This function exits the Eliza program and says goodbye to the user
function quit(){
    console.log("Goodbye " + userName + "!");
}

// This function returns a random Int to use when selecting a random element of an array
function randomInt(max){

    var ran = Math.floor(Math.random() * (max));

    return ran;
}

//This function breaks the answer submitted by the user into individuals words and places it in an array
function parseInput(input){
    var splitinput = input.split(' ');
    return splitinput;
}


// Setting up the file stream to import the default JSON file
var fs = require('fs');


//Setting up the readline functionality to optain inputs from the user
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


startUp();









