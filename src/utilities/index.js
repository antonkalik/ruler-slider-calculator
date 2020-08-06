export const createReducer = (initialState, funcMap) => {
  return (state, action, ...rest) => {
    const { type } = action;
    const handler = funcMap[type];
    const newState = state || initialState;

    return handler ? handler(newState, action, ...rest) : newState;
  };
};

export const capitalize = (str) =>
  str
    .toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

export const toLink = (str) => '/' + str.toLowerCase().replace(/ /g, '-');

export const parseToTitle = (str) => (str ? capitalize(str).replace(/_/g, ' ') : false);

export const reduceObjectByName = (object, name) =>
  Object.keys(object).reduce((newObject, key) => {
    if (key !== name) {
      newObject[key] = object[key];
    }
    return newObject;
  }, {});

export const reduceArrayByName = (arr, name) =>
  arr.reduce((newArray, key) => {
    if (key !== name) {
      newArray.push(key);
    }
    return newArray;
  }, []);

export function replaceFirstZero(num) {
  return num[0] === '0' ? num.replace('0', randomInt(1)) : num;
}

export function isObject(value) {
  return value === 'object' && value !== null;
}

export function randomInt(length) {
  if (length < 1) return 0;
  let num = Math.random()
    .toString()
    .slice(2, length + 2);

  return replaceFirstZero(num);
}

export function range(min = 0, max = 10, step = 1) {
  const length = step > 1 ? (max - min) / step + 1 : (max - min + 1) / step;
  return [...new Array(length).keys()].map((x) => min + x * step);
}

export function isMobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
}
