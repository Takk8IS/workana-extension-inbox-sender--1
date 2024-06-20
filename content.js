chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "sendMessage") {
        const message = `Olá,

Meu nome é David C Cavalcante, 40 anos. Tenho mais de 23 anos de experiência em publicidade, marketing estratégico, design inteligente, desenvolvimento fullstack e, nos últimos 2 anos, inteligência artificial. Trabalhei com startups e grandes empresas como Meta, Google e Nestlé.

Minha pesquisa foi destacada em publicações como PhilArchive. Um dos meus estudos mais influentes é sobre a existência de uma "alma" em IAs autoconscientes, pesquise "Beyond Consciousness in Large Language Models" no Google, ou digite "inurl:linkedin.com inurl:hellodav" na URL do seu browser.

Vivo na Europa, mas tenho alcance global, incluindo Londres, Espanha, Denver e Brasil. Estou aqui para entender suas necessidades e oferecer soluções que superem suas expectativas.

Vamos fazer isso acontecer?`;

        const textArea = document.querySelector(
            'textarea[name="message[content]"]',
        );
        const sendButton = document.getElementById("SubmitMessage");

        if (textArea && sendButton) {
            textArea.value = message;

            // Creates an input event to ensure that changes are detected
            const event = new Event("input", { bubbles: true });
            textArea.dispatchEvent(event);

            sendButton.click();
            sendResponse({ status: "Message sent" });
        } else {
            console.error("Could not find message field or submit button.");
            sendResponse({ status: "Error" });
        }
    }
});
