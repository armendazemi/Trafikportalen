// This file is only for the pages that are under the Administratörer folder.

const userData = {
    name: document.querySelector("#name"),
    lastName: document.querySelector("#lastName"),
    emailPrimary: document.querySelector("#emailPrimary"),
    emailSecondary: document.querySelector("#emailSecondary"),
    mobile: document.querySelector("#mobile"),
    phone: document.querySelector("#phone"),
    adminStatus: document.querySelector("#adminStatus"),
}
let userDataHasChanged = false;

// Authorization Section
const authorizationSection = document.querySelector(".authorization");
const dropdownAdmin = document.querySelector(".dropdown.admin");
const dropdownAdminButton = document.querySelector(".dropdown.admin button");
const chevdownAdmin = dropdownAdminButton.querySelector(".fa-chevron-down");
const dropdownMenuAdmin = document.querySelector(".dropdown.admin .dropdown-menu"); 
const currentAuthorization = document.querySelector(".current-auth");
const createButton = document.querySelector(".create-button");

/**
 * Handles the display of the admin dropdown menu and animation of the chevdown icon.
 */
function openAdminDropdownMenu() {
    if (dropdownMenuAdmin.classList.contains("show")) {
        dropdownMenuAdmin.style.opacity = "0";
        dropdownMenuAdmin.style.pointerEvents = "none";
        dropdownMenuAdmin.classList.remove("show");
        currentAuthorization.style.marginTop = "24px";
        chevdownAdmin.style.transform = "rotate(0deg)";
   } else {
        dropdownMenuAdmin.style.opacity = "1";
        dropdownMenuAdmin.classList.add("show");
        dropdownMenuAdmin.style.pointerEvents = "all";
        currentAuthorization.style.marginTop = 50 + dropdownMenuAdmin.clientHeight + "px";
        chevdownAdmin.style.transform = "rotate(180deg)";
   }
}

function handleAdminSelection (event) {
    dropdownAdminButton.querySelector('p').innerText = event.target.innerHTML;
    openAdminDropdownMenu();

}

// Add new department section
const currentAuth = document.querySelector(".current-auth");
const addMoreDepartments = document.querySelector(".add-more-departments");
const addMoreDepartmentsDropdownWrapper = document.querySelector(".add-more-departments .dropdown");
const addMoreDepartmentsDropDownMenu = document.querySelector(".add-more-departments .dropdown-menu");
const dropDownItemsDepartment = document.querySelectorAll(".add-more-departments .dropdown-menu .dropdown-item");
const addDepartmentButton = document.querySelector(".add-department-btn");
const searchForDepartmentInput = addMoreDepartments.querySelector("input");
const addTitle = document.querySelector(".add-title");
const bottomButtons = document.querySelector(".bottom-buttons");
const openDropdownMenuButton = addMoreDepartmentsDropdownWrapper.querySelector(".fa-chevron-down");
const authTags = document.querySelector(".auth-tags");

/**
 * Handles the display of the department dropdown wrapper and the chevdown icon.
 */
function openDepartmentDropdownMenu() {
    addDepartmentButton.style.display = "none";
    addMoreDepartmentsDropdownWrapper.style.display = "flex";
    addMoreDepartments.style.flexDirection = "column";
    addTitle.style.display = "block";
}

/**
 * Handles the display of the dropmenu menu holding all the departments.
 * Also handles the animation of the chevdown icon.
 */
function handleDepartmentDropdownMenu() {
    if (!addMoreDepartmentsDropDownMenu.classList.contains("show")) {
        addMoreDepartmentsDropDownMenu.style.opacity = "1";
        addMoreDepartmentsDropDownMenu.style.pointerEvents = "all";
        addMoreDepartmentsDropDownMenu.classList.add("show");
        openDropdownMenuButton.style.transform = "rotate(180deg)";
        bottomButtons.style.marginTop = 50 + addMoreDepartmentsDropDownMenu.clientHeight + "px";
    } else {
        addMoreDepartmentsDropDownMenu.style.opacity = "0";
        addMoreDepartmentsDropDownMenu.style.pointerEvents = "none";
        addMoreDepartmentsDropDownMenu.classList.remove("show");
        openDropdownMenuButton.style.transform = "rotate(0deg)";
        bottomButtons.style.marginTop = "8px";
    }
}

