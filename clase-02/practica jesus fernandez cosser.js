
let number = [
  5,
  4,
  3,
  2,
];



function sumarArray(number){
  let suma=0
  for (let i = 0; i < number.length; i++) {
    const numeros = number[i]; 
    console.log(`${i + 1}. ${numeros}`);
    suma=suma+number[i]
  }
    return suma;
    
}


    console.log("Los numeros son: ");
    resultado=sumarArray(number)
    console.log("El resultado de la suma es: ");
    console.log(resultado);


    let personas3 = [
      {
        nombre: "manuel",
        edad: 25,
        profesion: "programador",
      },
      {
        nombre: "carlos",
        edad: 28,
        profesion: "arquitecto",
      },
      {
        nombre: "maria",
        edad: 25,
        profesion: "ingeniero",
      },
      {
        nombre: "tito",
        edad: 32,
        profesion: "administrador",
      },
    ];

function mostrarInformacion({ nombre, edad, profesion }) {
      console.log(
        `mi nombre es ${nombre}, mi edad ${edad} años, y soy ${profesion}`
      );
    }

personas3.forEach(({ edad, nombre, profesion }) => {
  mostrarInformacion({ edad, nombre, profesion });
});



let libros = [
  { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", año: 1954 },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
  { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", año: 1997 },
  { titulo: "1984", autor: "George Orwell", año: 1949 },
  { titulo: "Orgullo y prejuicio", autor: "Jane Austen", año: 1813 }
];

// Función para mostrar libros por autor
function mostrarLibrosPorAutor(listaLibros, autor) {
  const librosDelAutor = [];
  for (let i = 0; i < listaLibros.length; i++) {
      if (listaLibros[i].autor === autor) {
          librosDelAutor.push(listaLibros[i].titulo);
      }
  }
  return librosDelAutor;
}


let librosDeTolkien = mostrarLibrosPorAutor(libros, "J.R.R. Tolkien");
console.log("Libros de J.R.R. Tolkien:", librosDeTolkien);