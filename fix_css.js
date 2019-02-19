function add_css_file(url) {
    let head = document.querySelector('head');
    if (head) {
        const el_link = document.createElement('link');
        el_link.type = 'text/css';
        el_link.rel = 'stylesheet';
        el_link.href = url;
        head.appendChild(el_link);
    }
}

// function add_styles(styles_string) {
//     let head = document.querySelector('head');
//     if (head) {
//         const el_style = document.createElement('style');
//         el_style.type = 'text/css';
//         el_style.textContent = styles_string;
//         head.appendChild(el_style);
//     }
// }

function apply_folding_unassigned_tasks_box() {
    console.log('apply_folding_unassigned_tasks_box...');
    const talks_box = document.querySelector('#unassigned-talks');
    if (talks_box) {
        const talks_header = talks_box.querySelector('.room-header');

        // create details element
        const el_details = document.createElement('details');
        // el_details.classList.add('header');
        el_details.id = talks_box.id;
        el_details.style.height = 'auto';
        const el_sum = document.createElement('summary');
        el_sum.appendChild(document.createTextNode(talks_header.textContent));
        el_sum.classList.add('room-header');
        el_details.appendChild(el_sum);

        // clean up..
        talks_header.remove()

        const unassigned_container = talks_box.querySelector('#unassigned-container');

        unassigned_container.style.paddingBottom = '2em';

        // move children
        el_details.appendChild(talks_box.querySelector('.input-group'));
        el_details.appendChild(unassigned_container);


        // append new details element..
        talks_box.parentElement.appendChild(el_details);
        talks_box.remove();
    }
}

function fix_css() {
    console.group('fix_css:');
    add_css_file(
        'https://s-light.github.io/pretalx_hacks/fix_css.css'
    );
    // add_css_file(
    //     'https://s-light.github.io/pretalx_hacks/table_freeze.css'
    // );

    apply_folding_unassigned_tasks_box();

    console.groupEnd();
    console.log('');
}
