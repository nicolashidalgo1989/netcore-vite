import netcoreStore from './store/netcore-store';
// import { renderTable } from './presentation/render-table/render-table';
// import { renderButtons } from './presentation/render-buttons/render-buttons';
// import { renderAddButton } from './presentation/render-add-button/render-add-button';
// import { renderModal } from './presentation/render-modal/render-modal';
// import { saveUser } from './use-cases/save-user';
import { renderHeader } from './presentation/render-header/render-header';
import { renderMain } from './presentation/render-main/render-main';

export const modulesApp = async( element ) => {

    await netcoreStore.reloadPage();
    element.innerHTML = '';

    renderHeader( element );
    renderMain( element );
    // renderTable( element );
    // renderButtons( element );
    // renderAddButton( element );
    // renderModal( element, async (userLike) => {
    //     const user = await saveUser( userLike );
    //     usersStore.onUserChanged(user);
    //     renderTable();
    // });

}