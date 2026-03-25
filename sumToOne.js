function sumToOne(n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    console.log(total)
    return total;

}
sumToOne(5)