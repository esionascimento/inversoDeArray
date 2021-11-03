/* Question
Implement a function reverse that reverses an array of characters IN PLACE, that is writes the result in the same memory as the given input without allocating extra memory.

Do not use any existing reverse() functions and do not copy the vector or allocate extra memory.

Sample
Input:

['x', 'y', 'z', 'w']
Output:

['w', 'z', 'y', 'x'] */

/* const a = ['x', 'y', 'z', 'w']; */
function inverse(parametro) {
  let tamanho = parametro.length -1 ;

  for(let i = 0; i <= tamanho; i++) {
    let guardaPosition = parametro[i];
    parametro[i] = parametro[tamanho];
    parametro[tamanho] = guardaPosition;
    tamanho = tamanho - 1;
  }
  return parametro
}

console.log(inverse(['x', 'y', 'z', 'w', 'a', 'o']));