// Implemente um método que inverta um array,
// não utilize métodos nativos do array.
// Entrada do método([1, 2, 3, 4]),
// Resultado do método: [4, 3, 2, 1]

const invertArray = (array) => {
  const aux = [];
  for (let i = array.length - 1; i >= 0; i--) { aux.push(array[i]); }
  return aux;
};

const array = invertArray([1, 2, 3, 4]);

console.log(array);
