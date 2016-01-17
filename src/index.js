const defaults = {
  dictionary: {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '1234567890',
    symbol: `~!@#$%^&*()_+.,<>?;'[]{}"|`
  },
  option: {
    lower: 1,
    upper: 1,
    number: 1,
    symbol: 1
  }
};

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function randomize(array, limit = array.length) {
  let current = 0, amount = limit, len = array.length - 1;
  while (limit !== 0) {
    let rand = random(current, len);
    [array[current], array[rand]] = [array[rand], array[current]];

    current = current + 1;
    limit = limit - 1;
  }
  return array.slice(0, amount);
}

const repeat = (array, n) => {
  for (let i = 0; i < n; i = i + 1) {
    array = array.concat(array);
  }

  return array;
};

const generate = (option = defaults.option, length = 10,
                  dictionary = defaults.dictionary) => {
    let all = [];
    for (let item in option) {
      all.push(repeat(dictionary[item].split(''), option[item] - 1));
    }

    all = all.reduce((a, b) => a.concat(b), []);

    while (all.length < length) {
      all = repeat(all, 1);
    }


    return randomize(all, length).join('');
};

const replace = item => {
  if (random(0, 1)) {
    return item.toUpperCase();
  }
  return item;
};

const unique = (length = 18) => {
  let unique = ((new Date().getTime()).toString(random(14, 18)) +
              parseInt((Math.random() + '').slice(2)).toString(random(14, 18)))
              .replace(/\w/g, replace);

  while (unique.length < length) {
    unique += parseInt((Math.random() + '').slice(2)).toString(random(14, 18))
              .replace(/\w/g, replace);
  }

  return unique.slice(0, length);
};

export default { generate, unique };
