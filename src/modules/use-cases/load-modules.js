export const loadModules = async () => {

    const url  = `${ import.meta.env.VITE_BASE_URL }/modules`;
    const res  = await fetch(url);
    const data = await res.json();

    const modules = await data;

    return modules;

}