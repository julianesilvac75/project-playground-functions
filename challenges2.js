// Desafio 10
function techList(array, name) {
  array.sort();
  let result = 0;

  if (array.length > 0) {
    for (let index = 0; index < array.length; index += 1) {
      array[index] = {
        tech: array[index],
        name,
      };
    }
    result = array;
  } else {
    result = 'Vazio!';
  }

  return result;
}

// Desafio 11
function validNumber(numbers) {
  let validNum = true;
  for (let number in numbers) {
    if (numbers[number] >= 3) {
      validNum = false;
    }
  }
  return validNum;
}

function checkRepeatedNumbers(array) {
  let numbers = {};

  for (let index = 0; index < array.length; index += 1) {
    let number = array[index];
    if (numbers[number] === undefined) {
      numbers[number] = 1;
    } else {
      numbers[number] += 1;
    }
  }
  numbers = validNumber(numbers);
  return numbers;
}

function arrayValues(array) {
  let validNum = true;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      validNum = false;
    }
  }

  return validNum;
}

function phoneNumber(array) {
  let DDD = '';
  let part1 = '';
  let part2 = '';
  let fullNumber = '';
  for (let index = 0; index < 2; index += 1) {
    DDD += array[index];
  }
  for (let index = 2; index < 7; index += 1) {
    part1 += array[index];
  }
  for (let index = 7; index < array.length; index += 1) {
    part2 += array[index];
  }
  fullNumber = `(${DDD}) ${part1}-${part2}`;

  return fullNumber;
}

function generatePhoneNumber(array) {
  let result = 0;

  if (array.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else if (checkRepeatedNumbers(array) === false || arrayValues(array) === false) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    result = phoneNumber(array);
  }

  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    result = true;
  }

  return result;
}

// Desafio 13
function hydrate(string) {
  let numbersOfString = string.match(/\d+/g);
  let sum = 0;
  let result = '';

  for (let number of numbersOfString) {
    sum += parseInt(number, 10);
  }

  if (sum === 1) {
    result = `${sum} copo de água`;
  } else {
    result = `${sum} copos de água`;
  }

  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
