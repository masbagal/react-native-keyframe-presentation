/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';


export default class Keyframing extends React.Component {
  render() {
    return (
      <div css={container}>
        <div className='body'>
          <div css={bottomLabel(3)}>
            <div css={frame}>
              <div>scale: 0.7</div>
              <div>rotate: 0deg</div>
              <div>translateX: -5px</div>
              <div>translateY: 4px</div>
            </div>
          </div>
          <div css={bottomLabel(9)}>
            <div css={frame}>
              <div>scale: 1,3</div>
              <div>rotate: -30deg</div>
              <div>translateX: 0px</div>
              <div>translateY: -10px</div>
            </div>
          </div>
          <div css={bottomLabel(5)}>
            <div css={frame}>
              (same as 12)
            </div>
          </div>
          <div css={bottomLabel(3)}>
            <div css={frame}>

              <div>scale: 1</div>
              <div>rotate: 0deg</div>
              <div>translateX: 0px</div>
              <div>translateY: 0px</div>
            </div>
          </div>
        </div>
        <div css={bottomBox}>
          <div css={bottomLabel(0)}>0</div>
          <div css={bottomLabel(3)}>3</div>
          <div css={bottomLabel(9)}>12</div>
          <div css={bottomLabel(5)}>17</div>
          <div css={bottomLabel(3)}>20</div>
        </div>
      </div>
    );
  }
}


const container = css`
  width: 90%;
  margin: 0 auto;
`;


const bottomBox = css`
  border-top: 1px solid white;
`;

const bottomLabel = function(num) {
  return css`
    width: ${num * 5}%;
    text-align: right;
    display: inline-block;
    color: white;
    position: relative;
    white-space: nowrap;

    & div {
      font-size: 20px;
    }
  `;
}

const frame = css`
    margin-left: 3em;
    text-align: right;
  `;

const first = css`
  color: #222f3e;
  display: inline-block;
  width: 100px;
  position: absolute;
  left: 0;
`;