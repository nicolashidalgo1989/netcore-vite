import html from './render-form-select.html?raw';
import './render-form-select.css';

export const renderFormSelect = (element) =>  {
    const formSelect = document.createElement('div');
    formSelect.innerHTML = html;
    element.append( formSelect );

}