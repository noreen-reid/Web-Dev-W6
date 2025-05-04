document.addEventListener("DOMContentLoaded", () => {
    // Tab functionality
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.add("hidden"));
  
        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.remove("hidden");
      });
    });
  
    // Form validation
    const form = document.getElementById("signupForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
  
    form.addEventListener("submit", e => {
      let valid = true;
      emailError.textContent = "";
      passwordError.textContent = "";
  
      if (!email.value.includes("@")) {
        emailError.textContent = "Enter a valid email.";
        valid = false;
      }
  
      if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters.";
        valid = false;
      }
  
      if (!valid) {
        e.preventDefault();
      }
    });
  });
  