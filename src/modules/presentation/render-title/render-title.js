import html from './render-title.html?raw';
import './render-title.css';

export const renderTitle = (element) =>  {
    const title = document.createElement('div');
    title.innerHTML = html;
    element.append( title );
}