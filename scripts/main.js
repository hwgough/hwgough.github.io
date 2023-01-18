const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/1671807470724649.jpg") {
        myImage.setAttribute("src", "images/1671590083034956.jpg");
    } else {
        myImage.setAttribute("src", "images/1671807470724649.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is Cool, ${myName}`;
    }
};

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is Cool, ${storedName}`;
};

myButton.onclick = () => {
    setUserName();
};