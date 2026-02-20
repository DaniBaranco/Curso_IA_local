# 🤖 Curso IA Local - Chrome AI APIs

Repositorio con proyectos de ejemplo que demuestran el uso de **APIs de IA locales y privadas** en el navegador Chrome.

> **✨ Característica principal**: Todos los proyectos funcionan **sin necesidad de conexión a internet** cuando la IA se ejecuta localmente en tu dispositivo.

---

## 📋 Proyectos Disponibles

### 1️⃣ **01-escritor** - Generador de Texto
Pequeña app que utiliza la API `Writer` para generar texto localmente.

| Aspecto | Detalle |
|--------|--------|
| **API** | Writer |
| **Función** | Genera texto creativo basado en prompts |
| **Parámetros** | Tono y longitud personalizables |
| **Conexión** | ✅ Funciona sin internet (local) |

**Características:**
- Comprobación de disponibilidad local
- Generación de texto con opciones de tono y longitud
- Manejo de errores y fallback remoto

---

### 2️⃣ **02-reescritor** - Mejora de Texto
Demo que utiliza la API `Rewriter` para reescribir y mejorar texto localmente.

| Aspecto | Detalle |
|--------|--------|
| **API** | Rewriter |
| **Función** | Mejora y reescribe textos existentes |
| **Parámetros** | Tono y longitud ajustables |
| **Conexión** | ✅ Funciona sin internet (local) |

**Características:**
- Corrección ortográfica y de claridad
- Adaptación de tono dinámico
- Ajuste de longitud del contenido
- Fallback remoto automático

---

### 3️⃣ **03-resumidor** - Resumen Inteligente
App que utiliza la API `Summarizer` para resumir texto localmente.

| Aspecto | Detalle |
|--------|--------|
| **API** | Summarizer |
| **Función** | Condensa textos largos en versiones cortas |
| **Formato** | Plain text y TLDR |
| **Conexión** | ✅ Funciona sin internet (local) |

**Características:**
- Resumen automático de textos
- Opciones de longitud y formato
- Mantiene los puntos clave del contenido

---

### 4️⃣ **04-detector-idiomas** - Detección de Idioma
App que utiliza la API `LanguageDetector` para detectar idiomas automáticamente.

| Aspecto | Detalle |
|--------|--------|
| **API** | LanguageDetector |
| **Función** | Detecta automáticamente el idioma del texto |
| **Idiomas** | Múltiples idiomas soportados |
| **Conexión** | ✅ Funciona sin internet (local) |

**Características:**
- Detección automática de idioma
- Análisis en tiempo real
- Modelo descargable para ejecución offline

---

### 5️⃣ **05-traductor-idiomas** - Traducción de Texto
App que utiliza la API `Translator` para traducir texto entre idiomas localmente.

| Aspecto | Detalle |
|--------|--------|
| **API** | Translator |
| **Función** | Traduce texto entre idiomas |
| **Idiomas** | Múltiples pares de idiomas |
| **Conexión** | ✅ Funciona sin internet (local) |

**Características:**
- Traducción bidireccional
- Soporte para múltiples idiomas
- Ejecución completamente local

---

### 6️⃣ **06-prompts** - Genio Gemini Nano
App que utiliza la API `LanguageModel` (Gemini Nano) para generar respuestas inteligentes a cualquier pregunta.

| Aspecto | Detalle |
|--------|--------|
| **API** | LanguageModel (Gemini Nano) |
| **Función** | Responde preguntas con IA generativa |
| **Capacidad** | Conversación general y razonamiento |
| **Conexión** | ✅ Funciona sin internet (local) |

**Características:**
- Generación de respuestas inteligentes
- Interfaz interactiva tipo "genio"
- Indicadores de estado en tiempo real
- Descarga automática del modelo
- Monitoreo de progreso de descargas
- Manejo robusto de errores

---

## 🚀 Cómo Ejecutar los Proyectos

Cada proyecto es **independiente** y se puede ejecutar abriendo el archivo `index.html` en **Chrome**:

```bash
# Opción 1: Abre directamente el archivo HTML
01-escritor/index.html
02-reescritor/index.html
03-resumidor/index.html
04-detector-idiomas/index.html
05-traductor-idiomas/index.html
06-prompts/index.html

# Opción 2: Con un servidor local (Python)
python -m http.server 8000
# Luego accede a: http://localhost:8000/01-escritor/
```

