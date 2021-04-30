// Implemente um método que limpe os itens desnecessários
// de um array(false, undefined, strings vazias, zero, null).
// Entrada do método([1, 2, '', undefined]),
// Resultado do método: [1, 2]

const clearArray = (array) => array.filter((item) => !!item);

const array = clearArray([1, 2, '', undefined]);

console.log(array);
