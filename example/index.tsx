import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import {
  Button,
  InputText,
  Chip,
  ConfirmDialog,
  NotificationDialog,
} from '../.';

const App = () => {
  const [open, setOpen] = React.useState(false);

  function handleConfirm() {
    console.log('confirm');
  }

  function handleCancel() {
    console.log('cancel');
  }
  return (
    <div>
      <h1>Button</h1>

      <Button
        colors="orange"
        variant="normal"
        onClick={() => setOpen(true)}
        width={400}
      >
        My Button
      </Button>

      <ConfirmDialog
        btnCancelText="Cancelar"
        btnConfirmText="Confirmar"
        description="Deseja realmente excluir essa postagem"
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
        open={open}
        title="Excluir postagem"
      />

      {open && (
        <NotificationDialog
          title="Quarto excluído!"
          description="Caso você queira voltar a disponibilziar o quarto para reservas, por favor faça o cadastro do quarto novamente."
          actionText="Voltar para o painel"
          handleClose={() => {}}
          type="success"
          handleNextLocation={() =>
            (window.location.href = 'https://google.com.br')
          }
        />
      )}

      <InputText
        width={400}
        placeholder="Digite seu nome"
        labelText="Qual o seu nome"
        labelId="name"
      />

      <Chip
        title="Reserva: t7Q40v$W8W"
        color="#45cf"
        textColor="white"
        width={250}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
