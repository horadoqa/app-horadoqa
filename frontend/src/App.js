import React, { useState } from 'react';
import './App.css';
import logo from './images/hqa.png';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' }); // Estado para gerenciar a mensagem e o tipo

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/cadastro', {
        name,
        email,
        telefone,
      });
      console.log(response.data);

      // Limpar os campos após o envio
      setName('');
      setEmail('');
      setTelefone('');

      // Definir a mensagem de sucesso
      setMessage({ text: 'Dados enviados com sucesso!', type: 'success' });
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setMessage({ text: 'Erro ao enviar os dados. Tente novamente.', type: 'error' }); // Mensagem de erro
    }
  };

  return (
    <div className="App">
      <img src={logo} alt="Descrição da imagem" className="logo" />

      <h1>Hora do QA</h1>
      <h2>Formulário de Cadastro</h2>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Nome
              <input
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
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Enviar</button>
        </form>
        {/* Exibir mensagem de sucesso ou erro */}
        {message.text && (
          <p className={`message ${message.type}`}>{message.text}</p>
        )}
      </div>
    </div>
  );
}

export default App;
