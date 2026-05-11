// Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:

// se v e’ minore di 18,  stampare in console  “insufficiente”


// METODO 1: IF/ELSE

let v = 17;

if (v < 18) {
    console.log("insufficiente");
}

// se v e’ maggiore uguale a 18 e minore di 21,  stampare in console “sufficiente”
if (v >= 18 && v < 21) {
    console.log("sufficiente");
}

// METODO 2: SWITCH

switch (v) {
    case 18:
    case 19:
    case 20:
        console.log("sufficiente");
        break;
}

// se v e’ maggiore uguale a 21 e minore di 24,  stampare in console “buono”

// METODO:1 IF/ELSE

if (v >= 21 && v < 24) {
    console.log("buono");
}

// METODO: 2 SWITCH

switch (v) {
    case 21:
    case 22:
    case 23:
        console.log("buono");
        break;
}

// se v e’ maggiore uguale a 24 e minore di 27,  stampare in console “distinto”

// METODO: 1 IF/ELSE

if (v >= 24 && v < 27) {
    console.log("distinto");
}

// METODO: 2 SWITCH

switch (v) {
    case 24:
    case 25:
    case 26:
        console.log("distinto");
        break;
}

// se v e’ maggiore uguale a 27 e minore di 30,  stampare in console “ottimo”

// METODO:1 IF/ELSE

if (v >= 27 && v < 30) {
    console.log("ottimo");
}

// METODO: 2 SWITCH

switch (v) {
    case 27:
    case 28:
    case 29:
        console.log("ottimo");
        break;
}

// se v e’ uguale a 30, stampare in console “eccellente”

// METODO: 1 IF/ELSE

if (v == 30) {
    console.log("eccellente");
}

// METODO: 2 SWITCH

switch (v) {
    case 30:
        console.log("eccellente");
        break;
}


// E' STATO UTILIZZATO PER PER OGNI CONSEGNA, SIA L'IF/ELSE CHE LO SWITCH.