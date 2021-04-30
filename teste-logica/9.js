// Implemente um método divida um array 
// por uma quantidade passada por parâmetro.
// Entrada do método([1, 2, 3, 4, 5], 2),
// Resultado do método: [[1, 2], [3, 4], [5]]

const splitArray = (array, splitSize) => {
  let aux = [[]];
  let indice = 0;

  array.forEach((item, index) => {
    if ((index % splitSize === 0) && (index !== 0)) {
      indice++;
      aux.push([]);
    }
    aux[indice].push(item);
  })

  return aux;
}

const array = splitArray([1, 2, 3, 4, 5, 7], 2);

console.log(array);