**✅ No se requieren dependencias externas ni servidor web.**

---

## 📦 Estructura de Archivos

```
Curso_IA_local/
├── 01-escritor/
│   ├── index.html      (Interfaz)
│   ├── main.js         (Lógica)
│   └── styles.css      (Estilos)
│
├── 02-reescritor/
│   ├── index.html
│   ├── main.js
│   └── styles.css
│
├── 03-resumidor/
│   ├── index.html
│   ├── main.js
│   └── styles.css
│
├── 04-detector-idiomas/
│   ├── index.html
│   ├── main.js
│   └── styles.css
│
├── 05-traductor-idiomas/
│   ├── index.html
│   ├── main.js
│   └── styles.css
├── 06-prompts/
│   ├── index.html
│   ├── main.js
│   └── styles.css
│
│
└── README.md           (Este archivo)
```

---

## 🔧 APIs Disponibles

### Writer API
```javascript
Writer.availability()      // Consulta disponibilidad local
Writer.create(options)     // Crea instancia del generador
writer.write(prompt, params)  // Genera texto
```

### Rewriter API
```javascript
Rewriter.availability()    // Consulta disponibilidad local
Rewriter.create(options)   // Crea instancia del reescritor
rewriter.rewrite(text, params)  // Reescribe el texto
```

### Summarizer API
```javascript
Summarizer.availability()  // Consulta disponibilidad local
Summarizer.create(options) // Crea instancia del resumidor
summarizer.summarize(text) // Resume el texto
```

### LanguageDetector API
```javascript
LanguageDetector.availability()  // Consulta disponibilidad local
LanguageDetector.create(options) // Crea instancia del detector
detector.detect(text)            // Detecta el idioma
```

### Translator API
```javascript
### LanguageModel API (Gemini Nano)
```javascript
LanguageModel.availability()   // Consulta disponibilidad local
LanguageModel.create(options)  // Crea instancia del modelo
session.prompt(question)       // Genera respuesta a una pregunta
```

Translator.availability()      // Consulta disponibilidad local
Translator.create(languagePair) // Crea instancia del traductor
translator.translate(text)      // Traduce el texto
```

---

## ⚙️ Requisitos

- **Navegador**: Chrome/Edge moderno (versión 125+) con APIs de IA habilitadas
- **Dispositivo**: Procesador con capacidad para modelos de IA (recomendado)
- **Memoria**: 4GB mínimo para modelos locales
- **Internet**: ✅ **Opcional** - solo para descargar modelos inicialmente

---

## 💡 Características Principales

| Característica | Descripción |
|---|---|
| 🏠 **Ejecución Local** | Todo se ejecuta en tu dispositivo, sin enviar datos a servidores |
| 🔐 **Privacidad** | Tus datos nunca salen del navegador |
| ⚡ **Sin Dependencias** | No requiere Node.js ni servidores backend |
| 🌐 **Funciona Offline** | Una vez descargados los modelos, funciona sin internet |
| 🎨 **Interfaz Simple** | Demos minimalistas fáciles de entender y modificar |

---

## 📝 Notas Importantes

1. **Disponibilidad Local**: La IA se descarga automáticamente en tu dispositivo
2. **Idioma**: Se recomienda especificar `outputLanguage: "es"` para español
3. **DevTools**: Usa F12 para ver mensajes de diagnóstico en la consola
4. **Compatibilidad**: Verifica en Chrome > Configuración > Experimentales las APIs de IA
5. **Primera Ejecución**: La descarga de modelos puede tomar algunos minutos

---

## 🐛 Debugging

Para obtener información útil durante el desarrollo:

```javascript
// 1. Abre la consola de desarrollador (F12 en Chrome)
// 2. Busca mensajes sobre disponibilidad
// 3. Revisa el progreso de descarga de modelos
// 4. Verifica errores de ejecución en la consola
```

**Comandos útiles en DevTools:**
- `F12` — Abre DevTools
- `Ctrl+Shift+J` — Abre solo la consola
- `Ctrl+Shift+I` — Abre Inspector de elementos

---

## 📚 Recursos Adicionales

- [Chrome AI APIs Documentación](https://developer.chrome.com/docs/ai/)
- [Chrome Dev Blog](https://developer.chrome.com/blog/)
- Consulta el README específico en cada carpeta de proyecto

---

**Creado con ❤️ para aprender sobre IA Local en el navegador**
