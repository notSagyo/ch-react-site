
# portfol.io

Sitio desarrollado para la cursada de React de Coderhouse. Contiene las funcionalidades básicas de un e-commerce, y una aplicación de chat (demo). Todos los datos (productos, mensajes, etc.) son recibidos de Firestore (Firebase) y presentados mediante la UI desarrollada en React.


![App Gif](https://i.imgur.com/j9YJQU7.gif)

## Tech Stack
Tecnologías aprendidas durante el desarrollo del sitio. Algunas fueron parcialmente implementadas o removidas del build final, mientras aprendía cuál se ajustaba más a mis preferencias.
* React
* Mantine (React Framework)
* CSS / SASS / CSS Modules / CSSinJS (Emotion, Mantine)
* TypeScript
* Vite
* Firebase / Firestore backend
* Git / GitHub / GitHub Pages
* Figma
* Recoil (Removido. Context era suficiente)
## Características

- Páginas: Landing, Pricing, Details, Cart, Chat y 404
- Productos (planes con ID y categorías) y mensajes recibidos desde Firestore
- Sistema de carrito y compra donde se genera una orden almacenada en Firestore
- Inicio de sesión con Google
- Uso de caché para reducir las llamadas de Firestore
- Aplicación de chat con soporte para mensajes directos/chat global/equipos
- Barra con conversaciones abiertas y mensajes del canal activo se actualizan en tiempo real
- Diseño principalmente para desktop pero responsive utilizando un único breakpoint (excepto chat)
- Uso de diferentes Contexts para abstraer la responsabilidad de los componentes (Cart/User/ChannelContext)
- GitHub Pages activo para probar el funcionamiento del sitio (y configuración para que funcione el routing)
- Código de TypeScript estricto libre de tipos "any"
- Y más que ya olvidé :)
## Servir el proyecto

En orden de levantar una versión local de pruebas del proyecto, luego de clonar el repositorio correr los comandos:

```bash
  npm install
  npm start
```
O para buildear una versión lista para subir:
```bash
npm run build
```
Y para probar el build:
```bash
npm run preview
```
