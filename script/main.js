

/* 4
Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3) e fai la somma di tutti gli elementi che sono in posizione dispari. Prova prima senza funzione e poi con funzione. */

var array = [1, 4, 2, 15, 120, 17, 3]

function sumIndexOdd_inArray(array) {
    var sum = 0
    for (i = 1; i < array.length; i += 2) {
        sum += array[i]
    }

    return sum
}

console.log(sumIndexOdd_inArray(array))