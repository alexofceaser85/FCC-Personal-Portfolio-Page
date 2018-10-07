function CopyFunction() {
    var CopyEmail = document.getElementById("EmailInput");
    CopyEmail.select(HTMLInputElement);
    document.execCommand("copy");
    alert("Email Copied to Clipboard");
}
function DisplayNavBar() {
    Counter = 0;
    var x = document.getElementsByClassName("NavLink");
    for (Counter; Counter < x.length; Counter++) {
        x[Counter].classList.toggle("navLinkFunction");
    }

    document.getElementById("NavCont").classList.toggle("navFlexContainerFunction");
    //classList.toggle("navFlexContainerFunction");
    document.getElementById("NavBar").classList.toggle("navBarFunction");
}
function ShiftContent() {
    document.getElementById("Welcome").classList.toggle("shiftContentFunction");
}
