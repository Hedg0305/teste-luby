// Implemente um método que encontre os
// valores comuns entre dois arrays.
// Entrada do método([6, 8], [8, 9]),
// Resultado do método: [8]

const isEqual = (arra1, array2) => {
  let aux = []
  arra1.forEach((item) => {
    if (array2.includes(item) && !(aux.includes(item)))
      aux.push(item);
  })

  return aux;
}

const array = isEqual([6, 8, 8, 6], [8, 9, 6])

console.log(array);