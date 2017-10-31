function checkUsername() {
  // GET FEEDBACK ELEMENT
  var elMsg = document.getElementById('feedback');
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

/*

Does this affect the ratio in github????
Does this affect the ratio in github????
Does this affect the ratio in github????
Does this affect the ratio in github????
Does this affect the ratio in github????
Does this affect the ratio in github????

*/
