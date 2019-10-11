# Notation

[Demo](https://repl.it/repls/FelineHuskyProject)

```javascript
// Template literals

// Multi line strings
const longText0 = `this text
  can easily
  break into a new line
`;
const longText1 = "this text \n can easily \n break into a new line";

console.log(longText0);
console.log(longText1);

// Interpolation

const x = 10;
const y = 20;
console.log("Result:", "x + y =", x + y);
console.log("Result: x/y= " + x / y);
console.log(`Result: ${x} * ${y} = ${x * y}`);

// With ternary ops
function Coin(name) {
  this.name = name;
  this.es5Flip = () => {
    const lead = name + " flips to: ";
    const result = Math.random() > 0.5 ? "heads" : "tail";
    return lead + result;
  };

  this.es6Flip = () => {
    return `${name} flips to: ${Math.random() > 0.5 ? "heads" : "tail"}`;
  };

  return this;
}

const krona = new Coin("krona");
console.log(krona.es5Flip());
console.log(krona.es6Flip());

// Tagged templates - parse with a function

// first argument - array of string values
// the rest are related to the expressions
// return whateveryouwant
function gamerTag(strings, ...expressions) {
  console.log(strings, expressions);
  const [, level] = expressions;
  if (level <= 20) return "Your level is too low!";
  return strings.reduce(
    (prev, curr, index) => `${prev}${curr}${expressions[index] || ""}`,
    ""
  );
}

const username = "N00bMaster69";
const level = 20;
const job = "Fire Mage";
const phrase = `${2 + 2} = 4, minus one that's ${2 + 2 - 1} quick maths`;

console.log(gamerTag`I'm ${username}, level ${level} ${job}! ${phrase}!`);

const reg = new RegExp(/(\w+)(\:)/g);

const FnComponent = props => ({ ...props });
const element = { createElement: () => ({}) };

// Tagged templates with closures
function styled(FnC) {
  return function(string, ...keys) {
    return props => {
      const _cssKeys = string
        .filter((_, index) => index % 2 === 0)
        .map(str => reg.exec(str)[1]);
      const _cssValues = keys.reduce(
        (prev, curr) => [...prev, curr(props)],
        []
      );

      const hash = "sc89x8";

      const _style = element.createElement("style");
      _style.type = "text/css";
      _style.innerHTML = `.${hash} {${_cssKeys.reduce(
        (prev, curr, index) =>
          `${prev}
        ${curr}:${_cssValues[index]};
        `,
        ""
      )}}`;

      console.log(_style.innerHTML);

      const enhanced = { ...props, className: hash };

      return FnC(enhanced);
    };
  };
}

const StyledFnComponent = styled(FnComponent)`
  display: ${({ hidden }) => (hidden ? "none" : "block")};
`;

console.log(StyledFnComponent({ hidden: true }));
```
