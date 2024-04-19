import { localhostCoursesToModel } from "../mappers/localhost-course.mapper";

export const loadCourses = async () => {

    const url  = `${ import.meta.env.VITE_BASE_URL }/courses`;
    const res  = await fetch(url);
    const data = await res.json();

    const courses = await data.map( localhostCoursesToModel );

    console.log(courses);

    return courses;

}