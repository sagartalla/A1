
const computeUnion = (a1, a2) => {
  let union = [];
  let arry = a1;
  arry.sort();
  union.concat([], a1);
  union = a2.eles.reduce((acc, i) => {
    const index = binaryIndexOf(arry, i);
    if(index === -1) {
      acc.push(i);
    }
    return acc;
  }, []);
  const range = [...a2.range];
  range.sort();
  if(range[0] < arry[0]) {
    union = [].concat([...new Array(arry[0] - range[0])].map((ele, i) => i + range[0]), union);
  }
  if(range[0] > arry[0] && binaryIndexOf(arry, range[0]) === -1) {
    union = [].concat(union, range[0]);
  }
  if(arry[arry.length - 1] < range[1]) {
    union = [].concat(union, [...new Array(range[1] + 1 - arry[arry.length - 1] + 1)].map((ele, i) => i + arry[arry.length - 1]));
  }
  if(arry[arry.length - 1] > range[1] && binaryIndexOf(arry, range[1]) === -1) {
    union = [].concat(union, range[1]);
  }
  return union.sort();
};

const binaryIndexOf = (arry, searchElement) => {
  let minIndex = 0;
  let maxIndex = arry.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0;
    currentElement = arry[currentIndex];

    if (currentElement < searchElement) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > searchElement) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }

  return -1;
};

const indexOfMaxLessThan = (a, ele) => {
  let max = Number.MAX_SAFE_INTEGER, index = 0;
  for(var i= 0; i < a.length; i++) {
    if(a[i] < ele && a[i] > max){
      max = a[i];
      index = i;
    }
  }
  return index;
}

const indexOfMinGreaterThan = (a, ele) => {
  let min = Number.MIN_SAFE_INTEGER, index = 0;
  for(var i= 0; i < a.length; i++) {
    if(a[i] > ele && a[i] < min){
      min = a[i];
      index = i;
    }
  }
  return index;
}

const computeIntersecion = (a1, a2) => {
  let arry = a1;
  arry.sort();
  let intersecion = [];
  intersecion = a2.reduce((acc, i) => {
    const index = binaryIndexOf(arry, i);
    if(index !== -1) {
      acc.push(i);
    }
  }, []);
  const range = [...a2.range];
  range.sort();
  if(range[0] < arry[0] && range[1] > arry[arry.length - 1]) {
    return intersecion;
  }
  if(range[0] < arry[0] && range[1] < arry[arry.length - 1]) {
    const index = indexOfMaxLessThan(arry, range[1]);
    return intersecion.slice(0, index + 1);
  }
  if(range[0] > arry[0] && range[1] > arry[arry.length - 1]) {
    const index = indexOfMinGreaterThan(arry, range[0])
    return intersecion.slice(index, arry.length);
  }
}
export default {
  binaryIndexOf,
  computeUnion,
  computeIntersecion
};
