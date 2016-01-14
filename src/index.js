const dictionary = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '1234567890',
  symbol: `~!@#$%^&*()_+.,<>?;'[]{}"|`
};

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function randomize(array, limit = array.length) {
  let current = 0, amount = limit, len = array.length - 1;
  while (limit !== 0) {
    let rand = random(current, len);
    [array[current], array[rand]] = [array[rand], array[current]];
    
    ++current;
    --limit;
  }
  return array.slice(0, amount);
}

Array.prototype.repeat = function(n) {
  let arr = this;
  for (let i = 0; i < n; ++i) {
    arr = arr.concat(this);
  }

  return arr;
};

export default (option = {
  lower: 1,
  upper: 1,
  number: 1,
  symbol: 1
}, length = 10, dic = dictionary) => {
  let all = [];
  for (let item in option) {
    all.push((dic[item].split('')).repeat(option[item] - 1));
  }

  all = all.reduce((a, b) => a.concat(b), []);

  while (all.length < length)
    all = all.repeat(1);

  return randomize(all, length).join('');
};
