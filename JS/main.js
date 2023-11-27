// CREATED BY PHILIP DROUBI

let themeToggle = document.querySelector(".theme-controller");
let root = document.querySelector(':root');

themeToggle.addEventListener("click", changeTheme);
if (localStorage.getItem("darkTheme") == null) {
    localStorage.setItem("darkTheme", "true");
} else {
    if (localStorage.getItem("darkTheme") == "false")
        turnLight();
}

function changeTheme() {
    if (localStorage.getItem("darkTheme") == "true") {
        turnLight();
        localStorage.setItem("darkTheme", "false");
    }
    else {
        turnDark();
        localStorage.setItem("darkTheme", "true");
    };
}

function turnLight() {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    root.style.setProperty('--Body-background', 'var(--White-BG)');
    root.style.setProperty('--BG-Pattern', 'var(--Very-Pale-Blue-Top-BG-Pattern)');
    root.style.setProperty('--Card-BG', 'var(--Light-Grayish-Blue-Card-BG)');
    root.style.setProperty('--Card-BG-Hover', 'var(--Light-Grayish-Blue-Card-BG-Hover)');
    root.style.setProperty('--Text-Color', 'var(--Dark-Grayish-Blue-Text)');
    root.style.setProperty('--White-Text-Color', 'var(--Very-Dark-Blue-Text)');
}

function turnDark() {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    root.style.setProperty('--Body-background', 'var(--Very-Dark-Blue-BG)');
    root.style.setProperty('--BG-Pattern', 'var(--Very-Dark-Blue-Top-BG-Pattern)');
    root.style.setProperty('--Card-BG', 'var(--Dark-Desaturated-Blue-Card-BG)');
    root.style.setProperty('--Card-BG-Hover', 'var(--Dark-Desaturated-Blue-Card-BG-Hover)');
    root.style.setProperty('--Text-Color', 'var(--Desaturated-Blue-Text)');
    root.style.setProperty('--White-Text-Color', 'var(--White-Text)');
}