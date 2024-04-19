import { renderCourses } from '../render-courses/render-courses';
import { renderFile } from '../render-file/render-file';
import './render-button.css';

let etapa = 0;

export const renderButton = (element, ...args) =>  {
    const data = args[0];
    const button = document.createElement('button');
    button.className = 'button-modulo';
    if(etapa === 0){
        button.innerHTML = `
            <img src="icon-${data.tag}.svg" alt="${ data.text }">
            ${ data.text }
        `;
    } else if(etapa === 1){
        button.classList.add('curso');
        button.innerHTML = data.text;
    } else {
        button.innerHTML = `
            <li class="nav-item" role="presentation">
                <a class="nav-link" aria-current="page" id="${data.tag}-tab" data-bs-toggle="tab"
                    data-bs-target="#${data.tag}" type="button" role="tab" aria-controls="${data.tag}"
                    aria-selected="true">
                    <img src="icon-${data.tag}.svg" alt="${data.text}">
                    ${data.text}
                </a>
            </li>
        `;
    }
    element.append( button );
    button.addEventListener( 'click', () => {
        if(etapa > 0){
            const modules = document.querySelector('#modules').parentElement.parentElement;
            modules.innerHtml = '';
            renderFile(modules);
        } else {
            renderCourses(element);
        }
        etapa++;
    });
}