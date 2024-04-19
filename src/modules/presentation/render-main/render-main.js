import html from './render-main.html?raw';
import { renderBreadcrumbs } from '../render-breadcrumbs/render-breadcrumbs';
import { renderModules } from '../render-modules/render-modules';

export const renderMain = (element) =>  {

    const main = document.createElement('main');
    main.innerHTML = html;
    element.append( main );

    const breadcrumb = document.querySelector('#breadcrumb');
    renderBreadcrumbs( breadcrumb );

    const modules = document.querySelector('#modules');
    renderModules( modules );

}