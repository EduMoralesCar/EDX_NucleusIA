## 📖 Descripción del Proyecto

**EDX_NucleusIA** es una aplicación web experimental que integra inteligencia artificial mediante el uso de OpenRouter y modelos de lenguaje avanzados. Está desarrollada con Vite, TailwindCSS y JavaScript, ofreciendo una base moderna y escalable para crear asistentes conversacionales inteligentes.

---

### 🎯 Características Principales

- **⚡ Vite + Vanilla JS**: Configuración rápida y eficiente para desarrollo web.
- **🎨 TailwindCSS**: Estilos modernos y responsivos fácilmente perzonalizables.
- **🧠 OpenRouter API**: Conexión directa con modelos de lenguaje como:
  
    ```bash
    meta-llama/llama-3.3-70b-instruct:free
    ```
- **🔐 Configuración con .env**: Seguridad y flexibilidad para el uso de tokens.
- **📈 Escalable y modular:** Pensado para expandirse con nuevos modelos, funcionalidades o integraciones.
- **💡 Código abierto y educativo:** Ideal para aprender sobre IA conversacional y arquitectura web moderna.

---

## 🚀 Instalación y Configuración

### Prerrequisitos

- **[Node.js](https://nodejs.org/es) v22.14.0** 
- **[Visual Studio Code](https://code.visualstudio.com/)** (recomendado)

### Pasos de Ejecución

1. **Clonar el repositorio**

   ```bash
    git clone https://github.com/EduMoralesCar/EDX_NucleusIA.git
    # Acceder a la Carpeta mediante Consola (Opcional)
    cd EDX_NucleusIA

   ```

2. **Instalar dependencias**
   ```bash
    npm install
    npm install tailwindcss @tailwindcss/vite
    npm install @openrouter/ai-sdk-provider
    npm install ai@4.3.17
   ```

3. **Configurar OpenRouter**
   - Crear una cuenta en [OpenRouter](https://openrouter.ai/)
   - Generar tu API Key
   - Actualizar el archivo `.env` y agregar:

   ```bash
      OPENROUTER_API_KEY = tu_token_aqui
   ```
   - Configura el modelo en `app.js` si quieres personalizarlo:
   
   ```bash
      model: 'meta-llama/llama-3.3-70b-instruct:free'
   ```

4. **Ejecutar el Proyecto**
   ```bash
   # EJecutar en la terminal
      npm run dev
   ```

5. Una vez ejecutado se lanza un servidor local:
   
🌐 Acceso local: [http://localhost:5173/](http://localhost:5173/)   
   
---

## 📁 Arquitectura del Proyecto

### 📦 Estructura General
```
EDX_NucleusIA/
├── node_modules/
├── src/
│   ├── app.js
│   └── styles/
├── .env
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.ts

```

---

## 🤝 Contribución

¿Te gustaría aportar ideas, mejorar el código o expandir funcionalidades? ¡Bienvenido!

1. Haz un fork del repositorio.
2. Crea una rama nueva: git checkout -b feature/nueva-funcionalidad
3. Sube tus cambios y crea un Pull Request.
4. Explica brevemente tu aporte.

---

## Tecnologías Usadas

- JavaScript / HTML / CSS / TypeScript
- Vite
- TailwindCSS
- OpenRouter API

---

##🧪 Roadmap y Mejoras Futuras
- Integración con otros proveedores de IA (ej: OpenAI, Google AI)
- Soporte multilenguaje para usuarios
- Interfaz más avanzada y personalizable
- Guardado de conversaciones
- Test unitarios y documentación técnica

---

## 👨‍💻 Autor

Desarrollado por [EduMoralesCar](https://github.com/EduMoralesCar).

---

##📄 Licencia
Este proyecto es de código abierto bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

---
