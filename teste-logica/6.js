// Implemente um método que retorne um array,
// sem valores duplicados.
// Entrada do método([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]),
// Resultado do método: [1, 2, 3, 4, 5, 7]

const filterArray = (array) => {
  let aux = [];
  array.forEach((item) => {
    if (!aux.includes(item))
      aux.push(item);
  })
  return aux;
}


const array = filterArray([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]);

console.log(array);