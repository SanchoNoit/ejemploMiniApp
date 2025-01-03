document.addEventListener('DOMContentLoaded', () => {
    const inputPulgadas = document.getElementById('inputPulgadas');
    const convertirAPulgadasButton = document.getElementById('convertirAPulgadasButton');
    const listaResultadosConversionPulgadas = document.getElementById('listaResultadosConversionPulgadas');

    convertirAPulgadasButton.addEventListener('click', () => {
        const plugadasTexto = inputPulgadas.value.trim();
        if (plugadasTexto === '' || isNaN(plugadasTexto)) {
            window.alert("Introduzca un valor adecuado.");
            return;
        }

        const li = document.createElement('li');
        li.classList.add('list-unstyled')
        li.classList.add('p-1')
        li.textContent = (inputPulgadas.value * 2.54).toFixed(2);
        console.log(li)

        const eraseButton = document.createElement('button');
        eraseButton.classList.add('rounded')
        eraseButton.textContent = '❌';
        eraseButton.style.marginLeft = '10px';

        eraseButton.addEventListener('click', () => {
            listaResultadosConversionPulgadas.removeChild(li);
        });

        li.appendChild(eraseButton);
        listaResultadosConversionPulgadas.appendChild(li);

        inputPulgadas.value = '';
    });
});
