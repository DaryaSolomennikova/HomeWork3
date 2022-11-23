// Home work 3: 
 
// NORMAL 

// Task 1. 

let anyNumber;
anyNumber = Number(prompt('Введите любое число'));

function getSum(x){
let sum = (x*(x+1)/2);
return sum;
};
a = getSum(anyNumber);
console.log(a);

// Task 2. 

// Way 1.

let anyNumber;
anyNumber = Number(prompt('Введите сумму кредита')); 
let percent = 17; //процентная ставка
let years = 5; // кол-во лет
function over (n, p, y){
let overPay = (n*p*y)/100;
return overPay;
}
console.log(over(anyNumber,percent,years));

// Way 2.

let anyNumber;
anyNumber = Number(prompt('Введите сумму кредита')); 
let percent = 17; //процентная ставка
let years = 5; // кол-во лет

function over (s, p, y) {
let r = p/100/12;
let n = y*12;
let credit = s * (r * ((1+r)**n)) / (((1+r)**n) - 1); //формула расчёта, где s- сумма долга, r- месячная процентная ставка, n- срок, на который получн займ.
let overPay = credit*n - s; 
return overPay;
}
console.log(over(anyNumber,percent,years));

// Task 3.

let anyString = prompt('Введите текст'); 

function trimString (str, from, to){
let result = str.slice(from, to);
return result;
}
console.log(trimString(anyString, 3, 10));

// Task 4.

let anyNumber;
anyNumber = prompt('Введите любое число, и узнай сумму всех чисел');
function getSumNumbers(number){
let digit = (""+number).split("").map(Number);
let sum = 0;
for(let i = 0; i < digit.length; i++){
sum = sum + digit[i];
}
return sum;
}
getSumNumbers(anyNumber);

// Task 5. 

let firstNumber = Number(prompt('Введите первое число'));
let secondNumber = Number(prompt('Введите второе число'));
let sum=0;
function getSum(a,b){
if (a<b){
sum = (a+b)*(b-a+1)/2;
return sum;
}
else if (a>b){
sum = (a+b)*(a-b+1)/2;
return c;
}
else {
return a;
}
}
getSum(firstNumber,secondNumber);

// Task 6. 

let trueOrFalse = Boolean(7>5);
  let b = function foo(){};
  let c = function boo(){};

function fooboo(a, func1, func2) {
  if(a == true){
    return alert(func1.name);
} else{
    return alert(func2.name);
  }
}
fooboo(trueOrFalse, b, c);

// ADVANCED

// Task 1.  

let firstSide = Number(prompt('Введите первое число'));
let secondSide = Number(prompt('Введите второе число'));
let thirdSide = Number(prompt('Введите третье число'));

function triangle(x,y,z){
if(x+y>z && x+z>y && y+z>x){
alert ("Треугольник существует");
}
else{
alert ("Треугольник не существует");
}
}
triangle(firstSide,secondSide,thirdSide);

// Task 2. 

let widthChoko = Number(prompt('Задайте ширину шоколадке'));
let lengthChoko = Number(prompt('Задайте длину шоколадке'));
function chokolate(n,m){
if(n>1 && m>1){
  let chokoBar=n*m-1;
  return chokoBar;
} else {
chokoBar = 0;
}
}
console.log(chokolate(widthChoko,lengthChoko));

// Task 3. 

const myBalance = Number(prompt('Сколько денег на вашем счету?'));
const phonePrice = Number(prompt('Сколько стоит телефон, который вы хотите приобрести?'));
const accessoryPrice = Number(prompt('Сколько стоят аксессуары к этому телефону?'));
const taxRate = 0.23;

function expenses(bal,phone,acc,tax){
  let result = phone+

  for( let i=0; i>0; i++ ){

  }
  }

  expenses(myBalance,phonePrice,accessoryPrice,taxRate)

