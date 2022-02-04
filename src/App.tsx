import React from 'react';
import './App.css';
import {AssemblyLine} from './AssemblyLine'

function App() {
  return (
    <div className="Apps">
        <AssemblyLine stages={[
          "Idea",
          "Development",
          "Testing",
          "Deployment"
        ]}/>
    </div>
  );
}

export default App;
