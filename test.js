
// 1 - 1
// 2 - 10
// 3 - 11
// 4 - 100
// 5 - 101
// 6 - 110
// 7 - 111
// 8 - 1000
// 9 1001

const decimalToBinary = (decimal) => {
    const symbols = [];
    let int = decimal;

    do { 
        int = divide(int, symbols);
    } while (int != 0); 
        
    return symbols.filter(item => item == 1).length;
}     


const divide = (number, symbols) => {
    symbols.push(number % 2);
    return Math.floor(number / 2);
}

console.log(decimalToBinary(9));
