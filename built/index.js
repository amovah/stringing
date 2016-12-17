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
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : array.length;

  var current = 0,
      amount = limit,
      len = array.length - 1;
  while (limit !== 0) {
    var rand = random(current, len);
    var _ref = [array[rand], array[current]];
    array[current] = _ref[0];
    array[rand] = _ref[1];


    ++current;
    --limit;
  }
  return array.slice(0, amount);
}

var repeat = function repeat(array, n) {
  for (var i = 0; i < n; ++i) {
    array = array.concat(array);
  }

  return array;
};

var generate = function generate() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaults.option;
  var dictionary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaults.dictionary;

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

var replace = function replace(item) {
  if (random(0, 1)) {
    return item.toUpperCase();
  }
  return item;
};

var unique = function unique() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 18;

  var unique = (new Date().getTime().toString(random(14, 18)) + parseInt((Math.random() + '').slice(2)).toString(random(14, 18))).replace(/\w/g, replace);

  while (unique.length < length) {
    unique += parseInt((Math.random() + '').slice(2)).toString(random(14, 18)).replace(/\w/g, replace);
  }

  return unique.slice(0, length);
};

exports.default = { generate: generate, unique: unique };
module.exports = exports['default'];