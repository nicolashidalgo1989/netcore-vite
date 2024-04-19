import html from './render-button.html?raw';
import './render-button.css';

export const renderButton = (element, ...args) =>  {
    const data = args[0];
    const button = document.createElement('button');
    button.className = 'button-modulo';
    button.innerHTML = `
        <img src="icon-${data.tag}.svg" alt="${ data.text }">
        ${ data.text }
    `;
    element.append( button );
}