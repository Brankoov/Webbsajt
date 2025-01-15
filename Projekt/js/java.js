document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuList = document.querySelector(".menu-list");

    menuToggle.addEventListener("click", function() {
        menuList.classList.toggle("show"); // Växla mellan att visa eller dölja menyn
    });
});
const headings = document.querySelectorAll('h1, h2, h3'); // Välj alla rubriker

headings.forEach(heading => {
    heading.addEventListener('mouseover', () => {
        heading.style.color = '#1a1ab9'; // Ändra färgen vid musövergång
    });
    heading.addEventListener('mouseout', () => {
        heading.style.color = ''; // Återställ färgen när musen lämnar
    });
});