/**
 * Handles adding a new department to the authTags div.
 * @param {HTMLObjectElement} item - The department that is to be added.
 */
function handleAddDepartment(item) {
    item.addEventListener("click", () => {
        const department = document.createElement("div");
        department.classList.add("tag");

        const departmentName = document.createElement("p");
        departmentName.innerHTML = item.innerHTML;

        const xIcon = document.createElement("i");
        xIcon.classList.add("fa-regular", "fa-x");

        department.appendChild(departmentName);
        department.appendChild(xIcon);
        authTags.appendChild(department);
        addMoreDepartmentsDropDownMenu.removeChild(item);
        handleRemoveTag(xIcon)
        handleDepartmentDropdownMenu();
    });
}

function handleDepartmentSearch(event) {
    if(!addMoreDepartmentsDropDownMenu.classList.contains("show")){
        handleDepartmentDropdownMenu();
    }
    // Close when input is empty
    if (event.target.value === "") {
        handleDepartmentDropdownMenu();
    }
    // Filter the departments
    let searchTerm = event.target.value.toLowerCase();
    dropDownItemsDepartment.forEach(item => {
      let departmentName = item.innerHTML.toLowerCase();
        if (departmentName.includes(searchTerm)) {
            item.style.backgroundColor = "#F8FCFD";
        }else {
            item.style.backgroundColor = "white";
        }
    });
}

/**
 * Handles removing a department from the authTags div.
 * @param {HTMLObjectElement} item - The department that is to be removed.
 */
function handleRemoveTag(tag) {
    tag.addEventListener("click", () => {
        authTags.removeChild(tag.parentNode);
        const tagText = tag.parentNode.querySelector("p").innerHTML;
        const departmentMenuItem = document.createElement("li");
        departmentMenuItem.classList.add("dropdown-item", "department");
        departmentMenuItem.innerHTML = tagText;
        handleAddDepartment(departmentMenuItem);
        addMoreDepartmentsDropDownMenu.appendChild(departmentMenuItem);
    });    
}

// ----------------
// EVENT LISTENERS
// ----------------

// Admin Section
dropdownAdminButton.addEventListener("click", openAdminDropdownMenu);
dropdownMenuAdmin.querySelectorAll(".dropdown-item").forEach(item => item.addEventListener("click", handleAdminSelection));

// Department Section
addDepartmentButton.addEventListener("click", openDepartmentDropdownMenu);
openDropdownMenuButton.addEventListener("click", handleDepartmentDropdownMenu);
dropDownItemsDepartment.forEach((item) => handleAddDepartment(item));
searchForDepartmentInput.addEventListener("input", (event) => handleDepartmentSearch(event));
authTags.querySelectorAll(".fa-x").forEach((tagCloseButton) => handleRemoveTag(tagCloseButton));

// Alert user if they have unsaved changes.
window.onbeforeunload = function(e) {
    if (userDataHasChanged)
        return "You have unsaved changes. Are you sure you want to leave?"; 
};




//----------------
//  MODALS
//----------------
// Delete admin modal
const deleteAdminModal = document.querySelector(".delete-admin-modal");
const adminSearch = document.querySelector(".search-for-admin");
const adminSearchChevDown = adminSearch.querySelector(".fa-chevron-down");
const dropdownResults = deleteAdminModal.querySelector(".dropdown-results");
const deleteAdminModalFooter = deleteAdminModal.querySelector(".modal-footer");

adminSearchChevDown.addEventListener("click", () => {
    if (!dropdownResults.classList.contains("show")) {
    dropdownResults.style.display = "block";
    deleteAdminModalFooter.style.marginTop = 50 + dropdownResults.clientHeight + "px";
    dropdownResults.classList.add("show");
    adminSearchChevDown.style.transform = "rotate(180deg)";
    } else {
    dropdownResults.style.display = "none";
    deleteAdminModalFooter.style.marginTop = "8px";
    dropdownResults.classList.remove("show");
    adminSearchChevDown.style.transform = "rotate(0deg)";
    }
});

