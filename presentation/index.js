/** @jsx jsx */
import React from 'react';
import { jsx, css, keyframes } from '@emotion/core';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Slide,
  Fit,
  Fill,
  Text,
  Layout,
  Appear,
  Code,
  CodePane,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import AudioComponent from './AudioComponent';
import KeyframingSlide from './keyframing';

const images = {
  traveloka: require('../assets/traveloka.png'),
  webComponentFolder: require('../assets/wc01.png'),
  demo01: require('../assets/demo1.gif'),
  demolike: require('../assets/demolike.gif'),
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif')
};

const codes = {
  demo01: require('raw-loader!../assets/demo1.example'),
  nested: require('raw-loader!../assets/nested.example'),
  likeExpand: require('raw-loader!../assets/likeexpand.example'),
  like: require('raw-loader!../assets/likenested.example'),
  interpolate1: require('raw-loader!../assets/interpolate1.example'),
  keyframeinter: require('raw-loader!../assets/keyframeinter.example'),
}

const audio = {
  interpolation: new Audio(require('../assets/interpolation.m4a')),
  thanks: new Audio(require('../assets/thanks.m4a')),
}

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    heading: '#1ba0e2',
    headingSubtitle: '#93d2f2',
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
    slideBg: '#222f3e'
  },
  {
    primary: 'Droid Sans',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide bgColor='heading'>
        <Layout>
          <Image margin='0 0 0 -80px' src={images.traveloka} />
          <Fill>
            <Text textColor='headingSubtitle' textAlign='left' textSize={30}>Traveloka Frontend Bi-Weekly Sync</Text>  
            <Heading textColor='primary' textAlign='left'>Keyframing Animations in React Native</Heading>     
          </Fill>
        </Layout>
          
        </Slide>
        <Slide bgColor='slideBg' transition={['slide', 'fade']}>
          <Text textColor='primary'>Why React Native?</Text>
          <Appear>
            <Image fill src={images.webComponentFolder} width={400}/>
          </Appear>
          <Appear>
            <Text textColor='primary'>web-components</Text>
          </Appear>
        </Slide>
        <Slide bgColor='slideBg'>
          <Heading textColor='primary'>Normal Animation</Heading>
          <Image margin='50px auto' fill src={images.demo01} />
        </Slide>
        <Slide bgColor='slideBg'>
          <Text textColor='primary'>Normal Animation</Text>
          <CodePane textSize={19} lang='jsx' source={codes.demo01} /> 
        </Slide>
        <Slide bgColor='slideBg'>
          <Layout>
            <div style={{ marginRight: '90px' }} >
              <Image src={'https://media.giphy.com/media/l0Iy6f7iJwqSad1RK/source.gif'} />
            </div>
            <Fit>
              <Heading textColor='primary'>Composing Animation</Heading>
              <List>
                <ListItem textColor='primary'>
                  <Code textColor='primary'>Animated.sequence([...])</Code>
                </ListItem>
                <ListItem textColor='primary'>
                  <Code textColor='primary'>Animated.parallel([...])</Code>
                </ListItem>
                <ListItem textColor='primary'>
                  <Code textColor='primary'>Animated.delay([...])</Code>
                </ListItem>
                <ListItem textColor='primary'>
                  <Code textColor='primary'>Animated.stagger([...])</Code>
                </ListItem>
              </List>
            </Fit>    
          </Layout>
        </Slide>
        <Slide bgColor='slideBg'>
          <Heading textSize={60} margin='0 0 30px' textColor='primary'>Nested Animations Composition</Heading>
          <CodePane textSize={19} lang='jsx' source={codes.nested} /> 
        </Slide>
        <Slide bgColor='slideBg' transition={['slide', 'fade']}>
          <Layout>
            <Fit>
              <Heading textAlign='right' textColor='primary'>User Reaction</Heading>
            </Fit> 
            <Fill style={{ marginRight: '90px' }} >
              <Image src={images.demolike} height='200'/>
            </Fill>   
          </Layout>
          <Appear>
            <Text textColor='primary' margin='30' >What are the transformations needed for this?</Text>
          </Appear>
          <List textColor='primary' textAlign='center'>
          <Appear>
            <ListItem>rotate</ListItem>
          </Appear>
          <Appear>
            <ListItem>scale</ListItem>
          </Appear>
          <Appear>
            <ListItem>translateX</ListItem>
          </Appear>
          <Appear>
            <ListItem>translateY</ListItem>
          </Appear>
          </List>
        </Slide>
        <Slide bgColor='slideBg'>
          <CodePane margin='-90px 0 0' lang='jsx' source={codes.likeExpand} /> 
          <Text textColor='primary'>Like animation</Text>
        </Slide>
        <Slide bgColor='slideBg'>
          <CodePane textSize={22} margin='-50px 0 20px' lang='jsx' source={codes.like} /> 
          <Text textColor='primary'>Like animation (collapsed)</Text>
        </Slide>
        <Slide bgColor='slideBg'>
          <AudioComponent audio={audio.interpolation} />
            <Appear>
              <div css={flashStyle1}>IN</div>
            </Appear>
            <Appear>
              <div css={flashStyle2}>TER</div>
            </Appear>
            <Appear>
              <div css={flashStyle1}>POLA</div>
            </Appear>
            <Appear>
              <div css={flashStyle2}>TION</div>
            </Appear>
        </Slide>
        <Slide bgColor='slideBg'>
          <Heading textSize={'2.5em'} textColor='primary'>.interpolate()</Heading>
          <Text textColor='primary'>Mapping the animated value to another value</Text>
          <CodePane textSize={22} margin='30px 0 0' lang='jsx' source={codes.interpolate1} /> 
        </Slide>
        <Slide bgColor='slideBg'>
          <Image src={images.demolike} margin='0 auto 3em' />
          <Text textColor='primary'>Using animated value as a keyframe</Text>
          <Text textSize={20} margin='0 0 5em' textColor='quaternary'>(Color change handled by props change)</Text>
          <KeyframingSlide />
        </Slide>
        <Slide bgColor='slideBg'>
          <CodePane margin='-100px 0 0' textSize={20} lang='jsx' source={codes.keyframeinter} /> 
        </Slide>
        <Slide bgColor='slideBg'>
            <div>
              <Heading textAlign='left' textColor='primary'>Pros</Heading>
              <List textColor='primary' textAlign='left'>
                <ListItem>Reducing number of lines</ListItem>
                <ListItem>Reduce defining animated value</ListItem>
              </List>
            </div>  
            <div>
              <Heading textAlign='left' textColor='primary'>Cons</Heading>
              <List textColor='primary' textAlign='left'>
                <ListItem>Cannot compose with different animation method</ListItem>
              </List>
            </div> 
        </Slide>
        <Slide bgColor='slideBg'>
          <AudioComponent audio={audio.thanks} />
            <Appear>
              <div css={flashStyle1}>THANK</div>
            </Appear>
            <Appear>
              <div css={flashStyle2}>YOU</div>
            </Appear>
        </Slide>
        <Slide bgColor='#000' />
      </Deck>
    );
  }
}

const flash1 = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0) rotate(2deg);
    color: red;
  }

  40%, 43% {
    transform: translate3d(3px, -5px, 10px);
    color: green;
  }

  70% {
    transform: translate3d(0, -6px, 2px) rotate(-1deg);
    color: blue;
  }

  90% {
    transform: translate3d(2px,-4px,0);
    color: white;
  }
`;

const flash2 = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0) rotate(-3deg);
    color: yellow;
  }

  40%, 43% {
    transform: translate3d(1px, -2px, 10px);
    color: green;
  }

  70% {
    transform: translate3d(0, 5px, 2px) rotate(4deg);
    color: magenta;
  }

  90% {
    transform: translate3d(5px,2px,0);
    color: white;
  }
`

const base = css`
  font-size: 3em;
  color: white;
  font-weight: 900;
  display: inline-block;
  -webkit-text-stroke: 2px white;
`;

const flashStyle1 = css`
  ${base} animation: ${flash1} .5s ease infinite;
`;

const flashStyle2 = css`
  ${base} animation: ${flash2} .5s ease infinite;
`;