import { loadCourses } from '../use-cases/load-courses';
import { loadModules } from '../use-cases/load-modules';
import { loadStudents } from '../use-cases/load-students';

const state = {
    courses: [],
    modules: [],
    students: [],
}

const reloadPage = async() => {
    // const courses = await loadCourses();
    const modules = await loadModules();
    // const students = await loadStudents();
    // if( courses.length === 0) return;
    if( modules.length === 0) return;
    // if( students.length === 0) return;
    // state.courses = courses;
    state.modules = modules;
    // state.students = students;
}

export default {
    reloadPage,
    // getCourses: () => [...state.courses],
    getModules: () => [...state.modules],
    // getStudents: () => [...state.students],
}