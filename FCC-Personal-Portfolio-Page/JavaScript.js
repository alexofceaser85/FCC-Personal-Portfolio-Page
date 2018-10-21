//Copies #EmailInput Value to Clipboard
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
    document.getElementById("NavCont").classList.toggle("navFlexContainerFunction");
}

function HideNavBar() {
    //Get the Elements with the Class NavLink
    var x = document.getElementsByClassName("NavLink");
    //Toggles the Visibility of the NavLink and Selects the NavLink Classes Using an AutoIncrementing Counter
    for (var Counter = 0; Counter < x.length; Counter++) {
        x[Counter].classList.remove("navLinkFunction");
    }
    //Gets and Toggles Changes the Flexbox Properties of the Nav
    document.getElementById("NavCont").classList.remove("navFlexContainerFunction");
}

//Changes Background Color of navLink based on ViewPort Position
window.onscroll = function () {
    //Get The Amount of Pixels the User Scrolled by Measuring the Viewport Position from the Top of the Webpage
    var pixelsScrolled = window.pageYOffset;
    //Get the Element with the Id NavBar from the HTML
    var getNavBar = document.getElementById("NavBar");
    //Get the Elements with the Class Name Section from the HTML
    var getSection = document.getElementsByClassName("Section");
    //Get the Elements with the Class Name NavLink from the HTML
    var getNavLink = document.getElementsByClassName("NavLink");
    //Get the Height of the Elements with the Class Name Section
    var getSectionHeight = [window.getComputedStyle(getSection[0]).getPropertyValue("height"), window.getComputedStyle(getSection[1]).getPropertyValue("height"), window.getComputedStyle(getSection[2]).getPropertyValue("height")];
    //Converts the variable getSectionHeight Value from a String to a Integer
    var parseHeight = [parseInt(getSectionHeight[0]), parseInt(getSectionHeight[1]), parseInt(getSectionHeight[2])];
    //Gets the Background Color of the Sections
    var getSectionBackgroundColor = [window.getComputedStyle(getSection[0]).getPropertyValue("background-color"), window.getComputedStyle(getSection[1]).getPropertyValue("background-color"), window.getComputedStyle(getSection[2]).getPropertyValue("background-color")];
    //Adds the Event Listener mouseover to the NavLink Buttons and Links the Event Listener to Functions Below
    var getNavMouseOver = [getNavLink[0].addEventListener("mouseover", ContentsBackground), getNavLink[1].addEventListener("mouseover", WelcomeBackground), getNavLink[2].addEventListener("mouseover", ProjectsBackground), getNavLink[3].addEventListener("mouseover", ContactBackground)];
    //Adds the Event Listener mouseout to the NavLink Buttons and Links the Event Listener to the DefaultBackground Function
    var getNavMouseOut = [getNavLink[0].addEventListener("mouseout", DefaultBackground), getNavLink[1].addEventListener("mouseout", DefaultBackground), getNavLink[2].addEventListener("mouseout", DefaultBackground), getNavLink[3].addEventListener("mouseout", DefaultBackground)];



    //When Mouse is Hovering Over the .NavLink Contents Button then the Background Color Changes Relative to the Background Color of the Section
    function ContentsBackground() {
        //If the Distance the User Scrolled is Less Than or Equal To the Height of the Welcome Section
        if (pixelsScrolled <= parseHeight[0]) {
            //Sets Background Color Relative to the Background Color of the Section
            getNavLink[0].style.backgroundColor = getSectionBackgroundColor[0];
        }
        //If the Distance the User Scrolled is Less Than or Equal To the Height of the Welcome Section Plus The Height of the Projects Section
        if ((pixelsScrolled >= parseHeight[0]) && (pixelsScrolled <= parseHeight[0] + parseHeight[1])) {
            //Sets Background Color Relative to the Background Color of the Section
            getNavLink[0].style.backgroundColor = getSectionBackgroundColor[1];
        }
        //If the Distance the User Scrolled is Less Than or Equal To the Height of the Welcome Section Plus The Height of the Projects Section and The Height of the Contacts Section
        if ((pixelsScrolled >= parseHeight[0] + parseHeight[1]) && (pixelsScrolled <= parseHeight[0] + parseHeight[1] + parseHeight[2])) {
            //Sets Background Color Relative to the Background Color of the Section
            getNavLink[0].style.backgroundColor = getSectionBackgroundColor[2];
        }
    }

    function WelcomeBackground() {
        //If the Distance the User Scrolled is Less Than or Equal To the Height of the Welcome Section
        if (pixelsScrolled <= parseHeight[0]) {
            //Sets Background Color Relative to the Background Color of the Section
            getNavLink[1].style.backgroundColor = getSectionBackgroundColor[0];
        }
        //If the Distance the User Scrolled is Less Than or Equal To the Height of the Welcome Section Plus The Height of the Projects Section
        if ((pixelsScrolled >= parseHeight[0]) && (pixelsScrolled <= parseHeight[0] + parseHeight[1])) {
            //Sets Background Color Relative to the Background Color of the Section
            getNavLink[1].style.backgroundColor = getSectionBackgroundColor[1];
        }
        //If the Distance the User Scrolled is Less Than or Equal To the Height of the Welcome Section Plus The Height of the Projects Section and The Height of the Contacts Section
        if ((pixelsScrolled >= parseHeight[0] + parseHeight[1]) && (pixelsScrolled <= parseHeight[0] + parseHeight[1] + parseHeight[2])) {
            //Sets Background Color Relative to the Background Color of the Section
            getNavLink[1].style.backgroundColor = getSectionBackgroundColor[2];
        }
    }

    function ProjectsBackground() {
        //If the Distance the User Scrolled is Less Than or Equal To the Height of the Welcome Section
        if (pixelsScrolled <= parseHeight[0]) {
            //Sets Background Color Relative to the Background Color of the Section
            getNavLink[2].style.backgroundColor = getSectionBackgroundColor[0];
        }
        //If the Distance the User Scrolled is Less Than or Equal To the Height of the Welcome Section Plus The Height of the Projects Section
        if ((pixelsScrolled >= parseHeight[0]) && (pixelsScrolled <= parseHeight[0] + parseHeight[1])) {
            //Sets Background Color Relative to the Background Color of the Section
            getNavLink[2].style.backgroundColor = getSectionBackgroundColor[1];
        }
        //If the Distance the User Scrolled is Less Than or Equal To the Height of the Welcome Section Plus The Height of the Projects Section and The Height of the Contacts Section
        if ((pixelsScrolled >= parseHeight[0] + parseHeight[1]) && (pixelsScrolled <= parseHeight[0] + parseHeight[1] + parseHeight[2])) {
            //Sets Background Color Relative to the Background Color of the Section
            getNavLink[2].style.backgroundColor = getSectionBackgroundColor[2];
        }
    }
    function ContactBackground() {
        //If the Distance the User Scrolled is Less Than or Equal To the Height of the Welcome Section
        if (pixelsScrolled <= parseHeight[0]) {
            //Sets Background Color Relative to the Background Color of the Section
            getNavLink[3].style.backgroundColor = getSectionBackgroundColor[0];
        }
        //If the Distance the User Scrolled is Less Than or Equal To the Height of the Welcome Section Plus The Height of the Projects Section
        if ((pixelsScrolled >= parseHeight[0]) && (pixelsScrolled <= parseHeight[0] + parseHeight[1])) {
            //Sets Background Color Relative to the Background Color of the Section
            getNavLink[3].style.backgroundColor = getSectionBackgroundColor[1];
        }
        //If the Distance the User Scrolled is Less Than or Equal To the Height of the Welcome Section Plus The Height of the Projects Section and The Height of the Contacts Section
        if ((pixelsScrolled >= parseHeight[0] + parseHeight[1]) && (pixelsScrolled <= parseHeight[0] + parseHeight[1] + parseHeight[2])) {
            //Sets Background Color Relative to the Background Color of the Section
            getNavLink[3].style.backgroundColor = getSectionBackgroundColor[2];
        }
    }

    //When the Mouse is not Hovering over the NavLink Buttons DefaultBackground function changes the background color to that of the NavBar
    function DefaultBackground() {
        getNavLink[0].style.backgroundColor = window.getComputedStyle(getNavBar).getPropertyValue("background-color");
        getNavLink[1].style.backgroundColor = window.getComputedStyle(getNavBar).getPropertyValue("background-color");
        getNavLink[2].style.backgroundColor = window.getComputedStyle(getNavBar).getPropertyValue("background-color");
        getNavLink[3].style.backgroundColor = window.getComputedStyle(getNavBar).getPropertyValue("background-color");
    }
}

