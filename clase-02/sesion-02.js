// Supongamos que quieres comprar un juego, pero tienes que ser mayor de edad

// let edad = Number(prompt("¿Cuantos años tienes?"));
// const EDAD_MINIMA = 18;

// if (edad >= EDAD_MINIMA) {
//   console.log("genial, puedes comprar el juego!", edad);
// } else if (isNaN(edad)) {
//   console.log("la edad ingresada no es un número");
// } else {
//   console.log("oh no, aún no puedes comprar el juego", edad);
// }

// let comida = prompt("Ingresa la comida a comprar y te diré el precio");

// switch (comida) {
//   case "🍎":
//     console.log("🍎 está 1 sol");
//     break;

//   case "🍉":
//     console.log("🍉 está 1 sol");
//     break;

//   case "🍍":
//     console.log("🍍 está 1 sol");
//     break;

//   case "🥥":
//     console.log("🥥 está 1 sol");
//     break;

//   case "🍒":
//     console.log("🍒 está 1 sol");
//     break;

//   case "🍏":
//     console.log("🍏 está 1 sol");
//     break;

//   case "🍇":
//     console.log("🍇 está 1 sol");
//     break;

//   case "🍓":
//     console.log("🍓 está 0.5 sol");
//     break;

//   case "🍑":
//     console.log("🍑 está 1 sol");
//     break;

//   case "🍋":
//     console.log("🍋 está 0.2 sol");
//     break;

//   default:
//     console.log("no se encontró precios o ingresaste mal el dato!");
//     break;
// }

let frase =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus non asperiores odio laudantium at atque esse iusto officia voluptas ut impedit, delectus eligendi ipsum error ea repellat vero autem distinctio!";

// arreglo de palabras -> let palabras = ["...", ..., "..."];
let palabras = frase.split(" ");

console.log("--- for clásico (arreglos) ---");
for (let index = 0; index < palabras.length; index++) {
  const palabra = palabras[index];
  console.log(`${index + 1}. ${palabra}`);
}

console.log("--- for each (arreglos) ---");
palabras.forEach((palabra, index) => {
  console.log(`${index + 1}. ${palabra}`);
});

let persona = {
  nombre: "Juan",
  apellidos: "Perez Gonzales",
  edad: 21,
};

console.log("--- for in (objetos) ---");

// es para iterar objetos
for (const key in persona) {
  if (Object.hasOwnProperty.call(persona, key)) {
    const element = persona[key];
    console.log(element);
  }
}

console.log("--- for of (arreglos) ---");

// es para iterar arreglos de manera menos verbosa
for (const iterator of palabras) {
  console.log(iterator);
}

function saludar({ nombre, edad, ocupacion }) {
  console.log(
    `Hola, mi nombre es ${nombre}, tengo ${edad} años, y soy ${ocupacion}`
  );
}

let personas2 = [
  {
    nombre: "Juan",
    edad: 25,
    ocupacion: "programador",
  },
  {
    nombre: "Pedro",
    edad: 28,
    ocupacion: "arquitecto",
  },
  {
    nombre: "Pepe",
    edad: 25,
    ocupacion: "ingeniero",
  },
  {
    nombre: "Carlos",
    edad: 32,
    ocupacion: "administrador",
  },
];

personas2.forEach(({ edad, nombre, ocupacion }) => {
  saludar({ edad, nombre, ocupacion });
});
