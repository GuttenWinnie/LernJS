let i = 1;
let summ = 0;
let summ2 = 0;

while (i<1000){i++;
    if ((i%3 == 0) || (i%5 == 0)){
        summ+=i
    }
    if ((i<10) && ((i%3 == 0) || (i%5 == 0))){
        console.log('Число:', i)
        summ2+=i
    }
}
    console.log('Сумма всех чисел:',summ)
    console.log('Сумма элементов натуральных чисел до 10:', summ2)