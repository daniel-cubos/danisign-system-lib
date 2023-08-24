import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { Button } from '../.';

const App = () => {
  function handleClick() {
    console.log('clicked');
  }
  return (
    <div>
      <h1>Button</h1>

      <Button colors="orange" variant="normal" onClick={() => handleClick()}>
        My Button
      </Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
