import React from 'react';
import './App.scss';
import Form from './form/Form';
import Text from './text/Text';
const App:React.FC =()=> {
  return (
    <div className="App">
        <Text />
        <Form/>
    </div>
  );
}

export default App;
