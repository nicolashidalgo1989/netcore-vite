import html from './render-modal-edit-file.html?raw';

export const renderModalEditFile = (element) =>  {
    const modal = document.createElement('div');
    modal.innerHTML = html;
    element.append( modal );
    // Abre modal cuando carga página
    var myModal = new bootstrap.Modal(document.getElementById("modalClienteEditar"), {});
    myModal.show();
}

export const changeData = () => {
    // muestra opcion a editar en mobile
    document.querySelector('#selectEditDataMobile').addEventListener('change', e => {
        document.querySelectorAll('.tab-pane').forEach( item => item.classList.remove('show','active'));
        if(document.getElementById(e.target.value)){
            document.getElementById(e.target.value).classList.add('show','active');
        }
    });
}
