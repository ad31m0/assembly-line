/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {AssemblyLine} from './AssemblyLine';

ReactDOM.render(
  <React.StrictMode >
    <AssemblyLine stages={["Idea", "Development", "Testing", "Deployed"]} />
  </React.StrictMode>,
  document.getElementById('root')
);
