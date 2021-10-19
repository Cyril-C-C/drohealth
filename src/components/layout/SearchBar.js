import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs, searchCharacters } from '../../actions/logActions';

const SearchBar = ({ searchLogs, searchCharacters }) => {
  const text = useRef('');

  const onChange = (e) => {
    searchLogs(text.current.value);
    searchCharacters(text.current.value);
  };

  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <section className='nav-wrapper'>
        <form>
          <section className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search for a book...'
              ref={text}
              onChange={onChange}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </section>
        </form>
      </section>
    </nav>
  );
};

SearchBar.protoTypes = {
  searchLogs: PropTypes.func.isRequired,
  searchCharacters: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs, searchCharacters })(SearchBar);
