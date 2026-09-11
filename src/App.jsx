import React, { useState, useEffect } from 'react';
import { elementos } from './data/elementos';
import Filtros from './components/Filtros';
import ListaElementos from './components/ListaElementos';
import './App.css';

function App() {
  // Estado para los controles de filtrado (Entradas controladas)
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');

  // Obtener categorías únicas dinámicamente desde el arreglo original
  const categorias = [...new Set(elementos.map((item) => item.categoria))];

  // REGLA FUNDAMENTAL: Calcular la lista visible en tiempo de renderizado
  // Los datos originales jamás se modifican
  const elementosFiltrados = elementos.filter((item) => {
    const coincideBusqueda = item.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === 'Todas' || item.categoria === categoria;

    return coincideBusqueda && coincideCategoria;
  });

  // useEffect con arreglo de dependencias para registrar cambios en consola
  useEffect(() => {
    console.log(
      `[EFECTO]: Filtros actualizados -> Búsqueda: "${busqueda}", Categoría: "${categoria}". Resultados encontrados: ${elementosFiltrados.length}`
    );
  }, [busqueda, categoria]);

  // Función para reiniciar los controles
  const handleLimpiarFiltros = () => {
    setBusqueda('');
    setCategoria('Todas');
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Catálogo de Componentes de Infraestructura</h1>
        <p className="subtitulo">
          Filtrado y búsqueda en tiempo real sobre listado de hardware
        </p>
      </header>

      <main className="app-main">
        <Filtros
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          categoria={categoria}
          setCategoria={setCategoria}
          categorias={categorias}
          onLimpiar={handleLimpiarFiltros}
        />

        <div className="resumen-resultados">
          <p>
            Mostrando <strong>{elementosFiltrados.length}</strong> de{' '}
            <strong>{elementos.length}</strong> componentes
          </p>
        </div>

        <ListaElementos lista={elementosFiltrados} />
      </main>
    </div>
  );
}

export default App;