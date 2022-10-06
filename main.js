

// DOM Elements
let dateFrom = document.querySelector('#date-from');
let datetTo = document.querySelector('#date-to');
let filterButton = document.querySelector('.filter-btn');


let checkAllRadioButton = document.querySelector('#checkAll');
let allCardRadioButtons = document.querySelectorAll('.card-check-btn');
let exportAllOptionsButton = document.querySelector('#exportAll');
let allExportOptionsRadioButton = document.querySelectorAll('.export-option');

let toggleValueValueSliderButton = document.querySelector('.toggle-value-slider');
let valueSlider = document.querySelector('.value-slider');



// Disable 'dateTo' until we've selected a 'dateFrom'
datetTo.disabled = 'true';

// Set the min and max range for the dates
dateFrom.min = '2015-01-01';

let yourDate = new Date().toISOString().slice(0, 10);


console.log('TODAY : ' + yourDate);
// Check for changed date and enable 'dateTo' picker.
dateFrom.onchange = () => {
    let dateFromValue = dateFrom.value;

    if(dateFromValue) {
        datetTo.disabled = '';
        datetTo.value = dateFromValue;
        datetTo.min = dateFromValue
    }else {
        datetTo.disabled = 'true';
        datetTo.value = '';
    }
}

// Gather all data on 'Filter' button click.


// Check all card radio buttons
checkAllRadioButton.addEventListener('click', () => {
    // Once we click, the state will change, this will be opposite to the actual state
    if (!checkAllRadioButton.checked) {
        [...allCardRadioButtons].forEach((radioBtn) => {
            radioBtn.checked = false;
        });
    }else {
        [...allCardRadioButtons].forEach((radioBtn) => {
            radioBtn.checked = true;
        });
    }
});
 
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

// Display value slider and change cheveron from point down to up.
toggleValueValueSliderButton.addEventListener('click', () => {
    if (valueSlider.style.display == 'none') {
        valueSlider.style.display = 'block'
        let chevron = valueSlider.parentNode.querySelector('i');
        chevron.classList.remove('fa-chevron-up');
        chevron.classList.add('fa-chevron-down');
    }
    else {
        valueSlider.style.display = 'none'
        let chevron = valueSlider.parentNode.querySelector('i');
        chevron.classList.remove('fa-chevron-down');
        chevron.classList.add('fa-chevron-up');
    }
})