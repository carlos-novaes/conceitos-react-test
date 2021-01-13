import React from 'react';

const Respository = ({ id, title, handleRemoveRepository }) => {
  return (
    <li>
      {title}
      <button onClick={() => handleRemoveRepository(id)}>Remover</button>
    </li>
  );
};

export default Respository;
