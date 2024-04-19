import './render-title.css';

let title;

export const renderTitle = (element, ...args) =>  {
    const data = args[0];
    if(!title) title = document.createElement('div');
    title.innerHTML = `
        <h2 class="mb-3 titulo-modulo">${data.titulo}</h2>
        <p class="mb-5">${data.subtitulo}</p>
    `;
    element.append( title );
}