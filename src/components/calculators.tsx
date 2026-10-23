export function calcDelta(a, b, c){
    return b ** 2 - 4 * a * c;
  }
  
  export function calcBhaskara(a, b, c){
  
    const delta = calcDelta(a,b,c);
    console.log("delta", delta);
  
    if (delta === 0) {
      const x1 = (b * -1) / (2 * a);
      console.log("x1", x1);
    } else if (delta > 0) {
      const x1 = (b * -1 + delta ** 0.5) / (2 * a);
      const x2 = (b * -1 - delta ** 0.5) / (2 * a);
      console.log("x1", x1);
      console.log("x2", x2);
    } else {
      console.log("Error");
    }
  }

  export function calcPitagoras(a, b){
  return (a ** 2 + b ** 2) ** 0.5;
}


export function calcCalculadora(a, b, operacao) {
  if (operacao === '+') {
    return a + b;
  } else if (operacao === '-') {
    return a - b;
  } else if (operacao === '*') {
    return a * b;
  } else if (operacao === '/') {
    if (b === 0) {
      return 'Não pode dividir por zero';
    }

    return a / b;
  }
}
