# Curso IA Local

Repositorio con proyectos de ejemplo que demuestran el uso de APIs de IA locales y privadas en el navegador Chrome.

## Proyectos

### 01-escritor
Pequeña app que utiliza la API `Writer` para generar texto localmente o mediante fallback remoto.

- **Descripción**: Generador de texto que toma una idea breve y produce contenido basado en parámetros de tono y longitud.
- **Tecnología**: Writer API con ejecución on-device o remota
- **Características**:
  - Comprobación de disponibilidad local
  - Generación de texto con opciones de tono y longitud
  - Manejo de errores y fallback remoto
  
Para más detalles, consulta la carpeta `01-escritor`.

### 02-reescritor
Demo que utiliza la API `Rewriter` para reescribir y mejorar texto localmente o mediante fallback remoto.

- **Descripción**: Reescritor que mejora y adapta textos existentes según tono y longitud deseados.
- **Tecnología**: Rewriter API con ejecución on-device o remota
- **Características**:
  - Corrección ortográfica y de claridad
  - Adaptación de tono dinámico
  - Ajuste de longitud del contenido
  - Fallback remoto automático

Para más detalles, consulta la carpeta `02-reescritor`.

## Cómo ejecutar los proyectos

Cada proyecto es independiente y se puede ejecutar abriendo el archivo `index.html` en un navegador moderno (Chrome recomendado para desarrollo):

```bash
# Proyecto 01 - Escritor
Abre 01-escritor/index.html en el navegador

# Proyecto 02 - Reescritor
Abre 02-reescritor/index.html en el navegador
```

No se requieren dependencias externas ni servidor local.

## Requisitos

- Navegador moderno con soporte para APIs de IA (Chrome recomendado)
- Acceso a internet (para fallback remoto en caso de que no esté disponible la ejecución local)

## Estructura de archivos

```
Curso_IA_local/
├── 01-escritor/
│   ├── index.html      (Interfaz de usuario)
│   ├── main.js         (Lógica de generación)
│   └── styles.css      (Estilos)
├── 02-reescritor/
│   ├── index.html      (Interfaz de usuario)
│   ├── main.js         (Lógica de reescritura)
│   └── styles.css      (Estilos)
└── README.md           (Este archivo)
```

## Conceptos clave

### Writer API
- `Writer.availability()` — Consulta disponibilidad de ejecución on-device
- `Writer.create(options)` — Crea una instancia del generador
- `writer.write(prompt, params)` — Genera texto

### Rewriter API
- `Rewriter.availability()` — Consulta disponibilidad de ejecución on-device
- `Rewriter.create(options)` — Crea una instancia del reescritor
- `rewriter.rewrite(text, params)` — Reescribe el texto

## Notas importantes

- Ambos proyectos soportan ejecución local en el dispositivo o fallback remoto
- Se recomienda especificar `outputLanguage: "es"` para evitar advertencias
- Consulta la consola de desarrollador (DevTools) para mensajes de diagnóstico
- La disponibilidad local depende del dispositivo y navegador

## Desarrollo

Para debugging:
1. Abre DevTools (F12 en Chrome)
2. Consulta la consola para ver mensajes de log y errores
3. Revisa los eventos de progreso en la consola si usas `monitor`
