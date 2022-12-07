// This file is only for the pages that are under the Avdelningar folder.

// -----------------
// SALARY ADMIN
// -----------------
if (window.location.pathname.includes("ny")) {
  const salaryAdmin = document.querySelector(".salary-admin");
  const dropdownSalaryAdminButton = salaryAdmin.querySelector("button");
  const salaryDropdownMenu = salaryAdmin.querySelector(".dropdown-menu");
  const salaryChevronDown = salaryAdmin.querySelector(".fa-chevron-down");
  const currentSalaryAdmin = salaryAdmin.querySelector("#salaryAdmin");
  const departmentAdmin = document.querySelector('.add-admin');

  function handleSalaryAdminDropdown() {
      if (salaryDropdownMenu.classList.contains("show")) {
        salaryDropdownMenu.classList.remove("show");
        salaryDropdownMenu.style.opacity = "0";
        departmentAdmin.style.marginTop = "24px";
        salaryChevronDown.style.transform = "rotate(0deg)";
        salaryDropdownMenu.style.pointerEvents = "none";
      } else {
        salaryDropdownMenu.classList.add("show");
        salaryDropdownMenu.style.opacity = "1";
        departmentAdmin.style.marginTop = 24 + salaryDropdownMenu.offsetHeight + "px";
        salaryChevronDown.style.transform = "rotate(180deg)";
        salaryDropdownMenu.style.pointerEvents = "auto";
      }
  }

  function selectSalaryAdmin(item) {
    handleSalaryAdminDropdown();
    currentSalaryAdmin.innerHTML = item.innerHTML;
  }

  // Event Listeners
  dropdownSalaryAdminButton.addEventListener("click", handleSalaryAdminDropdown);
  salaryDropdownMenu.querySelectorAll(".dropdown-item").forEach((item) => item.addEventListener("click", () => selectSalaryAdmin(item)));


  // -----------------
  // DEPARTMENT ADMIN
  // -----------------
  const departmentAdminChevronDown = departmentAdmin.querySelector(".fa-chevron-down");
  const departmentAdminDropdownMenu = departmentAdmin.querySelector(".dropdown-menu");
  const departmentAdminDropdownItems = departmentAdminDropdownMenu.querySelectorAll(".dropdown-item");
  const departmentAdminInput = departmentAdmin.querySelector("input");
  const currentAdminsWrapper = document.querySelector(".auth-tags");
  const currentAdmins = currentAdminsWrapper.querySelectorAll(".tag");

  function handleDepartmentAdminDropdown() {
      if (departmentAdminDropdownMenu.classList.contains("show")) {
        departmentAdminDropdownMenu.classList.remove("show");
        departmentAdminDropdownMenu.style.opacity = "0";
        currentAdminsWrapper.style.marginTop = "24px";
        departmentAdminChevronDown.style.transform = "rotate(0deg)";
        departmentAdminDropdownMenu.style.pointerEvents = "none";
      } else {
        departmentAdminDropdownMenu.classList.add("show");
        departmentAdminDropdownMenu.style.opacity = "1";
        currentAdminsWrapper.style.marginTop = 24 + salaryDropdownMenu.offsetHeight + "px";
        departmentAdminChevronDown.style.transform = "rotate(180deg)";
        departmentAdminDropdownMenu.style.pointerEvents = "auto";
        console.log(departmentAdminDropdownMenu.classList);
      }
  }

  function handleDepartmentAdminSearch(event) {
    if (!departmentAdminDropdownMenu.classList.contains("show")) {
      handleDepartmentAdminDropdown();
    }
    // Close when input is empty
    if (event.target.value === "") {
      handleDepartmentAdminDropdown();
    }
    // Filter the departments
    let searchTerm = event.target.value.toLowerCase();
    departmentAdminDropdownItems.forEach((item) => {
      let departmentName = item.innerHTML.toLowerCase();
      if (departmentName.includes(searchTerm) && searchTerm !== "") {
        item.style.backgroundColor = "#F8FCFD";
        item.style.display = "block";
      } else if(searchTerm === "") {
        item.style.backgroundColor = "white";
        item.style.display = "block";
      }
      else {
        item.style.display = "none";
      }
    });
  }

  function handleAddNewDepartmentAdmin(item) {
    let newAdminTag = document.createElement("div");
    let newAdminName = document.createElement("p");
    let closeIcon = document.createElement("i");

    newAdminTag.classList.add("tag");
    newAdminName.innerHTML = item.innerHTML;
    closeIcon.classList.add("fa-regular", "fa-x");

    newAdminTag.appendChild(newAdminName);
    newAdminTag.appendChild(closeIcon);
    currentAdminsWrapper.appendChild(newAdminTag);
    departmentAdminDropdownMenu.removeChild(item);

    handleAdminRemoval(newAdminTag);
    handleDepartmentAdminDropdown();

  }

  function handleAdminRemoval(tag) {
    tag.querySelector(".fa-x").addEventListener("click", () => {
      let removedAdmin = tag.querySelector("p").innerHTML;
      let newAdmin = document.createElement("div");
      newAdmin.classList.add("dropdown-item");
      newAdmin.innerHTML = removedAdmin;
      newAdmin.addEventListener("click", () => handleAddNewDepartmentAdmin(newAdmin));
      departmentAdminDropdownMenu.appendChild(newAdmin);
      currentAdminsWrapper.removeChild(tag);
    });
  }

  // Event Listeners
  departmentAdminChevronDown.addEventListener("click", handleDepartmentAdminDropdown);
  departmentAdminInput.addEventListener("input", handleDepartmentAdminSearch);
  departmentAdminDropdownItems.forEach((item) => item.addEventListener("click", () => handleAddNewDepartmentAdmin(item)));
  currentAdmins.forEach((tag) => handleAdminRemoval(tag));

}

