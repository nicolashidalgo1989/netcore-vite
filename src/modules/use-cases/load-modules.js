import { localhostModulesToModel } from "../mappers/localhost-module.mapper";

export const loadModules = async () => {

    const url  = `${ import.meta.env.VITE_BASE_URL }/modules`;
    const res  = await fetch(url);
    const data = await res.json();

    const modules = await data.map( localhostModulesToModel );

    console.log(modules);

    return modules;

}