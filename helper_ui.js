

function add_button(
    link_text,
    onclick,
    icon='leaf',
    parent_el=undefined
) {
    // console.group('add_button:');

    const button = document.createElement('button');
    button.appendChild(document.createTextNode(link_text));
    button.classList.add('btn');
    button.classList.add('btn-outline-info');
    button.classList.add('btn-sm');
    button.title = link_text;
    button.onclick = onclick;

    const icon = document.createElement('i');
    icon.classList.add('fa');
    icon.classList.add('fa-' + icon);
    icon.appendChild(button);

    if (parent_el == undefined) {
        parent_el = document.querySelector('.schedule-header');
    }
    parent_el.appendChild(icon);

    // console.groupEnd();
    // console.log('');
    return button;
}


function add_icon_link(link_text, url, icon='envelope', target='_blank') {
    const link = document.createElement('a');
    link.href = url;
    link.target = target;
    const symbol = document.createElement('span');
    symbol.classList.add('fa');
    symbol.classList.add('fa-' + icon);
    link.appendChild(symbol);
    link.appendChild(document.createTextNode(link_text));
    return link;
}


function helper_ui() {
    console.info(
        'helper_ui() \n'
        'nothing to do. \n'
        'use these provided functions in other scripts..'
    );
    // console.info('helper_ui done.');
}
