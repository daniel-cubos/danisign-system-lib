import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { Button, InputText } from '../.';

const App = () => {
  function handleClick() {
    console.log('clicked');
  }
  return (
    <div>
      <h1>Button</h1>

      <Button
        colors="orange"
        variant="normal"
        onClick={() => handleClick()}
        width="400"
      >
        My Button
      </Button>

      <InputText
        width="400"
        placeholder="Digite seu nome"
        labelText="Qual o seu nome"
        labelId="name"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
