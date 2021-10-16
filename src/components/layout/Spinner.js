import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export const Spinner = () => {
  return (
    <Fragment>
        <section className='spinner'>
          <img src={spinner} alt='Loading...' />
        </section>
    </Fragment>
  );
};

export default Spinner;
