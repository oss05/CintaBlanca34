// JS
// function saludo(){
//     console.log("Hola, Osvaldo!");
// }

// saludo();
// saludo();
// saludo();
// saludo();
// saludo();

//ECMA
//arrow functions

// let saludo = (persona = "invitado") => {
//     console.log("Hola " + persona + "!");
// }

// saludo("Luis");
// saludo("Ricardo");
// saludo("Yael");
// saludo();

// let suma = (x = 0, y = 0) => {
//     console.log(x + y);
// }

// suma(3, 5);
// suma("hola", 8);
// suma();


// let a = prompt("Ingresa tu primer numero");

// let b = prompt("Ingresa tu segundo numero");

// const multiplicacion = (a, b) => {

//     console.log(a * b);

// }

// multiplicacion(a, b);


//funcion que saque el area de un triangulo y otra que saque el perimetro de un cuadrilatero

const area = () => {
    let base = prompt("Ingresa la base");

    let altura = prompt("Ingresa la altura");

    let area = base * altura / 2;

    console.log(
        `La base de tu triangulo es: ${base} La altura de tu triangulo es: ${altura} y el area es: ${area}`
    );
}

// area();

const perimetro = () => {
    let l1 = Number(prompt("Ingresa el valor del primer lado"));

    let l2 = Number(prompt("Ingresa el valor del segundo lado"));

    let l3 = Number(prompt("Ingresa el valor del tercer lado"));

    let l4 = Number(prompt("Ingresa el valor del cuarto lado"));

    let perimetro = l1 + l2 + l3 + l4;

    console.log("el valor de l1 es: " + typeof (l1));

    console.log(`El valor del primer lado es: ${l1} El valor del segundo lado es: ${l2} El valor del tercer lado es: ${l3} El valor del cuarto lado es: ${l4} y el perimetro del cuadrilatero es: ${perimetro} unidades`);
}

// perimetro();


// ejecutar un ciclo que me pinte numeros del 1 al 100 de 1 en 1
// 1
// 2
// 3 Fizz
// 4
// 5 Buzz
// 6
// .
// . 
// . 
// 15 FizzBuzz

const fizzbuzz = () => {
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log(`${i} FizzBuzz`);
        }else if(i % 3 === 0 ){
            console.log(`${i} Fizz`);
        }
        else if(i % 5 === 0 ){
            console.log(`${i} Buzz`);
        }else{
            console.log(i);
        }
    }
}

fizzbuzz();






