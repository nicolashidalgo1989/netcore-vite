import { loadModules } from '../use-cases/load-modules';

const state = {
    courses: [],
    modules: [],
    students: []
}

const reloadPage = async() => {
    const modules = await loadModules();
    if( modules.length === 0) return;
    state.modules = modules;
    // const students = await loadStudents();
    // if( students.length === 0) return;
    // state.students = students;
}

export default {
    reloadPage,
    getCourses: () => [...state.courses],
    getModules: () => [...state.modules],
    // getStudents: () => [...state.students],
}