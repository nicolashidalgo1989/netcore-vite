import { localhostStudentToModel } from "../mappers/localhost-student.mapper";

export const loadStudents = async () => {

    const url  = `${ import.meta.env.VITE_BASE_URL }/students`;
    const res  = await fetch(url);
    const data = await res.json();

    const students = await data.map( localhostStudentToModel );

    return students;

}