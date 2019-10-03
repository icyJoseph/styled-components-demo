# Styled Components

> Reusability

Points:

# The problem sharing components which use LESS/SASS

People must include LESS/SASS to their tool chain in order to gain any leverage.

# Even those who expose a surface

Bulma has predefined variables, and one can override them. Though, as part of the tool chain.

> One must setup a LESS/SASS toolchain

# CSS in JS

The greatest ~~most controversial~~ approach.

# Components

Hiding implementation details of the designer

```jsx
<Button className="btn"/>
<Button className="btn btn-nice"/>
<Button type="link" className="btn btn-beautiful"/>
```

As a consumer of the component, we do not care about the classes.

```jsx
<Button/>
<Button nice/>
<Button beautiful link>
```

# React at its best

```jsx
const Flex = ({ children }) => <div className="flex">{children}</div>;
```

Consumers do not care about how we name it, or how flex is ultimately applied

```jsx
<Flex>
  <span>Hello</span>
</Flex>
```

# Moving styling to the component label

# Styles as JS Objects - no no

# Bring CSS into JS

# A first proposal

# Syntax Sugar - Tagged Templated Literals

# Functions for conditional styling
