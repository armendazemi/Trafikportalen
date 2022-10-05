

// DOM Elements
let dateFrom = document.querySelector('#date-from');
let datetTo = document.querySelector('#date-to');
let filterButton = document.querySelector('.filter-btn');


let checkAllRadioButton = document.querySelector('#checkAll');
let allCardRadioButtons = document.querySelectorAll('.card-check-btn');
let exportAllOptionsButton = document.querySelector('#exportAll');
let allExportOptionsRadioButton = document.querySelectorAll('.export-option');



// Disable 'dateTo' until we've selected a 'dateFrom'
datetTo.disabled = 'true';

// Check for changed date and enable 'dateTo' picker.
dateFrom.onchange = () => {
    console.log('Changed date...');
    let value = dateFrom.value;
    console.log(typeof value);
    if(value) {
        datetTo.disabled = '';
        datetTo.value = value;
    }else {
        datetTo.disabled = 'true';
        datetTo.value = '';2
    }
}

// Gather all data on 'Filter' button click.


// Check all card radio buttons
checkAllRadioButton.addEventListener('click', () => {
    // Once we click, the state will change, this will be opposite to the actual state
    if (!checkAllRadioButton.checked) {
        console.log('uncheck all');
        [...allCardRadioButtons].forEach((radioBtn) => {
            radioBtn.checked = false;
        });
    }else {
        console.log('check all');
        [...allCardRadioButtons].forEach((radioBtn) => {
            radioBtn.checked = true;
        });
    }
});

console.log(exportAllOptionsButton);
// Check all the options for export
exportAllOptionsButton.addEventListener('click', () => {
    if (!exportAllOptionsButton.checked) {
        [...allExportOptionsRadioButton].forEach((option) => {
            option.checked = false;
        });
    }else {
        [...allExportOptionsRadioButton].forEach((option) => {
            option.checked = true;
        });
    }
});