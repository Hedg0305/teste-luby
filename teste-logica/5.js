// Implemente um método que retorne um array, sem os itens
// passados por parâmetro depois do array de entrada.
// Entrada do método([5, 4, 3, 2, 5], 5, 3),
// Resultado do método: [4, 2]

const filterArray = (array, ...filter) => {
  const aux = array.filter((item) => {
    if (!filter.includes(item)) {
      return item;
    }
  });
  return aux;
};

const array = filterArray([5, 4, 3, 2, 5], 5, 3);

console.log(array);
