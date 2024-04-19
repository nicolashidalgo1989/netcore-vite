import html from './render-breadcrumbs.html?raw';
import './render-breadcrumbs.css';

export const renderBreadcrumbs = (element) =>  {
    const breadcrumbs = document.createElement('div');
    breadcrumbs.innerHTML = html;
    element.append( breadcrumbs );

}