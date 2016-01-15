# stringing

Generate random string with custom dictionary if you want to use a custom dictionary, just follow the rules. It's Fast, simple and lightweight.

**You are be able to change percent of usage any part of your dictionary.**

## Installation

with NPM:

`npm i stringing`

## Usage

`stringing(option, length, dictionary);`

### in server-side

```javascript
var stringing = require('stringing');
```

### in browser

You should use the browserified version in built directory

```html
<script src='built/stringing.min.js'></script>
<script>
  // Everything is ready
  // Do what you want to do
</script>
```

### option

Type: `Obbject`, Optional.

Default:

```
{
  number: 1,
  lower: 1,
  upper: 1,
  symbol: 1
}
```

Your object must includes one part of your dictionary at least.

You can change the percent usage of any part of your dictionary through increasing or decreasing the number of the part.

for comprehension see [examples](#examples).

### length

Type: `Number`, Optional.

Default: `10`

length of your string.

### dictionary

Type: `Object`, Optional.

Default:

```javascript
{
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '1234567890',
  symbol: `~!@#$%^&*()_+.,<>?;'[]{}"|`
}
```

If you want use another dictionary or unique symbols or anything that you want, you can create your own dictionary and pass it.

for comprehension see [examples](#examples).

## Examples

```javascript
var stringing = require('stringing');

stringing();
// '9R*uw&>UZ6'

stringing({
  number: 20,
  lower: 2,
  upper: 1
}, 20);
// '9imfr8c459IC8389378D' - More number

stringing({ uniqueWords: 1, number: 10 }, 20, {
  uniqueWords: 'JS-Node-ES2015_something',
  number: '123'
});
// 22n-32gh3oe33SiNs215'
```

## Contributing, Idea, Issue

Feel free to fill an issue or create a pull request, I'll check it ASAP.

Just remember after any change build your program:

`gulp build`

## LICENSE

MIT
