import React, { Fragment, useState, useEffect } from 'react';
import { Provider } from 'react-redux';

import Navbar from './components/layout/Navbar';
import Spinner from './components/layout/Spinner';
import AddBtn from './components/layout/AddBtn';
import Page from './components/layout/Page';
import Logs from './components/logs/Logs';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Page Loader

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    // Init Materialize JS

    M.AutoInit();
  });

  return (
    <Provider store={store}>
      {!loading ? (
        <Fragment>
          <Navbar />
          <section className='container'>
            <AddBtn />
            <Logs />
            <Page />
          </section>
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Provider>
  );
};

export default App;
