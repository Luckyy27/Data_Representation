function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    var mainContent = document.getElementById("mainContent");
    if (sidebar.style.left === "-250px") {
        sidebar.style.left = "0";
        mainContent.style.marginLeft = "250px";
    } else {
        sidebar.style.left = "-250px";
        mainContent.style.marginLeft = "0";
    }
}