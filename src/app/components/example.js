
export const example = (name) => {
   return <h1>Hola {name}</h1>
   example("Hola ")
}
export function example(nombre) {
   return <h1>Hola {nombre}</h1>
   example("Diego")
}
const greetings = name => console.log("Hello, " + name + "!");// tiene un parametro y tiene una liniea de codigo

const calculateArea = (width, height) => {
   return width * height;
};

console.log(calculateArea(5, 3)); // 15

const fruits = ["apple", "banana"];
const newLength = fruits.push("orange");
console.log(newLength); // 3
console.log(fruits); // ["apple", "banana", "orange"]