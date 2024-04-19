import { Course } from "../models/courses.model"

export const localhostCoursesToModel = localhostCourse => {

    const {
        text
    } = localhostCourse;

    return new Course({
        text
    });

}