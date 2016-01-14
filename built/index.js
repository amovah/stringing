'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dictionary = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '1234567890',
  symbol: '~!@#$%^&*()_+.,<>?;\'[]{}"|'
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

    ++current;
    --limit;
  }
  return array.slice(0, amount);
}

Array.prototype.repeat = function (n) {
  var arr = this;
  for (var i = 0; i < n; ++i) {
    arr = arr.concat(this);
  }

  return arr;
};

exports.default = function () {
  var option = arguments.length <= 0 || arguments[0] === undefined ? {
    lower: 1,
    upper: 1,
    number: 1,
    symbol: 1
  } : arguments[0];
  var length = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];
  var dic = arguments.length <= 2 || arguments[2] === undefined ? dictionary : arguments[2];

  var all = [];
  for (var item in option) {
    all.push(dic[item].split('').repeat(option[item] - 1));
  }

  all = all.reduce(function (a, b) {
    return a.concat(b);
  }, []);

  while (all.length < length) {
    all = all.repeat(1);
  }return randomize(all, length).join('');
};

module.exports = exports['default'];