// Implemente um método que remova os aninhamentos de
// um array de arrays para um array unico.
// Entrada do método([1, 2, [3], [4, 5]]),
// Resultado do método: [1, 2, 3, 4, 5]

const removeInnerArray = (array) => {
  return array.flat()
}

const array = removeInnerArray([1, 2, [3], [4, 5]])

console.log(array);