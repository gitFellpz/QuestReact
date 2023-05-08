import './App.css';
import Texto from'./components/modoficadorTxt/texto'
import Button from'./components/button/button'

function App() {
  return (
    <main>
      <Texto text="texto que vai ser alterado" cor="red"/>
      <Texto text="texto que vai ser alterado" cor="blue"/>
      <Button label="Enviar CV" />
    </main>
  );
}

export default App;
