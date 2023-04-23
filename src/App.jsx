import logo from './logo.svg';
import Header from './components/Header';
import './App.css';

function App() {

  function handleSubmit() {
    alert('Deu certo');
  }

  return (
    <>
      <Header />
      <main>
        <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <input type="text" />

          <label>Email</label>
          <input type="text" />

          <button type="submit">Cadastrar</button>
        </form>
      </main>
    </>
  );
}

export default App;
