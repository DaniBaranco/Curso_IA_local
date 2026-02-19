let summarizer;

let generateBtn = document.querySelector("#generateBtn");

if (!generateBtn) {
    console.error('Botón #generateBtn no encontrado en el DOM');
} else {
    generateBtn.addEventListener("click", async () => {

        const text = document.querySelector("#text").value.trim();
        const output = document.querySelector("#output");

        output.textContent = "Comprobando disponibilidad...";

        // Comprobar soporte
        if (!('Summarizer' in self)) {
            output.textContent = "Esta versión de tu navegador no admite la API de Summarizer.";
            return;
        }

        // ✔ MÉTODO DE LA CLASE, NO DE LA VARIABLE
        const disponible = await Summarizer.availability();

        if (disponible === "unavailable") {
            output.textContent = "El API de Summarizer no está disponible ahora.";
            return;
        }

        const options = {
     type: "tldr",
     format: "plain-text",
     length: "medium",
     sharedContext: "Resumen en base al texto del usuario"
        };

        // ✔ CREACIÓN CORRECTA DE LA INSTANCIA
        if (disponible === "available") {
            summarizer = await Summarizer.create(options);
        } else {
            summarizer = await Summarizer.create({
                ...options,
                monitor(m) {
                    m.addEventListener("downloadprogress", e => {
                        output.textContent = "Descargando modelo de IA local: " + Math.round(e.loaded * 100) + "%";
                    });
                }
            });
        }

        output.textContent = "Generando texto...";

        try {
            // ✔ Summarizer.summarizer() se llama sobre la instancia creada
            const result = await summarizer.summarize(text, {
                outputLanguage: "es",
                context: "Resumen del texto siempre en español de España para un lector casual."
            });

            output.textContent = result;

        } catch (err) {
            console.error('Error al generar texto:', err);
            output.textContent = "Error al generar el texto: " + (err?.message || String(err));
        }
    });
}
