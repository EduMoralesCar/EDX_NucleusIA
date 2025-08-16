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

- **Node.js v22.14.0** 
- **Visual Studio Code** (recomendado)

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
   - Actualizar el archivo .env y agregar:

   ```bash
      OPENROUTER_API_KEY = tu_token_aqui
   ```
   - En app.js, configurar el models (opcional) en caso de que quieras utilizar tu propio Models:
   
   ```bash
      model: 'meta-llama/llama-3.3-70b-instruct:free'
   ```

4. **Ejecutar el Proyecto**
   ```bash
   # EJecutar en la terminal
      npm run dev
   ```
   
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
## 👨‍💻 Autor

Desarrollado por [EduMoralesCar](https://github.com/EduMoralesCar).
