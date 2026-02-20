async function init() {

    const status = document.querySelector("#status");
    const responseBox = document.querySelector("#response");
    const input = document.querySelector("#userInput");
    const askBtn = document.querySelector("#ask");

    status.innerHTML = '🔮 Comprobando si el Genio aparece...';

    try {

        const avail = await LanguageModel.availability();

        if (avail === "unavailable") {
            status.innerHTML = 'Lo siento, el genio no puede responder...';

            return;

        }

        const session = await LanguageModel.create({
            monitor(m) {
                m.addEventListener("downloadprogress", (e) => {
                    status.innerHTML = 'Descargando magia...' + (e.loaded * 100) + "%";
                });
            }
        });

        status.innerHTML = '✅ El genio está preparado. Pídele algo.';

        askBtn.addEventListener("click", async () => {

            const question = input.value.trim();

            if (!question) {
                status.innerHTML = '❓ Al genio le falta tu pregunta.';
                input.focus();
                return;

            }

            status.innerHTML = '🧠 El genio está pensando...';
            responseBox.textContent = "";

            try {
                const result = await session.prompt(question);

                responseBox.textContent = result;

                status.innerHTML = "✌️ ¡Deseo concedido!"

                input.focus();

            } catch (error) {
                status.innerHTML = 'Lo siento, el genio no puede responder...';
                responseBox.textContent = "";
            } finally {
                input.focus();
            }


        });


    } catch (error) {
        status.innerHTML = '❌ El genio no responde. Inténtalo más tarde...';
    }

}

init();