import html from './render-form-select.html?raw';
import './render-form-select.css';

export const renderFormSelect = (element) =>  {
    element.innerHTML = '';
    const formSelect = document.createElement('div');
    formSelect.className = "form-floating";
    formSelect.innerHTML = html;
    element.append( formSelect );
}