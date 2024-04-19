import { loadCourses } from '../../use-cases/load-courses';
import { renderTitle } from '../../presentation/render-title/render-title';
import { renderButton } from '../render-button/render-button';

export const renderCourses = async(element) =>  {
    const contenido = {
        titulo: 'Selección de Curso',
        subtitulo: 'Este módulo te brinda acceso directo a los recursos educativos esenciales. Descubre una amplia variedad de contenidos diseñados para apoyarte en tu aprendizaje y logro de objetivos académicos.'
    }
    const title = document.querySelector('#title');
    renderTitle( title, contenido );
    const courses = await loadCourses();
    element.innerHTML = '';
    if( courses.length === 0) return;
    courses.forEach( m => {
        renderButton(element, m);
    })
}