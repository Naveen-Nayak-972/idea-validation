function validateForm() {
    var ideaField = document.getElementById("idea");
    var emailField = document.getElementById("email");
    
    var idea = ideaField.value;
    var email = emailField.value;
    
    var errorField = document.getElementById("error");
    errorField.innerHTML = "";
    
    if (idea.trim() === "") {
      errorField.innerHTML = "Please enter your idea.";
      return false;
    }
    
    if (email.trim() === "") {
      errorField.innerHTML = "Please enter your email.";
      return false;
    }
    
    return true;
  }
  