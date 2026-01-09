//first task

let banana = +prompt('Введите кол-во бананов' )
if(banana === 1){
  console.log(' 1 банан ');
}else if(num > 1){
  console.log(num + ' бананы ');
}else{
console.log(' error ');
}

//second task
let cicle = +prompt('Сколько раз сработает цикл')
let num = 0

for(let i = 1; i <= cicle; i++ ){
if(i%2 == 0){
    num++
}
}
console.log(num + ' четных чисел ');

//third task
let number = +prompt('Введите число')
let degree = +prompt('Введите степень')
let answer = 1

for(let i = 1; i <= degree; i++){
  answer *=number
}
alert(answer)
