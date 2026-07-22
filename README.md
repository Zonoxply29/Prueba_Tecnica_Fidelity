# Prueba Técnica Fidelity — Maquetado Web

Landing page responsiva desarrollada como prueba técnica para la posición de **UX Engineer / Maquetador Web**.

El proyecto reproduce el diseño proporcionado en el mockup desktop y propone una adaptación **mobile first**, utilizando PHP para organizar la vista en componentes, Sass para estructurar los estilos jQuery para el comportamiento visual del header y Swiper.js para el carrusel principal.

## Tecnologías utilizadas

- HTML5
- PHP 8.2.12
- Sass
- CSS3
- JavaScript
- Swiper.js 11
- Node.js y npm
- jQuery 4.0.0 Slim
- Git
- GitHub Actions
- GitHub Pages

No se utilizaron frameworks CSS o JavaScript como Bootstrap, Tailwind CSS, React o Vue.

## Características

- Desarrollo con enfoque mobile first.
- Header responsivo mediante imágenes proporcionadas.
- Header sticky durante el desplazamiento.
- Carrusel funcional con tres banners utilizando Swiper.js.
- Navegación mediante flechas e indicadores.
- Reproducción automática del carrusel.
- Fuente Montserrat cargada localmente.
- Sección de premios generada dinámicamente con PHP.
- Tarjetas responsivas con efectos hover.
- Overlay blanco y botón “Canjea Ya”.
- Adaptación de las interacciones para dispositivos táctiles.
- Footer responsivo con enlaces e iconos de redes sociales.
- HTML semántico y estructura modular.
- Generación automática de una versión estática compatible con GitHub Pages.

## Estructura del proyecto

```text
prueba-tecnica-fidelity/
├── .github/
│   └── workflows/
│       └── pages.yml
│
├── scripts/
│   └── build.mjs
│
├── src/
│   ├── index.php
│   │
│   ├── partials/
│   │   ├── header.php
│   │   ├── slider.php
│   │   ├── reward-card.php
│   │   └── footer.php
│   │
│   ├── scss/
│   │   ├── abstracts/
│   │   │   └── _variables.scss
│   │   ├── base/
│   │   │   ├── _fonts.scss
│   │   │   └── _reset.scss
│   │   ├── components/
│   │   │   ├── _reward-card.scss
│   │   │   └── _swiper.scss
│   │   ├── layout/
│   │   │   ├── _header.scss
│   │   │   └── _footer.scss
│   │   ├── pages/
│   │   │   └── _home.scss
│   │   └── main.scss
│   │
│   ├── css/
│   │   └── main.css
│   │
│   ├── js/
│   │   └── main.js
│   │
│   └── assets/
│       ├── fonts/
│       ├── header/
│       ├── icons/
│       ├── premios/
│       └── slide/
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

La carpeta `dist` se genera automáticamente al ejecutar el proceso de compilación y no se almacena en el repositorio.

## Requisitos

Para ejecutar el proyecto localmente se necesita:

- PHP 8 o superior.
- Node.js.
- npm.
- Git.

Para comprobar las versiones instaladas:

```bash
php -v
node -v
npm -v
git --version
```

## Instalación

Clonar el repositorio:

```bash
git clone AGREGAR_URL_DEL_REPOSITORIO
```

Entrar al proyecto:

```bash
cd prueba-tecnica-fidelity
```

Instalar las dependencias:

```bash
npm install
```

## Desarrollo local

El proyecto utiliza dos procesos durante el desarrollo.

### Servidor PHP

```bash
npm run dev:php
```

Abrir en el navegador:

```text
http://127.0.0.1:8000
```

### Compilación automática de Sass

En una segunda terminal:

```bash
npm run dev:sass
```

Este comando observa los cambios realizados en los archivos `.scss` y genera automáticamente:

```text
src/css/main.css
```

## Compilación para producción

Para generar la versión estática:

```bash
npm run build
```

Este proceso realiza las siguientes tareas:

1. Elimina la versión anterior de `dist`.
2. Compila Sass en formato comprimido.
3. Ejecuta PHP para generar el HTML estático.
4. Copia los archivos JavaScript.
5. Copia imágenes, fuentes e iconos.
6. Genera la carpeta final `dist`.

Resultado:

```text
dist/
├── .nojekyll
├── index.html
├── css/
│   └── main.css
├── js/
│   └── main.js
└── assets/
```

## Vista previa del build

Para probar exactamente la versión que será publicada:

```bash
npm run preview
```

Abrir:

```text
http://127.0.0.1:8080
```

## Uso de PHP

PHP se utiliza para organizar la landing page en componentes reutilizables:

- Header.
- Carrusel.
- Tarjetas de premios.
- Footer.

También se utiliza un arreglo de datos para generar las tarjetas sin duplicar manualmente el mismo HTML.

GitHub Pages no ejecuta PHP en el servidor. Por esa razón, el script de compilación ejecuta los archivos PHP durante el build y genera un archivo `index.html` completamente estático dentro de `dist`.

## Uso de Sass

Los estilos se encuentran separados según su responsabilidad:

- Variables globales.
- Fuentes.
- Reset y estilos base.
- Componentes.
- Layout.
- Estilos de la página principal.

El archivo principal es:

```text
src/scss/main.scss
```

Sass genera el CSS final utilizado por el navegador.

## Uso de jQuery

jQuery se utiliza para controlar el comportamiento visual del header durante el desplazamiento de la página.

Al detectar que el usuario ha realizado scroll, se agrega dinámicamente la clase:

```text
site-header--scrolled
```

## Diseño responsivo

La implementación sigue un enfoque mobile first.

Se realizaron adaptaciones para:

- Teléfonos móviles.
- Tablets.
- Computadoras de escritorio.
- Pantallas de mayor resolución.

El header cambia automáticamente entre su imagen mobile y desktop mediante el elemento HTML `<picture>`.

La cuadrícula de premios utiliza:

- Una columna en mobile.
- Dos columnas en tablet.
- Tres columnas en desktop.

El footer cambia de una estructura vertical en mobile a una distribución horizontal en desktop.

## Accesibilidad

El proyecto incluye:

- Etiquetas HTML semánticas.
- Textos alternativos en imágenes.
- Nombres accesibles para botones.
- Navegación mediante teclado en el carrusel.
- Estados `focus-visible`.
- Enlaces telefónicos con protocolo `tel`.
- Atributos ARIA en elementos interactivos.

## Despliegue

El sitio se publica mediante GitHub Actions.

Cada vez que se realiza un push a la rama `main`, el workflow:

1. Descarga el repositorio.
2. Instala las dependencias.
3. Instala PHP CLI.
4. Ejecuta el build.
5. Genera la carpeta `dist`.
6. Publica el contenido en GitHub Pages.

El archivo de configuración se encuentra en:

```text
.github/workflows/pages.yml
```

## Scripts disponibles

```bash
npm run dev:php
```

Inicia el servidor local de PHP.

```bash
npm run dev:sass
```

Compila Sass en modo observación.

```bash
npm run build
```

Genera la versión estática de producción.

```bash
npm run preview
```

Inicia un servidor local para probar la carpeta `dist`.

## Autor

**Hugo Gustavo Gómez Vázquez**

Ingeniero en Software  
Frontend Developer / UX Engineer
