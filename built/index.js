'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaults = {
  dictionary: {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '1234567890',
    symbol: '~!@#$%^&*()_+.,<>?;\'[]{}"|'
  },
  option: {
    lower: 1,
    upper: 1,
    number: 1,
    symbol: 1
  }
};

var random = function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function randomize(array) {
  var limit = arguments.length <= 1 || arguments[1] === undefined ? array.length : arguments[1];

  var current = 0,
      amount = limit,
      len = array.length - 1;
  while (limit !== 0) {
    var rand = random(current, len);
    var _ref = [array[rand], array[current]];
    array[current] = _ref[0];
    array[rand] = _ref[1];

    current = current + 1;
    limit = limit - 1;
  }
  return array.slice(0, amount);
}

var repeat = function repeat(array, n) {
  for (var i = 0; i < n; i = i + 1) {
    array = array.concat(array);
  }

  return array;
};

var generate = function generate() {
  var option = arguments.length <= 0 || arguments[0] === undefined ? defaults.option : arguments[0];
  var length = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];
  var dictionary = arguments.length <= 2 || arguments[2] === undefined ? defaults.dictionary : arguments[2];

  var all = [];
  for (var item in option) {
    all.push(repeat(dictionary[item].split(''), option[item] - 1));
  }

  all = all.reduce(function (a, b) {
    return a.concat(b);
  }, []);

  while (all.length < length) {
    all = repeat(all, 1);
  }

  return randomize(all, length).join('');
};

var replace = function replace(item, index) {
  if (index % 2 === 0) {
    return item.toUpperCase();
  }
  return item;
};

var unique = function unique() {
  var length = arguments.length <= 0 || arguments[0] === undefined ? 15 : arguments[0];

  var unique = (new Date().getTime().toString(random(14, 18)) + parseInt((Math.random() + '').slice(2)).toString(random(14, 18))).replace(/\w/g, replace);

  while (unique.length < length) {
    unique += parseInt((Math.random() + '').slice(2)).toString(random(14, 18)).replace(/\w/g, replace);
  }

  return unique.slice(0, length);
};

exports.default = { generate: generate, unique: unique };
module.exports = exports['default'];