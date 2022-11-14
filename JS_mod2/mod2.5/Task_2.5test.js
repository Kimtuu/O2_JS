'use strict';
const target = document.querySelector('#target')

let numbers = [];
let number;
do {
  number = prompt('Gib number:')
} while (!numbers.includes(number))

numbers.sort(function(a, b){return a-b})

target.innerHTML = numbers

// ei toimi kunnolla D: kysyy vain 2 kertaa

