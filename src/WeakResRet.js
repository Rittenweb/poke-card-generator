import React from 'react';
import getSymbol from './getSymbol';

export default function WeakResRet(props) {
  let weak = getSymbol(props.weakness);
  let res = getSymbol(props.resistance);

  return (
    <div className='WeakResRet'>
      <div className='wrt-el'>
        weakness
        {weak != undefined && (
          <img src={require(`./${weak}`)} alt='W' className='wrt-symbol'></img>
        )}
      </div>
      <div className='wrt-el'>
        resistance
        {res != undefined && (
          <img src={require(`./${res}`)} alt='W' className='wrt-symbol'></img>
        )}
      </div>
      <div className='wrt-el'>
        retreat cost
        <div className='retreat-cost'>
          {props.retreatNum > 0 && (
            <img
              src={require('./colorless.png')}
              alt='C'
              className='wrt-symbol'></img>
          )}
          {props.retreatNum > 1 && (
            <img
              src={require('./colorless.png')}
              alt='C'
              className='wrt-symbol'></img>
          )}
          {props.retreatNum > 2 && (
            <img
              src={require('./colorless.png')}
              alt='C'
              className='wrt-symbol'></img>
          )}
          {props.retreatNum > 3 && (
            <img
              src={require('./colorless.png')}
              alt='C'
              className='wrt-symbol'></img>
          )}
        </div>
      </div>
    </div>
  );
}
