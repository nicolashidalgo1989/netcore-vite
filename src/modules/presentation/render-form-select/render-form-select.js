import html from './render-form-select.html?raw';
import './render-form-select.css';

export const renderFormSelect = (element) =>  {
    console.log('renderging form select', element);
    element.innerHTML = '';
    const formSelect = document.createElement('div');
    formSelect.className = "form-floating";
    formSelect.innerHTML = html;
    element.append( formSelect );
}