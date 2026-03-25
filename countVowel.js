function countVowel(letter){
    let count = 0;
    let vowels = "aeiou";
    letter = letter.toLowerCase();
    
    for(let char of letter){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVowel("Emmanuel"))