import React from 'react';

const Page = () => {
  return (
    <section>
      <ul className='pagination center'>
        <li className='disabled'>
          <a href='#!'>
            <i className='material-icons'>chevron_left</i>
          </a>
        </li>
        <li className='active'>
          <a href='/characters?page=1&pageSize=10'>1</a>
        </li>
        <li className='waves-effect'>
          <a href='/characters?page=2&pageSize=10'>2</a>
        </li>
        <li className='waves-effect'>
          <a href='/characters?page=3&pageSize=10'>3</a>
        </li>
        <li className='waves-effect'>
          <a href='/characters?page=4&pageSize=10'>4</a>
        </li>
        <li className='waves-effect'>
          <a href='/characters?page=5&pageSize=10'>5</a>
        </li>
        <li className='waves-effect'>
          <a href='#!'>
            <i className='material-icons'>chevron_right</i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Page;
