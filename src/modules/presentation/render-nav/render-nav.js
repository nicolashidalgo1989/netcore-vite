import './render-nav.css';

export const renderNav = (element, ...args) =>  {
    const data = args[0];
    const button = document.createElement('li');
    button.className = 'nav-item';
    button.setAttribute('role', 'presentation');
    button.innerHTML = `
        <a class="nav-link" aria-current="page" id="${data.tag}-tab" data-bs-toggle="tab"
            data-bs-target="#${data.tag}" type="button" role="tab" aria-controls="${data.tag}"
            aria-selected="true">
            <img src="icon-${data.tag}.svg" alt="${data.text}">
            ${data.text}
        </a>
    `;
    element.append( button );
}