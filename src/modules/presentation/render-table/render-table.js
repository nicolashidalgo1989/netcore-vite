import { loadStudents } from '../../use-cases/load-students';
import { renderModalEditFile } from '../render-modal-edit-file/render-modal-edit-file';
import './render-table.css';

export const renderTable = async(element) => {

    const students = await loadStudents();
    if( students.length === 0) return;

    const div = document.createElement('div');
    div.innerHTML = `
        <div class="d-lg-none" id="mobileContainer">
        </div>
        <table class="table caption-top d-none d-lg-table">
            <thead>
                <tr>
                    <th scope="col">Matrícula</th>
                    <th scope="col" class="text-center">Nº Lista</th>
                    <th scope="col">RUN</th>
                    <th scope="col">Apellido Paterno</th>
                    <th scope="col">Apellido Materno</th>
                    <th scope="col">Nombres</th>
                    <th scope="col" class="text-center">Acciones</th>
                </tr>
            </thead>
            <tbody id="studentTableDesktop">
            </tbody>
        </table>
    `;

    element.append(div);

    students.forEach( student => {
        const mobileContainer = document.querySelector('#mobileContainer');
        const studentTableDesktop = document.querySelector('#studentTableDesktop');
        mobileContainer.innerHTML += `
            <div class="card-shadow mb-4">
                <div class="row mb-4">
                    <div class="col-12">
                        <div>${student.run}</div>
                        <div class="fw-bold">${student.nombre} ${student.apellidoPaterno} ${student.apellidoMaterno}</div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-6">
                        <div>Matrícula</div>
                        <div class="fw-bold">${student.matricula}</div>
                    </div>
                    <div class="col-6">
                        <div>Nº Lista</div>
                        <div class="fw-bold">${student.numeroLista}</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 fw-bold">Acciones</div>
                    <div class="col-9 row-actions">
                        <div class="row">
                            <a href=""
                                class="text-decoration-none mb-3 w-50 d-flex flex-direction-row">
                                <img class="w-auto" src="icon-delete.svg"
                                    alt="Eliminar">
                                <span> Dar de baja </span>
                            </a>
                            <a href=""
                                class="text-decoration-none mb-3 w-50 d-flex flex-direction-row">
                                <img class="w-auto" src="icon-detail.svg"
                                    alt="Detalle">
                                <span> Ver detalle </span>
                            </a>
                            <a href=""
                                class="text-decoration-none mb-3 w-50 d-flex flex-direction-row">
                                <img class="w-auto" src="icon-download.svg"
                                    alt="Descargar">
                                <span> Descargar </span>
                            </a>
                            <a href="#"
                                class="text-decoration-none mb-3 w-50 d-flex flex-direction-row edit-button">
                                <img class="w-auto" src="icon-edit.svg"
                                    alt="Editar">
                                <span> Editar </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        studentTableDesktop.innerHTML += `
            <tr>
                <td scope="col">${student.matricula}</td>
                <td class="text-center">${student.numeroLista}</td>
                <td scope="col">${student.run}</td>
                <td scope="col">${student.apellidoPaterno}</td>
                <td scope="col">${student.apellidoMaterno}</td>
                <td scope="col">${student.nombre}</td>
                <td scope="col" class="row-actions">
                    <a href="">
                        <img src="icon-delete.svg" alt="Eliminar">
                    </a>
                    <a href="">
                        <img src="icon-detail.svg" alt="Detalle">
                    </a>
                    <a href="">
                        <img src="icon-download.svg" alt="Descargar">
                    </a>
                    <a href="#" class="edit-button">
                        <img src="icon-edit.svg" alt="Editar">
                    </a>
                </td>
            </tr>
        `;
    } );

    const editBtn = document.querySelectorAll('.edit-button');
    editBtn.forEach( item => {
        item.addEventListener('click', () => {
            const main = document.querySelector('main');
            renderModalEditFile( main );
        });
    })

}