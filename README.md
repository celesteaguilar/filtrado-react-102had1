# Filtrado y Búsqueda sobre Listado de Componentes de Infraestructura

Proyecto desarrollado en React con Vite para la asignatura Herramientas Avanzadas para el Desarrollo de Aplicaciones (102HAD1) - UTLA.

## Descripción

La aplicación permite filtrar y buscar componentes de infraestructura de hardware en tiempo real utilizando entradas controladas (`useState`) y la ejecución de efectos secundarios (`useEffect`).

## Instrucciones para ejecutar el proyecto

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/celesteaguilar/filtrado-react-102had1.git](https://github.com/celesteaguilar/filtrado-react-102had1.git)

## 5. Análisis Escrito

### 1. ¿Qué se guarda en el estado y qué se calcula al renderizar, y por qué esa separación?
En el estado (`useState`) se guardan únicamente los valores ingresados por el usuario: el texto del buscador (`busqueda`) y la opción elegida (`categoria`). La lista visible de componentes se calcula en cada renderizado aplicando `.filter()` sobre la lista original. Se mantiene esta separación para asegurar una "única fuente de verdad", evitando redundancia de datos y sincronizaciones manuales de estado innecesarias.

### 2. ¿Qué le ocurriría a la aplicación si el resultado del filtro se guardara en el estado con `setElementos(...)`? Describa el comportamiento concreto que vería el usuario.
Se sobrescribiría destructivamente la lista original de componentes. Para el usuario, el comportamiento concreto sería que, al escribir una palabra y luego borrarla o cambiar de filtro, los elementos ocultados previamente no volverían a aparecer. La lista quedaría permanentemente recortada a la última búsqueda, obligando a recargar la página para recuperar el catálogo completo.

### 3. ¿Qué pasa si al `useEffect` se le quita el arreglo de dependencias, y por qué?
El efecto se ejecutaría después de cada ciclo de renderizado de la aplicación, sin importar qué cambió. Esto sucede porque React pierde la referencia para comparar si los valores de interés variaron. Como consecuencia, se degrada el rendimiento al saturar la consola con registros continuos y se corre el riesgo de provocar un bucle infinito que bloquee la pestaña si el efecto modifica algún estado.
