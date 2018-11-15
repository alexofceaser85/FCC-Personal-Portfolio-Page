function CopyFunction() {
    //Get the EmailInput
    var CopyEmail = document.getElementById("EmailInput");
    //Selects the Value of the Input of the EmailInput Element
    CopyEmail.select(HTMLInputElement);
    //Copies the EmailInput Value to the Clipboard
    document.execCommand("copy");
    //Alerts the User that the Email has been Copied
    alert("Email Copied to Clipboard");
}
//Displays and Hides navLink Function is Only Enabled When Screen Width is Below a Specified Amount of Pixels
function DisplayNavBar() {
    //Get the Elements with the Class NavLink
    var x = document.getElementsByClassName("NavLink");
    //Toggles the Visibility of the NavLink and Selects the NavLink Classes Using an AutoIncrementing Counter
    for (var Counter = 0; Counter < x.length; Counter++) {
        x[Counter].classList.toggle("navLinkFunction");
    }
    //Gets and Toggles Changes the Flexbox Properties of the Nav
    document
        .getElementById("NavCont")
        .classList.toggle("navFlexContainerFunction");
}
function HideNavBar() {
    //Get the Elements with the Class NavLink
    var x = document.getElementsByClassName("NavLink");
    //Toggles the Visibility of the NavLink and Selects the NavLink Classes Using an AutoIncrementing Counter
    for (var Counter = 0; Counter < x.length; Counter++) {
        x[Counter].classList.remove("navLinkFunction");
    }
    //Gets and Toggles Changes the Flexbox Properties of the Nav
    document
        .getElementById("NavCont")
        .classList.remove("navFlexContainerFunction");
}
var parseHeight = [];
var getNavLink = [];
var getSectionHeight = [];
var getSectionBackgroundColor = [];
var pixelsScrolled;
//Changes Background Color of navLink based on ViewPort Position
window.onscroll = function () {
    //Get The Amount of Pixels the User Scrolled by Measuring the Viewport Position from the Top of the Webpage
    pixelsScrolled = window.pageYOffset;
    //Get the Element with the Id navbar from the HTML
    var getNavBar = document.getElementById("navbar");
    //Get the Elements with the Class Name Section from the HTML
    var getSection = document.getElementsByClassName("Section");
    //Get the Elements with the Class Name NavLink from the HTML
    getNavLink = document.getElementsByClassName("NavLink");

    for (var counter = 0; counter < getSection.length; counter++) {
        //Gets the height of each section
        getSectionHeight.push(
            window.getComputedStyle(getSection[counter]).getPropertyValue("height")
        );
        //Converts the variable getSectionHeight Value from a String to a Integer
        parseHeight[counter] = parseInt(getSectionHeight[counter]);
        getSectionBackgroundColor.push(
            window
                .getComputedStyle(getSection[counter])
                .getPropertyValue("background-color")
        );
    }

    for (let counter = 0; counter < getNavLink.length; counter++) {
        getNavLink[counter].addEventListener("mouseover", function () {

            //If the Distance the User Scrolled is Less Than or Equal To the Height of the Welcome Section

                if (pixelsScrolled <= parseHeight[0]) {
                    //Sets Background Color Relative to the Background Color of the Section
                    getNavLink[counter].style.backgroundColor = getSectionBackgroundColor[0];
                }
                //If the Distance the User Scrolled is Less Than or Equal To the Height of the Welcome Section Plus The Height of the Projects Section
                else if (
                    pixelsScrolled >= parseHeight[0] &&
                    pixelsScrolled <= parseHeight[0] + parseHeight[1]
                ) {
                    //Sets Background Color Relative to the Background Color of the Section
                    getNavLink[counter].style.backgroundColor = getSectionBackgroundColor[1];
                }
                //If the Distance the User Scrolled is Less Than or Equal To the Height of the Welcome Section Plus The Height of the Projects Section and The Height of the Contacts Section
                else if (
                    pixelsScrolled >= parseHeight[0] + parseHeight[1] &&
                    pixelsScrolled <= parseHeight[0] + parseHeight[1] + parseHeight[2]
                ) {
                    //Sets Background Color Relative to the Background Color of the Section
                    getNavLink[counter].style.backgroundColor = getSectionBackgroundColor[2];
                }
        });
        getNavLink[counter].addEventListener("mouseout", function () {
            getNavLink[counter].style.backgroundColor = window
                .getComputedStyle(document.getElementById("navbar"))
                .getPropertyValue("background-color");
        });
    }
}
