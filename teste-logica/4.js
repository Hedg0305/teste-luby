// Implemente um método que a partir de um array de arrays,
// converta em um objeto com chave e valor.
// Entrada do método([["c", 2], ["d", 4]]),
// Resultado do métdodo: { c: 2, d: 4 }

const createObj = (array) => {
  const obj = {};
  array.forEach((item) => obj[item[0]] = item[1]);
  return obj;
};

const obj = createObj([['c', 2], ['d', 4], ['f', 5]]);

console.log(obj);
