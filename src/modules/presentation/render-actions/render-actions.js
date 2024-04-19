import html from './render-actions.html?raw'
import './render-actions.css';
export const renderActions = (element) => {
    const div = document.createElement('div');
    div.className = 'global-actions';
    div.innerHTML = html;
    element.append( div );
}