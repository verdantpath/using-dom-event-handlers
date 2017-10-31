function checkUsername() {
  // GET FEEDBACK ELEMENT
  var elMsg = document.getelementById('feedback');
  // IF USERNAME IS TOO SHORT
  if (this.value.length < 5) {
    // SET MESSAGE
    elMsg.textContent = "Username must be 5 characters or more";
    // IF USERNAME IS NOT TOO SHORT
  } else {
    // CLEAR THE MESSAGE
    elMsg.textContent = "";
  }
}

// GET THE INPUT VALUE FROM THE USERNAME FIELD
var elUsername = document.getElementById('username');
// WHEN THE FIELD LOSES FOCUS, CALL checkUsername()
elUsername.onblur = checkUsername;
