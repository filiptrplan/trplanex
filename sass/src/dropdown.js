const dropdownLinks = document.querySelectorAll(".nav-item.is-dropdown");

dropdownLinks.forEach((item, key) => {
    const dropdownMenu = item.querySelector(".nav-links.is-dropdown");
    item.addEventListener("mouseover", () => {
        //dropdownMenu.classList.add("show")
    });
    item.addEventListener("mouseleave", () => {
        //dropdownMenu.style.display = "none";
    })
});