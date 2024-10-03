import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import logo from './images/hqa.png';
import axios from 'axios';
import Usuarios from './Usuarios'; // O novo componente

function Formulario() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });
  const ip = "localhost";
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`http://${ip}:5000/api/cadastro`, {
        name,
        email,
        telefone,
      });
      console.log(response.data);

      setName('');
      setEmail('');
      setTelefone('');

      setMessage({ text: 'Dados enviados com sucesso!', type: 'success' });
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setMessage({ text: 'Erro ao enviar os dados. Tente novamente.', type: 'error' });
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Telefone
            <input
            id="telefone"
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </label>
        </div>
        <button id="submit-button" type="submit">Enviar</button>
      </form>
      {message.text && (
        <p className={`message ${message.type}`}>{message.text}</p>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <img src={logo} alt="Descrição da imagem" className="logo" />
        <h1>Hora do QA</h1>

        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
