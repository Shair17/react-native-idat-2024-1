// manipulación de listas
let frutas = ["🍎", "🍊", "🍓", "🍉", "🍇"];
let comidaChatarra = ["🍕", "🍟", "🌭", "🍿"];
let comidaChatarra2 = ["🍕", "🍟", "🌭", "🍿"];

console.log("--- arreglo original frutas ---");
console.log(frutas);

console.log("--- concat ---");
let fusionFrutasComidaChatarra = frutas.concat(comidaChatarra);
console.log(fusionFrutasComidaChatarra);

// comentado para usar los demás métodos
// console.log("--- copyWithin ---");
// let copyWithin = frutas.copyWithin(0, 2, 4);
// console.log(copyWithin);

console.log("--- entries ---");
// sirve para búcles
let entries = frutas.entries();

for (const iterator of entries) {
  console.log(iterator);
}

console.log("--- every ---");
let every = frutas.every((fruta) => typeof fruta === "string");
console.log(every);

// comentado para usar los demás métodos
// console.log("--- fill ---");
// let fill = frutas.fill("🍏", 1, 2);
// console.log(fill);

console.log("--- filter ---");
let filter = frutas.filter((fruta) => fruta !== "🍎" && fruta !== "🍉");
console.log(filter);

console.log("--- find ---");
let find = frutas.find((fruta) => fruta === "🍎");
console.log(find);

console.log("--- findIndex ---");
let findIndex = frutas.findIndex((fruta) => fruta === "🍎");
console.log(findIndex);

console.log("--- flat ---");
let arr1 = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10]];
let flat = arr1.flat();
console.log(flat);

console.log("--- flatMap ---");
let arr2 = ["hola", "amigo"];
let flatMap = arr2.flatMap((elemento) => elemento.split(""));
console.log(flatMap);

console.log("--- forEach ---");
frutas.forEach((fruta) => console.log(fruta));

console.log("--- includes ---");
let includes = frutas.includes("🍎");
console.log("incluye 🍎:", includes);

console.log("--- indexOf ---");
let indexOf = frutas.indexOf("🍎", 0);
console.log(indexOf);

console.log("--- join ---");
let join = frutas.join("x");
console.log(join);

console.log("--- keys ---");
let keys = frutas.keys();

for (const iterator of keys) {
  console.log(iterator);
}

console.log("--- lastIndexOf ---");
let lastIndexOf = frutas.lastIndexOf("🍎", 0);
console.log(lastIndexOf);

console.log("--- length ---");
console.log(frutas.length);

console.log("--- map ---");
let map = frutas.map((fruta) => fruta + fruta);
console.log(map);

console.log("--- push ---");
let push = frutas.push("🍋");
console.log(push);

console.log("--- pop ---");
let pop = frutas.pop();
console.log(pop);

console.log("--- reduce ---");
// let reduce = frutas.reduce(
//   (valorAnterior, valorActual) => valorAnterior + valorActual
// );
let reduce = [1, 2, 3, 4, 5, 6].reduce(
  (valorAnterior, valorActual) => valorAnterior + valorActual
);
console.log(reduce);

console.log("--- reduceRight ---");
let reduceRight = frutas.reduceRight(
  (valorAnterior, valorActual) => valorAnterior + valorActual
);
console.log(reduceRight);

// comentado para usar los demás métodos
// console.log("--- reverse ---");
// let reverse = frutas.reverse();
// console.log(reverse);

// comentado para usar los demás métodos
// console.log("--- shift ---");
// let shift = frutas.shift();
// console.log(shift);

console.log("--- slice ---");
let slice = frutas.slice(1, 3);
console.log(slice);

console.log("--- some ---");
let some = frutas.some((fruta) => fruta === "🍎");
console.log(some);

// comentado para usar otros métodos
// console.log("--- sort ---");
// let sort = frutas.sort();
// console.log(sort);

let numeros = [10, 2, 4, 5, 18, 20, 200];
let sort2 = numeros.sort((a, b) => a - b);
console.log(sort2);

// comentado para usar otros métodos
// console.log("--- splice ---");
// let splice = frutas.splice(0, 2);
// console.log(splice);

console.log("--- toLocaleString ---");
let toLocaleString = frutas.toLocaleString();
console.log(toLocaleString);

console.log("--- toString ---");
let toString = frutas.toString();
console.log(toString);

// comentado para usar otros métodos
// console.log("--- unshift ---");
// frutas.unshift("🍟", "🍕", "🍿", "🌭");
// console.log(frutas);

console.log("--- values ---");
let values = frutas.values();

for (const iterator of values) {
  console.log(iterator);
}

// scope
let nombre = "Juan";

{
  let nombre = "Pedro";
}

console.log(nombre);

// callback
function saludar(cb) {
  if (typeof cb === "function") {
    cb();
  }
}

// la forma clásica de mandar un callback
saludar(function () {
  console.log("estoy saludando desde un callback *classic function*");
});

// la forma moderna de mandar un callback
saludar(() => {
  console.log("estoy saludando desde un callback *arrow function*");
});
