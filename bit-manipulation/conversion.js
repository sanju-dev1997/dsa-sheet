let decimal = 13;
let binary = "1101";

function convertToBinary(num) {
  let result = "";
  while (num !== 1) {
    result += num % 2;
    num = Math.floor(num / 2);
  }
  result += 1;
  return result.split("").reverse().join("");
}

function convertToDecimal(str) {
  let dec = 0;
  let pow = 1;
  for (let i = str.length - 1; i >= 0; i--) {
    dec += pow * str[i];
    pow = pow * 2;
  }
  return dec;
}

console.log(convertToBinary(decimal));
console.log(convertToDecimal("1101"));
