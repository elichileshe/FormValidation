    function validateForm(event) {
      event.preventDefault(); // Prevent form submission if validation fails
      
      // Reset error messages
      document.getElementById("nameError").textContent = "";
      document.getElementById("emailError").textContent = "";
      document.getElementById("passwordError").textContent = "";

      // Retrieve form values
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      // Validate name (at least 2 characters)
      if (name.length < 2) {
        document.getElementById("nameError").textContent = "Name must be at least 2 characters long";
        return false;
      }

      // Validate email format
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        return false;
      }

      // Validate password (at least 8 characters)
      if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long";
        return false;
      }

      // If all validations pass, submit the form
      document.getElementById("myForm").submit();
    }
  