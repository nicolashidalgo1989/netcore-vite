 import netcoreStore from '../../store/netcore-store'
 import { renderNav } from '../render-nav/render-nav';
 import { renderFormSelect } from '../render-form-select/render-form-select';
 import { renderTitle } from '../../presentation/render-title/render-title';

export const renderFile = (element) =>  {

    const contenido = {
        titulo: 'Nóminas',
        subtitulo: ''
    }

    const selectCourse = document.querySelector('#select-course');
    renderFormSelect( selectCourse );

    element.className = 'row';

    element.innerHTML = `
        <div class="col-12 col-lg-2 d-none d-lg-block">
            <ul class="nav nav-pills nav-fill" id="classBook" role="tablist"> </ul>
        </div>
        <div class="col-12 col-lg-10 card-shadow p-sm-5">
            <div class="cont-section-admin">
                <div class="row">
                    <div class="col-12 border-neutral-separador" class="tab-content" id="classBookContent">
                    </div>
                </div>
            </div>
        </div>
    `;

    const navContainer = document.querySelector('#classBook');
    const sections = netcoreStore.getModules().filter( e => e.tag === 'classbook' );
    const submodules = sections[0].submodules;

    const title = document.querySelector('#classBookContent');
    renderTitle( title, contenido );

    if( submodules.length === 0) return;
    submodules.forEach( m => {
        renderNav(navContainer, m);
    })

}