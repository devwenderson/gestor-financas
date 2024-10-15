const sidebar = document.getElementById("sidebar");
const toggleSideBarBtn = document.getElementById("toggle-btn");

toggleSideBar = () => {
    sidebar.classList.toggle("close");
    toggleSideBarBtn.classList.toggle("rotate");

    closeAllSubMenus()

};

toggleSubMenu = (button) => {
    if(!button.nextElementSibling.classList.contains('show')){
        closeAllSubMenus()
    };
    // Pega o elemento seguinte ao botão
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate')

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close');
        toggleSideBarBtn.classList.toggle('rotate');
    };
};

closeAllSubMenus = () => {
    const subMenus = document.getElementsByClassName("sub-menu");
    Array.from(subMenus).forEach(ul => {
        ul.classList.remove('show');
        // Pega elemento anterior ao elemento-alvo
        ul.previousElementSibling.classList.remove('rotate');
    });
}