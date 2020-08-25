// Code your solutions in this file
let array = []

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return array;
}


function countDown(num) {
for (let i = 0; i <= num; num--) {
    console.log(num)
    }
}
