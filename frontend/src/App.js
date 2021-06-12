import React from 'react';
import { GetMem } from './GetMem';
import { NodeCheck } from './NodeCheck';

const App = () => {
  return <div>
  <h1>Memory Infomation</h1>
  <GetMem />
  <h1>NodeCheck Information</h1>
  <NodeCheck />
  </div>;
};

export default App;