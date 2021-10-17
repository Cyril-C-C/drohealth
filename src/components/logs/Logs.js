import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading, isbn }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (!logs) return [loading];

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Books Available</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No books to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.isbn} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
