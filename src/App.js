import React, { useState, useEffect } from 'react';
import Repository from './components/Repository';
import api from './services/api';

import './styles.css';

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then((res) => {
      setRepositories(res.data);
    });
  }, []);

  async function handleAddRepository() {
    const modelRepo = {
      url: 'https://github.com/Rocketseat/unform',
      title: 'Unform',
      techs: ['React', 'ReactNative', 'TypeScript', 'ContextApi'],
    };

    api.post('repositories', modelRepo).then((res) => {
      setRepositories([...repositories, res.data]);
    });
  }

  async function handleRemoveRepository(id) {
    api.delete(`repositories/${id}`).then(() => {
      setRepositories(repositories.filter((repo) => repo.id !== id));
    });
  }

  return (
    <div>
      <ul data-testid='repository-list'>
        {repositories.map(({ id, title }) => (
          <Repository
            key={id}
            id={id}
            title={title}
            handleRemoveRepository={handleRemoveRepository}
          />
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
