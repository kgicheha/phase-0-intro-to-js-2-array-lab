// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"] ;


function  destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    let newcatsArray = cats.slice();
    newcatsArray.push(name);
    return newcatsArray;
}

function prependCat(name) {
    let newcatsArray = cats.slice();
    newcatsArray.unshift(name);
    return newcatsArray;
}

function removeLastCat() {
    let newcatsArray = cats.slice();
    newcatsArray.pop();
    return newcatsArray;
}

function removeFirstCat() {
    let newcatsArray = cats.slice();
    newcatsArray.shift();
    return newcatsArray;
}