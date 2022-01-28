const _ = {
  clamp(number, lower, upper) {
    let clampedLower = Math.max(number, lower);
    let clampedValue = Math.min(clampedLower, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (end === undefined) {
      [end, start] = [start, 0]; 
    }
    if (start > end) {
      [start, end] = [end, start];
    }
    if (number >= start && number < end) {
      return true;
    } else {
      return false;
    }
  },
  words(string) {
    let words = string.split(' ');
    return words;
  },
  pad(string, length) {
    if (string.length > length) {
      return string
    }
    let padStart = Math.floor(((length - string.length) / 2));
    let padEnd = Math.ceil(((length - string.length) / 2));
    let paddedString = (' '.repeat(padStart) + string + ' '.repeat(padEnd));
    return paddedString;
  },
  has(object, key) {
    let hasValue = (obj[key] !== undefined);
    return hasValue;
  },
  invert(object) {
    let invertedObject = {};
    for (key in object) {
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  findKey(object, predicateFunc) {
    for (key in object) {
      let objectValue = object[key];
      if (predicateFunc(objectValue)) {
        return key;
        break;
      }
    }
    return undefined;
  },
  drop(arr, number) {
    let slicedValues;
    if (number === undefined) {
      slicedValues = arr.shift()
      return arr;
    } else {
      slicedValues = arr.splice(0, number);
      return arr;
    } 
  },
  dropWhile(array, predicateFunc) {
    const dropNumber = array.findIndex((element, index) => {
      return !predicateFunc(element, index, array)
    });
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size) {
    if (size === undefined) {
      size = 1;
    } 
    let newArray = [];
    for (let i = 0; i < array.length; i += size) {
      let tempArray = array.slice(i, i + size);
      newArray.push(tempArray);
    }
    return newArray;
  }
};


// Do not write or modify code below this line.
module.exports = _;