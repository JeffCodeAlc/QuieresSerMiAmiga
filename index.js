let currentPage = 1;

function nextPage(answer) {
    const content = document.getElementById('content');
    if (answer === 'no') {
        currentPage++;
        if (currentPage === 2) {
            content.innerHTML = `
                <h1>¿Estás segura? todo saldra bien</h1>
                <div class="gif-container">
                    <div class="tenor-gif-embed" data-postid="4176958725732293633" data-share-method="host" data-aspect-ratio="1.28351" data-width="100%"></div>
                </div>
                <div class="buttons">
                    <button class="btn btn-yes" onclick="nextPage('si')">Sí</button>
                    <button class="btn btn-no" onclick="nextPage('no')">No</button>
                </div>
            `;
        } else if (currentPage === 3) {
            content.innerHTML = `
                <h1>Piénsalo muy bien</h1>
                <div class="gif-container">
                    <div class="tenor-gif-embed" data-postid="1975786729994891673" data-share-method="host" data-aspect-ratio="1.04762" data-width="100%"></div>
                </div>
                <div class="buttons">
                    <button class="btn btn-yes" onclick="nextPage('si')">Sí</button>
                    <button class="btn btn-no" onclick="nextPage('no')">No</button>
                </div>
            `;
        } else if (currentPage === 4) {
            content.innerHTML = `
                <h1>Por favor, dis que sí</h1>
                <div class="gif-container">
                    <div class="tenor-gif-embed" data-postid="6326114825877242584" data-share-method="host" data-aspect-ratio="1" data-width="100%"></div>
                </div>
                <div class="buttons">
                    <button class="btn btn-yes" onclick="nextPage('si')">Sí</button>
                    <button class="btn btn-no" onclick="nextPage('no')">No</button>
                </div>
            `;
        } else if (currentPage === 5) {
            content.innerHTML = `
                <h1>Si vuelves a decir no, entonces eres mi novia y no mi amiga :)</h1>
                <div class="gif-container">
                    <div class="tenor-gif-embed" data-postid="15487788785331499084" data-share-method="host" data-aspect-ratio="1.15278" data-width="100%"></div>
                </div>
                <div class="buttons">
                    <button class="btn btn-yes" onclick="nextPage('si')">Sí</button>
                    <button class="btn btn-no" onclick="nextPage('no')">No</button>
                </div>
            `;
        } else if (currentPage === 6) {
            content.innerHTML = `
                <h1>Te lo advertí 😈</h1>
                <div class="gif-container">
                    <div class="tenor-gif-embed" data-postid="17469691104686678640" data-share-method="host" data-aspect-ratio="1.27692" data-width="100%"></div>
                </div>
                <div class="buttons">
                    <button class="btn btn-yes" onclick="nextPage('si')">Sí</button>
                    <button class="btn btn-no no-button" onmouseover="moveButton()">No</button>
                </div>
            `;
        }
    } else if (answer === 'si') {
        content.innerHTML = `
            <h1>Sabías que dirías que sí, ahora me perteneces 😈</h1>
            <div class="gif-container">
                <div class="tenor-gif-embed" data-postid="4546207654773048320" data-share-method="host" data-aspect-ratio="1.05957" data-width="100%"></div>
            </div>
        `;
    }

    // Reiniciar el script de Tenor
    const script = document.createElement('script');
    script.src = 'https://tenor.com/embed.js';
    document.body.appendChild(script);
}

function moveButton() {
    const noButton = document.querySelector('.no-button');
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
