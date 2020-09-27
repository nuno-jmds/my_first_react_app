import React from 'react';
import ReactDOM from 'react-dom';
import './AllStyles.css'
import Header from './Header'
import Footer from './Footer'
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <div className='PrincipalComponents'>
      <ComponentOne/>
      <ComponentTwo/>
      <ComponentThree/>
    </div>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
