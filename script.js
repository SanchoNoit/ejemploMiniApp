document.addEventListener('DOMContentLoaded', () => {
    const inputPulgadas = document.getElementById('inputPulgadas');
    const convertirAPulgadasButton = document.getElementById('convertirAPulgadasButton');
    const listaResultadosConversionPulgadas = document.getElementById('listaResultadosConversionPulgadas');

    convertirAPulgadasButton.addEventListener('click', () => {
        const plugadasTexto = inputPulgadas.value.trim();
        if (plugadasTexto === '') return;

        const li = document.createElement('li');
        li.textContent = "2,54";
        console.log(li)

        const eraseButton = document.createElement('button');
        eraseButton.textContent = '❌';
        eraseButton.style.marginLeft = '10px';

        eraseButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.appendChild(eraseButton);
        listaResultadosConversionPulgadas.appendChild(li);

        inputPulgadas.value = '';
    });
});