if (window.location.pathname === "/Dashboard/Avdelningar/avdelning.html") {
  // -----------------
  // SINGLE DEPARTMENT
  // -----------------
  const departmentInformation = document.querySelector(".department-information");
  const departmentInformationChevronDown = departmentInformation.querySelector(".fa-chevron-down");
  const innerInformationWrapper = departmentInformation.querySelector(".information");
  console.log(innerInformationWrapper);

  function handleDepartmentInformationDisplay() {
    if (innerInformationWrapper.classList.contains("show")) {
      innerInformationWrapper.classList.remove("show");
      innerInformationWrapper.style.maxHeight = "0";
      innerInformationWrapper.style.opacity = "0";
      innerInformationWrapper.style.padding = "0";
      innerInformationWrapper.style.margin = "0";
      departmentInformationChevronDown.style.transform = "rotate(0deg)";
    } else {
      innerInformationWrapper.classList.add("show");
      innerInformationWrapper.style.maxHeight = "400px";
      innerInformationWrapper.style.opacity = "1";
      innerInformationWrapper.style.padding = "24px";
      innerInformationWrapper.style.marginTop = "32px";
      departmentInformationChevronDown.style.transform = "rotate(180deg)";
    }
  }


  departmentInformation.addEventListener("click", handleDepartmentInformationDisplay);

}

