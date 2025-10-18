# 🍽️ EarendelFood

## 📖 Descripción
EarendelFood es una aplicación web moderna para la gestión de menús y pedidos de restaurante. Permite a los usuarios explorar el menú por categorías, agregar productos al carrito y gestionar sus pedidos de manera intuitiva y eficiente.

## ✨ Características Principales
- 📱 Interfaz responsiva y moderna
- 🛒 Carrito de compras persistente
- 🍳 Categorización de productos (Desayunos, Almuerzos, Parrilladas, Postres, Licores)
- 💳 Gestión de pedidos
- 🔍 Búsqueda y filtrado de productos

## 🛠️ Tecnologías Utilizadas
- **Frontend:**
  - React 18
  - Vite
  - React Router Dom
  - React Bootstrap
  - React Icons
  
- **Estado y Validación:**
  - Context API para gestión del estado
  - Zod para validación de esquemas
  - js-cookie para persistencia del carrito

## 🚀 Instalación y Ejecución

### Prerequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/CarlosBelloAviles/EarendelFood.git
cd EarendelFood
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

4. Para crear una build de producción:
```bash
npm run build
```

## 📂 Estructura del Proyecto
```
src/
  ├── components/     # Componentes reutilizables
  ├── Context/       # Contexto para el carrito
  ├── Views/         # Páginas principales
  ├── utils/         # Utilidades y helpers
  ├── schemas/       # Esquemas de validación
  └── assets/        # Recursos estáticos
```

## 🎯 Aprendizajes del Proyecto
- Implementación de Context API para manejo de estado global
- Gestión de estado persistente con cookies
- Estructuración de proyectos React con Vite
- Diseño de interfaces con React Bootstrap
- Validación de datos con Zod
- Organización modular del código
- Manejo de rutas con React Router

## 🤝 Contribuir
Las contribuciones son siempre bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia
Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor
Carlos Bello Aviles
- GitHub: [@CarlosBelloAviles](https://github.com/CarlosBelloAviles)
