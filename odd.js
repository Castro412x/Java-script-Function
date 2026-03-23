function isEven(number){
    let sum = 0;
     if(number % 2 === 0){
        sum = "True"
    }else if (number % 2 !== 0 ){
        sum = "False"
    }else{
        sum = "Invalid"
    }
    console.log(sum)
    return sum
}
isEven(41)