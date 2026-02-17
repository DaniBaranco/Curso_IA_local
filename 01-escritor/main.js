let writer;

let generateBtn = document.querySelector("#generateBtn");

if (!generateBtn) {
    console.error('Botón #generateBtn no encontrado en el DOM');
} else {
    generateBtn.addEventListener("click", async () => {

    const idea = document.querySelector("#idea").value.trim();
    const tone = document.querySelector("#tone").value;
    const length = document.querySelector("#length").value;
    const output = document.querySelector("#output");

    output.textContent = "Comprobando disponibilidad...";

    //Comprobar soporte
    if (!("Writer" in self)) {
        output.textContent = "Esta versión de tu navegador no admite la API de Writer.";
        return;
    }

    const disponible = await Writer.availability();

    if (disponible === "unavailable") {
        output.textContent = "El API de Writer no está disponible ahora.";
        return;
    }

    const options = {
        tone,
        length,
        format: "plain-text",
        sharedContext: "Contenido generado desde una idea inicial del usuario",
        // Especifica el idioma de salida para evitar advertencias de la API
        outputLanguage: "es"
    };

    //Crear instancia correctamente
    if (disponible === "available") {
        writer = await Writer.create(options);
    } else {
        writer = await Writer.create({
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
        // Pasar también el idioma en la llamada a write
    const result = await writer.write(idea, {
    outputLanguage: "es",
    context: "Ayuda al usuario a escribir desde su idea breve"
});



        output.textContent = result;
    } catch (err) {
        console.error('Error al generar texto:', err);
        output.textContent = "Error al generar el texto: " + (err && err.message ? err.message : String(err));
    }
    });
}
