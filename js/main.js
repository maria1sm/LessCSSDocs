function dropdown(e) {
    const list = e.parentElement.querySelector(".dropdown-content");
    list.classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdown-toggler')) {
        const dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach((e) => {
            if (e.classList.contains('show')) {
                e.classList.remove('show')
            }
        })
    }
}
const dropdownToggler = document.querySelectorAll(".dropdown-toggler");
dropdownToggler.forEach((e) => e.addEventListener("focusin", () => dropdown(e)));
