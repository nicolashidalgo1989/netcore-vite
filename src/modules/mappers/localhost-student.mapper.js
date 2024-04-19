import { Student } from "../models/students.model"

export const localhostStudentToModel = localhostStudent => {

    const {
        id,
        matricula,
        numeroLista,
        run,
        nombre,
        apellidoMaterno,
        apellidoPaterno,
    } = localhostStudent;

    return new Student({
        id,
        matricula,
        numeroLista,
        run,
        nombre,
        apellidoMaterno,
        apellidoPaterno,
    });

}