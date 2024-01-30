

// // Toggle navigation menu
// function toggleMenu() {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.classList.toggle('show');
// }

// // Close navigation menu when a link is clicked
// function closeMenu() {
//     const navLinks = document.querySelector('.nav-links');
//     navLinks.classList.remove('show');
// }

// // Event listener for menu button click
// const menuButton = document.querySelector('.menu-button');
// menuButton.addEventListener('click', toggleMenu);

// // Event listeners for link clicks to close the menu
// const navLinksList = document.querySelectorAll('.nav-links ul li a');
// navLinksList.forEach(link => {
//     link.addEventListener('click', closeMenu);
// });


// // Pricing Page

// // Function to open the contact modal
// function openContactModal() {
//     document.getElementById('contactModal').style.display = 'block';
// }

// // Function to close the contact modal
// function closeContactModal() {
//     document.getElementById('contactModal').style.display = 'none';
// }

// // Close the modal if the user clicks outside the modal
// window.onclick = function (event) {
//     var modal = document.getElementById('contactModal');
//     if (event.target == modal) {
//         modal.style.display = 'none';
//     }
// };



//         function openContactPage() {
//             window.location.href = 'contact.html';
//         }





// Toggle navigation menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Close navigation menu when a link is clicked
function closeMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('show');
}

// Event listener for menu button click
const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);

// Event listeners for link clicks to close the menu
const navLinksList = document.querySelectorAll('.nav-links ul li a');
navLinksList.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Pricing Page

// Function to open the contact modal
function openContactModal() {
    const contactModal = document.getElementById('contactModal');
    contactModal.style.display = 'block';
}

// Function to close the contact modal
function closeContactModal() {
    const contactModal = document.getElementById('contactModal');
    contactModal.style.display = 'none';
}

// Close the modal if the user clicks outside the modal
window.onclick = function (event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Function to open the contact page
function openContactPage() {
    window.location.href = 'contact.html';
}
