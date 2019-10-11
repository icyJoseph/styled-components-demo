export const TitleWrapper = `import styled from 'styled-components';

const Title = styled.h1\`
font-size: 1.5em;
text-align:center;
color: palevioletred;
\`;

const Wrapper = styled.section\`
color: palevioletred;
padding: 4em;
width: 100%;
height: 100%;
background: papayawhip;
\`;

`;

export const themeProvider = `const ThemeContext = createContext({});

export function ThemeProvider({ theme }) {
  const value = useMemo(() => ({ theme }), [theme]);
  
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
`;

export const themeConsumer = `function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Button />
      </>
    </ThemeProvider>
  );
}

function Button() {
    const { theme } = useTheme();
    return (
      <button style={{color: theme.primary}}>Primary</button>
    );
}`;

export const containerString = `export const Container = styled.section\`
  background: papayawhip;
  height: 100%;
  width: 100%;
  padding: 4em;
  color: palevioletred;

  @media (min-width: \${({ theme }) => theme.breakpoint || "982px"}){
    color: white;
    background: #78c2ad;
  }
\`;`;

export const themeProviderString = `<ThemeProvider theme={{ breakpoint: "600px" }}>
  <Container>Almost done</Container>
</ThemeProvider>
`;

export const globalStyleString = `import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle\`
  body {
    color: \${props => (props.whiteColor ? "white" : "black")};
    font-size: \${props => props.theme.fontSize};
  }
\`;`;

export const usingGlobalStyleString = `import { ThemeProvider } from 'styled-components'

<ThemeProvider theme={{ fontSize: 10px }}>
  <React.Fragment>
    <Routes /> 
    <GlobalStyle whiteColor />
  </React.Fragment>
</ThemeProvider>
`;

export const cssStyleString = `import styled, { css } from 'styled-components'

const mixin = css\`
  color: \${props => (props.whiteColor ? 'white' : 'black')};
\`
const StyledComp = styled.div\`
  \${props => (props.complex ? mixin : 'color: blue;')};
\`
`;

export const keyframesPartialString = `import styled, { css, keyframes } from 'styled-components'

const pulse = keyframes\`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
\`

const animation = props =>
  css\`
    \${pulse} \${props.duration} infinite alternate;
  \`

const PulseButton = styled.button\`
  animation: \${animation};
\`
`;

export const targetingOtherString = `const Link = styled.a\`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred;
\`;

const Icon = styled.svg\`
  flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;

  \${Link}:hover & {
    fill: rebeccapurple;
  }
\`;`;

export const onlyStyledComponents = `class A extends React.Component {
    render() {
      return <div className={this.props.className} />
    }
  }
// without this we'd be trying to access
// "A" as a Styled Component
const StyledA = styled(A)\`\`
  
const B = styled.div\`
    \${StyledA} {
    }
  \`
`;

export const firstCardComponent = `const CardHeader = styled.div\`\`
const CardBody = styled.div\`\`

function Card({ title, text }) {
  return (
    <div>
      <CardHeader>{title}</CardHeader>
      <CardBody>{text}</CardBody>
    </div>
  )
}

<Card title="Hello!" text="I am Card" />
`;

export const secondCardComponent = `const CardHeader = styled.div\`\`
const CardBody = styled.div\`\`

function Card({ title, text }) {
  return (
    <div>
      {title && <CardHeader>{title}</CardHeader>}
      <CardBody>{text}</CardBody>
    </div>
  )
}`;

export const thirdCardComponent = `const CardHeader = styled.div\`\`
const CardBody = styled.div\`\`

function Card({ title, titleBackgroundColor, text }) {
  return (
    <div>
      {title && (
        <CardHeader style={{ backgroundColor: titleBackgroundColor }}>
          {title}
        </CardHeader>
      )}
      <CardBody>{text}</CardBody>
    </div>
  )
}`;

export const fourthCardComponent = `const CardHeader = styled.div\`\`
const CardBody = styled.div\`\`
const CardAd = styled.div\`\`

function Card({ title, titleBackgroundColor, ad, text }) {
  return (
    <div>
      {ad && <CardAd>{ad}</CardAd>}
      {title && (
        <CardHeader style={{ backgroundColor: titleBackgroundColor }}>
          {title}
        </CardHeader>
      )}
      <CardBody>{text}</CardBody>
    </div>
  )
}
`;

export const cardSolution = `export const Card = styled.div\`\`
Card.Body = styled.div\`\`
Card.Header = styled.div\`\`
Card.Ad = styled.div\`\`

<Card>
  <Card.Header>Hello!</Card.Header>
  <Card.Body>I am a card</Card.Body>
</Card>

<Card>
  <Card.Body>I am a card</Card.Body>
</Card>

<Card>
  <Card.Header style={{ backgroundColor: 'green' }}>Hello</Card.Header>
  <Card.Body>I am a Card</Card.Body>
</Card>


<Card>
  <Card.Ad>
    👻 -50% on all articles, happy halloween!
  </Card.Ad>
  <Card.Body>I am a card</Card.Body>
</Card>
`;
