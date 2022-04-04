var about = document.querySelector("#about");
var projects = document.querySelector("#projects");
var aboutnav = document.querySelector("#aboutnav");
var projectsnav = document.querySelector("#projectsnav");

aboutnav.onclick = () => {
    about.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    console.log("a")
};

projectsnav.onclick = () => {
    projects.scrollIntoView({behavior: "smooth"});
};