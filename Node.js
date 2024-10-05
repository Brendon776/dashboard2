function login(event) {
    event.preventDefault();  // Megakadályozza az alapértelmezett formbeküldést

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const statusMessage = document.getElementById("status-message");

    console.log("Bejelentkezés próbálkozás email:", email, "password:", password);  // Ellenőrizd az értékeket

    if (email === correctEmail && password === correctPassword) {
        statusMessage.style.color = "green";
        statusMessage.innerHTML = "Sikeres bejelentkezés!";

        localStorage.setItem("isLoggedIn", "true");
        console.log("Sikeres bejelentkezés!");

    } else {
        statusMessage.style.color = "red";
        statusMessage.innerHTML = "Sikertelen bejelentkezés.";
        localStorage.setItem("isLoggedIn", "false");
        console.log("Sikertelen bejelentkezés!");
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
}
