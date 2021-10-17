import React from 'react';

const AddBtn = () => {
  return (
    <section className='fixed-action-btn'>
      <a
        href='#!'
        className='btn-floating btn-large blue darken-2 modal-trigger'
      >
        <i className='large material-icons'>menu</i>
      </a>
      <ul>
        <li>
          <a href='#!' className='btn-floating pink'>
            <i className='material-icons'>contact_mail</i>
          </a>
        </li>
        <li>
          <a href='#!' className='btn-floating orange'>
            <i className='material-icons'>contact_phone</i>
          </a>
        </li>
        <li>
          <a href='#!' className='btn-floating red'>
            <i className='material-icons'>insert_chart</i>
          </a>
        </li>
        <li>
          <a href='#!' className='btn-floating yellow darken-1'>
            <i className='material-icons'>format_quote</i>
          </a>
        </li>
        <li>
          <a href='#!' className='btn-floating green'>
            <i className='material-icons'>publish</i>
          </a>
        </li>
        <li>
          <a href='#!' className='btn-floating blue'>
            <i className='material-icons'>attach_file</i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default AddBtn;
