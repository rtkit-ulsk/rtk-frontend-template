import 'styles/global.css';

import App from 'containers/App';
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxProvider from 'store/ReduxProvider';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
