# Backend - Actividad Unidad III: Node.js + Express 

Este proyecto implementa un backend simple para gestionar tareas y metas personales usando **Node.js** y **Express**.  
El sistema guarda los datos en **arreglos en memoria** y está protegido por una API key a través de un middleware.

---

## Tecnologías utilizadas

- Node.js (LTS)
- Express

---

## Estructura del proyecto

```bash
/backend-actividad3
  - server.js
  - package.json
  - README.md
```

---

## Instrucciones para ejecutar el proyecto

### 1. Clona el repositorio

```bash
git clone https://github.com/Pachpoder/backend-todoList.git
cd backend-actividad3
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Ejecuta el servidor

```bash
node server.js
```
El servidor iniciará en `http://localhost:3000`

---

## Seguridad: API Key

Todos los endpoints requieren incluir un **header Authorization** con la siguiente API key:

```
Authorization: 12345-mi-apikey
```

Si no se incluye o es incorrecta, se devuelve un error 401.

---

## Endpoints disponibles (usando Postman)

### GET `/getTasks`

- **Descripción:** Obtiene todas las tareas.
- **Método:** `GET`
- **Headers:**  
  `Authorization: 12345-mi-apikey`

### GET `/getGoals`

- **Descripción:** Obtiene todas las metas.
- **Método:** `GET`
- **Headers:**  
  `Authorization: 12345-mi-apikey`

---

### POST `/addTask`

- **Descripción:** Agrega una nueva tarea.
- **Método:** `POST`
- **Headers:**  
  `Authorization: 12345-mi-apikey`  
  `Content-Type: application/json`
- **Body (JSON):**

```json
{
  "id": 1,
  "name": "Estudiar Redux",
  "description": "Revisar documentación oficial",
  "dueDate": "2024-05-10"
}
```

---

### POST `/addGoal`

- **Descripción:** Agrega una nueva meta.
- **Método:** `POST`
- **Headers:**  
  `Authorization: 12345-mi-apikey`  
  `Content-Type: application/json`
- **Body (JSON):**

```json
{
  "id": 2,
  "name": "Crear portafolio",
  "description": "Subir proyectos a GitHub",
  "dueDate": "2024-05-20"
}
```

---

### DELETE `/removeTask`

- **Descripción:** Elimina una tarea por su `id`.
- **Método:** `DELETE`
- **Headers:**  
  `Authorization: 12345-mi-apikey`  
  `Content-Type: application/json`
- **Body (JSON):**

```json
{
  "id": 1
}
```

---

### DELETE `/removeGoal`

- **Descripción:** Elimina una meta por su `id`.
- **Método:** `DELETE`
- **Headers:**  
  `Authorization: 12345-mi-apikey`  
  `Content-Type: application/json`
- **Body (JSON):**

```json
{
  "id": 2
}
```

---

## Notas

- No se utiliza base de datos.
- Todos los datos se almacenan en arreglos en memoria (`let tasks = []`, `let goals = []`).
- Si el servidor se reinicia, los datos se pierden (comportamiento esperado).

---

## Estado del proyecto

✔️ Funcional  
✔️ Seguro (con API key)  
✔️ Estructurado  
✔️ Listo para entrega académica

