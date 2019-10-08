//Arrays 

let animales = ["Salchicha", "Pez", "Jirafa", "Araña", "Leopardo", "Oso", "Tigre"];

let colores = ["rojo", "Azul" , "Rosa", "Verde"];

let objetosRandom = ["Pelota" , 24 , true]

console.log(animales);

console.log(animales[5] , animales[3] , colores[0]);

animales[7] = "Cocodrilo"

console.log(animales);

animales.push("PinwuinitoOohH!!!");

animales.pop();

//primer parametro dice la posicion del elemento a borrar y el segundo cuantos elementos se van a borrar a partir de ese
animales.splice(2 , 3);

//Challenge 

//arreglo bandas favoritas (5)
//arreglo actividades favoritas (7)
//arreglo libre (10)

//mostrar en consola el primer, cuarto y noveno elemento de cada arreglo respectivamente

//borrar el ultimo elemento de sus actividades favoritas

//agregar una banda extra

//eliminar el segundo y tercer elemento de su arreglo libre

let bandas = ["Banda el recodo", "la trakalosa xd", "no se", "muse", "Belinda"];

let actividades = ["correr", "caminar", "nadar", "dormir", "dormir mas", "jugar", "lo que sea"];

let libre = [ 1, 2, 3, 4, 5, 6 , 7, 8, 9 , 10 ];

console.log(bandas[0], actividades[3], libre[8]);

actividades.pop();

console.log(actividades);

bandas.push("Yo mero ps quien mas");

console.log(bandas);

libre.splice(1 , 2);

console.log(libre);


//Objeto 

let persona = {
    nombre: "Osvaldo",
    edad: 20,
    telefono: "55 1234 5678",
    nacionalidad: "mexicana",
    direccion: {
        calle: "Cipres", 
        numero: "280",
        colonia: "Atlampa",
        cp: "30983"
    },
    frameworks: {
        css: ["bootstrap", "foundation", "bulma"],
        js: ["react", "vue", "angular"]
    }
}

console.log(persona);

console.log(persona.nacionalidad);
console.log(persona.direccion.cp);
console.log(persona.frameworks.js[0]);



