/************/
/* A script for solving certain problems as defined in README.md

/************/


/* 1 
L’utente inserisce due parole in successione, con due prompt. Il software stampa la parola più lunga. Utilizza una funzione per determinare e ritornare la parola più lunga. */

function longest_word_among_two(word_1, word_2) {
    // A function accepting two strings, and returning the longest or 0 if they are equally long; provided that empty spaces on both side of both strings are ignored. Return -1 if either parameter is not a string.
    if (typeof(word_1) != 'string' || typeof(word_2) != 'string' ) {return -1}   // validation

    if (word_1.trim().length > word_2.trim().length) {
        return word_1.trim()
    } else if (word_1.trim().length == word_2.trim().length) {
        return 0
    } else {
        return word_2.trim()
    }
}

function problem1() {
    var word_1 = prompt('Enter first word')
    var word_2 = prompt('Enter second word')

    console.log(longest_word_among_two(word_1, word_2))
}


/* 2 
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
var number = prompt('Enter a number:') */

function ifOdd_plus1(number) {
    // A function accepting a number, and returning the same number if even, otherwise odd.
    if (number % 2) {
        return number
    } else {
        return ++number
    }
}

function problem2() {
    var number = prompt('Enter first word')
    console.log(ifOdd_plus1(number))
}


/* 3 
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’) e una lista di cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’), Gatsby vuole generare una falsa lista di 5 invitati. */

var names = ['Michele', 'Fabio', 'Roberto']
var surnames = ['Forghieri', 'Papagni', 'Marazzini']


function randomNames(names, surnames) {
    // a function accepting two arrays of names and surnames, and returning an array of five strings, each combining randomly one name and one surname
    var invited = []
    
    for (i = 5; i < 6; i++) {
        invited.push(names[Math.floor(Math.random(names.length))] + ' ' + surnames[Math.floor(Math.random(surnames.length))])
    }

    return invited
}


/* 4
Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3) e fai la somma di tutti gli elementi che sono in posizione dispari. Prova prima senza funzione e poi con funzione. */



function sumIndexOdd_inArray(array) {
    var sum = 0
    for (i = 1; i < array.length; i += 2) {
        sum += array[i]
    }

    return sum
}


function problem4() {
    var array = [1, 4, 2, 15, 120, 17, 3]
    console.table(array)
    console.log(sumIndexOdd_inArray(array))
}


/****************/
/* MAIN SCRIPT */
/****************/

var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')
var button3 = document.getElementById('button3')
var button4 = document.getElementById('button4')


// EVENTS
button1.addEventListener('click', problem1())
button2.addEventListener('click', problem2())
button3.addEventListener('click', problem3())
button4.addEventListener('click', problem4())