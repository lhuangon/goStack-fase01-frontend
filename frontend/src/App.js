import React, {useState, useEffect } from 'react';
import Header from './components/Header';
import api from './services/api';

import './App.css'
import backgroundImage from './assets/photo-dev.jpg';

function App() {

  const [projects, setProjects] = useState([]); //Usando o UseState

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, []); //recebe dois parâmetro, o 1º é uma função que queremos disparar e a outra e quando queremos dispara 

  async function handleAddProject() {

    //setProjects([...projects, `Novo projeto ${Date.now()}`]) //Aplicando o conceito de imutabilidade
    const response = await api.post('projects', { //Usamos API para enviar informações do back-end para o front
      title: `Novo projeto ${Date.now()}`, // colocamos os dados em uma variavel
      owner: "Lhuan Gonçalves" //Usamos o async await para executar a função assim que receber os dados
    });

    const project = response.data;

    setProjects([...projects, project]); //usando o conceito de estado e imutabilidade 
  }

  return (
    <>
      <Header title = "Projects"/>

        <ul>
          {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul> 

        <button type="submit" onClick={handleAddProject}>Adicionar projeto</button>
    </> 
  );
}

export default App;