(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(l){if(l.ep)return;l.ep=!0;const o=e(l);fetch(l.href,o)}})();const p=async()=>await await(await fetch("http://localhost:3001/modules")).json(),d={courses:[],modules:[],students:[]},m=async()=>{const n=await p();n.length!==0&&(d.modules=n)},v={reloadPage:m,getCourses:()=>[...d.courses],getModules:()=>[...d.modules],getStudents:()=>[...d.students]},f=`<header class="fixed-top menu-interno">
    <div class="container nav-pr">
        <div class="row">
            <div class="col-6">
                <a class="" href="#">
                    <img src="./logo-educacion.svg" alt="netcore" class="logo-header logo-interno">
                </a>
            </div>
            <div class="col-6">
                <ul class="navbar-nav text-end list-user">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle link-user" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="img/icon-user.svg" alt=""> Hola, Natalia <span
                                class="color-secondary material-symbols-outlined">
                                expand_more
                            </span>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item logout-item" href="#"><b>Salir</b><span
                                        class="material-symbols-outlined">
                                        logout
                                    </span></a></li>

                        </ul>
                    </li>

                </ul>

            </div>

        </div>
    </div>

    <nav class=" menu-interno-productos navbar navbar-expand-lg navbar-light bg-auxiliar">
        <div class="container container justify-content-end">
            <button type="button"
                class="btn btn-white outline color-white sistema d-none d-lg-block">Administración</button>
        </div>
    </nav>
</header>`,g=n=>{const a=document.createElement("div");a.innerHTML=f,n.append(a)},h=`<section class="modulos">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-8" id="breadcrumb"></div>
            <div class="col-12" id="select-course"></div>
            <div class="col-12">
                <div class="card-shadow">
                    <div class="col-12 col-lg-9" id="title"></div>
                    <div class="col-12 button-modulo-container d-flex justify-content-between flex-wrap" id="modules">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`,y=`<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Educación</a></li>
        <li class="breadcrumb-item"><a href="#">Selección de Módulo</a></li>
        <li class="breadcrumb-item"><a href="#">Libro de clases</a></li>
        <li class="breadcrumb-item active" aria-current="page">Nominas</li>
    </ol>
</nav>`,w=n=>{const a=document.createElement("div");a.innerHTML=y,n.append(a)};let c;const b=(n,...a)=>{const e=a[0];c||(c=document.createElement("div")),c.innerHTML=`
        <h2 class="mb-3 titulo-modulo">${e.titulo}</h2>
        <p class="mb-5">${e.subtitulo}</p>
    `,n.append(c)},k=async()=>await await(await fetch("http://localhost:3001/courses")).json(),D=async n=>{const a={titulo:"Selección de Curso",subtitulo:"Este módulo te brinda acceso directo a los recursos educativos esenciales. Descubre una amplia variedad de contenidos diseñados para apoyarte en tu aprendizaje y logro de objetivos académicos."},e=document.querySelector("#title");b(e,a);const t=await k();n.innerHTML="",t.length!==0&&t.forEach(l=>{u(n,l)})},x=(n,...a)=>{const e=a[0],t=document.createElement("li");t.className="nav-item",t.setAttribute("role","presentation"),t.innerHTML=`
        <a class="nav-link" aria-current="page" id="${e.tag}-tab" data-bs-toggle="tab"
            data-bs-target="#${e.tag}" type="button" role="tab" aria-controls="${e.tag}"
            aria-selected="true">
            <img src="icon-${e.tag}.svg" alt="${e.text}">
            ${e.text}
        </a>
    `,n.append(t)},S=`<div class="card-shadow p-sm-4 mb-4">
    <div class="row d-flex align-items-center justify-content-between">
        <div class="col-12 col-lg-2">
            <form action="" class="ingreso mb-3 mb-sm-0">
                <select class="form-select px-4" id="Curso" aria-label="Curso">
                    <option>1° básico A</option>
                    <option selected="">2° básico A</option>
                    <option>3° básico A</option>
                    <option>4° básico A</option>
                </select>
                <label for="Curso">Curso</label>
                <span class="instruccion"></span>
            </form>
        </div>
        <div class="col-12 col-lg-4">
            <div class="px-1">
                <dl>
                    <div class="modulo-dl">
                        <dt>Especialidad:</dt>
                        <dd>Construcción</dd>
                    </div>
                    <div class="modulo-dl">
                        <dt>Profesor de Módulo:</dt>
                        <dd>Marcelo Carrasco</dd>
                    </div>
                </dl>
            </div>
        </div>
        <div class="col-12 col-lg-4">
            <div class="px-1">
                <dl>
                    <div class="modulo-dl">
                        <dt>Plan de Estudios:</dt>
                        <dd>Decreto 726/</dd>
                    </div>
                    <div class="modulo-dl">
                        <dt>Matrículas:</dt>
                        <dd>45</dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</div>`,C=n=>{n.innerHTML="";const a=document.createElement("div");a.className="form-floating",a.innerHTML=S,n.append(a)},M=`<a href="">
    <img src="icon-view.svg" alt="Ver nóminas">
    Ver nóminas
</a>
<a href="">
    <img src="icon-download.svg" alt="Descargar Nómina">
    Descargar Nómina
</a>`,E=n=>{const a=document.createElement("div");a.className="global-actions",a.innerHTML=M,n.append(a)};class I{constructor({id:a,matricula:e,numeroLista:t,run:l,nombre:o,apellidoMaterno:s,apellidoPaterno:i}){this.id=a,this.matricula=e,this.numeroLista=t,this.run=l,this.nombre=o,this.apellidoMaterno=s,this.apellidoPaterno=i}}const $=n=>{const{id:a,matricula:e,numeroLista:t,run:l,nombre:o,apellidoMaterno:s,apellidoPaterno:i}=n;return new I({id:a,matricula:e,numeroLista:t,run:l,nombre:o,apellidoMaterno:s,apellidoPaterno:i})},P=async()=>await(await(await fetch("http://localhost:3001/students")).json()).map($),L=`<div class="modal fade" id="modalClienteEditar" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-xl">
        <div class="modal-content ps-3">
            <div class="modal-body">
                <div class="container">
                    <div class="row justify-content-end">
                        <div class="col-2 col-lg-1">
                            <button type="button" class="btn-close w-100" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="modal-edit-data row">
                        <div class="col-12">
                            <h4 class="text-start">Editar ficha</h4>
                        </div>
                        <form action="" class="d-lg-none">
                            <div class="form-floating w-100">
                                <select class="form-select" id="selectEditDataMobile"
                                    aria-label="Selección de información a editar">
                                    <option data-bs-toggle="tab" data-bs-target="#generalData" value="generalData">Datos
                                        generakes</option>
                                    <option data-bs-toggle="tab" data-bs-target="#generalData" value="generalData">Datos
                                        de Contacto</option>
                                    <option data-bs-toggle="tab" data-bs-target="#fatherData" value="fatherData"
                                        selected>Datos de Padre</option>
                                    <option data-bs-toggle="tab" data-bs-target="#generalData" value="generalData">Datos
                                        de Madre</option>
                                    <option data-bs-toggle="tab" data-bs-target="#socialData" value="socialData">Datos
                                        Sociales</option>
                                    <option data-bs-toggle="tab" data-bs-target="#generalData" value="generalData">
                                        Antecedentes de salud</option>
                                    <option data-bs-toggle="tab" data-bs-target="#generalData" value="generalData">
                                        Atenciones médicas</option>
                                    <option data-bs-toggle="tab" data-bs-target="#generalData" value="generalData">
                                        Enfermedades</option>
                                    <option data-bs-toggle="tab" data-bs-target="#generalData" value="generalData">
                                        Apoderado académico</option>
                                    <option data-bs-toggle="tab" data-bs-target="#generalData" value="generalData">Datos
                                        del curso</option>
                                    <option data-bs-toggle="tab" data-bs-target="#generalData" value="generalData">
                                        Apoderado financiero</option>
                                    <option data-bs-toggle="tab" data-bs-target="#generalData" value="generalData">
                                        Apoderado delegado</option>
                                    <option data-bs-toggle="tab" data-bs-target="#generalData" value="generalData">
                                        Procedente</option>
                                    <option data-bs-toggle="tab" data-bs-target="#generalData" value="generalData">
                                        Alumno migrante</option>
                                    <option data-bs-toggle="tab" data-bs-target="#generalData" value="generalData">
                                        Convivencia escolar</option>
                                </select>
                                <label for="selectEditDataMobile">Selección de información a editar</label>
                            </div>
                        </form>
                        <div class="col-12 col-lg-3 d-lg-block d-none">
                            <ul class="nav nav-tabs nav-pills nav-fill" id="editFile" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" aria-current="page" id="generalData-tab" data-bs-toggle="tab"
                                        data-bs-target="#generalData" type="button" role="tab"
                                        aria-controls="generalData" aria-selected="true">
                                        Datos Generales
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" aria-current="page" id="contactData-tab" data-bs-toggle="tab"
                                        data-bs-target="#contactData" type="button" role="tab"
                                        aria-controls="contactData" aria-selected="true">
                                        Datos de Contacto
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active" aria-current="page" id="fatherData-tab"
                                        data-bs-toggle="tab" data-bs-target="#fatherData" type="button" role="tab"
                                        aria-controls="fatherData" aria-selected="true">
                                        Datos de Padre
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" aria-current="page" id="motherData-tab" data-bs-toggle="tab"
                                        data-bs-target="#motherData" type="button" role="tab" aria-controls="motherData"
                                        aria-selected="true">
                                        Datos de Madre
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" aria-current="page" id="socialData-tab" data-bs-toggle="tab"
                                        data-bs-target="#socialData" type="button" role="tab" aria-controls="socialData"
                                        aria-selected="true">
                                        Datos Sociales
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" aria-current="page" id="healthData-tab" data-bs-toggle="tab"
                                        data-bs-target="#healthData" type="button" role="tab" aria-controls="healthData"
                                        aria-selected="true">
                                        Antecedentes de salud
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" aria-current="page" id="medicData-tab" data-bs-toggle="tab"
                                        data-bs-target="#medicData" type="button" role="tab" aria-controls="medicData"
                                        aria-selected="true">
                                        Atenciones médicas
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" aria-current="page" id="data-tab" data-bs-toggle="tab"
                                        data-bs-target="#data" type="button" role="tab" aria-controls="data"
                                        aria-selected="true">
                                        Enfermedades
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" aria-current="page" id="data-tab" data-bs-toggle="tab"
                                        data-bs-target="#data" type="button" role="tab" aria-controls="data"
                                        aria-selected="true">
                                        Apoderado académico
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" aria-current="page" id="data-tab" data-bs-toggle="tab"
                                        data-bs-target="#data" type="button" role="tab" aria-controls="data"
                                        aria-selected="true">
                                        Datos del curso
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" aria-current="page" id="data-tab" data-bs-toggle="tab"
                                        data-bs-target="#data" type="button" role="tab" aria-controls="data"
                                        aria-selected="true">
                                        Apoderado financiero
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" aria-current="page" id="data-tab" data-bs-toggle="tab"
                                        data-bs-target="#data" type="button" role="tab" aria-controls="data"
                                        aria-selected="true">
                                        Apoderado delegado
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" aria-current="page" id="data-tab" data-bs-toggle="tab"
                                        data-bs-target="#data" type="button" role="tab" aria-controls="data"
                                        aria-selected="true">
                                        Procedente
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" aria-current="page" id="data-tab" data-bs-toggle="tab"
                                        data-bs-target="#data" type="button" role="tab" aria-controls="data"
                                        aria-selected="true">
                                        Alumno migrante
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" aria-current="page" id="data-tab" data-bs-toggle="tab"
                                        data-bs-target="#data" type="button" role="tab" aria-controls="data"
                                        aria-selected="true">
                                        Convivencia escolar
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-12 col-lg-9 tab-content" id="editFileContent">
                            <!-- Datos de Padre-->
                            <div class="py-5 px-lg-5 tab-pane fade show active" id="fatherData" role="tabpanel"
                                aria-labelledby="fatherData-tab">
                                <h4 class="text-start m-0">Datos de Padre</h4>
                                <div class="row">
                                    <form action="" class="col-12 ingreso">
                                        <h5 class="mb-4">Información personal</h5>
                                        <div class="row mb-5">
                                            <div class="col-12 col-md-6">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="float1"
                                                        placeholder="Placeholder" value="" autocomplete="off">
                                                    <label for="float1">RUT</label>
                                                    <span class="instruccion">Ingresa RUT válido</span>
                                                </div>
                                            </div>
                                            <div
                                                class="col-12 col-md-6 col-lg-3 align-items-center d-flex justify-content-center">
                                                <button type="button"
                                                    class="btn btn-sm btn-primary w-100">Buscar</button>
                                            </div>
                                            <div
                                                class="col-12 col-md-6 col-lg-3 align-items-center d-flex justify-content-center">
                                                <button type="button"
                                                    class="btn btn-sm btn-primary outline w-100 color-primary">Limpiar</button>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="float1" placeholder=""
                                                        value="" autocomplete="off">
                                                    <label for="float1">Nombres</label>
                                                    <span class="instruccion">Ingresa tu nombre completo</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-6">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="float1" placeholder=""
                                                        value="" autocomplete="off">
                                                    <label for="float1">Apellido paterno</label>
                                                    <span class="instruccion">Ingresa tu apellido paterno</span>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="float1" placeholder=""
                                                        value="" autocomplete="off">
                                                    <label for="float1">Apellido materno</label>
                                                    <span class="instruccion">Ingresa tu apellido materno</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-6">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="float1" placeholder=""
                                                        value="" autocomplete="off">
                                                    <label for="float1">Fecha nacimiento</label>
                                                    <span class="instruccion">Ingresa tu fecha de nacimiento</span>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="float1" placeholder=""
                                                        value="" autocomplete="off">
                                                    <label for="float1">Estado civil</label>
                                                    <span class="instruccion">Ingresa tu estado civil</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="float1" placeholder=""
                                                        value="" autocomplete="off">
                                                    <label for="float1">Nivel educacional</label>
                                                    <span class="instruccion">Ingresa tu nivel educacional</span>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 class="mb-4">Dirección</h5>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="float1" placeholder=""
                                                        value="" autocomplete="off">
                                                    <label for="float1">Región</label>
                                                    <span class="instruccion">Ingresa tu región</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-6">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="float1" placeholder=""
                                                        value="" autocomplete="off">
                                                    <label for="float1">Provincia</label>
                                                    <span class="instruccion">Ingresa tu provincia</span>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="float1" placeholder=""
                                                        value="" autocomplete="off">
                                                    <label for="float1">Comuna</label>
                                                    <span class="instruccion">Ingresa tu comuna</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="float1" placeholder=""
                                                        value="" autocomplete="off">
                                                    <label for="float1">Dirección</label>
                                                    <span class="instruccion">Ingresa tu dirección</span>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 class="mb-4">Contacto</h5>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control" id="float1" placeholder=""
                                                        value="" autocomplete="off">
                                                    <label for="float1">Teléfono</label>
                                                    <span class="instruccion">Ingresa tu teléfono</span>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="row justify-content-center my-3">
                                    <div class="col-6 col-md-3 mt-2">
                                        <button type="button"
                                            class="btn btn-primary outline sistema w-100 color-primary"
                                            data-bs-dismiss="modal" aria-label="Close">Volver</button>
                                    </div>
                                    <div class="col-6 col-md-3 mt-2">
                                        <button type="button" class="btn btn-primary sistema w-100">Guardar
                                            ficha</button>
                                    </div>
                                </div>
                            </div>
                            <!-- Datos sociales-->
                            <div class="py-5 px-lg-5 tab-pane fade" id="socialData" role="tabpanel"
                                aria-labelledby="socialData-tab">
                                <h4 class="text-start m-0">Datos Familiares</h4>
                                <div class="row">
                                    <form action="" class="col-12 ingreso">
                                        <h5 class="mb-5">Grupo familiar</h5>
                                        <div class="row mb-4">
                                            <div class="col-12 col-md-8 mx-4 my-3">
                                                <h6 class="mb-4">Vive con:</h6>
                                                <div class="row">
                                                    <div class="col-4">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="hijo">
                                                            <label class="form-check-label" for="hijo">
                                                                Hijo
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-4">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="hermano">
                                                            <label class="form-check-label" for="hermano">
                                                                Hermano/a
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-4">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="padre">
                                                            <label class="form-check-label" for="padre">
                                                                Padre
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-4">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="tio">
                                                            <label class="form-check-label" for="tio">
                                                                Tío/a
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-4">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="madre">
                                                            <label class="form-check-label" for="madre">
                                                                Madre
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-4">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="abuelo">
                                                            <label class="form-check-label" for="abuelo">
                                                                Abuelo/a
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-4">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="conyuge">
                                                            <label class="form-check-label" for="conyuge">
                                                                Cónyugue
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-4">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value=""
                                                                id="otros">
                                                            <label class="form-check-label" for="otros">
                                                                Otros
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span class="instruccion">Selecciona una o más opciónes</span>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-6">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control bg-white" id="float1"
                                                        placeholder="Placeholder" autocomplete="off">
                                                    <label for="float1">Nº de personas</label>
                                                    <span class="instruccion">Ingresa numero de personas</span>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control bg-white" id="float1"
                                                        placeholder="Placeholder" autocomplete="off">
                                                    <label for="float1">Nº trabajadores</label>
                                                    <span class="instruccion">Ingresa numero de trabajadores</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-6">
                                                <div class="form-floating w-100">
                                                    <select class="form-select" id="floatingSelectGrid"
                                                        aria-label="Floating label select example">
                                                        <option selected>Máma</option>
                                                    </select>
                                                    <label for="floatingSelectGrid">Jefe de hogar</label>
                                                    <span class="instruccion">Ingresa jefe de hogar</span>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-floating w-100">
                                                    <select class="form-select" id="floatingSelectGrid"
                                                        aria-label="Floating label select example">
                                                        <option selected>Trabajador dependiente</option>
                                                    </select>
                                                    <label for="floatingSelectGrid">Situación laboral</label>
                                                    <span class="instruccion">Ingresa situación laboral</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-6">
                                                <div class="form-floating w-100">
                                                    <select class="form-select" id="floatingSelectGrid"
                                                        aria-label="Floating label select example">
                                                        <option selected>4</option>
                                                    </select>
                                                    <label for="floatingSelectGrid">Nº de hermanos</label>
                                                    <span class="instruccion">Ingresa número de hermanos</span>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-floating w-100">
                                                    <select class="form-select" id="floatingSelectGrid"
                                                        aria-label="Floating label select example">
                                                        <option selected>2</option>
                                                    </select>
                                                    <label for="floatingSelectGrid">Hermano/a en curso</label>
                                                    <span class="instruccion">Ingresa curso de hermano/a</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating w-100">
                                                    <select class="form-select" id="floatingSelectGrid"
                                                        aria-label="Floating label select example">
                                                        <option selected>C2</option>
                                                    </select>
                                                    <label for="floatingSelectGrid">Situación económica</label>
                                                    <span class="instruccion">Ingresa situación enconómica</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control bg-white" id="float1"
                                                        placeholder="Placeholder" autocomplete="off">
                                                    <label for="float1">Pasaporte o DNI</label>
                                                    <span class="instruccion">Ingresa pasaporte o DNI</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control bg-white" id="float1"
                                                        placeholder="Placeholder" autocomplete="off">
                                                    <label for="float1">$ Ingreso familiar</label>
                                                    <span class="instruccion">Ingresa ingreso familiar</span>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 class="mb-4">Vivienda</h5>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating w-100">
                                                    <select class="form-select" id="floatingSelectGrid"
                                                        aria-label="Floating label select example">
                                                        <option selected>Sólida</option>
                                                    </select>
                                                    <label for="floatingSelectGrid">Tipo de vivienda</label>
                                                    <span class="instruccion">Ingresa tipo de vivienda</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating w-100">
                                                    <select class="form-select" id="floatingSelectGrid"
                                                        aria-label="Floating label select example">
                                                        <option selected>Arrendada</option>
                                                    </select>
                                                    <label for="floatingSelectGrid">Pertenencia de la
                                                        vivienda</label>
                                                    <span class="instruccion">Ingresa pertenencia de la
                                                        vivienda</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating w-100">
                                                    <select class="form-select" id="floatingSelectGrid"
                                                        aria-label="Floating label select example">
                                                        <option selected>Potable</option>
                                                    </select>
                                                    <label for="floatingSelectGrid">Tipo de suministro de
                                                        agua</label>
                                                    <span class="instruccion">Ingresa tipo de suministro de
                                                        agua</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control bg-white" id="float1"
                                                        placeholder="Placeholder">
                                                    <label for="float1">Nº Baños</label>
                                                    <span class="instruccion">Ingresa número de baños</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating w-100">
                                                    <select class="form-select" id="floatingSelectGrid"
                                                        aria-label="Floating label select example">
                                                        <option selected>Propio</option>
                                                    </select>
                                                    <label for="floatingSelectGrid">Tipo de baño</label>
                                                    <span class="instruccion">Ingresa tipo de baño</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control bg-white" id="float1"
                                                        placeholder="Placeholder" autocomplete="off">
                                                    <label for="float1">Nº de habitaciones</label>
                                                    <span class="instruccion">Ingresa número de habitaciones</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating w-100">
                                                    <select class="form-select" id="floatingSelectGrid"
                                                        aria-label="Floating label select example">
                                                        <option selected>Urbano</option>
                                                    </select>
                                                    <label for="floatingSelectGrid">Sector dónde vive</label>
                                                    <span class="instruccion">Ingresa sector donde vive</span>
                                                </div>
                                            </div>
                                        </div>
                                        <h5 class="mb-4">Alumno/s</h5>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <input type="text" class="form-control bg-white" id="float1"
                                                        placeholder="Placeholder" autocomplete="off">
                                                    <label for="float1">Tiempo de casa a colegio</label>
                                                    <span class="instruccion">Ingresa tiempo de casa a
                                                        colegio</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating w-100">
                                                    <select class="form-select" id="floatingSelectGrid"
                                                        aria-label="Floating label select example">
                                                        <option selected>Público</option>
                                                    </select>
                                                    <label for="floatingSelectGrid">Tipo de transporte
                                                        escolar</label>
                                                    <span class="instruccion">Ingresa tipo de transporte
                                                        escolar</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating w-100">
                                                    <select class="form-select" id="floatingSelectGrid"
                                                        aria-label="Floating label select example">
                                                        <option selected>Adecuado</option>
                                                    </select>
                                                    <label for="floatingSelectGrid">Calificación del lugar de
                                                        estudios</label>
                                                    <span class="instruccion">Ingresa calificación del lugar de
                                                        estudios</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-5">
                                            <div class="col-12">
                                                <div class="form-floating w-100">
                                                    <select class="form-select" id="floatingSelectGrid"
                                                        aria-label="Floating label select example">
                                                        <option selected>VidaCamara</option>
                                                    </select>
                                                    <label for="floatingSelectGrid">Seguro médico adicional</label>
                                                    <span class="instruccion">Ingresa cseguro médico
                                                        adicional</span>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <div class="col-12">
                                                <h3 class="fs-16 m-1">
                                                    <b>¿Cuenta con el apoyo adulto(s) en su aprendizaje y la
                                                        realización de labores escolares?</b>
                                                </h3>
                                            </div>
                                            <div class="col-12 col-sm-6 col-md-3">
                                                <div class="row justify-content-end">
                                                    <div class="col-6">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" value=""
                                                                name="support" id="support-yes">
                                                            <label class="form-check-label" for="support-yes"> Si
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="radio" value=""
                                                                name="support" id="support-no">
                                                            <label class="form-check-label" for="support-no"> No
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <span class="instruccion">Ingresa una opción</span>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <div class="col-12">
                                                <h6>Observaciones:</h6>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        JUNAEB
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Chile Solidario

                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Embarazada
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Programa Puente
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Educación especial lenguaje
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Registro Social de Hogares
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Cónyugue
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value=""
                                                        id="flexCheckDefault">
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Otros
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="row justify-content-center my-3">
                                    <div class="col-6 col-md-3 mt-2">
                                        <button type="button"
                                            class="btn btn-primary outline sistema w-100 color-primary"
                                            data-bs-dismiss="modal" aria-label="Close">Volver</button>
                                    </div>
                                    <div class="col-6 col-md-3 mt-2">
                                        <button type="button" class="btn btn-primary sistema w-100">Guardar
                                            ficha</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,A=n=>{const a=document.createElement("div");a.innerHTML=L,n.append(a);var e=new bootstrap.Modal(document.getElementById("modalClienteEditar"),{});e.show()},T=async n=>{const a=await P();if(a.length===0)return;const e=document.createElement("div");e.innerHTML=`
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
    `,n.append(e),a.forEach(l=>{const o=document.querySelector("#mobileContainer"),s=document.querySelector("#studentTableDesktop");o.innerHTML+=`
            <div class="card-shadow mb-4">
                <div class="row mb-4">
                    <div class="col-12">
                        <div>${l.run}</div>
                        <div class="fw-bold">${l.nombre} ${l.apellidoPaterno} ${l.apellidoMaterno}</div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-6">
                        <div>Matrícula</div>
                        <div class="fw-bold">${l.matricula}</div>
                    </div>
                    <div class="col-6">
                        <div>Nº Lista</div>
                        <div class="fw-bold">${l.numeroLista}</div>
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
        `,s.innerHTML+=`
            <tr>
                <td scope="col">${l.matricula}</td>
                <td class="text-center">${l.numeroLista}</td>
                <td scope="col">${l.run}</td>
                <td scope="col">${l.apellidoPaterno}</td>
                <td scope="col">${l.apellidoMaterno}</td>
                <td scope="col">${l.nombre}</td>
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
        `}),document.querySelectorAll(".edit-button").forEach(l=>{l.addEventListener("click",()=>{const o=document.querySelector("main");A(o)})})},G=n=>{const a={titulo:"Nóminas",subtitulo:""},e=document.querySelector("#select-course");C(e),n.className="row",n.innerHTML=`
        <div class="col-12 col-lg-2 d-none d-lg-block">
            <ul class="nav nav-pills nav-fill" id="classBook" role="tablist"> </ul>
        </div>
        <div class="col-12 col-lg-10 card-shadow p-sm-5">
            <div class="cont-section-admin">
                <div class="row">
                    <div class="col-12 border-neutral-separador" class="tab-content" id="classBookContent">
                    </div>
                </div>
            </div>
        </div>
    `;const t=document.querySelector("#classBook"),o=v.getModules().filter(i=>i.tag==="classbook")[0].submodules,s=document.querySelector("#classBookContent");b(s,a),E(s),T(s),o.length!==0&&o.forEach(i=>{x(t,i)})};let r=0;const u=(n,...a)=>{const e=a[0],t=document.createElement("button");t.className="button-modulo",r===0?t.innerHTML=`
            <img src="icon-${e.tag}.svg" alt="${e.text}">
            ${e.text}
        `:r===1?(t.classList.add("curso"),t.innerHTML=e.text):t.innerHTML=`
            <li class="nav-item" role="presentation">
                <a class="nav-link" aria-current="page" id="${e.tag}-tab" data-bs-toggle="tab"
                    data-bs-target="#${e.tag}" type="button" role="tab" aria-controls="${e.tag}"
                    aria-selected="true">
                    <img src="icon-${e.tag}.svg" alt="${e.text}">
                    ${e.text}
                </a>
            </li>
        `,n.append(t),t.addEventListener("click",()=>{if(r>0){const l=document.querySelector("#modules").parentElement.parentElement;l.innerHtml="",G(l)}else D(n);r++})},N=n=>{const a={titulo:"Selección del Módulo de Educación",subtitulo:"Este módulo te brinda acceso directo a los recursos educativos esenciales. Descubre una amplia variedad de contenidos diseñados para apoyarte en tu aprendizaje y logro de objetivos académicos."},e=document.querySelector("#title");b(e,a),v.getModules().forEach(l=>{u(n,l)})},j=n=>{const a=document.createElement("main");a.innerHTML=h,n.append(a);const e=document.querySelector("#breadcrumb");w(e);const t=document.querySelector("#modules");N(t)},H=async n=>{await v.reloadPage(),n.innerHTML="",g(n),j(n)},F=document.querySelector("#netcoreApp");H(F);
