const user_name = document.querySelector("#user-name h2");
const logoutBtn = document.querySelector("#logout");

const userLoggin = JSON.parse(localStorage.getItem('loggedInUser'));
console.log("Logged in user:", userLoggin);

if (userLoggin && user_name) {
    user_name.textContent = userLoggin.fullName;
} else {
    alert("USER NOT Found");
    window.location.href = "../index.html";
}

logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem('loggedInUser');
    window.location.href = "../index.html";
});
