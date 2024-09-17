// 1.calculateDifference

function calculateDifference(a,b){
    return a-b;
}



// 2.isOdd

function isOdd(num){
    return num % 2 !==0;
}



// 3.findMin

function findMin(arr) {
    return Math.min(...arr);
}



// 4.filterEvenNumbers

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}



// 5.sortArrayDescending

function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}



// 6.lowercaseFirstLetter

function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;  // Check if the string is empty
    return str.charAt(0).toLowerCase() + str.slice(1);
}



// 7.countvowels

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return str.split('').filter(char => vowels.includes(char)).length;
}



// 8.findAverage

function findAverage(arr) {
    return arr.length === 0 ? 0 : arr.reduce((acc, num) => acc + num) / arr.length;
}

