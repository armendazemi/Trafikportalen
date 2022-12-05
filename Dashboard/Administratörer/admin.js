// This file is only for the pages that are under the Administratörer folder.

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

// Add new department section
const currentAuth = document.querySelector(".current-auth");
const addMoreDepartments = document.querySelector(".add-more-departments");
const addMoreDepartmentsDropdownWrapper = document.querySelector(".add-more-departments .dropdown");
const addMoreDepartmentsDropDownMenu = document.querySelector(".add-more-departments .dropdown-menu");
const dropDownItemsDepartment = document.querySelectorAll(".add-more-departments .dropdown-menu .dropdown-item");
const addDepartmentButton = document.querySelector(".add-department-btn");
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







// EVENT LISTENERS
dropdownAdminButton.addEventListener("click", openAdminDropdownMenu);
addDepartmentButton.addEventListener("click", openDepartmentDropdownMenu);
openDropdownMenuButton.addEventListener("click", handleDepartmentDropdownMenu);
dropDownItemsDepartment.forEach((item) => handleAddDepartment(item));
authTags.querySelectorAll(".fa-x").forEach((tagCloseButton) => handleRemoveTag(tagCloseButton));
