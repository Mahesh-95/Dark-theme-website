// THEME
const light = document.querySelector("#light");
const dark = document.querySelector("#dark");
const root = document.querySelector(':root');


// Default value
var bgColor = localStorage.getItem("--bg-color");
var bgColor2 = localStorage.getItem("--bg-color2");
var mainColor = localStorage.getItem("--main-color");
root.style.setProperty('--bg-color', bgColor);
root.style.setProperty('--bg-color2', bgColor2);
root.style.setProperty('--main-color', mainColor);

// Dark theme
dark.addEventListener('click', ()=>{
    root.style.setProperty('--bg-color',"rgba(0,0,0,0.9)");
    root.style.setProperty('--bg-color2',"rgba(0,0,0,0.6)");
    root.style.setProperty('--main-color',"rgba(255,255,255,0.9)");
    localStorage.setItem("--bg-color", getComputedStyle(document.documentElement).getPropertyValue('--bg-color'));
    localStorage.setItem("--bg-color2", getComputedStyle(document.documentElement).getPropertyValue('--bg-color2'));
    localStorage.setItem("--main-color", getComputedStyle(document.documentElement).getPropertyValue('--main-color'));
});

//Light theme
light.addEventListener('click', ()=>{
    root.style.setProperty('--main-color',"rgba(0,0,0,1)");
    root.style.setProperty('--bg-color',"rgba(255,255,255,1)");
    root.style.setProperty('--bg-color2',"rgba(255,255,255,0.8)");
    localStorage.setItem("--bg-color", getComputedStyle(document.documentElement).getPropertyValue('--bg-color'));
    localStorage.setItem("--bg-color2", getComputedStyle(document.documentElement).getPropertyValue('--bg-color2'));
    localStorage.setItem("--main-color", getComputedStyle(document.documentElement).getPropertyValue('--main-color'));
});

// ANIMATION
AOS.init({
    duration: 1000,
});
