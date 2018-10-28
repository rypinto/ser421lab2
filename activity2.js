var tempArray = ['Jeff Piziak', 'I like Piper', 'Yes'];

function parseInput(input){
    var splitinput = input.split(' ');
    return splitinput;
}

var myInfo = {
    fullName: parseInput(tempArray[0]),
    skype: parseInput(tempArray[1]),
    answer: parseInput(tempArray[2])
};


var test = parseInput('Jeff Piziak');
console.log(test);

//console.log(myInfo.fullName);
//console.log(myInfo.skype);
//console.log(myInfo.answer);
