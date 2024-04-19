import html from './render-modal-edit-file.html?raw';
import './render-modal-edit-file.css';

export const renderModalEditFile = (element) =>  {
    const modal = document.createElement('div');
    modal.innerHTML = html;
    element.append( modal );
}

export const loadModal = () => {
    // Abre modal cuando carga página
    var myModal = new bootstrap.Modal(document.getElementById("modalClienteEditar"), {});
    document.onreadystatechange = function () {
        myModal.show();
    };
}

export const changeData = () => {
    // muestra opcion a editar en mobile
    document.querySelector('#selectEditDataMobile').addEventListener('change', e => {
        console.log(e.target.value);
        document.querySelectorAll('.tab-pane').forEach( item => item.classList.remove('show','active'));
        if(document.getElementById(e.target.value)){
            document.getElementById(e.target.value).classList.add('show','active');
        }
    });
}