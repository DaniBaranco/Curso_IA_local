let translator

let translateBtn = document.querySelector("#translate");

let output = document.querySelector("#output");

translateBtn.addEventListener("click", async () => {

    const text = document.querySelector("#textInput").value.trim();
    const sourceLang = document.querySelector("#sourceLang").value;
    const targetLang = document.querySelector("#targetLang").value;

    if (text) {
        output.textContent = "Por favor, introduce un texto para traducir..."
    }

    if (sourceLang === targetLang) {
        output.textContent = "Elige dos idiomas diferentes";
        return;

    }

    if (!("Translator" in self)) {
        output.textContent = "Tu navegador no soporta el API de traducciones";

        return;
    }

    try {

        if (!translator || translator.sourceLanguage !== sourceLang || translator.targetLanguage !== targetLang) {

            const disponible = await Translator.availability({
                sourceLanguage: sourceLang,
                targetLanguage: targetLang
            });

            if (disponible === "unavailable") {
                output.textContent = "Estos idiomas no están soportados";
                return;
            }

            translator = await Translator.create({
           sourceLanguage: sourceLang,
                targetLanguage: targetLang,
                monitor(m){
                    m.addEventListener("downloadprogress", (e) => {
                        output.textContent = "Descargando modelo: "+Math.round(e.loaded * 100) + "%";
                    });
                }
            });

            if(translator.ready) await Translator.ready;

        }

        output.textContent = "Traduciendo...";

        const translated = await translator.translate(text);

        output.textContent = translated;

    } catch (error) {
        output.textContent = "Error al traducir...";
        console.log(error);
    }


});
