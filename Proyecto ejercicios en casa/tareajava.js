// Ejemplo 1: if
let edad = 20;
if (edad >= 18) {
  console.log("Eres mayor de edad");
}

// Ejemplo 2: if-else
if (edad < 18) {
  console.log("Eres menor de edad");
} else {
  console.log("Eres mayor de edad");
}

// Ejemplo 3: else if
if (edad < 13) {
  console.log("Eres un niño");
} else if (edad < 18) {
  console.log("Eres un adolescente");
} else {
  console.log("Eres un adulto");
}

// Ejemplo 4: switch
let dia = "lunes";
switch (dia) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "viernes":
    console.log("Fin de semana");
    break;
  default:
    console.log("Día normal");
}

// Ejemplo 5: Operador ternario
let mensaje = edad >= 18 ? "Adulto" : "Menor";
console.log(mensaje);
