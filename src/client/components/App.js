import React, { useState } from 'react';
import '../styles/style.css';
import Nav from './Nav';

const App = (props) => {

  let [count, setCount] = useState(0);

  return (
    <div className="page-container">
      <Nav />
      <div className="container">
        <div className="form-container">
          <h1 className="form-title">The Count is {count}</h1>
          <button className="btn btn-submit" onClick={() => setCount(count + 1)}>Submit</button>
        </div>
      </div>
    </div>
  )
};

export default App;