// -----------------
// EDIT RESENÄR
// -----------------
if (window.location.pathname === "/Dashboard/Avdelningar/edit-resenar.html") {

  // Resenär Section
  const inputFields = document.querySelector(".edit-resenar").querySelectorAll("input");
  let passengerDataHasChanged = false;
  const ticketHolderSection = document.querySelector(".ticket-holder");
  const appHolderSwitch = ticketHolderSection.querySelector(".app").querySelector(".form-check-input");
  const travelCardHolderSwitch = ticketHolderSection.querySelector(".travel-card").querySelector(".form-check-input");
  const undoChangesButton = document.querySelector(".undo");

  /**
   * Handles the activation of the input fields for the ticket holders.
   * @param {Event} event the event that triggered the function
   */
  function handleTicketHolderInputActivation(event) {
    const ticketHolderParent = event.target.parentElement.parentElement;
    const textInput = ticketHolderParent.querySelector("input[type=text]");
    if (event.target.checked) {
      textInput.disabled = false;
    } else {  
      textInput.disabled = true;
    }
  }

  function undoChanges() {
    passengerDataHasChanged = false;
		location.reload();
  }




  // Event Listeners
  appHolderSwitch.addEventListener("change", handleTicketHolderInputActivation);
  travelCardHolderSwitch.addEventListener("change", handleTicketHolderInputActivation);
  undoChangesButton.addEventListener("click", undoChanges);
  [...inputFields].forEach(field => field.addEventListener("change", () => {
    passengerDataHasChanged = true;
  }));

  window.onbeforeunload = function () {
		if (passengerDataHasChanged)
			return "You have unsaved changes. Are you sure you want to leave?";
	};



  // Active tickets section
  const activeTickets = document.querySelectorAll(".ticket");
  console.log(activeTickets);

  function expandTicketDetails(ticket) {
    let showMoreButton = ticket.querySelector(".show-more").querySelector("p");
    let showLessButton = ticket.querySelector(".show-less").querySelector("p");
    showMoreButton.addEventListener("click", () => {
      const ticketExtraDetails = ticket.querySelector(".ticket-extra");
      if (!ticketExtraDetails.classList.contains("show")) {
        ticketExtraDetails.classList.add("show");
        ticketExtraDetails.style.maxHeight = "400px";
        ticketExtraDetails.style.opacity = "1";
        ticketExtraDetails.style.padding = "24px";
        ticketExtraDetails.style.marginTop = "-20px";
        showMoreButton.style.display = "none";
        showLessButton.style.display = "block";
      } 
    });
    showLessButton.addEventListener("click", () => {
      const ticketExtraDetails = ticket.querySelector(".ticket-extra");
      if (ticketExtraDetails.classList.contains("show")) {
        ticketExtraDetails.classList.remove("show");
        ticketExtraDetails.style.maxHeight = "0";
        ticketExtraDetails.style.opacity = "0";
        ticketExtraDetails.style.padding = "0";
        ticketExtraDetails.style.margin = "0";
        showMoreButton.style.display = "block";
      }
    });
  }

  [...activeTickets].forEach((ticket) => expandTicketDetails(ticket));
}

// -----------------
// BULK DELETE
// -----------------
if (document.querySelector("#checkAll")) {
  const checkAllRadioButton = document.querySelector("#checkAll");
  const checkBoxes = document.querySelectorAll(".form-check-input");
  const deleteBulkButton = document.querySelector(".search").querySelector(".delete");
  
  // Check all card radio buttons
  checkAllRadioButton.addEventListener("click", () => {
      if (!checkAllRadioButton.checked) {
          [...checkBoxes].forEach((radioBtn) => {
              radioBtn.checked = false;
              deleteBulkButton.classList.add("disabled");
          });
      } else {
          [...checkBoxes].forEach((radioBtn) => {
              deleteBulkButton.classList.remove("disabled");
              radioBtn.checked = true;
          });
      }
  });
  
  [...checkBoxes].forEach((radioBtn) => {
      radioBtn.addEventListener("click", () => {
          if (radioBtn.checked) {
              deleteBulkButton.classList.remove("disabled");
          } else {
              deleteBulkButton.classList.add("disabled");
              checkAllRadioButton.checked = false;
          }
      });
  });
}




























if (window.location.pathname.includes("start")) {
  const checkAllRadioButton = document.querySelector("#checkAll");
  const checkBoxes = document.querySelectorAll(".form-check-input");
  const deleteBulkButton = document.querySelector(".search").querySelector(".delete");

  // Check all card radio buttons
  checkAllRadioButton.addEventListener("click", () => {
      if (!checkAllRadioButton.checked) {
          [...checkBoxes].forEach((radioBtn) => {
              radioBtn.checked = false;
              deleteBulkButton.classList.add("disabled");
          });
      } else {
          [...checkBoxes].forEach((radioBtn) => {
              deleteBulkButton.classList.remove("disabled");
              radioBtn.checked = true;
          });
      }
  });

  [...checkBoxes].forEach((radioBtn) => {
      radioBtn.addEventListener("click", () => {
          if (radioBtn.checked) {
              deleteBulkButton.classList.remove("disabled");
          } else {
              deleteBulkButton.classList.add("disabled");
              checkAllRadioButton.checked = false;
          }
      });
  });
}