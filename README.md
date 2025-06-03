
# ToDo List Backend - Actividad 6

Este es el backend de la aplicación ToDo List desarrollado con **Node.js + Express + MySQL**.

## 🚀 Funcionalidades

- CRUD completo para tareas (Tasks) y metas (Goals).
- API protegida con API Key.
- Conexión a base de datos MySQL.
- Manejo de códigos de respuesta HTTP (200, 400, 401).
- Integración completa con el frontend.

## 🛠 Tecnologías

- Node.js (LTS)
- Express
- MySQL
- CORS

## 📂 Instalación

### 1️⃣ Clonar el repositorio

git clone https://github.com/Pachpoder/backend-todoList.git
cd backend-todoList

### 2️⃣ Instalar dependencias

npm install

### 3️⃣ Configurar base de datos en `db.js` (ya configurado):

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tu_password',
  database: 'todo_app'
});

### 4️⃣ Iniciar el backend

node server.js

El backend quedará disponible en:

http://localhost:3000

## 🔐 API Key

Para todas las peticiones debes enviar:

Authorization: 12345-mi-apikey



# ToDo List Frontend - Actividad 6

Este es el frontend de la aplicación ToDo List desarrollado con **React + Redux Toolkit + Axios + React Bootstrap**.

## 🚀 Funcionalidades

- Agregar, eliminar y visualizar tareas (Tasks).
- Agregar, eliminar y visualizar metas (Goals).
- Consumo de API REST desde el backend.
- Manejo de estados con Redux Toolkit.
- UI responsive usando React Bootstrap.

## 🛠 Tecnologías

- React 19
- Redux Toolkit
- Axios
- React Bootstrap

## 📂 Instalación

### 1️⃣ Clonar el repositorio

git clone https://github.com/Pachpoder/Proyecto2.git
cd Proyecto2

### 2️⃣ Instalar dependencias

npm install

### 3️⃣ Iniciar el frontend

npm start

El frontend quedará disponible en:

http://localhost:3001

## 🔗 Conexión al backend

El frontend realiza peticiones hacia:

http://localhost:3000

Asegúrate que el backend esté ejecutándose antes de iniciar el frontend.

✅ Ambos proyectos deben ejecutarse en paralelo.
✅ Esta entrega cubre la actividad completa de la Unidad VI (Docker no incluido).
