const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    alert(`Thank you for signing up!\nName: ${name}\nEmail: ${email}`);
});
