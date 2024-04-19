import html from './render-header.html?raw';
import './render-header.css';

export const renderHeader = (element) =>  {
    const header = document.createElement('div');
    header.innerHTML = html;
    element.append( header );

}