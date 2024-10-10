import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/usuarios'); // Use o nome do serviço se estiver em Docker
        setUsuarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <div className="lista-usuarios">
      <h1>Lista de Usuários</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.length > 0 ? (
            usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
                <td>{usuario.telefone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Nenhum usuário cadastrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;



