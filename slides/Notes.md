## Styled components

- From the creator of Spectrum Chat, Max Stoiber
- And Glen Maddern (Creator of CSS Modules)
- Elemental UI, built with LESS
  - People who used Elemental UI should use LESS
  - Not ideal, people should be able to just use the Elemental UI components, without implementing a whole tool chain
  - Themable. People needed to vendor in, or mutate LESS variables to be able to theme the components.

### CSS IN JS

The stupidest idea ever. CSS and JavaScript are totally different languages. Why would you ever do that. 

- It makes things easier, you can publish CSS in JS, to `npm`
- Automatically injects styles at run time
- It is dynamic, by virtue of JavaScript
- CSS in JS back then, uses Objects as CSS data structures
- CSS is awesome, the syntax is beautiful, we like writing CSS

### Components

Components have an interesting property, which is that they allow you to hide implementation details. 

```javascript
<Button className="btn" />
<Button className="btn btn-primary" />
<Button type="disabled" className="btn btn-disabled" />
```

The states of the components change the HTML, and it forces you to have knowledge about these attributes, and it requires you to carefully set them.

These are all implementation details, they only matter to the creator of the component. 

As a consumer, all you really care about is:

```javascript
<Button />
<Button primary />
<Button secondary />
```

People started to use components solely for styling, which was initially called Styled Components, although there's no actual name for such a pattern. These are not HoC's!

```javascript
<div className="flex">
    {children}
</div>
```

Was re-factored to:

```javascript
<Flex>
	{children}
</Flex>
```

The benefit is that you can change Flex's implementation without affecting the rest of the application. 

Maybe, just maybe, it makes sense to style at the component level. 

### The API

Avoid JavaScript Objects! Designers know how to CSS, enable them to continue doing so!

#### A primer

```javascript
const Comp = elem('div', /*  styles here, somehow */)
```

#### Enter actual CSS in JavaScript

```javascript
const Comp = elem('div', `
	color: hot-pink
`)
```

Take the string of CSS (second parameter to elem), and inject it into the DOM as a <style> tag, these are not in-line styles! Therefore you can use **ANY** CSS you want, media, queries, keyframes, etc, etc!

#### Tagged Template Literals

```javascript
const Comp elem('div')`
	color: hot-pink
`
```

Enables dynamic styles! Now you can control CSS with JavaScript.

#### Warning, how do tagged templates enable this?

Running [demo](https://repl.it/repls/FelineHuskyProject).

```javascript
function taggedFunction(strings,...expressions){
    console.log(strings); // ["some string ", ""]
    console.log(expressions[0]); // props => props.text
}

taggedFunction`some string ${(props) => props.text}`
```

In actual Components:

```javascript
const Compo = elem('div')`
 	color: ${props => props.primary ? "blue": "red"};
`
```

Suddenly you can do anything! Welcome to Styled Components.

### The best benefit

>  Remove the mapping between styles and components

If you think about it, a class name is a mapping of a piece of style to a DOM element. It is a many to many map.

As a developer, you write the style once, and then use it across your application, every time you use the button. It is actually a one to one map, dressed as a many to many. Bind the style to the component and remove the mapping idea.

- Write actual CSS
- Adapt based on props

We can write component API's that are natural to both CSS creators and, in this case, React developers. 

CSS solves an extremely hard problem! Let's not stop using it, ever.

> When you code CSS, you're writing abstract rules to take unknown content and organize it in an unknown medium. **That shit is hard!**  - Keith J Grant

