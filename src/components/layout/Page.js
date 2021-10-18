import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

const Page = () => {
  const { loading, data } = getLogs();
  const [page, setPage] = useState(0);

  if (!data) return [loading];

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <section>
      {!loading && (
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPage}>
            prev
          </button>
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={`page-btn ${index === page ? 'active-btn' : null}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className='next-btn' onClick={nextPage}>
            next
          </button>
        </div>
      )}
    </section>
  );
};

Page.propTypes = {
  getLogs: PropTypes.func.isRequired,
};

export default connect(null, { getLogs })(Page);
