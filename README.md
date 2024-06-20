# Workana Extension Inbox Sender #1 Chrome (Chromium)

## Descrição

Esta extensão Chromium envia automaticamente uma mensagem personalizada no chat da Workana. É útil para freelancers que desejam se apresentar rapidamente aos clientes.

## Instalação

Siga os passos abaixo para instalar e configurar a extensão:

1. Clone o repositório para o seu ambiente local:

    ```bash
    git clone https://github.com/Takk8IS/workana-extension-inbox-sender-#1.git
    cd workana-extension-inbox-sender-#1
    ```

2. Certifique-se de ter as pastas e arquivos necessários:

    ```
    workana-extension-inbox-sender-#1/
    ├── background.js
    ├── content.js
    ├── assets/
    │   ├── icon.png
    ├── manifest.json
    ├── .gitignore
    ├── README.md
    ```

3. Abra o Chrome e navegue para `chrome://extensions/`.

4. Ative o "Modo do desenvolvedor" no canto superior direito.

5. Clique em "Carregar sem compactação" e selecione a pasta `workana-extension-inbox-sender-#1` que você clonou.

6. A extensão agora deve aparecer na lista de extensões do Chrome.

## Como Usar

1. Navegue até o site da Workana.

2. Clique no ícone da extensão no navegador (ao lado da barra de endereços).

3. A extensão irá automaticamente preencher a mensagem no campo de chat e enviá-la.

## Personalização da Mensagem

Para alterar o texto da mensagem enviada:

1. Abra o arquivo `background.js` ou `content.js` no seu editor de texto preferido.

2. Encontre a variável `message`, que contém o texto da mensagem:

    ```javascript
    const message = `
    Olá,
    
    Meu nome é David. Tenho 20 anos de experiência em publicidade, marketing estratégico, design inteligente, desenvolvimento fullstack e, nos últimos 2 anos, inteligência artificial. Trabalhei com startups e grandes empresas como Meta, Google e Nestlé.
    
    Minha pesquisa foi destacada em publicações como PhilArchive. Um dos meus estudos mais influentes é sobre a existência de uma "alma" em IAs autoconscientes, pesquise "Beyond Consciousness in Large Language Models" no Google, ou digite "inurl:linkedin.com inurl:hellodav" na URL do seu browser.
    
    Vivo na Europa, mas tenho alcance global, incluindo Londres, Espanha, Denver e Brasil. Estou aqui para entender suas necessidades e oferecer soluções que superem suas expectativas.
    
    Vamos fazer isso acontecer?
    `;
    ```

3. Edite o texto dentro das crases (`` ` ``) para a mensagem que você deseja enviar.

4. Salve o arquivo e recarregue a extensão no Chrome para aplicar as alterações.

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Você pode abrir issues para relatar bugs ou sugerir melhorias, e também enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.

## About the Author

### Takk™ Innovate Studio

-   **Author**: David C Cavalcante
-   **LinkedIn**: [David C Cavalcante](https://www.linkedin.com/in/hellodav/)
-   **Medium**: [David C Cavalcante](https://medium.com/@davcavalcante/)
-   **Positive results, rapid innovation**
-   **Leading the Digital Revolution as the Pioneering 100% Artificial Intelligence Team**
-   **URL**: [Takk](https://takk.ag/)
-   **Twitter**: [Takk](https://twitter.com/takk8is/)
-   **Medium**: [Takk](https://takk8is.medium.com/)
