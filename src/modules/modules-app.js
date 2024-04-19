import netcoreStore from './store/netcore-store';
import { renderHeader } from './presentation/render-header/render-header';
import { renderMain } from './presentation/render-main/render-main';

export const modulesApp = async( element ) => {

    await netcoreStore.reloadPage();
    element.innerHTML = '';

    renderHeader( element );
    renderMain( element );

}