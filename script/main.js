/************/
/* A script for solving certain problems as defined in README.md
/************/

console.log('main.js is working')

/****************/
/*   FUNCTIONS  */
/****************/

/* 1 
L’utente inserisce due parole in successione, con due prompt. Il software stampa la parola più lunga. Utilizza una funzione per determinare e ritornare la parola più lunga. */

function longest_word_among_two(word_1, word_2) {
    // A function accepting two strings, and returning the longest or 0 if they are equally long; provided that empty spaces on both side of both strings are ignored. Return -1 if either parameter is not a string or is empty.
    if (typeof(word_1) != 'string' || typeof(word_2) != 'string' || !word_1 || !word_2) {return -1}   // validation

    if (word_1.trim().length > word_2.trim().length) {
        return word_1.trim()
    } else if (word_1.trim().length == word_2.trim().length) {
        return 0
    } else {
        return word_2.trim()
    }
}

function problem1() {
    console.log('button1 pressed')

    var word_1 = prompt('Enter first word')
    var word_2 = prompt('Enter second word')

    console.log(longest_word_among_two(word_1, word_2))
    message_to_user(word_1 + '<br>' + word_2, 'input-text') 
    message_to_user(longest_word_among_two(word_1, word_2), 'output-text') 
}


/* 2 
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
var number = prompt('Enter a number:') */

function ifOdd_plus1(number) {
    // A function accepting a number, and returning the same number if even, otherwise odd.
    if (number % 2) {
        return ++number
    } else {
        return number
    }
}

function problem2() {
    var number = prompt('Enter number')
    console.log(ifOdd_plus1(number))
    message_to_user(number, 'input-text') 
    message_to_user(ifOdd_plus1(number), 'output-text') 
}


/* 3 
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi (‘Michele’, ‘Fabio’, ‘Roberto’) e una lista di cognomi (‘Forghieri’, ‘Papagni’, ‘Marazzini’), Gatsby vuole generare una falsa lista di 5 invitati. */

function randomNames(names, surnames) {
    // A function accepting a array of names and a array of surnames and returning an array of 5 string combining randomly one name and one surname
    var invited_people = []
    var name 
    var surname 

    for (i = 0; i < 6; i++) {
        name = names[Math.floor(Math.random() * (names.length))]
        surname = surnames[Math.floor(Math.random() * (surnames.length))]
        invited_people.push(name + ' ' + surname)
    }

    return invited_people
}

function problem3() {
    var names = ['Michele', 'Fabio', 'Roberto']
    var surnames = ['Forghieri', 'Papagni', 'Marazzini']

    message_to_user(names + '<br>' + surnames, 'input-text') 
    console.log(randomNames(names, surnames))
    message_to_user(randomNames(names, surnames), 'output-text') 
}


/* 4
Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3) e fai la somma di tutti gli elementi che sono in posizione dispari. Prova prima senza funzione e poi con funzione. */
function sumIndexOdd_inArray(array) {
    // A function accepting an array, and returning the sum of all elements of odd index position. 
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
    message_to_user(array, 'input-text') 
    message_to_user(sumIndexOdd_inArray(array), 'output-text') 
}


// UTILITIES FUNCTIONS
function message_to_user(content, idElement) {
    //A function accepting a var and HTML element ID, and adding such var as content of said HTML element
    document.getElementById(idElement).innerHTML = content
}



/****************/
/* MAIN SCRIPT */
/****************/

var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')
var button3 = document.getElementById('button3')
var button4 = document.getElementById('button4')


// EVENTS
button1.addEventListener('click', problem1)
button2.addEventListener('click', problem2)
button3.addEventListener('click', problem3)
button4.addEventListener('click', problem4)




