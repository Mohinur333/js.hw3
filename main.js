//first task

let banana = +prompt('Введите кол-во бананов' )
for(let i = 0; i < 1; i++){
console.log('1 banana');
}

let bananas = +prompt('Ведите кол-во бананов')
for(let i = 2; i <= 5; i++){
    console.log(i + '  bananas');
}

//second task
let cicle = +prompt('Сколько раз сработает цикл')
let num = 0

for(let i = 1; i <= cicle; i++ ){
if(i%2 == 0){
    num++
}
}
console.log(num + ' количество четных чисел ');

//third task
let number = +prompt('Введите число')
let degree = +prompt('Введите степень')
let answer = 1

for(let i = 1; i <= number; i++){
    answer = number *= degree
}
alert(answer)
