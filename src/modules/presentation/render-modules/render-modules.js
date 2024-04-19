import netcoreStore from '../../store/netcore-store';
import { renderButton } from '../render-button/render-button';
import './render-modules.css';

export const renderModules = (element) =>  {
    const modulos = netcoreStore.getModules();
    modulos.forEach( m => {
        renderButton(element, m);
    })
}