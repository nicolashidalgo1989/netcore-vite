import netcoreStore from '../../store/netcore-store';
import { renderTitle } from '../../presentation/render-title/render-title';
import { renderButton } from '../render-button/render-button';

export const renderModules = (element) =>  {
    const contenido = {
        titulo: 'Selección del Módulo de Educación',
        subtitulo: 'Este módulo te brinda acceso directo a los recursos educativos esenciales. Descubre una amplia variedad de contenidos diseñados para apoyarte en tu aprendizaje y logro de objetivos académicos.'
    }
    const title = document.querySelector('#title');
    renderTitle( title, contenido );
    const modulos = netcoreStore.getModules();
    modulos.forEach( m => {
        renderButton(element, m);
    })
}