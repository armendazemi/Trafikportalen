//----------------
//  MODALS
//----------------
// Delete admin modal
const deleteAdminModal = document.querySelector(".delete-admin-modal");
const adminSearch = document.querySelector(".search-for-admin");
const adminSearchChevDown = adminSearch.querySelector(".fa-chevron-down");
const deleteModaldropdownResults = deleteAdminModal.querySelector(".dropdown-results");
const dropdownItems = deleteModaldropdownResults.querySelectorAll(".dropdown-item");
const deleteAdminModalFooter = deleteAdminModal.querySelector(".modal-footer");
const adminSearchInput = adminSearch.querySelector("input");

function openAdminDropdownMenu() {
	if (!deleteModaldropdownResults.classList.contains("show")) {
		deleteModaldropdownResults.style.display = "block";
		deleteAdminModalFooter.style.marginTop =
			24 + deleteModaldropdownResults.clientHeight + "px";
		deleteModaldropdownResults.classList.add("show");
		adminSearchChevDown.style.transform = "rotate(180deg)";
	} else {
		deleteModaldropdownResults.style.display = "none";
		deleteAdminModalFooter.style.marginTop = "8px";
		deleteModaldropdownResults.classList.remove("show");
		adminSearchChevDown.style.transform = "rotate(0deg)";
	}
}

function handleAdminSearch(event) {
	if (!deleteModaldropdownResults.classList.contains("show")) {
		openAdminDropdownMenu();
	}
	// Close when input is empty
	if (event.target.value === "") {
		openAdminDropdownMenu();
	}
	let searchTerm = event.target.value.toLowerCase();
	deleteModaldropdownResults.querySelectorAll(".dropdown-item").forEach((item) => {
		let adminName = item.innerHTML.toLowerCase();
		if (adminName.includes(searchTerm) && searchTerm !== "") {
			item.style.backgroundColor = "#F8FCFD";
      item.style.display = "block";
		} else if (searchTerm === "") {
			item.style.backgroundColor = "white";
      item.style.display = "block";
		}
    else {
      item.style.display = "none";
    }
	});
}
adminSearchChevDown.addEventListener("click", openAdminDropdownMenu);
adminSearchInput.addEventListener("input", handleAdminSearch);
dropdownItems.forEach((item) => {
  item.addEventListener("click", () => {
    adminSearchInput.value = item.innerHTML;
    openAdminDropdownMenu();
  });
});
