import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const LogItem = ({ log }) => {
  const { url, publisher, name, isbn, authors, released } = log;

  return (
    <li className='collection-item'>
      <section>
        <a href={url} className='modal-trigger blue-text'>
          {name}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>Written by {authors}</span> last
          published by <span className='black-text'>{publisher}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{released}</Moment>
        </span>
        <a href={url} className='secondary-content'>
          {isbn}
        </a>
      </section>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default connect(null, {})(LogItem);
