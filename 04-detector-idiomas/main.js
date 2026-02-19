let detector;

let textInput = document.querySelector("#text");
let output = document.querySelector("#output");

async function initDetector() {
    const avail = await LanguageDetector.availability();

    if (avail === "unavailable") {
        output.textContent = "El detector de idioma no está disponible en este dispositivo";
        return false;
    }

    if (avail === "available") {
        detector = await LanguageDetector.create();
        output.textContent = "¡Detector listo!";

        //Ejecutar función para detectar idioma
        detect();
    } else {
        detector = await LanguageDetector.create({
            monitor(m) {
                m.addEventListener("downloadprogress", (e) => {
                    output.textContent = `Descargando modelos: ${(e.loaded * 100)}%`;
                });
            }
        });

        await detector.ready;

        output.textContent = "Detector listo.";

        //Ejectuar función para detectar idioma
        detect();
    }

}

initDetector();

textInput.addEventListener("input", detect);

async function detect(){
    const text = textInput.value;

    if(!detector || text.trim() === "") return false;

    const result = await detector.detect(text);

    const textOutput = result.map(lang => `${lang.detectedLanguage}: ${(lang.confidence * 100).toFixed(1)}%`)
    .join("\n");

    output.textContent = textOutput;

}