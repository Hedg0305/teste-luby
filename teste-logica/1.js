// Implemente um método que crie um novo
// array baseado nos valores passados.
// Entradas do método (3,a),
// Resultado do método: ['a', 'a', 'a']

const createArray = (number, item) => {
  const arr = [];
  while (arr.length < number) { arr.push(item); }

  return arr;
};

const array = createArray(3, 'a');

console.log(array);
