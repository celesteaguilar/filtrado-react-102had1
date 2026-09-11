import React from 'react';

function ListaElementos({ lista }) {
  if (lista.length === 0) {
    return (
      <div className="mensaje-vacio">
        <p>No se encontraron componentes que coincidan con la búsqueda.</p>
      </div>
    );
  }

  return (
    <div className="grid-elementos">
      {lista.map((item) => (
        <div key={item.id} className="tarjeta-elemento">
          <span className="categoria-tag">{item.categoria}</span>
          <h3>{item.nombre}</h3>
          <p className="precio-tag">${item.valor.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default ListaElementos;