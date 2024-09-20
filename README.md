# React Introduction and Vite Setup

En el 2013, Facebook lanzó una biblioteca de JavaScript pensada para desarrollar UI dinámicas llamada **React**. En sus inicios, la adopción de React fue un tema debatido entre los desarrolladores, pero a lo largo de los años ha demostrado ser una herramienta sólida y ampliamente utilizada.

Actualmente, **React** se encuentra en la versión 18 y está a punto de lanzar la versión 19, que incluirá funcionalidades interesantes.

## Instalación de React

Anteriormente, se utilizaba el siguiente comando para crear un proyecto en React:

```bash
npx create-react-app my-app
```
Sin embargo, esto ha cambiado, y ahora React permite usar distintos frameworks que puedes encontrar [Aqui](https://react.dev/learn/start-a-new-react-project).

No es estrictamente necesario usar un framework para empezar con React. Se puede configurar un entry point manualmente, aunque en este caso usaremos Vite. Puedes obtener más información sobre Vite en su  [Sitio Web Oficial](https://vitejs.dev/).

# Creación del Proyecto con Vite
Para iniciar un proyecto con Vite, ejecuta el siguiente comando en tu terminal:
```bash
npm create vite@latest
```
Selecciona las opciones necesarias, como el uso de JavaScript y React.

Sigue las instrucciones en pantalla para ejecutar el proyecto. Si seguiste los pasos correctamente, deberías ver algo similar a esto en tu navegador local.

## ¿Por qué usar Vite?
Aunque puede que no veamos más sobre Vite en clase, es útil conocerlo. Vite es un entorno de desarrollo rápido y fácil de usar. Además, su integración con tecnologías como JavaScript y TypeScript lo hace una herramienta poderosa para aprender y enseñar.

Hot Module Replacement (HMR)
Una de las características clave de Vite es el Hot Module Replacement (HMR). Esto permite que la página web se actualice automáticamente cuando detecta cambios en el código, sin recargar toda la aplicación. Puedes probarlo editando el archivo ```App.jsx``` y observando los cambios reflejados inmediatamente en tu navegador.

# Crear un Componente en React
Dentro de la carpeta ```src```, crea un archivo llamado ```Button.jsx``` y añade el siguiente código:

```jsx
import React, { useState } from 'react';

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};

export default Button;

```

Luego, llama a este componente en ```App.jsx```:

```jsx
import Button from './Button';

function App() {
  return (
    <div>
      <h1>React and Vite</h1>
      <Button />
    </div>
  );
}

export default App;

```
Ahora, al hacer clic en el botón, este incrementará su valor en 1.

# Props en React
Los props en React son propiedades que se pasan a los componentes. Por ejemplo, en ```Button.jsx```, puedes usar props para personalizar el texto del botón:

```jsx
const Button = ({ text }) => {
  return (
    <button>{text}</button>
  );
};

```
Y en ```App.jsx``` lo puedes utilizar de la siguiente manera:

```jsx
<Button text="Click me" />

```

# Children en React
Los children son otra funcionalidad importante de React. Pueden pasar contenido adicional dentro de un componente. Considera los siguientes dos componentes:

```WrapperList.jsx```

```jsx
export const WrapperList = ({ children }) => {
  return (
    <div>
      <h2>Lista de Compras</h2>
      <div>{children}</div>
    </div>
  );
};

```
```List.jsx```

```jsx
export const List = () => {
  return (
    <ul>
      <li>Pan</li>
      <li>Queso</li>
      <li>Mantequilla</li>
    </ul>
  );
};

```

Puedes envolver ```List``` dentro de ```WrapperList``` en ```App.jsx``` así:

```jsx
<WrapperList>
  <List />
</WrapperList>

```

Esto muestra la lista de compras dentro del componente ```WrapperList```, aprovechando el uso de ```children```.

# Conclusión
React es una biblioteca poderosa y flexible para la creación de interfaces de usuario. Al combinar React con Vite, puedes crear aplicaciones rápidamente con una experiencia de desarrollo fluida. Con los conceptos de Hooks, Props, y Children, tienes una base sólida para seguir profundizando en el desarrollo con React.

***¡Ahora es tu turno de aplicar lo que has aprendido!***
