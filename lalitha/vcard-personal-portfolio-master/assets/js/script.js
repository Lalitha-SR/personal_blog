'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });





// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}
// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Function to remove 'active' class from all pages and navigation links
function removeActiveClasses() {
    pages.forEach(page => {
        page.classList.remove("active");
    });
    navigationLinks.forEach(link => {
        link.classList.remove("active");
    });
}

// Add event to all nav links
navigationLinks.forEach((link, index) => {
    link.addEventListener("click", function() {
        // Remove 'active' class from all pages and nav links before setting the new active element
        removeActiveClasses();

        // Convert the innerHTML of the clicked nav link to lower case and replace spaces to handle multi-word cases
        const pageName = this.innerHTML.toLowerCase().replace(/\s+/g, '');

        // Find the corresponding page
        const targetPage = Array.from(pages).find(page => page.dataset.page.toLowerCase() === pageName);

        if (targetPage) {
            targetPage.classList.add("active");
            this.classList.add("active");
            window.scrollTo(0, 0);
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
  let count = localStorage.getItem('viewCount');
  count = count ? parseInt(count) + 1 : 1; // Increment the count
  localStorage.setItem('viewCount', count); // Update the count in local storage
  document.getElementById('viewerCount').textContent = `Viewer Count: ${count}`;
});