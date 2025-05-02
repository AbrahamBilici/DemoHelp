function openTab(event, tabName) {
    let tabContent = document.querySelectorAll(".tab-content");
    tabContent.forEach(tab => tab.style.display = "none");
    
    let tabLinks = document.querySelectorAll(".tab-link");
    tabLinks.forEach(link => link.classList.remove("active"));

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = "1";
});
