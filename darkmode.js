const themeButton = document.getElementById("theme-toggle");

if (themeButton) {
    const darkModeIsOn =
        document.documentElement.classList.contains("dark-mode");

    themeButton.textContent = darkModeIsOn ? "☀️" : "🌙";

    themeButton.addEventListener("click", function () {
        document.documentElement.classList.toggle("dark-mode");

        const darkModeIsOn =
            document.documentElement.classList.contains("dark-mode");

        localStorage.setItem(
            "theme",
            darkModeIsOn ? "dark" : "light"
        );

        themeButton.textContent = darkModeIsOn ? "☀️" : "🌙";
    });
}