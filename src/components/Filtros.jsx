import React from 'react';

function Filtros({ busqueda, setBusqueda, categoria, setCategoria, categorias, onLimpiar }) {
  return (
    <div className="panel-filtros">
      <div className="campo-grupo">
        <label htmlFor="busqueda">Buscar componente:</label>
        <input
          id="busqueda"
          type="text"
          placeholder="Escribe para buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="campo-grupo">
        <label htmlFor="categoria">Categoría:</label>
        <select
          id="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="Todas">Todas</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <button className="btn-limpiar" onClick={onLimpiar}>
        Limpiar filtros
      </button>
    </div>
  );
}

export default Filtros;