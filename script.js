// Common JS for demo purposes
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", e => {
    if (btn.getAttribute("href") === "#") {
      e.preventDefault();
      alert("This is a demo button!");
    }
  });
});

// Login page form handling
const loginForm = document.querySelector("form");
if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Login successful! (Demo)");
  });
}

