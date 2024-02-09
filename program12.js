// Write a function to count the number of vowels in a given string.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    // return str.split('').filter(char => vowels.includes(char)).length;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

const strr = countVowels('abceOBSAwus')
console.log(strr);