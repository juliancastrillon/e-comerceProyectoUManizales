# E-commerce Proyecto U Manizales

Este es un proyecto de e-commerce desarrollado con Angular

## Demo en vivo

Puedes probar la aplicación antes de descargarla en:
[https://e-comerce-proyecto-u-manizales.vercel.app/](https://e-comerce-proyecto-u-manizales.vercel.app/)

## Características

- Lista de productos con categorías
- Detalles de producto
- Carrito de compras
- Diseño responsivo
- Integración con API de Platzi

## Tecnologías utilizadas

- Angular
- TypeScript
- SCSS
- RxJS
- Angular Router
- LocalStorage para persistencia de datos

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
- Node.js (versión 18.x o superior)
- npm (viene incluido con Node.js)
- Git

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/juliancastrillon/e-comerceProyectoUManizales.git
```

2. Navega al directorio del proyecto:
```bash
cd EComerceProyectoUManizales
```

3. Instala las dependencias:
```bash
npm install
```

4. Inicia el servidor de desarrollo:
```bash
ng serve
```

5. Abre tu navegador y visita `http://localhost:4200`

## Autor

Julián Castrillón - Universidad de Manizales

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:
- `src/app/components/`: Contiene los componentes de la aplicación
- `src/app/services/`: Contiene los servicios para manejar la lógica de negocio
- `src/app/models/`: Contiene las interfaces y modelos de datos
- `src/assets/`: Contiene los recursos estáticos (imágenes, estilos, etc.)

## Características

- Lista de productos con filtrado por categorías
- Detalles de producto individual
- Carrito de compras funcional
- Diseño responsive
- Integración con API REST

## Servidor de Desarrollo

Para iniciar el servidor de desarrollo local, ejecuta:

```bash
ng serve
```

Una vez que el servidor esté en funcionamiento, abre tu navegador y navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cuando modifiques cualquiera de los archivos fuente.

## Generación de Código

Angular CLI incluye potentes herramientas de generación de código. Para generar un nuevo componente, ejecuta:

```bash
ng generate component nombre-del-componente
```

Para obtener una lista completa de esquemas disponibles (como `components`, `directives`, o `pipes`), ejecuta:

```bash
ng generate --help
```

## Compilación

Para compilar el proyecto, ejecuta:

```bash
ng build
```

Esto compilará tu proyecto y almacenará los archivos compilados en el directorio `dist/`. Por defecto, la compilación de producción optimiza tu aplicación para rendimiento y velocidad.

## Ejecución de Pruebas Unitarias

Para ejecutar pruebas unitarias con el ejecutor de pruebas [Karma](https://karma-runner.github.io), usa el siguiente comando:

```bash
ng test
```

## Ejecución de Pruebas End-to-End

Para pruebas end-to-end (e2e), ejecuta:

```bash
ng e2e
```

Angular CLI no viene con un framework de pruebas end-to-end por defecto. Puedes elegir uno que se adapte a tus necesidades.

## Recursos Adicionales

Para obtener más información sobre el uso de Angular CLI, incluyendo referencias detalladas de comandos, visita la página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

