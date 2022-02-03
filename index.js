function darkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}

document.getElementById("dark-mode-button").onclick = darkMode;